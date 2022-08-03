import React, { useEffect, useState } from "react";
import { GfgPopupView, CloseBtn, GfgPrePopupView, PopCloseBtn } from "./style";
import PopupMask from "components/mobile/PopupMask";

export default ({ visible = false, onClose = null, type = 202 }) => {
  const showView = (type) => {
    switch (type) {
      case 301:
        return (
          <GfgPopupView>
            <p className="popup-tit">谢谢参与</p>
            <p className="popup-text">
              运气再烂也不怕 <br /> 官方定轨每20抽都必中藏品
            </p>
            <CloseBtn onClick={onClose}>知道了</CloseBtn>
            <PopCloseBtn onClick={onClose}>
              <div className="btn-con"></div>
            </PopCloseBtn>
          </GfgPopupView>
        );
      case 302:
        return (
          <GfgPopupView>
            <p className="popup-text-2">
              邀请好友 <br />
              可获得抽奖次数
            </p>
            <CloseBtn onClick={onClose}>知道了</CloseBtn>
            <PopCloseBtn onClick={onClose}>
              <div className="btn-con"></div>
            </PopCloseBtn>
          </GfgPopupView>
        );
      case 201:
        return (
          <GfgPopupView>
            <p className="popup-tit-3">恭喜你</p>
            <p className="popup-text-3">获得0.05金币</p>
            <CloseBtn onClick={onClose} className="msg">
              知道了
            </CloseBtn>
            <PopCloseBtn onClick={onClose}>
              <div className="btn-con"></div>
            </PopCloseBtn>
          </GfgPopupView>
        );
      case 202:
      case 203:
        return (
          <GfgPrePopupView>
            <div className="popup-head" data-type={type}></div>
            <p className="popup-succ-tit">
              恭喜您，
              <br />
              抽中藏品！
            </p>
            <p className="popup-succ-text">
              您可以前往【我的】-【个人资料-活动证书】领取藏品证书，若有疑问请联系官方客服。
            </p>
            <CloseBtn onClick={onClose} className="succ">
              知道了
            </CloseBtn>
            <PopCloseBtn onClick={onClose}>
              <div className="btn-con"></div>
            </PopCloseBtn>
          </GfgPrePopupView>
        );
    }
  };
  return visible ? (
    <PopupMask visible={visible}>{showView(type)}</PopupMask>
  ) : (
    <></>
  );
};
