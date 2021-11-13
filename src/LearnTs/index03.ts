/** 复合类型 */

interface Bird {
  fly(): void
}

interface Dog {
  run(): void
}

export class Animal {
  fly = () => {
    console.log('fly')
  }

  run = () => {
    console.log('run')
  }
}

// 交叉类型
export const animal1: Bird & Dog = new Animal()

// 联合类型 / 高级联合
export const animal2: Bird | Dog | string | 'test string' = new Animal()

// keyof
interface Person {
  name: string
  age: number
}

export const keyword: keyof Person = 'name'
