import { typeJudge } from "./util"

const deepTargets = ["array", "object", "set", "map", "arguments"]
function isObject(target) {
  const type = typeof target
  return target !== null && (type === "object" || type === "function")
}
function getInitial(target) {
  const Ctor = target.constructor
  return new Ctor()
}
function cloneReg(target) {
  const reFlags = /\w*$/
  const result = new target.constructor(target.source, reFlags.exec(target))
  result.lastIndex = target.lastIndex
  return result
}
function cloneSymbol(target) {
  return Object(Symbol.prototype.valueOf.call(target))
}
// 除 function 外的大部分引用类型数据
// Bool、Number、String、String、Date、Error
function cloneOtherType(target, type) {
  const Ctor = target.constructor
  switch (type) {
    case "number":
    case "boolean":
    case "string":
    case "error":
    case "date":
      return new Ctor(target)
    case "regexp":
      return cloneReg(target)
    case "symbol":
      return cloneSymbol(target)
    default:
      return null
  }
}
/** NOTE: 深拷贝
 * 需要考虑 target 的类型：分为可遍历类型和不可遍历类型两种
 * 可遍历类型：set、map、object、array、arguments
 *
 */
export const deepClone = (target, map = new WeakMap()) => {
  // 1. 基础类型的值直接返回
  if (!isObject(target)) return target

  // 2. 初始化
  let cloneTarget
  const type = typeJudge(target)
  // -- 获取可遍历类型的新实例对象
  if (deepTargets.includes(type)) {
    cloneTarget = getInitial(target)
  } else {
    return cloneOtherType(target, type)
  }

  // 3. 防止循环引用
  if (map.get(target)) return map.get(target)
  map.set(target, cloneTarget)

  // 4. 克隆 set 类型
  if (type === "set") {
    target.forEach(val => {
      cloneTarget.add(deepClone(val, map))
    })
    return cloneTarget
  }

  // 克隆 map
  if (type === "map") {
    target.forEach((val, key) => {
      cloneTarget.set(key, deepClone(val, map))
    })
    return cloneTarget
  }

  // 克隆 对象和数组（能到这里的就剩 object、array 或是 arguments 三种了，所以不用再加判断）
  cloneTarget = Array.isArray(target) ? [] : {}
  for (const key in target) {
    if (target.hasOwnProperty(key)) {
      cloneTarget[key] = deepClone(target[key], map)
    }
  }
  return cloneTarget
}
