import React, { useEffect, useState } from "react";
import styled from "styled-components";

//移动端 弹窗遮罩层
const PopupMask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  min-height: 81.2rem;
  /* background-color: rgba(0, 0, 0, 0.75); */
  z-index: 2;
`;

export default ({
  visible = false, //是否显示  通过次参数修改body样式
  alpha = 0.75, //遮罩层透明度
  children, //子元素
  onCLose = null, //关闭事件
}) => {
  useEffect(() => {
    visible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
    return () => (document.body.style.overflow = "auto");
  }, [visible]);
  return (
    <PopupMask
      onClick={onCLose}
      style={{ backgroundColor: `rgba(0, 0, 0, ${alpha})` }}
    >
      {children}
    </PopupMask>
  );
};
