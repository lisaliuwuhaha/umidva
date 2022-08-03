import { message } from "antd"
import qs from 'query-string'
import config from "@/constants/config"

const { serverHostV1, serverHostV2 } = config
const TIME_OUT = 10000
const STATUS_MSG = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
}
// console.log(process.env.NODE_ENV)
const defaultOpts = {
  params: null,
  body: null,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  // timeout: TIME_OUT,  // fetch 不支持超时判断？
  mode: "cors",
  cache: "no-cache",
}

/**
 * @param {Boolean} isDemo 是否是模拟盘
 */

const request = async (url, params, opts) => {
  let {
    method,
    headers,
    type, // 用于判断 headers 中的 Content-Type 类型，请求时需删除此参数
    body = {},
  } = opts

  // 1. 处理 url
  if (typeof url !== "string") throw new TypeError("请求地址错误")
  const isV1 = url.indexOf('v1') !== -1
  url = (isV1 ? serverHostV1 : serverHostV2) + url
  // --- 处理 GET 请求的 url
  if (method === "GET") {
    // url = url + (url.includes("?") ? "&" : "?" + qs.stringify(params))
    url +=!!params?'?'+ qs.stringify(params):''
    opts= {
      method: 'GET',
    }
  }
  // 2. 处理 opts 中的 数据体 / 请求头 等
  if (/^(POST|PUT)$/i.test(method)) {
    type = !type ? "urlencoded" : null
    if (type === "urlencoded") {
      headers["Content-Type"] = "application/x-www-form-urlencoded"
      body = qs.stringify(params)
    }
    if (type === "json") {
      headers["Content-Type"] = "application/json"
      body = JSON.stringify(params)
    }
    opts = Object.assign({}, defaultOpts, {
      ...opts,
      headers,
      body,
    })
  }
  // console.log("===opts", opts)
  delete opts.type

  // 发起请求并进行相关验证
  try {
    const response = await fetch(url, opts)
    // console.log("===response", response)
    const { status, statusText } = response
    //103登录异常,需要验证码登录,现阶段先抛出错误,等需要登录时再修改代码
    if (status === 103) throw new Error("登录异常,请重新登录")
    if (status < 200 || status > 499) {
      throw new Error(statusText || STATUS_MSG[status] || "未知错误")
    }
    const json = await response.json()
    // console.log("===json", json)
    if(method!='GET'){
      const { data, msg, status: jsonStatus } = json
      if (jsonStatus !== 1) throw new Error(msg || "网络请求失败")
    }
    return json
  } catch (e) {
    // console.log("===fetch error", e.message)
    // message.error(e.message)
    //H5页面不显示全局提示弹窗
    !headers.hasOwnProperty('client') && message.error(e.message)
    // return { error: e.message }
    throw e
  }
}

export async function get(url, params, opts = { headers: {} }) {
  return await request(url, params, Object.assign({}, opts,{ method: "GET" }))
}
export async function post(url, params, opts = { headers: {}, body: {} }) {
  return await request(url, params, Object.assign({}, opts, { method: "POST" }))
}
