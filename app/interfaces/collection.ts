
export class Shared {
  static Mine = "mine";
  static Shared = "shared";
  static Public = "public";
}

export class ShareLevel {
  static Read = "read";
  static Contribute = "contribute";
}

export interface ICollection {
  created?: Date;
  owner?: {
    name: string
  };
  title?: string;
  contents?: {
    wiki: string;
    reports: Array<any>
  };
  collectionID: string;
  writeable?: boolean;
  deletable?: boolean;
  nPeople?: number;
  shared?: Shared;
  mine?: boolean;
  link: string;
  acl?: any;
}

export interface CollectionRetreival {
  collectionID?: string;
  type?: Shared;
}

export interface CollectionShare {
  email?: string;
  level?: ShareLevel;
}
