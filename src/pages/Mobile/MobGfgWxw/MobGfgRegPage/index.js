import React, { useEffect, useState, memo, useContext } from "react";
import { validate } from "@/utils/util";
import { registeredFun } from "@/utils/registeredFun";
import { PageScreen, FormInput, FormBtn, RegRule } from "./style";
import CountDown from "components/common/CountDown";
import { sendyanzm } from "@/services/user";
import { modalContext } from "@/utils/modalContext";

export default memo((route) => {
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
      <div className="header-bg"></div>
      {/* 表单 */}
      <div className="form-x">
        <FormInput data-tit="请输入手机号">
          <input type="text" onInput={(e) => _inputPhone(e.target.value, 'phone')} />
        </FormInput>
        <FormInput data-tit="请输入验证码">
          <input type="text" onInput={(e) => _inputPhone(e.target.value, 'code')} />
          <button className="code-btn">
            <CountDown onClick={_verifyPhone} startStr="获取验证码" />
          </button>
        </FormInput>
        <FormBtn onClick={_clickRegBtn}>立即注册</FormBtn>
      </div>
      {/* 规则 */}
      <RegRule>
        <p className="reg-rule-tit">参与规则</p>
        <div className="reg-rule-con">
          <p className="reg-rule-t">1.在当前页面注册火象交易账号；</p>
          <p className="reg-rule-t">
            2.下载并登录 <i className="app-logo"></i>{" "}
            <a
              className="reg-rule-a"
              href="https://www.alphazone.com.cn/mobappDownload.html"
            >
              火象App
            </a>{" "}
            前往【首页】进入活动页面点击红包领取现金（立即到账），双方即可各获得1次抽奖机会进行抽奖。
          </p>
        </div>
        <p className="reg-rule-msg">
          注：请保持你的注册手机号与微信绑定手机号一致，否则可能导致红包无法到账领取
        </p>
      </RegRule>
    </PageScreen>
  );
});
