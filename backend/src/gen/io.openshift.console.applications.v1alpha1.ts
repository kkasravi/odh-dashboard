import * as apisMetaV1 from './io.k8s.apimachinery.pkg.apis.meta.v1';

// RhodsApplication is the Schema for the rhodsapplications API
export class RhodsApplication {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  public apiVersion: string;

  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  public kind: string;

  // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  public metadata?: apisMetaV1.ObjectMeta_v2;

  // RhodsApplicationSpec defines the desired state of rhodsApplication
  public spec?: RhodsApplication.Spec;

  // RhodsApplicationStatus defines the observed state of RhodsApplication
  public status?: RhodsApplication.Status;

  constructor(desc: RhodsApplication) {
    this.apiVersion = RhodsApplication.apiVersion;
    this.kind = RhodsApplication.kind;
    this.metadata = desc.metadata;
    this.spec = desc.spec;
    this.status = desc.status;
  }
}

export function isRhodsApplication(o: any): o is RhodsApplication {
  return o && o.apiVersion === RhodsApplication.apiVersion && o.kind === RhodsApplication.kind;
}

export namespace RhodsApplication {
  export const apiVersion = "applications.console.openshift.io/v1alpha1";
  export const group = "applications.console.openshift.io";
  export const version = "v1alpha1";
  export const kind = "RhodsApplication";

  // RhodsApplication is the Schema for the rhodsapplications API
  export interface Interface {
    // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
    metadata?: apisMetaV1.ObjectMeta_v2;

    // RhodsApplicationSpec defines the desired state of rhodsApplication
    spec?: RhodsApplication.Spec;

    // RhodsApplicationStatus defines the observed state of RhodsApplication
    status?: RhodsApplication.Status;
  }
  // RhodsApplicationSpec defines the desired state of rhodsApplication
  export class Spec {
    public category?: string;

    public comingSoon?: boolean;

    public csvName?: string;

    public description?: string;

    public displayName?: string;

    public docsLink?: string;

    public enable?: RhodsApplication.Spec.Enable;

    public endPoint?: string;

    public featureFlag?: string;

    public getStartedLink?: string;

    public img?: string;

    public isEnabled?: boolean;

    public kfdefApplications: string[];

    public link?: string;

    public provider?: string;

    public quickStart?: string;

    public route?: string;

    public routeNamespace?: string;

    public routeSuffix?: string;

    public serviceName?: string;

    public support?: string;

    constructor(desc: RhodsApplication.Spec) {
      this.category = desc.category;
      this.comingSoon = desc.comingSoon;
      this.csvName = desc.csvName;
      this.description = desc.description;
      this.displayName = desc.displayName;
      this.docsLink = desc.docsLink;
      this.enable = desc.enable;
      this.endPoint = desc.endPoint;
      this.featureFlag = desc.featureFlag;
      this.getStartedLink = desc.getStartedLink;
      this.img = desc.img;
      this.isEnabled = desc.isEnabled;
      this.kfdefApplications = desc.kfdefApplications;
      this.link = desc.link;
      this.provider = desc.provider;
      this.quickStart = desc.quickStart;
      this.route = desc.route;
      this.routeNamespace = desc.routeNamespace;
      this.routeSuffix = desc.routeSuffix;
      this.serviceName = desc.serviceName;
      this.support = desc.support;
    }
  }

  export namespace Spec {
    export class Enable {
      public actionLabel?: string;

      public description?: string;

      public title?: string;

      public validationConfigMap?: string;

      public validationJob?: string;

      public validationSecret?: string;

      public variableDisplayText?: {[key: string]: string};

      public variableHelpText?: {[key: string]: string};

      public variables?: {[key: string]: string};
    }
  }
  // RhodsApplicationStatus defines the observed state of RhodsApplication
  export class Status {
    public enabled?: boolean;
  }
}

// RhodsApplicationList is a list of RhodsApplication
export class RhodsApplicationList {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  public apiVersion: string;

  // List of rhodsapplications. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
  public items: RhodsApplication[];

  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  public kind: string;

  // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  public metadata?: apisMetaV1.ListMeta;

  constructor(desc: RhodsApplicationList) {
    this.apiVersion = RhodsApplicationList.apiVersion;
    this.items = desc.items;
    this.kind = RhodsApplicationList.kind;
    this.metadata = desc.metadata;
  }
}

export function isRhodsApplicationList(o: any): o is RhodsApplicationList {
  return o && o.apiVersion === RhodsApplicationList.apiVersion && o.kind === RhodsApplicationList.kind;
}

export namespace RhodsApplicationList {
  export const apiVersion = "applications.console.openshift.io/v1alpha1";
  export const group = "applications.console.openshift.io";
  export const version = "v1alpha1";
  export const kind = "RhodsApplicationList";

  // RhodsApplicationList is a list of RhodsApplication
  export interface Interface {
    // List of rhodsapplications. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
    items: RhodsApplication[];

    // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    metadata?: apisMetaV1.ListMeta;
  }
}