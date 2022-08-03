import { get, post } from './request';

//获取用户信息
export const getUserProfile = ({ token }, isApp) => post('/alpha/api/v1/getUserProfile',
  {
    token
  },
  { headers: isApp ? { "client": "app" } : {}, }
)
//发送验证码
export const sendyanzm = ({ phone, temp = 1 }, isApp) => post('/academy/api/v1/sendsms',
  {
    phone,
    temp
  },
  { headers: isApp ? { "client": "app" } : {}, }
)
//验证验证码
export const verify = ({ code, phone }, isApp) => post('/academy/api/v1/verify',
  {
    code,
    phone
  },
  { headers: isApp ? { "client": "app" } : {}, }
)
//登录
export const login = ({ username, password, device }, isApp) => post('/academy/api/v1/login',
  {
    username, password
  },
  { headers: isApp ? { "client": "app" } : {}, }
)
//注册
//region 恒为 2
//referrer  为当前活动名字或者特制化
export const signUp = ({ username, password, phone, region = 2, code, referrer }, isApp) => post('/academy/api/v1/signUp',
  {
    username,
    password,
    phone,
    region,
    referrer,
    code
  },
  { headers: isApp ? { "client": "app" } : {}, }
)
//服务器时间
export const getdate = ({ }, isApp) => get('/academy/api/v1/getdate',
  {},
  { headers: isApp ? { "client": "app" } : {}, }
)
//扫描注册回执推广人信息
export const recommendedFromQRCode = ({ username, r_uid, r_top_uid }, isApp) => post('/academy/api/v1/recommendedFromQRCode',
  {
    username,
    r_uid,
    r_top_uid
  },
  { headers: isApp ? { "client": "app" } : {}, }
)
//验证用户名重复与否
export const isExistsByUsername = ({ username }, isApp) => post('/academy/api/v1/isExistsByUsername',
  {
    username,
  },
  { headers: isApp ? { "client": "app" } : {}, }
)