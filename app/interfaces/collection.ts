
export class Shared {
  static Mine = "mine";
  static Shared = "shared";
  static Public = "public";
}

export interface Collection {
  created: Date;
  owner: {
    name: string
  };
  title: string;
  contents: {
    wiki: string;
    reports: Array<any>
  };
  caseFileID: string;
  writeable: boolean;
  deletable: boolean;
  nPeople: number;
  shared: Shared;
  mine: boolean;
}

export interface CollectionRetreival {
  collectionID?: string;
  type?: Shared;
}
