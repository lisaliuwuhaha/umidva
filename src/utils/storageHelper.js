const PREFIX = "@HS-"
const isJson = str => {
  // if(typeof str) return false;
  try {
    const object = JSON.parse(str)
    if (object && typeof object === "object") {
      return true
    } else {
      return false
    }
  } catch (e) {}
}

// 设置指定键名的值
export const setStorage = (key, value, type = 0) => {
  if (typeof value === "object") {
    value = JSON.stringify(value)
  }
  if (!type) {
    // sessionStorage
    sessionStorage.setItem(`${PREFIX}${key}`, value)
  } else {
    // localStorage
    localStorage.setItem(`${PREFIX}${key}`, value)
  }
}

// 获取指定键名的值
export const getStorage = (key, type = 0) => {
  let value = !type
    ? sessionStorage.getItem(`${PREFIX}${key}`)
    : localStorage.getItem(`${PREFIX}${key}`)
  // console.log(value, isJson(value))
  return isJson(value) ? JSON.parse(value) : value
}

// 删除指定键名对应的内容
export const removeStorage = (key, type = 0) => {
  if (!type) {
    sessionStorage.removeItem(`${PREFIX}${key}`)
  } else {
    localStorage.removeItem(`${PREFIX}${key}`)
  }
}

// 清除本地存储内容
export const clearStorage = (type = 0) => {
  if (!type) {
    sessionStorage.clear()
  } else {
    localStorage.clear()
  }
}
