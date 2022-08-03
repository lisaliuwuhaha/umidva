import React, { useEffect, useState, memo, useContext } from "react";
import {
  PageScreen,
  LotteryX,
  GenTitF,
  InviteX,
  InviteUl,
  InviteBtn,
  IntroduceX,
  GenTitT,
  RuleX,
} from "./style";
import LotteryView from "../mobGfgCom/Turntable";
import DrawRecord from "../mobGfgCom/DrawRecord";
import GfgPopupView from "../mobGfgCom/GfgPopupView";
import { Link } from "react-router-dom";
import { modalContext } from "@/utils/modalContext";

export default memo((route) => {
  const { token, getQueryString, showPagePopup } = useContext(modalContext);
  const [deg, setDeg] = useState(0); //转的角度
  const [r_visible, setR_visible] = useState(false); //是否显示 记录弹窗
  const [m_visible, setM_visible] = useState(false); //是否显示 提示弹窗
  const [precious, setPrecious] = useState(0); //剩余藏品数量
  const [recordList, setRecordList] = useState(null); //记录列表
  const [lotteryNum, setLotteryNum] = useState(1); //剩余抽奖次数
  const [lotteryRes, setLotteryRes] = useState(302); //弹窗类型   详情看GfgPopupView 弹窗组件

  // 显示登录提示
  const showLoginTip = () => {
    showPagePopup({
      text: '请先登录',
      type: "",
      _time: Math.random(),
    });
  }
  //处理剩余藏品
  const handleResidueNum = (num) => {
    num = Number(num);
    if (!num || num === 0)
      return (
        <>
          <span className="res-num">0</span>
          <span className="res-num">0</span>
          <span className="res-num">0</span>
        </>
      );
    if (num < 100 && num > 10) num = "0" + num;
    if (num < 10) num = "00" + num;
    let _num = String(num).split("");
    return _num.map((item, i) => (
      <span className="res-num" key={i}>
        {item}
      </span>
    ));
  };
  //点击邀请按钮
  const _clickInviteBtn = () => {
    console.log('立即邀请')
    if (!token) {
      showLoginTip()
      return
    }
  }
  //点击抽奖
  const _clickAward = () => {
    if (!token) {
      showLoginTip()
      return
    }
    if (lotteryNum === 0) {
      setLotteryRes(302);
      setTimeout(() => {
        setM_visible(true);
      }, 100);
      return
    }
    setDeg(1980);
    if (lotteryNum !== 0) setLotteryNum(lotteryNum - 1)
    setPrecious(parseInt(Math.random() * 100));
  };
  //点击查看抽奖记录
  const _clickRecord = () => {
    setR_visible(true);
  };
  //转盘停止转动时
  const _endTransition = () => {
    setLotteryRes(203);
    setTimeout(() => {
      setM_visible(true);
    }, 300);
  };
  //点击关闭抽奖结构提示弹窗
  const _closePopup = () => {
    setM_visible(false)
    setTimeout(() => {
      setDeg(0);
    }, 50);
  }
  return (
    <PageScreen>
      <div className="gfg-rule-btn gfg-img cur">
        <Link to={"/mobile/mobgwrule"}>规则详情</Link>
      </div>
      <div className="gfg-header">
        <div className="gfg-residue">
          藏品剩余{" "}
          <span className="gfg-residue-num">{handleResidueNum(precious)}</span>{" "}
          份
        </div>
      </div>
      {/* 转盘 */}
      <LotteryX>
        <div className="lottery-decorate"></div>
        <GenTitF className="" size={30}>
          幸运转盘
        </GenTitF>
        {/* 转盘 */}
        <LotteryView
          deg={deg} //旋转角度
          endTransition={_endTransition} //旋转动画结束时执行
          clickAward={_clickAward}   //点击抽奖
          l_num={lotteryNum}  //剩余抽奖次数
          showPagePopup={showPagePopup}  //弹窗
        />
        <div className="lottery-record-btn gfg-img cur" onClick={_clickRecord}>
          <span className="lottery-text">抽奖记录</span>
        </div>
      </LotteryX>
      {/* 邀请 */}
      <InviteX>
        <div>
          <div className="invite-decorate gfg-img i-left"></div>
          <div className="invite-decorate gfg-img"></div>
        </div>
        <GenTitF className="reverse" size={27}>
          大家都有奖
        </GenTitF>
        <p className="invite-subtit">
          需被邀请人领取现金红包 <br />1 秒到账后双方各获1次抽奖机会
        </p>
        <InviteUl>
          <li className="i-ul-item gfg-img">
            <div className="i-ul-item-icon-1 gfg-img"></div>
          </li>
          <li className="i-arrows-icon gfg-img"></li>
          <li className="i-ul-item gfg-img">
            <div className="i-ul-item-icon-2 gfg-img"></div>
          </li>
          <li className="i-arrows-icon gfg-img"></li>
          <li className="i-ul-item gfg-img">
            <div className="i-ul-item-icon-3 gfg-img"></div>
          </li>
        </InviteUl>
        <div className="invite-msg">
          <span className="invite-msg-text">邀请好友注册</span>
          <span className="invite-msg-text">好友领红包</span>
          <span className="invite-msg-text">双方获抽奖机会</span>
        </div>
        <InviteBtn className="gfg-img cur" onClick={_clickInviteBtn}>立即邀请</InviteBtn>
        <div>
          <p className="invite-f-tit">
            <i className="iconfont invite-iconfont">&#xe606;</i> 隐藏福利
          </p>
          <p className="invite-f-text">
            若您的好友活跃度≥10，您将额外获得0.26金币。活跃度可通过签到，完成任务等增加；金币每增加1次，活跃度+1。
          </p>
        </div>
      </InviteX>
      {/* 藏品介绍 */}
      <IntroduceX>
        <GenTitT>
          <p className="gen-head-tit">
            藏品介绍
            <i className="gen-iconfont iconfont">&#xe608;</i>
          </p>
          <i className="introduce-head-icon gen-icon gfg-img"></i>
        </GenTitT>
        <p className="intr-text-1">
          数字作品名称:《狗富贵》;《吾象旺》。 <br />
          发行数量:《狗富贵》200份;《吾象旺》200份。
        </p>
        <p className="intr-text-2">
          艺术作品背景: 原出自《史记卷四十八》原文“苟富贵，勿相忘”。译为:
          如果有一天富贵了，不要忘记大家。
        </p>
        <div className="intr-text-3 gfg-img">
          <div className="intr-text-3-con">
            火象星球是一个掘金星球，所有火象居民均可在火象星球上通过学习知识、实践、成长，并挖掘个人财富。狗富贵和吾象旺都是来自火象星球的探路者，他们在火象星球上学习了足够的本事，现在前往地球为结识更多的地球朋友，一起开辟一个崭新的金融世界。他们将在地球上书写他们的传奇故事...
          </div>
        </div>
        <div className="intr-g-user-x">
          <i className="intr-g-user-bg gfg-img"></i>
          <div className="intr-g-user-con">
            <div className="intr-user-g-info ">
              <i className="intr-user-h"></i>
              <p className="intr-user-n">狗富贵</p>
            </div>
            大家好，我是狗富贵，我和我的好兄弟吾象旺来自火象星球，来到地球想结识一帮志同道合的好友，相互学习，让我们一起努力实现财富自由。
          </div>
        </div>
        <div className="intr-g-user-x" style={{ marginTop: 0 }}>
          <i className="intr-g-user-bg gfg-img res"></i>
          <div className="intr-g-user-con res">
            大家好，我是吾象旺，我和狗富贵来自火象星球，常言“苟富贵，勿相忘”，我相信我强大了能带领我的朋友富裕起来，是兄弟就一起富裕。
            <div className="intr-user-g-info res">
              <i className="intr-user-h res"></i>
              <p className="intr-user-n">吾象旺</p>
            </div>
          </div>
        </div>
      </IntroduceX>
      {/* 抽奖规则 */}
      <RuleX>
        <GenTitT>
          <p className="gen-head-tit">
            抽奖规则
            <i className="gen-iconfont iconfont">&#xe608;</i>
          </p>
          <i className="rule-head-icon gen-icon gfg-img"></i>
        </GenTitT>
        <ul className="rule-step-list">
          <li className="rule-step-li">专属链接邀请好友</li>
          <li className="rule-step-li">好友成功注册并下载火象app</li>
          <li className="rule-step-li">
            好友在本活动页面点击“红包浮框”成功领取现金 <br /> 红包
          </li>
          <li className="rule-step-li">你和好友各获得1次抽奖机会</li>
        </ul>
        <ul className="rule-msg-ul">
          <li className="rule-msg-li">
            通过您得专属连接邀请好友注册成功，每邀请1位好友成功注册火象交易，双方各获得1次抽奖机会。
          </li>
          <li className="rule-msg-li">
            拥有抽奖机会点击转动转盘，转盘停止，指针停止区域标注的奖品为获奖奖品。
          </li>
          <li className="rule-msg-li">
            获得藏品后，官方将藏品证书发放至“我的证书”-“我的藏品”中，数字藏品不可交易。
          </li>
          <li className="rule-msg-li">
            收藏者享有此数字藏品的使用权，收藏者不可将数字藏品用于任何商业用途，本数字藏品版权归火象官方所有。
          </li>
          <li className="rule-msg-li">
            活动时间：2022年x月x日起，藏品抽完为止，先到先抽先得。
          </li>
        </ul>
      </RuleX>
      {/* 记录弹窗 */}
      <DrawRecord
        recordList={recordList}
        visible={r_visible}
        onClose={() => setR_visible(false)}
      />
      {/* 抽奖提示弹窗 */}
      <GfgPopupView
        visible={m_visible}
        onClose={_closePopup}
        type={lotteryRes}
      />
      {/* 其他提示弹窗 */}
    </PageScreen>
  );
});
