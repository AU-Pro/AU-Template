/** 泛型约束
 *  语法: 类型变量 extends 类型
 */

interface withLength {
  length: number
}

export function getLength<T extends withLength>(arg: T): number {
  return arg.length
}

// 默认类型
interface MyType<T = string> {
  value: T
}

export function getL<T extends MyType['value']>(string: T): number {
  return string.length
}

/** 泛型数组
 *  Array<T>
 *  只读数组: ReadonlyArray<T>
 */
export const arr1: number[] = [1, 2, 3]
export const arr2: Array<number> = [1, 2, 3]
export const arr3: ReadonlyArray<number> = [4, 5, 6]

/** 生命合并
 *  如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型
 */
function reverse(x: number): number
function reverse(x: number | string): number | string

function reverse(x: string | number): string | number {
  return x
}

reverse('2')
