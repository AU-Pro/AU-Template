// 可选参数必须位于必选参数之后
function f(num: number, name: string, age?: number): void {
  console.log(num, name, age)
}

// () => void 是变量fn的类型，代表是一个函数类型
export const fn: () => void = () => {
  console.log('this is fn')
  return 'fn'
}

// 通过类型查询 typeof 申明一个函数变量
const fn1: typeof fn = (): string => {
  return 'fn1'
}

console.log(f(1, '1'))
console.log(fn())
console.log(fn1())
