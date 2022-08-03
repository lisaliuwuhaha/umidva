
import { useState, useEffect } from "react";
import { MaskView, PopView } from './style'

let _t = null;

//加载中弹窗和提示弹窗 
//例如  点击事件的弹窗,需要重复显示时,_time传入随机数即可 Math.random()
const MobHintPopUpView = ({
  text = "暂无数据", //弹窗内容
  type = "", //弹窗类型  'loading'
  _time = 0, // 显示弹窗条件
  color = '',
}) => {
  const [modal_v, setModal_v] = useState(false); //控制弹窗显示
  useEffect(() => {
    closePopView().then(() => {
      if (_time === 0 || _time === 200) return;
      _time > 0 && setModal_v(true);
      if (type === "loading") return;
      _t = setTimeout(() => {
        _time > 0 && setModal_v(false);
      }, 2000);
      return () => {
        clearTimeout(_t);
      }
    });
  }, [_time, type]);

  const closePopView = async () => {
    setModal_v(false);
    clearTimeout(_t);
  };

  return (
    <>
      {!!modal_v &&
        (type === "loading" ? (
          <MaskView color={color}>
            <PopView>
              <div className="loading-circle"></div>
              <p className="loading-t">加载中...</p>
            </PopView>
          </MaskView>
        ) : (
          <PopView className="show-a">{text}</PopView>
        ))}
    </>
  );
};

export default MobHintPopUpView;
