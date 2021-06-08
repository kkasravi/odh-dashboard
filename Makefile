DASHBOARD_NAME ?= odh-dashboard
IMAGE_NAME ?= s2i-odh-dashboard
IMAGE_REPOSITORY ?= quay.io/opendatahub/odh-dashboard:latest
OC_PROJECT ?= redhat-ods-applications
REPLICAS ?= 1
ROUTE_NAMESPACE ?= redhat-ods-applications
TAG_NAME ?= v0.0.1
OS := $(shell uname -s | tr '[:upper:]' '[:lower:]')
ARCH := $(shell uname -m | sed 's/x86_64/amd64/')

DEFAULT_ENV_FILE := .env
ifneq ("$(wildcard $(DEFAULT_ENV_FILE))","")
include ${DEFAULT_ENV_FILE}
export $(shell sed 's/=.*//' ${DEFAULT_ENV_FILE})
endif

ENV_FILE := .env.local
ifneq ("$(wildcard $(ENV_FILE))","")
include ${ENV_FILE}
export $(shell sed 's/=.*//' ${ENV_FILE})
endif

##@ General

help: ## Display this help.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z_0-9-]+:.*?##/ { printf "  \033[36m%-25s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST) | $(ENVSUBST)

.PHONY: login
login: ## login to cluster using 'oc login $(OC_URL) --token=$(OC_TOKEN)'
ifdef OC_TOKEN
	$(info **** Using OC_TOKEN for login ****)
	oc login ${OC_URL} --token=${OC_TOKEN}
else
	$(info **** Using OC_USER and OC_PASSWORD for login ****)
	oc login ${OC_URL} -u ${OC_USER} -p ${OC_PASSWORD} --insecure-skip-tls-verify=true
endif

##@ Prerequisite Commands:

.PHONY: direnv
DIRENV = $(shell pwd)/bin/direnv
direnv: ## Downloads direnv locally if necessary, preferring the $(pwd)/bin path over global if both exist. This command exports env vars defined in ./.envrc. 
ifeq (,$(wildcard $(DIRENV)))
ifeq (,$(shell which direnv 2>/dev/null))
	@{ \
	set -e ;\
	mkdir -p $(dir $(DIRENV)) ;\
	echo "Downloading direnv ..." ;\
	curl -sSLo $(DIRENV) https://github.com/direnv/direnv/releases/download/v2.25.2/direnv.$(OS)-$(ARCH)
	chmod +x $(DIRENV) ;\
	}
else
DIRENV = $(shell which direnv)
endif
endif

.PHONY: envsubst
ENVSUBST = $(shell pwd)/bin/envsubst
envsubst: ## Downloads envsubst locally if necessary, preferring the $(pwd)/bin path over global if both exist.
ifeq (,$(wildcard $(ENVSUBST)))
ifeq (,$(shell which envsubst 2>/dev/null))
	@{ \
	set -e ;\
	mkdir -p $(dir $(ENVSUBST)) ;\
	echo "Downloading envsubst..." ;\
	curl -sSLo $(ENVSUBST) https://github.com/a8m/envsubst/releases/download/v1.2.0/envsubst-$(OS)-$(ARCH)
	chmod +x $(ENVSUBST) ;\
	}
else
ENVSUBST = $(shell which envsubst)
endif
endif

.PHONY: kustomize
KUSTOMIZE = $(shell pwd)/bin/kustomize
kustomize: ## Downloads kustomize locally if necessary and install to $(pwd)/bin.
ifeq (,$(wildcard $(KUSTOMIZE)))
ifeq (,$(shell which kustomize 2>/dev/null))
	@{ \
	set -e ;\
	mkdir -p $(dir $(KUSTOMIZE)) ;\
	echo "Downloading kustomize ..." ;\
	curl -SLo - https://github.com/kubernetes-sigs/kustomize/releases/download/kustomize/v4.1.3/kustomize_v4.1.3_$(OS)_$(ARCH).tar.gz | \
	tar xzf - -C bin/ ;\
	}
else
KUSTOMIZE = $(shell which kustomize)
endif
endif

##@ Showing and Setting DASHBOARD_NAME, IMAGE_NAME, IMAGE_REPOSITORY, OC_PROJECT, REPLICAS, ROUTE_NAMESPACE, TAG_NAME values. Environment vars will override the defaults.

show-vars: kustomize ## Show vars by calling 'kustomize cfg list-setters <dir> --markdown -R'
	@printf '\n\033[1mShowing vars under the following directories:\033[0m\n\n'
	@$(KUSTOMIZE) cfg list-setters install/deploy --markdown -R | cut -d\| -f 1,2,3,5- || exit 0
	@printf '\n'
	@$(KUSTOMIZE) cfg list-setters install/build --markdown -R | cut -d\| -f 1,2,3,5- || exit 0

##@ Development:

.PHONY: dev-frontend
dev-frontend: ## run frontend app locally for development
	./install/dev-frontend.sh

.PHONY: dev-backend
dev-backend: ## run backend app locally for development
	./install/dev-backend.sh

.PHONY: dev
dev: ## run app (frontend+backend) locally for developement
	./install/dev.sh

##@ Build:

.PHONY: build
build: ## Build image on cluster using BuildConfig and ImageStream (located under install/build)
	cd install/build && $(MAKE) undeploy deploy && unset OC_PROJECT IMAGE_NAME TAG_NAME && $(MAKE) defaults

.PHONY: build-local
build-local: ## Build image locally using s2i. (Need to push afterwards)
	./install/build-local.sh

##@ Push:

.PHONY: push
push: ## push image to $(IMAGE_REPOSITORY)
	./install/push.sh

##@ Deploy, Undeploy:

.PHONY: deploy
deploy: login ## Deploy resources under install/deploy using OC_PROJECT=$OC_PROJECT DASHBOARD_NAME ROUTE_NAMESPACE IMAGE_NAME TAG_NAME REPLICAS values
	cd install/deploy && $(MAKE) deploy && unset OC_PROJECT DASHBOARD_NAME ROUTE_NAMESPACE IMAGE_NAME TAG_NAME REPLICAS && $(MAKE) defaults

.PHONY: undeploy
undeploy: login ## Undeploy resources under install/deploy using OC_PROJECT DASHBOARD_NAME ROUTE_NAMESPACE IMAGE_NAME TAG_NAME REPLICAS values
	cd install/deploy && $(MAKE) undeploy && unset OC_PROJECT DASHBOARD_NAME ROUTE_NAMESPACE IMAGE_NAME TAG_NAME REPLICAS && $(MAKE) defaults

.PHONY: defaults
defaults: ## Reset OC_PROJECT DASHBOARD_NAME ROUTE_NAMESPACE IMAGE_NAME TAG_NAME REPLICAS values in yaml files under install/deploy to their defaults
	cd install/build && unset OC_PROJECT IMAGE_NAME TAG_NAME && $(MAKE) defaults
	cd install/deploy && unset OC_PROJECT DASHBOARD_NAME ROUTE_NAMESPACE IMAGE_NAME TAG_NAME REPLICAS && $(MAKE) defaults

