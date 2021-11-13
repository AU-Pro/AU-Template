/**
 * 内部申明
 * 外部申明
 */
declare const $: (selector: string) => {
  html: (content: string) => void
}

$('body').html('hello world')

export const ts = 'test'

/**
 * 三斜线指令中需要注意的是 path 类型和 types 类型的区别：
 * path 类型声明的是对本地文件的依赖，包含路径信息
 * /// <reference path="./jquery.d.ts" />
 * types 类型声明的是对 node_modules/@types 文件夹下的类型的依赖，不包含路径信息
 * <reference types="node" />
 */
