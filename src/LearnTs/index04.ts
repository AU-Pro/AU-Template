// 对象类型是匿名的接口类型，对象类型没有名字，接口类型有名字。接口类型相当于为对象类型声明了一个别名

// 定义接口类型Person
interface Person {
  name: string
  age: number
}

// 声明变量 man 为 Person 接口类型
export const man: Person = { name: 'jo', age: 30 }

// 描述函数 声明一个函数类型的多种方式:
interface MyFunc {
  // 这条语句描述函数定义
  (): void
  // 描述传参
  // (name: string, age: number): string
  // 这条语句描述静态属性 `test`
  test: string
}

// 以下三种等价
// let fn: MyFunc
// let fn: { (name: string, age: number): string }
// let fn: (name: string, age: number) => string

// 赋值
export const fn = (name: string, age: number): string => {
  return `${name}, ${age}`
}

function myFunc(): void {
  console.log('myFunc')
}
myFunc.test = 'test'

export const newFunc: MyFunc = myFunc

// 描述可索引值

// 描述一个数组
interface StringArray {
  [index: number]: string
}

// let myArray: StringArray 等价于
// 使用了匿名接口
export const myArray: {
  [index: number]: string
  stringArray?: StringArray
} = ['Bob', 'Fred']

// myArray = []
// myArray = ['Bob', 'Fred']

export interface IndexObj {
  [x: number]: string
  [x: string]: string
}
