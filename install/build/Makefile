OC_PROJECT ?= redhat-ods-applications
DASHBOARD_NAME ?= odh-dashboard
IMAGE ?= s2i-odh-dashboard
TAG ?= v0.0.1

all: build

import-image:
	kubectl delete imagestream nodejs-14 || exit 0
	oc import-image registry.access.redhat.com/ubi8/nodejs-14:1-28 --confirm

set-namespace:
	kustomize edit set namespace $(OC_PROJECT)

build: import-image set-namespace
	kustomize build | kubectl delete -f - || exit 0
	kustomize build | kubectl apply -f -
