import styled from "styled-components";

export const PageScreen = styled.div`
  position: relative;
  font-family: PingFang SC;
  line-height: 1;
  max-width: 100vw;
  min-height: 100vh;
  padding: 5rem 0 8.5rem;
  overflow: hidden;
  border: 0;
  margin: 0 auto;
  background-color: #111111;
  z-index: 0;
  --page-bg: url(${require("/public/images/mobile/gfgWxw/page-bg.png")});
  --page-sprite: url(${require("/public/images/mobile/gfgWxw/gfg-sprite.png")});
  --c255: rgba(255, 255, 255, 0.85);
  .gfg-img {
    background-image: var(--page-sprite);
    background-repeat: no-repeat;
    background-size: 37.5rem auto;
  }
  &::before {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 102.6rem;
    background: var(--page-bg) 0 0 / 100vw auto no-repeat;
    content: "";
    z-index: -1;
  }
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 29.4rem;
    background: var(--page-bg) bottom left / 100vw auto no-repeat;
    content: "";
    z-index: -1;
  }
  .gfg-rule-btn {
    position: absolute;
    top: 2.1rem;
    right: 1rem;
    width: 7.1rem;
    line-height: 2.7rem;
    background-position: -20.1rem 0.2rem;
    text-align: center;
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--c255);
  }
  .gfg-header {
    position: relative;
    height: 42.8rem;
    background: url(${require("/public/images/mobile/gfgWxw/gfg-header.png")})
      0 0 / 100% 100% no-repeat;
    margin-bottom: 3.8rem;
  }
  .gfg-residue {
    position: absolute;
    top: 8.5rem;
    right: 1.9rem;
    width: 18.3rem;
    line-height: 2.7rem;
    background: rgba(57, 41, 41, 0.59);
    border: 0.1rem solid #973a28;
    font-size: 1.7rem;
    font-weight: bold;
    color: #d93414;
    padding-left: 1.3rem;
  }
  .res-num {
    position: relative;
    width: 2.3rem;
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff;
    line-height: 2.9rem;
    background-color: #d93414;
    text-align: center;
    display: inline-block;
  }
  .res-num:not(:first-child)::before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-left: 0.1rem solid rgba(138, 28, 7, 0.5);
    content: "";
  }
`;
export const GenX = styled.div`
  position: relative;
  margin: 6.3rem 1.2rem 0;
  box-shadow: 0rem 0.1rem 1.5rem 0rem rgba(217, 52, 20, 0.35);
  border: 0.1rem solid #831601;
  background: #1b1919;
  text-align: center;
`;
export const GenTitF = styled.p`
  position: relative;
  font-size: ${(props) => props.size / 10 + "rem"};
  font-weight: bold;
  color: #fde78e;
  display: inline-block;
  z-index: 0;
  &::before,
  &::after {
    position: absolute;
    background-image: var(--page-sprite);
    background-size: 100vw auto;
    background-repeat: no-repeat;
    content: "";
    z-index: -1;
  }
  &::before {
    top: -1.2rem;
    left: -4rem;
    width: 5.9rem;
    height: 4.9rem;
    background-position: 0 0;
  }
  &::after {
    top: -1rem;
    right: -2.5rem;
    width: 3.1rem;
    height: 3.1rem;
    background-position: -15.5rem 0;
  }
  &.reverse::after {
    top: -1.2rem;
    right: -4rem;
    width: 5.9rem;
    height: 4.9rem;
    background-position: 0 0;
    transform: scaleX(-1);
  }
  &.reverse::before {
    top: -1rem;
    left: -2.5rem;
    width: 3.1rem;
    height: 3.1rem;
    background-position: -15.5rem 0;
    transform: scaleX(-1);
  }
`;
export const LotteryX = styled(GenX)`
  padding: 4rem 0 7.6rem;
  .lottery-decorate {
    position: absolute;
    top: -1.9rem;
    left: -1.2rem;
    width: 100vw;
    line-height: 1.9rem;
    background-color: #831601;
  }
  .lottery-decorate::after {
    width: 35.4rem;
    height: 0.9rem;
    background: var(--page-sprite) 0 -4.8rem / 37.5rem auto no-repeat;
    display: inline-block;
    vertical-align: middle;
    content: "";
  }
  .lottery-record-btn {
    position: absolute;
    bottom: -0.1rem;
    right: -0.2rem;
    padding: 0.8rem;
    background-position: -18.1rem -5.45rem;
    font-size: 1.1rem;
    font-weight: bold;
    color: var(--c255);
    writing-mode: vertical-rl;
    letter-spacing: 0.1rem;
    z-index: 2;
  }
  .lottery-text {
    position: relative;
    top: 0.2rem;
  }
`;


