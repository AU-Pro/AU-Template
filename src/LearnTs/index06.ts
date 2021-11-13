/* eslint-disable max-classes-per-file */
/** 类类型 */
class TypeA {
  // ...
}

export const a: TypeA = new TypeA()

class Greeter {
  static greeting: TypeA = a

  num2str = (num: number): string => {
    return num.toString()
  }
}

export const g: Greeter = new Greeter()

/** 访问控制 public / private / protected / static 修饰符
 * 在TypeScript中，修饰符不是必须的，他们主要用来控制类成员的可访问性，类成员包括：
 */

/** static  用于修饰变量或者方法，表示静态的
 * 当类中的方法被声明为 static 时, 其实例化对象不可调用该方法, 只有类本身, 以及其子类可以调用
 */

/** public 修饰属性和方法 公共的, 任何地方 都可以访问
 * 默认为public
 */

/** private 修饰属性和方法 私有的, 只能在本类内部使用, 其余地方均不可以访问, 实例化对象 和 类 也不可访问
 */

/** protected 修饰属性和方法 被保护的,
 * 被类内部以及其子类内部, 非static方法内可访问，实例化对象和类也不可访问
 */

// 默认为public
class Animal {
  readonly heart: number = 50

  // age属性未显式添加修饰符，默认为public
  age: number

  static staticAge = 200

  // 显式添加 private
  // protected 修饰符与 private 修饰符的行为相似，都不能在类的外部访问。但有一点不同， protected 成员可以在派生类中访问。
  private name: TypeA = new TypeA()

  protected color = 'yellow'

  constructor(age: number) {
    this.age = age
    // 只读属性必须在声明时或构造函数里被初始化
    this.heart = 10000
  }

  // show方法未显式添加修饰符，默认为 public
  show() {
    console.log(this.name)
    console.log(this.heart)
  }

  num2str = (num: number): string => {
    return num.toString()
  }
}

console.log(Animal.staticAge) // print 200
console.log(Animal.name) // print
export const a1: Animal = new Animal(10) // print 200
// console.log(a1.staticAge) // error
// console.log(a1.name) // error

// 抽象类 约束类的实现
abstract class Person {
  public constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  public name: string

  public age: number

  // public abstract sayHi: () => void
  public abstract sayHi(): void
}

// 接口也可以互相继承
interface singSong {
  playMusic(word: string): void
}
interface speak {
  speakWord(word: string): void
}

// 继承 抽象类
// 实现 接口
export class Chinese extends Person implements singSong, speak {
  constructor(name: string, age: number) {
    super(name, age)
    this.name = name
    this.age = age
  }

  public name: string

  public age: number

  public sayHi = () => {
    console.log('hi')
  }

  public playMusic = (word: string): void => {
    console.log(`singSong: ${word}`)
  }

  public speakWord = (word: string): void => {
    console.log(`speak: ${word}`)
  }
}
