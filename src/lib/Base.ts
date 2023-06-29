interface IfBase {
  basefn(
    x: string,
    y: string,
    z: Record<string, any> | string,
    cb?: (x: any) => any,
  ): void;
}
export default class Base implements IfBase {
  basefn(
    x: string,
    y: string,
    z: Record<string, any> | string,
    cb?: (x: any) => any
    ): void{
    //...
    console.log(x,y,z)
  }
}