export const InviteX = styled(GenX)`
  padding: 3.3rem 0 4rem;
  .invite-decorate {
    position: absolute;
    top: -10.1rem;
    right: -1.4rem;
    width: 10.1rem;
    height: 20.1rem;
    background-position: 0 -18.2rem;
  }
  .invite-decorate.i-left {
    left: -1.4rem;
    transform: scaleX(-1);
  }
  .invite-subtit {
    font-size: 1.3rem;
    color: var(--c255);
    line-height: 2rem;
    margin: 1.4rem 0 2.8rem;
  }
  .invite-msg {
    font-size: 1.3rem;
    color: var(--c255);
    line-height: 11px;
    text-align: justify;
    display: flex;
    justify-content: space-between;
    padding: 0 1.2rem;
  }
  .invite-msg-text {
    text-shadow: 0 0 0.7rem #d32f10;
  }
  .invite-msg-text:nth-child(2) {
    margin-left: 1.5rem;
  }
  .invite-f-tit,
  .invite-f-text {
    padding: 0 1.4rem;
  }
  .invite-f-tit {
    font-size: 1.8rem;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 0.95rem;
    text-align: left;
  }
  .invite-f-text {
    font-size: 1.3rem;
    color: #d3d3d3;
    line-height: 2rem;
    text-align: justify;
  }
  .invite-iconfont {
    position: relative;
    top: -0.2rem;
    font-size: 1.2rem;
  }
`;
export const InviteUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  margin-bottom: 1.6rem;
  .i-ul-item {
    width: 5.6rem;
    height: 5.6rem;
    background-position: -10.15rem -18.15rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .i-ul-item-icon-1 {
    width: 3rem;
    height: 2.5rem;
    background-position: -17.35rem -18.17rem;
  }
  .i-ul-item-icon-2 {
    width: 2.6rem;
    height: 2.8rem;
    background-position: -24.4rem -18.15rem;
  }
  .i-ul-item-icon-3 {
    width: 2.4rem;
    height: 2.4rem;
    background-position: -28.1rem -18.15rem;
  }
  .i-arrows-icon {
    width: 2.3rem;
    height: 2.5rem;
    background-position: -21.7rem -18.19rem;
  }
`;
export const InviteBtn = styled.button`
  position: relative;
  width: 26rem;
  height: 4.6rem;
  margin: 6.8rem auto 6.1rem;
  display: block;
  background-position: -10.15rem -23.8rem;
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  &::after {
    position: absolute;
    bottom: -4.1rem;
    left: 50%;
    width: 32.4rem;
    margin-left: -16.2rem;
    border-bottom: 0.1rem solid rgba(131, 22, 1, 0.8);
    content: "";
  }
`;
export const GenTitT = styled.div`
  position: relative;
  border-bottom: 0.1rem solid rgba(217, 52, 20, 0.7);
  line-height: 5.2rem;
  font-size: 24px;
  font-weight: bold;
  color: #d93414;
  padding-left: 1.3rem;
  margin-bottom: 2.6rem;
  .gen-head-tit {
    position: relative;
    display: inline-block;
  }
  .gen-iconfont {
    position: absolute;
    top: 0.8rem;
    right: -2.5rem;
    font-size: 0.9rem;
    line-height: 1;
  }
  .gen-icon {
    position: absolute;
    top: 0.9rem;
    right: 1.3rem;
    width: 2.9rem;
    height: 2.9rem;
    display: block;
  }
`;
export const IntroduceX = styled(GenX)`
  padding-bottom: 5rem;
  text-align: justify;
  .introduce-head-icon {
    background-position: -22rem -5.8rem;
  }
  .intr-text-1 {
    font-size: 1.4rem;
    color: #d3d3d3;
    line-height: 2.3rem;
    padding: 0 3.1rem 2rem 1.4rem;
  }
  .intr-text-2 {
    font-size: 1.3rem;
    color: #9e9e9e;
    line-height: 2.2rem;
    padding: 0 1rem 2rem 1.4rem;
  }
  .intr-text-3 {
    width: 31.1rem;
    height: 22.9rem;
    background-position: 0 -38.2rem;
    font-size: 1.3rem;
    color: #9e9e9e;
    line-height: 2.2rem;
  }
  .intr-text-3-con {
    padding: 2.8rem 1.6rem 0 1.4rem;
  }
  .intr-g-user-x {
    position: relative;
    height: 13.7rem;
    margin-top: -2.7rem;
    z-index: 0;
  }
  .intr-g-user-con {
    padding-top: 4.1rem;
    padding-right: 1.4rem;
    font-size: 1.3rem;
    color: #9e9e9e;
    line-height: 2.2rem;
    display: flex;
    align-items: center;
  }
  .intr-g-user-con.res {
    padding-left: 1.3rem;
    padding-right: 0;
  }
  .intr-g-user-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-position: 0 -61.3rem;
    z-index: -1;
  }
  .intr-g-user-bg.res {
    transform: scaleX(-1);
  }
  .intr-user-g-info {
    position: relative;
    height: 100%;
    padding-left: 1.4rem;
    margin-right: 2.6rem;
  }
  .intr-user-g-info::before {
    position: absolute;
    bottom: -0.6rem;
    left: -0.1rem;
    height: 10.9rem;
    border-left: 0.2rem solid #d93414;
    content: "";
  }
  .intr-user-g-info.res::before {
    right: -0.1rem;
    left: auto;
  }
  .intr-user-g-info.res {
    margin: 0 0 0 2.6rem;
    padding-left: 0;
    padding-right: 1.4rem;
  }
  .intr-user-h {
    width: 6rem;
    height: 6rem;
    background: url(${require("/public/images/mobile/gfgWxw/dog-h.png")}) 0 0 /
      100% 100% no-repeat;
    display: block;
  }
  .intr-user-h.res {
    background: url(${require("/public/images/mobile/gfgWxw/elephant-h.png")})
      0 0 / 100% 100% no-repeat;
  }
  .intr-user-n {
    width: 5.4rem;
    line-height: 2rem;
    background: #000000;
    text-align: center;
    font-size: 1.3rem;
    color: #ffffff;
    margin: 1rem auto 0;
  }
