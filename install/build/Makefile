OC_PROJECT ?= redhat-ods-applications
DASHBOARD_NAME ?= odh-dashboard
IMAGE ?= s2i-odh-dashboard
TAG ?= v0.0.1

all: build

set-namespace:
	kustomize edit set namespace $(OC_PROJECT)

build: set-namespace
	kustomize build | kubectl delete -f - || exit 0
	kustomize build | kubectl apply -f -
