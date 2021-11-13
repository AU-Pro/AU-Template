// Void类型关键字为 void ， Void类型 表示没有类型或空类型。
// 显式指定返回类型为 void
export function hi1(): void {
  /** 函数体为空 * */
}
// 和上面等价，返回值会被自动推导为 void
export function hi2() {
  /** 函数体为空* */
}

// Null类型 和 Undefined类型
// 类型表现和编译选项 strictNullChecks 有关

// strictNullChecks 选项打开
// null 只能赋值给 Null类型
// undefined 只能赋值给 Undefined类型 和 Void类型

// strictNullChecks 选项关闭
// null 和 undefined 可以赋值给任意类型

// 显式声明一个值为 Void类型 是合法的，但没什么意义，因为你只能为它赋值undefined 或 null
export const x: void = undefined

// 仅在 strictNullChecks 编译选项关闭时合法
// export const y: void = null

export interface Person {
  readonly info: string
  name: string
  age: number
  gender?: Array<number>
  // 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
  // 一个接口中只能定义一个任意属性
  [other: string]: any
}

export interface NumberArray {
  [index: number]: number
}

export const numberArr: NumberArray = [1, 2, 3]

export const arr1: [number, number, number, string] = [1, 2, 3, '4']
export const arr11: number[] = [1, 2, 3]

export const arr2: Array<any> = [1, 2, 3, '4']
export const arr21: Array<number> = [1, 2, 3]

export const person1: Person = {
  info: 'info',
  name: 'person1',
  age: 1
}

export function sum(...arg: any): void {
  // const args: {
  //   name: string
  //   age: number
  // } = arg

  const args: any = arg
  console.log(args)
}

// typeof 类型查询
export const value: typeof arr2 = [{}]
const valueFunc: typeof sum = (): void => {
  console.log('valueFunc')
}
valueFunc()

// 类型别名
type Name = string
// 字符串字面量类型
type Name1 = 'Tom' | 'Jerry' | 'ZhangSan'
type EventNames = 'click' | 'scroll' | Name1
type NameFunction = () => string
export const getName = (n: Name | NameFunction): Name | void => {
  if (typeof n === 'function') {
    return n()
  }
  return n
}

export const handleEvent = (ele: Element, eventName: EventNames): void => {
  console.log(ele, eventName)
}
