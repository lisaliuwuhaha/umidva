import { useEffect, useState } from "react";
// 判断设备显示宽度
export const verifyEquipment = () => {
  // 1 -> pc,2 -> pad,3 -> mobile
  // const width = document.body.clientWidth;
  // return width >= 1200 ? 1 : (
  //   width >= 768 && width < 1200 ? 2 : 3
  // )
  // return width >= 1200 ? false : true;

  let sUserAgent = navigator.userAgent.toLowerCase();
  let bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  let bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  let bIsMidp = sUserAgent.match(/midp/i) == "midp";
  let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  let bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  let bIsAndroid = sUserAgent.match(/android/i) == "android";
  let bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  let bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
  let ismobile = 0;
  if (
    bIsIpad ||
    bIsIphoneOs ||
    bIsMidp ||
    bIsUc7 ||
    bIsUc ||
    bIsAndroid ||
    bIsCE ||
    bIsWM
  ) {
    ismobile = true;
  } else {
    ismobile = false;
  }
  return ismobile;
};
// 自定义hook设置页面标题
export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

//是否移动端进入官网页面, 判断是否继续加载官网页面
export const downloadPage = (pathname) => {
  // let system = localStorage.getItem("hotsign_system");
  // if (system && system === "pc") return;
  // if (system && system === "mobile") {
  //   window.location.href = `https://www.alphazone.com.cn/mobappDownload.html`;
  //   return;
  // }
  localStorage.removeItem("hotsign_system");
  let _system = verifyEquipment();
  //如果是活动页
  if (_system && pathname.indexOf("mob") === -1) {
    // localStorage.setItem("hotsign_system", "mobile");
    window.location.href = `https://www.alphazone.com.cn/mobappDownload.html`;
    return;
  }
  // localStorage.setItem("hotsign_system", "pc");
};
