import React, { memo } from "react";
import { Link } from "react-router-dom";
import { FooterView, MainInfo, OtherInfo } from "./style";
import LogoDark from "/public/images/home/app-logo-dark.svg";
import qrcode from "/public/images/home/footer-qrcode.png";
import LogoImg from "/public/images/home/hotsign-logo-img.png";

// NOTE: 页面的命名尽量以 Page 结尾，区分于组件（建议）
export default memo(function Footer({ route }) {
  return (
    <FooterView>
      <MainInfo className="flex-x">
        <div>
          <div className="logo-x">
            <img src={LogoImg} alt="" className="logo-img" />
            <img className="logo-icon" src={LogoDark} />
          </div>
          <p className="mb9">
            <span className="c999">商务邮箱</span>
            <span className="cfff"> business@huosign.com</span>
            <span className="c999 qr-code-msg ml30">
              商务微信二维码
              <i className="iconfont qr-code-icon">&#xe603;</i>
              <i
                className="qr-code-img"
                style={{ backgroundImage: `url(${qrcode})` }}
              ></i>
            </span>
          </p>
          <p>
            <span className="c999">联系电话</span>
            <span className="cfff"> +86（028）8500 9988</span>
            <span className="c999 ml30">招商电话</span>
            <span className="cfff"> 19157896736</span>
          </p>
        </div>
        <div className="pt60">
          <Link className="cfff" to="/userPolicy/privacy">
            隐私政策
          </Link>
          <Link className="cfff ml40" to="/userPolicy/protocol">
            用户服务协议
          </Link>
        </div>
      </MainInfo>
      <OtherInfo className="flex-x">
        <p>
          <span className="c999">沪ICP备2022001065号-2</span>
          {/* <span className="c999 interval">2022泸公网安备23556532323号</span> */}
        </p>
        <p className="c999">
          Copyright © 2022 上海火象趣数据科技有限公司 版权所有
        </p>
      </OtherInfo>
    </FooterView>
  );
});
