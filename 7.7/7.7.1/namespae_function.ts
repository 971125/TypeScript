function buildString(name:string): string{
  return buildString.prefix+name+buildString.suffix
}
namespace buildString{
  export let suffix = "!";
  export let prefix = "hello, ";
}



console.log(buildString("TypeScript"))