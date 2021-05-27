import * as apisMetaV1 from './io.k8s.apimachinery.pkg.apis.meta.v1';

// ConsoleDocument is the Schema for the consoledocuments API
export class ConsoleDocument {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  public apiVersion: string;

  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  public kind: string;

  // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  public metadata?: apisMetaV1.ObjectMeta_v2;

  // ConsoleDocumentSpec defines the desired state of ConsoleDocument
  public spec?: ConsoleDocument.Spec;

  // ConsoleDocumentStatus defines the observed state of ConsoleDocument
  public status?: ConsoleDocument.Status;

  constructor(desc: ConsoleDocument) {
    this.apiVersion = ConsoleDocument.apiVersion;
    this.kind = ConsoleDocument.kind;
    this.metadata = desc.metadata;
    this.spec = desc.spec;
    this.status = desc.status;
  }
}

export function isConsoleDocument(o: any): o is ConsoleDocument {
  return o && o.apiVersion === ConsoleDocument.apiVersion && o.kind === ConsoleDocument.kind;
}

export namespace ConsoleDocument {
  export const apiVersion = "documents.console.openshift.io/v1alpha1";
  export const group = "documents.console.openshift.io";
  export const version = "v1alpha1";
  export const kind = "ConsoleDocument";

  // ConsoleDocument is the Schema for the consoledocuments API
  export interface Interface {
    // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
    metadata?: apisMetaV1.ObjectMeta_v2;

    // ConsoleDocumentSpec defines the desired state of ConsoleDocument
    spec?: ConsoleDocument.Spec;

    // ConsoleDocumentStatus defines the observed state of ConsoleDocument
    status?: ConsoleDocument.Status;
  }
  // ConsoleDocumentSpec defines the desired state of ConsoleDocument
  export class Spec {
    public appName?: string;

    public description?: string;

    public displayName?: string;

    public durationMinutes: number;

    public featureFlag?: string;

    public icon?: string;

    public img?: string;

    public markDown?: string;

    public provider?: string;

    public type?: string;

    public url?: string;

    constructor(desc: ConsoleDocument.Spec) {
      this.appName = desc.appName;
      this.description = desc.description;
      this.displayName = desc.displayName;
      this.durationMinutes = desc.durationMinutes;
      this.featureFlag = desc.featureFlag;
      this.icon = desc.icon;
      this.img = desc.img;
      this.markDown = desc.markDown;
      this.provider = desc.provider;
      this.type = desc.type;
      this.url = desc.url;
    }
  }
  // ConsoleDocumentStatus defines the observed state of ConsoleDocument
  export class Status {
    public enabled?: boolean;
  }
}

// ConsoleDocumentList is a list of ConsoleDocument
export class ConsoleDocumentList {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  public apiVersion: string;

  // List of consoledocuments. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
  public items: ConsoleDocument[];

  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  public kind: string;

  // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  public metadata?: apisMetaV1.ListMeta;

  constructor(desc: ConsoleDocumentList) {
    this.apiVersion = ConsoleDocumentList.apiVersion;
    this.items = desc.items;
    this.kind = ConsoleDocumentList.kind;
    this.metadata = desc.metadata;
  }
}

export function isConsoleDocumentList(o: any): o is ConsoleDocumentList {
  return o && o.apiVersion === ConsoleDocumentList.apiVersion && o.kind === ConsoleDocumentList.kind;
}

export namespace ConsoleDocumentList {
  export const apiVersion = "documents.console.openshift.io/v1alpha1";
  export const group = "documents.console.openshift.io";
  export const version = "v1alpha1";
  export const kind = "ConsoleDocumentList";

  // ConsoleDocumentList is a list of ConsoleDocument
  export interface Interface {
    // List of consoledocuments. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
    items: ConsoleDocument[];

    // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    metadata?: apisMetaV1.ListMeta;
  }
}

// RhodsDocument is the Schema for the rhodsdocuments API
export class RhodsDocument {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  public apiVersion: string;

  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  public kind: string;

  // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  public metadata?: apisMetaV1.ObjectMeta_v2;

  // RhodsDocumentSpec defines the desired state of RhodsDocument
  public spec?: RhodsDocument.Spec;

  // RhodsDocumentStatus defines the observed state of RhodsDocument
  public status?: RhodsDocument.Status;

  constructor(desc: RhodsDocument) {
    this.apiVersion = RhodsDocument.apiVersion;
    this.kind = RhodsDocument.kind;
    this.metadata = desc.metadata;
    this.spec = desc.spec;
    this.status = desc.status;
  }
}

export function isRhodsDocument(o: any): o is RhodsDocument {
  return o && o.apiVersion === RhodsDocument.apiVersion && o.kind === RhodsDocument.kind;
}

export namespace RhodsDocument {
  export const apiVersion = "documents.console.openshift.io/v1alpha1";
  export const group = "documents.console.openshift.io";
  export const version = "v1alpha1";
  export const kind = "RhodsDocument";

  // RhodsDocument is the Schema for the rhodsdocuments API
  export interface Interface {
    // Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
    metadata?: apisMetaV1.ObjectMeta_v2;

    // RhodsDocumentSpec defines the desired state of RhodsDocument
    spec?: RhodsDocument.Spec;

    // RhodsDocumentStatus defines the observed state of RhodsDocument
    status?: RhodsDocument.Status;
  }
  // RhodsDocumentSpec defines the desired state of RhodsDocument
  export class Spec {
    public appName?: string;

    public description?: string;

    public displayName?: string;

    public durationMinutes: number;

    public featureFlag?: string;

    public icon?: string;

    public img?: string;

    public markDown?: string;

    public provider?: string;

    public type?: string;

    public url?: string;

    constructor(desc: RhodsDocument.Spec) {
      this.appName = desc.appName;
      this.description = desc.description;
      this.displayName = desc.displayName;
      this.durationMinutes = desc.durationMinutes;
      this.featureFlag = desc.featureFlag;
      this.icon = desc.icon;
      this.img = desc.img;
      this.markDown = desc.markDown;
      this.provider = desc.provider;
      this.type = desc.type;
      this.url = desc.url;
    }
  }
  // RhodsDocumentStatus defines the observed state of RhodsDocument
  export class Status {
    public enabled?: boolean;
  }
}

// RhodsDocumentList is a list of RhodsDocument
export class RhodsDocumentList {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  public apiVersion: string;

  // List of rhodsdocuments. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
  public items: RhodsDocument[];

  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  public kind: string;

  // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  public metadata?: apisMetaV1.ListMeta;

  constructor(desc: RhodsDocumentList) {
    this.apiVersion = RhodsDocumentList.apiVersion;
    this.items = desc.items;
    this.kind = RhodsDocumentList.kind;
    this.metadata = desc.metadata;
  }
}

export function isRhodsDocumentList(o: any): o is RhodsDocumentList {
  return o && o.apiVersion === RhodsDocumentList.apiVersion && o.kind === RhodsDocumentList.kind;
}

export namespace RhodsDocumentList {
  export const apiVersion = "documents.console.openshift.io/v1alpha1";
  export const group = "documents.console.openshift.io";
  export const version = "v1alpha1";
  export const kind = "RhodsDocumentList";

  // RhodsDocumentList is a list of RhodsDocument
  export interface Interface {
    // List of rhodsdocuments. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
    items: RhodsDocument[];

    // Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    metadata?: apisMetaV1.ListMeta;
  }
}