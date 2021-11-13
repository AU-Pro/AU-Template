// 数组类型 T[] T为任意类型
export const list1: number[] = [1, 2, 3]

// 元祖类型 [T0, T1, ...]
export const list2: [string, number] = ['1', 1]

// 枚举类型 enum T {...}
// 枚举值 具有 默认值和自增性 (若未定义值则 自增 向后 +1 )
enum Direction1 {
  Up, // 默认值为 0
  Down, // 默认值为 1
  Left, // 默认值为 2
  Right // 默认值为 3
}

export const dir1: Direction1 = Direction1.Up

// 在初始化为字符串的场景中，值的数字自增性依然起作用。如果一个没有显式初始化的枚举值前面是一个字符串，将会报错：
enum Direction2 {
  Up = 'UP',
  // Down, // error TS1061: Enum member must have initializer
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
  Inside = 4,
  Outside // 不会报错，值为 4 + 1 = 5
}

export const dir2: string = Direction2.Up
export const dir3: string = Direction2[0]
export const dir4: Direction2 = Direction2.Up

// 外部枚举
declare enum fruits {
  apple,
  banana,
  orange
}
export const fruits1: Array<fruits> = [fruits.apple, fruits.banana]
export const fruits2: fruits[] = [fruits.apple, fruits.banana, fruits.orange]
