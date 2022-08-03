import React, { useEffect, useState, memo } from "react";
import styled from "styled-components";
const GfgRule = styled.div`
  font-family: Source Han Sans CN-Normal, Source Han Sans CN;
  min-height: 100vh;
  max-width: 100vw;
  padding: 3.5rem 1.5rem 4rem;
  box-sizing: border-box;
  line-height: 2.2rem;
  text-align: center;
  letter-spacing: 0.1rem;
  .page-tit {
    position: relative;
    font-size: 1.6rem;
    font-family: PingFang SC-Heavy, PingFang SC;
    font-weight: 800;
    color: #030303;
    margin-bottom: 2.4rem;
    display: inline-block;
    &::before,
    &::after {
      position: absolute;
      top: 50%;
      left: -9.2rem;
      width: 7.7rem;
      height: 0.1rem;
      background: linear-gradient(270deg, #c5c5c5 0%, #ffffff 100%);
      opacity: 1;
      content: "";
    }
    &::after {
      left: auto;
      right: -9.2rem;
      background: linear-gradient(270deg, #ffffff 0%, #c5c5c5 100%);
    }
  }
`;
const GfgTxt = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  color: #030303;
  margin-bottom: 1.8rem;
  text-align: justify;
  .txt-tit {
    font-weight: bold;
  }
`;
export default memo(() => {
  return (
    <GfgRule>
      <p className="page-tit">规则详情</p>
      <GfgTxt>
        <span className="txt-tit">1.活动时间：</span> <br />
        2022年x月x日至藏品抽完为止。
      </GfgTxt>
      <GfgTxt>
        <span className="txt-tit">2.如何分享给好友?</span> <br />
        使用专属分享链接或二维码海报推荐好友注册后下载火象交易App。 <br />
        专属连接邀请好友——好友成功注册并下载火象app——好友在本活动页面点击”红包浮框”成功领取现金红包——你和你的好友各获得1次抽奖机会。
      </GfgTxt>
      <GfgTxt>
        <span className="txt-tit">3.邀请人和被邀请人的奖励</span> <br />
        a.被邀请人：领取微信现金红包，立即到账个人微信零钱中。并获得一次抽奖机会。
        <br />
        b.邀请人奖励：好友成功领取微信红包后，获得一次抽奖机会。
      </GfgTxt>
      <GfgTxt>
        <span className="txt-tit">4.如何领取奖励?</span> <br />
        a.被邀请人：领取微信现金红包，通过好友分享连接注册火象交易——进入火象交易本次活动页面——点击页面”红包“浮框——进入微信小程序领取红包—红包到账——获得现金红包同时获得1次抽数字藏品得机会。
        <br />
        b.邀请人奖励：好友成功领取微信红包后，获得一次抽奖机会。
      </GfgTxt>
      <GfgTxt>
        <span className="txt-tit">5.特别说明</span> <br />
        ·邀请的好友注册手机号需要与微信登陆手机号一致，否则会无法领取现金红包。
        <br />
        ·邀请的好友必须通过您得专属邀请连接注册后下载APP，点击本次活动页面的红包浮框按钮进入小程序成功领取现金红包，您获得数字藏品抽奖机会。
        <br />
        ·邀请的好友微信号需是实名微信号，否则根据微信官方规定无法成功领取红包。
        <br />
        ·对于以任何不正当方式参与活动的用户，包括但不限于侵犯第三人合法权益、作弊、扰乱系统、实施网络攻击、个人批量注册、用机器注册账户、用机器模拟客户端、网赚、任务墙等，官方有权取消其参与资格和获得各种奖励的资格，对于非法所得保留将各种奖励扣回的权利。官方有权对违反以上规则的账号获得的奖励进行永久限制和禁止提现。
        <br />
        ·活动期间，如出现其他不可抗的情况（包括但不限于重大灾害事件，黑客攻击，活动受到相关部门调整）火象交易官方可依相关法律法规的规定主张免责。
        <br />
        ·如有其他未尽事宜，可通过在线客服联系我们进行咨询。
        <br />
        ·本活动最终解释权归火象交易官方所有。如在活动中发现作弊或其他违规行为，我们将视情况取消参与资格或采取法律手段追究。
      </GfgTxt>
    </GfgRule>
  );
});
