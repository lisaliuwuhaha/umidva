import React, { memo, useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { validate } from "@/utils/util";
import { registeredFun } from "@/utils/registeredFun";
import CountDown from "components/common/CountDown";
import { sendyanzm } from "@/services/user";
import { modalContext } from "@/utils/modalContext";
import {
  PageScreen,
  RegForm,
  Input,
  CodeButton,
  RegButton,
  RegRule,
} from "./style";
import { MoneyMethod } from "../ShareStartPage/style";
import PageBg from '/public/images/mobile/mobShare/share-reg-header.png';
import RegBtn from '/public/images/mobile/mobShare/share-reg-btn.png';
import RegRuleBtn from '/public/images/mobile/mobShare/share-reg-rule-t.png';
import AppLogo from '/public/images/mobile/mobShare/share-reg-app-icon.png';

export default memo(function ShareRegPage() {
  const { getQueryString, showPagePopup } = useContext(modalContext);
  const r_uid = getQueryString("r_uid"),
    r_top_uid = getQueryString("r_top_uid");
  const [phone, setPhone] = useState(""); //手机号
  const [code, setCode] = useState(""); //验证码


  //绑定数据
  const _inputPhone = (val, type) => {
    switch (type) {
      case "phone":
        setPhone(val);
        console.log("输入手机号", val);
        break;
      case "code":
        setCode(val);
        console.log("输入验证码", val);
        break;
    }
  };
  //验证码手机号,发送验证码
  const _verifyPhone = () => {
    let msg = "";
    if (!validate(phone, "phone")) msg = "手机号格式错误";
    if (phone === "") msg = "请输入手机号";
    if (msg === "") {
      console.log("发送验证码");
      sendCode();
      return true;
    }
    showPagePopup({
      text: msg,
      type: "",
      _time: Math.random(),
    });
    return false;
  };
  //发送验证码
  const sendCode = () => {
    sendyanzm({ phone })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("发送验证码出错", err);
      });
  };

  //注册成功后
  const onEnd = (token) => {
    showPagePopup({
      text: "注册成功",
      _time: Math.random(),
    });
    setTimeout(() => {
      window.location.href = `https://www.alphazone.com.cn/mobappDownload.html?token=${token}`;
    }, 800);
  };

  //点击注册按钮
  const _clickRegBtn = () => {
    console.log("注册");
    if (phone === "" || code === "") {
      showPagePopup({
        text: "请完善信息",
        _time: Math.random(),
      });
      return;
    }
    //走流程
    registeredFun({
      showHint: showPagePopup,
      phone: phone,
      code: code,
      referrer: "好友分享",
      isRecommended: true,
      onEnd: onEnd,
      otherParams: { r_uid, r_top_uid },
    });
  };

  return (
    <PageScreen>
      <img className="header-img" src={PageBg} />
      {/* 表单 */}
      <RegForm>
        <div className="input-x">
          <Input
            placeholder="请输入手机号"
            onInput={(e) => {
              _inputPhone(e.target.value, "phone");
            }}
          />
        </div>
        <div className="input-x">
          <Input
            placeholder="请输入验证码"
            onInput={(e) => {
              _inputPhone(e.target.value, "code");
            }}
          />
          <CodeButton>
            <CountDown onClick={_verifyPhone} />
          </CodeButton>
        </div>
        <RegButton className="cur" onClick={_clickRegBtn}>
          <img src={RegBtn} className="reg-button-bg" />
          立即注册
        </RegButton>
      </RegForm>
      {/* 规则 */}
      <RegRule>
        <MoneyMethod className="reset-rule">
          <img className="rule-title" src={RegRuleBtn} />
          <div className="posr">
            <p className="rule-msg">在当前页面成功注册火象交易</p>
            <p className="rule-msg">
              下载 <img className="app-icon" src={AppLogo} />
              <span className="c5d20 cur"> 火象交易APP</span> ，前往【首页】点击
              红包领取现金
            </p>
            <hr className="ms-method-hr" />
            <p className="rule-notice">
              请保持你的注册手机号与微信绑定手机号一致，
              否则可能导致红包无法领取到账
            </p>
          </div>
        </MoneyMethod>
      </RegRule>
    </PageScreen>
  );
});
