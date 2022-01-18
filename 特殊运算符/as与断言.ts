namespace one {
  let someValue: any = "this is a string";
  let strLength: number = (<string>someValue).length;
}

namespace jsx {
  //当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
  let someValue: any = "this is a string";
  let strLength: number = (someValue as string).length;
}
