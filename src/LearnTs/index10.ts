// 类型断言
// 类型断言并非类型转换 不会影响变量的类型
interface Cat {
  name: string
  run(): void
}

interface Fish {
  name: string
  swim(): void
}

interface Other {
  other(): void
}

export function isFish(animal: Cat | Fish) {
  if (typeof (animal as Cat).run === 'function') {
    return false
  }
  return true
}

// window.foo = '1'
;(window as any).foo = '1'

// 双重断言
export function testOther(cat: Cat) {
  return cat as any as Other
}

/** 内置对象
 * new Boolean(1)
 * new Error('error')
 * new Date()
 * /[a-z]/
 */

/** DOM BOM 内置对象
 */
// eslint-disable-next-line prefer-destructuring
export const body: HTMLElement = document.body
export const { head } = document

export const allDiv: NodeList = document.querySelectorAll('div')
document.addEventListener('click', (ev: MouseEvent): void => {
  console.log(ev)
})

// ts 编写 node程序
// npm install @types/node
