export class Store {
 public Name:string;
 public Branches:Array<string>;
 public Logo:string;

  constructor(Name:string, Branches:Array<string>, Logo:string) {
      this.Name=Name,
      this.Branches=Branches,
      this.Logo=Logo
  }
}
