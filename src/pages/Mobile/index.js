import React, { useEffect, useState, } from "react";
import { renderRoutes } from "react-router-config";
import { modalContext } from "@/utils/modalContext";
import { copyText, banXoom, getQueryString } from "@/utils/util";
import MobHintPopUpView from "@/components/mobile/MobHintPopUpView"; //移动端弹窗组件
import '@/styles/resetCss.css';
import "@/styles/mobCss.css"; //移动端样式
banXoom(); //阻止页面缩放

//活动页通用 封装方法,页面获取信息
export default ({ route }) => {
  const [modalData, setModalData] = useState(null); //显示H5弹窗需要的数据
   const token = getQueryString("token") || "";
   const _value = {
     token: token,
     copyText: copyText, //复制文本
     getQueryString: getQueryString, //获取url?params 形式参数
     showPagePopup: setModalData, //显示弹窗
   }
  return (
    <modalContext.Provider value={_value}>
      <>
        {renderRoutes(route.routes)}
      </>
      <MobHintPopUpView {...modalData} />
    </modalContext.Provider>
  );
};
