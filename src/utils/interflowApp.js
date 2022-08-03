//与app交流
export default async (type, params = { src: "", title: "", url: "" }) => {
  let orderStr = "",
    errMsg = "";
  switch (type) {
    case "closePage": //nav_pop	退出Web容器
      orderStr = `nav_pop`;
      break;
    case "pushAssessment": //跳转评级页面
      orderStr = `pushAssessmentScreen`;
      break;
    case "loginAndDismiss": //弹出登录界面
      orderStr = `presentLoginAndDismiss`;
      break;
    case "openImage": //打开图片浏览器
      if (!params.src) {
        errMsg = "未找到图片资源";
        break;
      }
      orderStr = `openImageViewer@${params.src}`;
      break;
    case "setNavTitle": //设置导航栏标题
      if (!params.title) break;
      orderStr = `setNavTitle:${params.title}`;
      break;
    case "index_2": //去交易 - [行情]
      orderStr = `mainTabIndex:2`;
      break;
    case "index_3": //我的持仓 - [交易]
      orderStr = `mainTabIndex:3`;
      break;
    case "pushClassroom": //跳转[火象课堂]
      orderStr = `pushClassroom`;
      break;
    case "pushWeb": //打开网页浏览器
      if (!params.url) {
        errMsg = "未找到网络地址";
        break;
      }
      orderStr = `pushWebScreen@${params.url}`;
      break;
    case "pusNews": //跳转 [新闻资讯]
      orderStr = `pushHomeNews`;
      break;
  }
  try {
    if (errMsg) {
      throw errMsg;
    }
    console.log(orderStr);
    //执行操作
    // window.ReactNativeWebView.postMessage(orderStr);
  } catch (err) {
    console.log("与app交流失败", err);
    throw err;
  }
  return errMsg;
};
