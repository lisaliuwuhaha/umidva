import React, { useEffect, useState, memo, } from "react";
import {
  LotteryView, TurntableOpt,
  LotteryBtn, TurntableItem
} from "./style";
import classNames from "classnames";

export default memo(({ deg = 0, endTransition = null, clickAward, l_num, showPagePopup }) => {

  const [t_deg, setT_deg] = useState(0) //旋转角度
  const [isAnimation, setIsAnimation] = useState(false)  //是否启动动画效果

  useEffect(() => {
    if (deg === 0) return setT_deg(0)
    setIsAnimation(true)
  }, [deg])
  useEffect(() => {
    if (isAnimation) setT_deg(deg)
  }, [isAnimation])
  //转盘结束滚动时
  const endTranFun = () => {
    setIsAnimation(false) //在抽奖结束后关闭动画效果并重置
    if (endTransition) endTransition()
  }
  //点击抽奖
  const _clickAwardBtn = () => {
    //如果正在运行
    if (isAnimation && !!showPagePopup) {
      showPagePopup({
        text: '请稍等',
        type: "",
        _time: Math.random(),
      })
      return
    }
    if (!!clickAward) clickAward()
  }
  return (
    <>
      <LotteryView>
        <hr className="r-line" />
        <hr className="r-line" data-i="1" />
        <hr className="r-line" data-i="2" />
        {/* 指针 */}
        <TurntableOpt>
          <div
            className={classNames({
              "rotate-x": true,
              "animation": isAnimation
            })}
            style={{ transform: `rotate(${t_deg + 30}deg)` }}
          >
            <div className="sector"></div>
          </div>
          <div
            onTransitionEnd={endTranFun}
            className={classNames({
              "pointer-icon": true,
              "animation": isAnimation
            })}
            style={{ transform: `rotate(${t_deg}deg)` }}
          ></div>
        </TurntableOpt>
        {/* 每一项 六项 */}
        <div className="turn-group-x">
          <TurntableItem data-turn-i="1">
            <div className="item-icon puzzle-icon gfg-img"></div>
            <span>
              藏品 <br />
              《狗富贵》
            </span>
          </TurntableItem>
          <TurntableItem data-turn-i="2">
            <div className="item-icon gold-icon gfg-img"></div>
            <span>0.05金币</span>
          </TurntableItem>
          <TurntableItem data-turn-i="3">
            <div className="item-icon  face-icon gfg-img"></div>
            <span>感谢参与</span>
          </TurntableItem>
        </div>
        <div className="turn-group-x">
          <TurntableItem data-turn-i="4">
            <div className="item-icon face-icon gfg-img"></div>
            <span>感谢参与</span>
          </TurntableItem>
          <TurntableItem data-turn-i="5">
            <div className="item-icon gold-icon gfg-img"></div>
            <span>0.05金币</span>
          </TurntableItem>
          <TurntableItem data-turn-i="6">
            <div className="item-icon puzzle-icon gfg-img"></div>
            <span>
              藏品 <br />
              《狗富贵》
            </span>
          </TurntableItem>
        </div>
      </LotteryView>
      <LotteryBtn className="gfg-img cur" onClick={_clickAwardBtn}>
        <span>立即抽奖 × {l_num}</span>
        <span className="lottery-msg">
          运气再烂也不怕！每20抽必中一个藏品
        </span>
      </LotteryBtn>
    </>
  );

});
