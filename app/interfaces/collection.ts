
enum Shared {
  "off",
  "shared",
  "public"
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
