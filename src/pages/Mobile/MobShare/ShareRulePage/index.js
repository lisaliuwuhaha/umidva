import React, { memo, useEffect } from "react";
import { PageScreen } from "./style";

export default memo(function ShareRulePage() {
  return (
    <PageScreen>
      <h1 className="mr-title">活动规则</h1>
      <p className="mr-p">
        1、活动时间:2022 年 1 月 1 日 至 2022 年 6 月 30 日
      </p>
      <div className="mr-p">
        2、如何分享给好友：
        <p className="text-indent">
          任何注册用户均可在火象交易App参加推荐有奖活动，使用专属分享链接或二维码海报推荐好友注册下载火象交易App。好友通过注册页面完成注册并成功下载App后，点击我的—邀请有奖—红包浮窗进入微信小程序，领取微信现金红包。
        </p>
      </div>
      <div className="mr-p">
        3、邀请人和被邀请人的奖励：
        <p className="text-indent">
          ① 被邀请人:可领取微信现金红包，立即到账个人微信零钱中。
        </p>
        <p className="text-indent">
          ②
          邀请人奖励:好友成功领取微信红包后并满足活跃度≥10，可获得0.26金币奖励。
        </p>
      </div>
      <div className="mr-p">
        4、如何领取奖励：
        <p className="text-indent">
          现金红包:好友注册成功下载火象交易交易App，点击我的—邀请有奖—红包浮窗进入微信小程序取现金红包。
        </p>
        <p className="text-indent">
          金币:你的好友成功注册并下载火象交易App，领取到微信现金后并满足活跃度≥10，你的金币奖励将在24小时到账。请前往App首页点击右上角金币图标领取。
        </p>
        <p className="text-indent">
          活跃度说明:参加签到，参加活动，参加模拟大赛，完成每日任务都可以增加活跃度。每成功领取1次金币，活跃度+1。
        </p>
      </div>
      <div className="mr-p">
        5、特别说明：
        <p className="text-indent">
          ① 请的好友注册手机号需要与微信登陆手机号一致，否则会无法领取现金红包。
        </p>
        <p className="text-indent">
          ②
          邀请的好友必须通过下载App后点击我的—邀请有奖—红包浮窗进入微信小程序领取现金红包，否则你的推荐奖励将无法被通过提现。
        </p>
        <p className="text-indent">
          ③ 根据微信官方规定，邀请的好友微信需要实名认证，否则无法成功领取红包。
        </p>
        <p className="text-indent">
          ④
          对于以任何不正当方式参与活动的用户，包括但不限于侵犯第三人合法权益、作弊、扰乱系统、实施网络攻击、个人批量注册、用机器注册账户、用机器模拟客户端、网赚、任务墙等，官方有权取消其参与资格和获得各种奖励的资格，对于非法所得保留将各种奖励扣回的权利。官方有权对违反以上规则的账号获得的奖励进行永久限制和禁止提现。
        </p>
        <p className="text-indent">
          ⑤
          活动期间，如出现其他不可抗的情况(包括但不限干重大灾害事件，黑客攻击，活动受到相关部门调整)火象交易官方可依相关法律法规主张免责。
        </p>
        <p className="text-indent">
          ⑥ 如有其它未尽事宜，可通过在线客服联系官方进行咨询。
        </p>
        <p className="text-indent">
          ⑦
          本活动最终解释权归火象交易官方所有。如在活动中发现作弊或其他违规行为，我们将视情况取消参与资格或采取法律手段追究。
        </p>
      </div>
    </PageScreen>
  );
});