`;
export const RuleX = styled(GenX)`
  text-align: left;
  padding-bottom: 2.3rem;
  .rule-head-icon {
    background-position: -25.25rem -5.8rem;
  }
  .rule-step-list {
    position: relative;
    z-index: 0;
  }
  .rule-step-list::before {
    position: absolute;
    top: 1.1rem;
    left: 1.7rem;
    width: 0;
    height: 11.5rem;
    border-left: 0.1rem solid var(--c255);
    content: "";
    z-index: -1;
  }
  .rule-step-li {
    position: relative;
    font-size: 1.4rem;
    color: var(--c255);
    line-height: 2rem;
    margin-bottom: 1.2rem;
    padding-left: 3.4rem;
  }
  .rule-step-li::before {
    position: absolute;
    top: 50%;
    left: 1.3rem;
    width: 0.9rem;
    height: 0.9rem;
    margin-top: -0.45rem;
    background-color: #1b1919;
    border-radius: 50%;
    border: 0.1rem solid var(--c255);
    content: "";
  }
  .rule-step-li::after {
    position: absolute;
    top: 50%;
    left: 1.6rem;
    width: 0.3rem;
    height: 0.3rem;
    margin-top: -0.15rem;
    background-color: var(--c255);
    border-radius: 50%;
    content: "";
  }
  .rule-msg-ul {
    padding: 0 1.3rem 0 3.1rem;
  }
  .rule-msg-li {
    position: relative;
    font-size: 1.3rem;
    color: #9e9e9e;
    line-height: 2.2rem;
    margin-bottom: 1rem;
  }
  .rule-msg-li::before {
    position: absolute;
    top: 1rem;
    left: -1.3rem;
    width: 0.4rem;
    height: 0.4rem;
    background-color: #9e9e9e;
    border-radius: 50%;
    content: "";
  }
`;
