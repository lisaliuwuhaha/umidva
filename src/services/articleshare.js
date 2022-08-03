import { get, post } from './request';

// 获取服务器时间
export const getdate = () => get("/academy/api/v1/getdate")
// 获取文章详情
export const viewnote = ({ id }, isApp) => post("/academy/api/v1/viewnote",
  {
    id  
  },
  { headers: isApp ? { "client": "app" } : {}, }
)
// 获取文章评论
export const notesCommentList = ({ id,page,size }, isApp) => post("/academy/api/v1/notesCommentList",
  {
    id ,
    page,
    size
  },
  { headers: isApp ? { "client": "app" } : {}, }
)
// 获取要闻
export const getNewsData = ({ text }, isApp) => post("/academy/api/v1/getNewsData",
  {
    text
  },
  { headers: isApp ? { "client": "app" } : {}, }
)
// 获取视频播放路径
export const newVod = ({ vid }, isApp) => post("/academy/api/v1/newVod",
  {
    vid 
  },
  { headers: isApp ? { "client": "app" } : {}, }
)
// 获取话题详情
export const getTopicById = ({ id }, isApp) => post("/guest/api/v2/getTopicById",
  {
    id 
  },
  { headers: isApp ? { "client": "app" } : {}, }
)
// 获取话题详情页文章列表
export const getTopicNoteList = (params, isApp) => post("/guest/api/v2/getTopicNoteListForGuest",
  {
    ...params 
  },
  { headers: isApp ? { "client": "app" } : {}, }
)
// 获取TV推荐列表
export const getTVNoteList = (params, isApp) => post("/academy/api/v1/noteslistbyvisibility",
  {
    ...params 
  },
  { headers: isApp ? { "client": "app" } : {}, }
)

