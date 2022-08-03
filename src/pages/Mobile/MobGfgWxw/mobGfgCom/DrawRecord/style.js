import styled from "styled-components";

export const RecordView = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100vw - 2.4rem);
  height: 66.38vh;
  max-width: 46.8rem;
  max-height: 55rem;
  left: 50%;
  background: #1b1919;
  border: 0.1rem solid #831601;
  box-shadow: 0rem 0.1rem 1.5rem 0 rgba(217, 52, 20, 0.35);
  border-radius: 0.3rem;
  text-align: center;
  .close-btn-x {
    position: absolute;
    bottom:-6rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem;
  }
  .record-tit {
    position: relative;
    font-size: 2.1rem;
    color: #fde78e;
    padding-top: 3rem;
    display: inline-block;
    &::before,
    &::after {
      position: absolute;
      bottom: -0.6rem;
      left: -3.2rem;
      width: 3.1rem;
      height: 3.1rem;
      background-image: url(${require("/public/images/mobile/gfgWxw/gfg-sprite.png")});
      background-size: 37.5rem auto;
      background-repeat: no-repeat;
      background-position: -15.5rem 0;
      content: "";
    }
    &::after {
      right: -3.2rem;
      left: auto;
    }
  }
`;
export const RecordClose = styled.div`
  position: relative;
  width: 2.6rem;
  height: 2.6rem;
  border: 0.1rem solid #fff;
  border-radius: 50%;
  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 50%;
    border-left: .1rem solid #fff;
    content: "";
  }
  &::before {
    transform: translate(-50%,-50%) rotate(45deg);
  }
  &::after {
    transform: translate(-50%,-50%) rotate(-45deg);
  }
`;
export const RecordList = styled.div`
  position: relative;
  margin: 6rem 1.4rem 0;
  border-top: 0.1rem solid rgba(131, 22, 1, 0.8);
  &::before,
  &::after {
    position: absolute;
    top: -3.4rem;
    left: 1.6rem;
    font-size: 1.4rem;
    color: #d3d3d3;
    content: "时间";
  }
  &::after {
    right: 1.6rem;
    left: auto;
    content: "抽奖结果";
  }
  .record-con {
    max-height: 112vw;
    overflow-y: auto;
    margin-right: -1rem;
    padding-right: 1rem;
  }
  .record-li {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    line-height: 3.4;
    display: flex;
    justify-content: space-between;
    padding: 0 1.6rem;
  }
`;