/** 工具类型 */

/** Partial
 *  Partial<T> 将某个类型里的属性全部变为可选项 ?
 */
export interface Todo {
  title: string
  description: string
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return {
    ...todo,
    ...fieldsToUpdate
  }
}

const todo1 = {
  title: 'Learn TS',
  description: 'Learn TypeScript'
}

export const todo2 = updateTodo(todo1, {
  description: 'Learn TypeScript Enum'
})

/** Required
 *  Required<T> 把所有的可选的属性变成必选
 */
interface PullDownRefreshConfig {
  threshold: number
  stop: number
}

export type PullDownRefreshOptions = Partial<PullDownRefreshConfig>

/** * type PullDownRefresh = { * threshold: number; * stop: number; * } */
export type PullDownRefresh = Required<Partial<PullDownRefreshConfig>>
