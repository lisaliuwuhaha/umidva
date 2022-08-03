import { get, post } from './request';

// 推广我的二维码
export const qrcode = ({ token, url }, isApp) => post("/alpha/api/v1/qrcode",
  {
    token,
    url  //推广的网址
  },
  { headers: isApp ? { "client": "app" } : {}, }
)
// 推广列表
export const recommendedList = ({ token, pageNum = 1, pagenum = 1, limit }, isApp) => post("/alpha/api/v1/recommendedList",
  {
    token,
    pageNum,
    pagenum,
    limit
  },
  { headers: isApp ? { "client": "app" } : {}, }
)