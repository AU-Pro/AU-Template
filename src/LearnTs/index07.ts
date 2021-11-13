/** 泛型
 *  泛型可以为函数、接口、类定义类型变量
 *  名字<T1, T2, ...>
 */

/** 泛型函数
 *  定义泛型函数，类型变量为T
 *  T接下来在"参数、返回值、变量"定义中可以作为类型使用
 */
export function identity<T>(m: T): T {
  const n: T = m
  return n
}

export const m: string = identity<string>('hello')

/** 泛型类
 *  定义泛型类，包含两个类型变量
 */
export class Identity2<T1, T2 = number> {
  attr1!: T1

  attr2!: T2

  // 静态成员不能引用类的泛型参数
  show = (n: T2): T2 => {
    return n
  }
}

/** 泛型接口
 *  定义泛型接口
 */
interface Identity3<T> {
  attr: T
}

export interface Identity4 {
  <T>(length: number, value: T): Array<T>
}

export interface Identity5<T> {
  (length: number, value: T): Array<T>
}

// 默认指定泛型 <T = string>
export interface Identity6<T = number> {
  (length: number, value: T): Array<T>
}

export const i: Identity3<number> = { attr: 3 }

function fn() {
  console.log('fn')
}

export const c: Identity3<typeof fn> = {
  attr: () => {
    console.log('fn')
  }
}
