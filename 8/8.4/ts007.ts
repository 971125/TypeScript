class Strudent{
  XH:string;
  name:string;
  clazz:string;
  constructor(XH ? :string,name ? :string,clazz ? :string);
  constructor(XH:string,name:string,clazz:string){
    this.XH=XH;
    this.name=name;
    this.clazz=clazz
  }
}
export { Strudent as NM}