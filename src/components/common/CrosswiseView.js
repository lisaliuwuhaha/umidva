import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import styled from "styled-components";

const CrosswiseView = styled.div`
  transition: all 0.7s;
  opacity: 0;
  white-space: nowrap;
  &.left {
    transform: translateX(calc(-100% / 1.6));
  }
  &.right {
    transform: translateX(calc(100% / 1.6));
  }
  &.show {
    transform: translateX(0);
    opacity: 1;
  }
`;

//横向滚动动画组件  direction滑动方向 0 left , 1 right
export default ({ context = "", direction = 0 }) => {
  const _div = useRef(null);
  const [isBegin, setIsBegin] = useState(false);
  const show = () => {
    let height = window.innerHeight; //页面高度
    let _offsetTop = _div.current.offsetTop; //距离有相对定位的父元素的高度
    let htmlTop = document.documentElement.scrollTop; //页面的滚动距离
    //相减的结果就是元素当前距离页面顶部的距离
    let abs = Math.abs(htmlTop - _offsetTop);
    if (abs < height / 2) setIsBegin(true);
  };
  useEffect(() => {
    if (isBegin) return;
    window.addEventListener("scroll", show);
    return () => {
      window.removeEventListener("scroll", show);
    };
  }, []);
  return (
    <div ref={_div}>
      <CrosswiseView
        className={classNames({
          show: isBegin,
          left: !direction,
          right: direction,
        })}
      >
        {context}
      </CrosswiseView>
    </div>
  );
};
