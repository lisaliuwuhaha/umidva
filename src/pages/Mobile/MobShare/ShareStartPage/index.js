import React, { memo, useContext } from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ListItemView from "../sharePageComponents/ListItemView";
import RecordListView from "../sharePageComponents/RecordListView";
import UserFace from "components/common/UserFace";
import interflowApp from "@/utils/interflowApp";
import { getUserProfile } from "@/services/user";
import { recommendedList, qrcode } from "@/services/navser";
import { modalContext } from "@/utils/modalContext";
import {
  PageScreen,
  UserContent,
  AwardSteps,
  MoneyMethod,
  InviteRecord,
  RuleBtn,
} from "./style";

export default memo(function MobShare() {
  const { token, copyText, showPagePopup } = useContext(modalContext);
  // console.log(token)
  const [userData, setUserData] = useState(null); //用户信息
  const [recordData, setRecordData] = useState(null); // 邀请列表
  const [qrCode, setQrCode] = useState(null); //分享的二维码和地址

  useEffect(() => {
    if (!token || token.length < 11) {
      showPagePopup({
        text: "请先登录",
        type: "",
        _time: 1,
      });
      window.localStorage.removeItem("hx_record_list");
      return;
    }
    getUserInfo();
    getUserRecordList();
    getQrCode();
  }, []);

  //获取用户信息
  const getUserInfo = () => {
    getUserProfile({ token: token }, true)
      .then((res) => {
        setUserData({
          nick_name: res.data.nick_name || "匿名用户",
          face: res.data.face,
        });
      })
      .catch((err) => {
        console.log("用户信息出错", err.message);
      });
  };
  //获取邀请列表
  const getUserRecordList = () => {
    recommendedList({ token: token, pageNum: 1, pagenum: 1, limit: 9999 }, true)
      .then((res) => {
        // console.log(res);
        setRecordData(res.data);
        window.localStorage.setItem("hx_record_list", JSON.stringify(res.list));
      })
      .catch((err) => {
        console.log("邀请列表出错", err);
      })
      .finally(() => { });
  };

  //获取分享的地址
  const getQrCode = () => {
    const url = "https://www.alphazone.com.cn/redPacketRegister.html";
    qrcode({ token: token, url }, true)
      .then((res) => {
        setQrCode(res.data);
      })
      .catch((err) => {
        console.log("用户分享地址出错", err.message);
      });
  };

  //点击分享
  const _clickShare = () => {
    // console.log("点击分享");
    if (!token || token.length < 11) {
      showPagePopup({
        _time: Math.random() * 10,
        type: "",
        text: "请先登录",
      });
      return;
    }
    if (!qrCode) {
      showPagePopup({
        _time: Math.random() * 10,
        type: "",
        text: "分享数据获取失败",
      });
      return;
    }
    const url = qrCode.url;
    copyText(url).then(() => {
      console.log("成功了");
      showPagePopup({
        _time: Math.random() * 10,
        type: "",
        text: "链接复制成功",
      });
    });
  };

  return (
    <PageScreen>
      <div className="ms-header ms-image"></div>
      <RuleBtn>
        <Link to="/shareRulePage" target="_blank">
          活动规则
        </Link>
      </RuleBtn>
      {/* 用户信息 */}
      <UserContent className="gen-page-box">
        <div
          className="user-head"
          data-username={!!userData ? userData.nick_name : "--"}
        >
          <UserFace
            style={"user-head-con"}
            face={!!userData ? userData.face : ""}
          />
        </div>
        <div className="ms-userinfo">
          <div
            className="msg-userinfo-coin ms-userinfo-val"
            data-key="获得金币"
          >
            {!!recordData ? recordData.activity + "金币" : "--金币"}
          </div>
          <div
            className="msg-userinfo-person ms-userinfo-val"
            data-key="邀请成功人数"
          >
            {!!recordData ? recordData.activity + "人" : "--人"}
          </div>
        </div>
      </UserContent>
      {/* 获奖步骤 */}
      <AwardSteps className="gen-page-box">
        <div className="ms-image gen-box-title ms-steps-title"></div>
        <div className="ms-steps">
          <div
            className="ms-image ms-steps-icon step-1"
            data-step-msg="邀请好友注册"
          ></div>
          <div
            className="ms-image ms-steps-icon step-2"
            data-step-msg="好友领取红包"
          ></div>
          <div
            className="ms-image ms-steps-icon step-3"
            data-step-msg="你获得 0.26金币"
          ></div>
        </div>
        <button className="ms-steps-share-btn cur" onClick={_clickShare}>
          点击分享
        </button>
      </AwardSteps>
      {/* 赚钱秘籍 */}
      <MoneyMethod className="gen-page-box">
        <div className="ms-method">
          <div className="ms-image gen-box-title ms-method-title"></div>
          <ul className="ms-method-list">
            <li className="ms-method-li" data-method="1">
              <p className="ms-method-li-head">
                邀请好友注册成功并下载<i className="ms-image ms-app-icon"></i>
                火象APP，好友点击APP首页红包浮窗，立领微信现金红包。
              </p>
            </li>
            <li className="ms-method-li" data-method="2">
              <p className="ms-method-li-head">好友活跃度≥10。</p>
              <p className="ms-method-li-con">
                (活跃度可通过签到和参加获得积累coin每增加1次，活跃度+1）
              </p>
            </li>
            <li className="ms-method-li mb15" data-method="3">
              <p className="ms-method-li-head">
                满足以上2个条件，您获得推荐奖励0.26coin，请前去消息中心点击coin领取。
              </p>
            </li>
          </ul>
          <p className="ms-method-list-msg">
            1coin=6.5元，根据当日汇率等值提现至个人支付宝
          </p>
          <hr className="ms-method-hr" />
          <div className="ms-method-noaward">
            <p className="ms-method-noaward-title">
              邀请了好友，但您未领到coin奖励的原因可能有
            </p>
            <ul className="ms-method-noaward-list">
              <li className="ms-method-noaward-li">
                您邀请好友注册手机号与微信登录手机号不一致
              </li>
              <li className="ms-method-noaward-li">
                您邀请的好友微信未绑定银行卡
              </li>
              <li className="ms-method-noaward-li">
                您邀请的好友活跃度不满足要求
              </li>
            </ul>
          </div>
        </div>
      </MoneyMethod>
      {/* 邀请记录 */}
      <InviteRecord className="gen-page-box">
        <div className="ms-image gen-box-title ms-record-title"></div>
        <RecordListView
          isLogin={token.length > 11}
          list={!!recordData ? recordData.list : null}
        />
        {!!recordData && recordData.list.length !== 0 && (
          <Link className="ms-record-btn" to="/shareRecordList">
            查看等多
          </Link>
        )}
      </InviteRecord>
    </PageScreen>
  );
});
