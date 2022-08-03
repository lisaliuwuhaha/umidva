import styled from "styled-components";

export const GfgPopupView = styled.div`
  position: absolute;
  top: 37%;
  left: 50%;
  margin: -14.15rem -13rem;
  width: 26rem;
  height: 29.3rem;
  background: url(${require("/public/images/mobile/gfgWxw/pop-bg.png")}) 0 0 /
    100% 100% no-repeat;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
  justify-content: flex-end;
  .popup-tit {
    font-size: 2rem;
    font-weight: 500;
    color: #ffdc91;
  }
  .popup-text,
  .popup-text-2 {
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 2.4rem;
    margin: 3.2rem 0 3.6rem;
  }
  .popup-text-2.popup-text-2 {
    margin: 0 0 5rem;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 3rem;
  }
  .popup-tit-3 {
    font-size: 2rem;
    font-weight: 500;
    color: #ffdc91;
  }
  .popup-text-3 {
    font-size: 1.8rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
    margin: 5.1rem 0 4.5rem;
  }
`;
export const GfgPrePopupView = styled.div`
  position: absolute;
  top: 37%;
  left: 50%;
  margin: -15.5rem -14rem;
  width: 28rem;
  height: 31rem;
  border-radius: 1rem;
  background: url(${require("/public/images/mobile/gfgWxw/precious-pop-bg.png")})
    0 0 / 100% 100% no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: end;
  justify-content: flex-end;
  .popup-head {
    position: absolute;
    top: -0.8rem;
    right: 2.1rem;
    width: 10.9rem;
    height: 10.8rem;
    border-radius: 0.8rem;
    background-color: #fff;
    background-position: 0 0;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  [data-type="202"] {
    background-image: url(${require("/public/images/mobile/gfgWxw/gfg-pop-h-d.png")});
  }
  [data-type="203"] {
    background-image: url(${require("/public/images/mobile/gfgWxw/gfg-pop-h-e.png")});
  }
  .popup-succ-tit {
    font-size: 2rem;
    font-weight: 500;
    color: #ffdc91;
    line-height: 3rem;
    padding-left: 3.1rem;
  }
  .popup-succ-text {
    font-size: 1.3rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
    line-height: 2rem;
    padding: 0 3.1rem;
    margin: 3.9rem 0 3rem;
  }
`;
export const CloseBtn = styled.div`
  position: relative;
  width: 18rem;
  line-height: 4.8rem;
  background: #a21d03;
  border-radius: 2.4rem;
  font-size: 1.8rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 auto 5.1rem;
  &.succ.succ {
    width: 20rem;
    text-align: center;
    margin: 0 auto 3.4rem;
  }
  &.msg {
    width: 19rem;
  }
  &.msg::after {
    position: absolute;
    bottom: -2.3rem;
    left: 0;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 400;
    color: #f33c18;
    line-height: 1;
    content: "请前往金币中心领取";
  }
`;
export const PopCloseBtn = styled.div`
  position: absolute;
  bottom: -6rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  .btn-con {
    position: relative;
    width: 2.6rem;
    height: 2.6rem;
    border: 0.1rem solid rgba(255,255,255,.8);
    border-radius: 50%;
  }
  .btn-con::before,
  .btn-con::after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 50%;
    border-left: 0.1rem solid rgba(255,255,255,.8);
    content: "";
  }
  .btn-con::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  .btn-con::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;
