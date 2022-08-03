import React, { memo } from "react";
import { ShareHFWrapper } from "./style";
import UserFace from "@/components/common/UserFace";


export default memo(function ShareHF(props) {
  const { username, face, dec } = props;
   // 点击事件
   const onClick = () => {
    window.location.href = "//www.alphazone.com.cn/mobappDownload.html"
  }
  return (
    <ShareHFWrapper>
      <div className="jump-href top-href u-f-jsb u-f-ac" onClick={onClick}>
        <div className="th-lx u-f-ac">
          <UserFace face={face} style={'sharer-avtar-x'}/>
          <div>
            <div className="sharer-rec sharer-name">{username}</div>
            <div className="sharer-rec sharer-dec">
              “我在火象交易发现一篇超赞的{dec}”
            </div>
          </div>
        </div>
        <div className="th-rx">下载APP</div>
      </div>
      <div className="jump-href bottom-href u-f-ajc" onClick={onClick}>
        <div className="applogo-x"></div>下载APP
      </div>
    </ShareHFWrapper>
  );
});
