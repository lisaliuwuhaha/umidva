import { useState, useEffect } from "react";

//倒计时组件
export default ({
  time = 60,
  startStr = "发送验证码",
  endStr = "重新发送",
  onClick = null, //需要返回值 true,false 来判断是否执行定时器
}) => {
  const [timerStr, setTimerStr] = useState(startStr);
  let _t = null;

  //点击发送验证码或其他操作,并开始倒计时
  const _clickDown = () => {
    if (timerStr !== endStr && timerStr !== startStr) {
      return;
    }
    if (onClick) {
      let isContinue = onClick();
      if (!isContinue) return;
    }
    setTimerStr(time + " 秒");
    _t = setInterval(() => {
      if (time === 1) {
        clearInterval(_t);
        setTimerStr(endStr);
        return;
      }
      setTimerStr(--time + " 秒");
    }, 1000);
  };

  return (
    <span className="cur" onClick={_clickDown}>
      {!timerStr ? startStr : timerStr}
    </span>
  );
};
