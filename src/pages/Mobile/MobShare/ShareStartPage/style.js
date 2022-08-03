import styled from "styled-components";

export const PageScreen = styled.div`
  position: relative;
  font-family: PingFang SC;
  line-height: 1;
  max-width: 100vw;
  min-height: 100vh;
  padding-bottom: 6rem;
  background-image: linear-gradient(
    to bottom,
    #ffe5ce 20%,
    #ffe5ce 40%,
    #ffe7d2 100%
  );
  /* --ms-image: url("//public/images/mobile/mobShare/mobazshare-bg.png"); */
  --ms-image: url(${require("/public/images/mobile/mobShare/mobazshare-bg.png")});
  .ms-image {
    background-image: var(--ms-image);
    background-repeat: no-repeat;
    background-size: 100vw auto;
  }
  .ms-header {
    width: 100vw;
    height: 113.33vw;
    background-position: 0 0;
  }
  .gen-page-box {
    position: relative;
    background: #fffff7;
    box-shadow: 0 0.1rem 1.9rem 0 rgba(255, 223, 210, 0.51);
    border-radius: 0.5rem;
    margin-top: 5rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  .gen-box-title {
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    height: 4rem;
  }
`;
export const UserContent = styled.div`
  margin-top: 3.4rem !important;
  border: 0.1rem solid rgba(255, 99, 44, 0.72);
  .user-head {
    position: absolute;
    top: -2.9rem;
    left: 50%;
    transform: translateX(-50%);
    width: 4.5rem;
    height: 4.5rem;
    background: #fa7f48;
    border: 0.1rem solid #ffdb9e;
    border-radius: 50%;
  }
  .user-head::after {
    position: absolute;
    top: 5.2rem;
    left: 50%;
    width: 20rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: #53423b;
    text-align: center;
    margin-left: -10rem;
    content: attr(data-username);
  }
  .user-head-con {
    width: 100%;
    height: 100%;
  }
  .ms-userinfo {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 5.6rem 5rem 3.6rem;
  }
  .ms-userinfo::after {
    position: absolute;
    bottom: 3.6rem;
    left: 50%;
    width: 0rem;
    height: 1.5rem;
    border-left: 0.1rem solid #ffe6d0;
    content: "";
  }
  .ms-userinfo-val {
    position: relative;
    font-size: 1.5rem;
    font-family: Adobe Heiti Std;
    font-weight: bold;
    color: #53423b;
  }
  .ms-userinfo-val::after {
    position: absolute;
    top: 2rem;
    left: 50%;
    margin-left: -5rem;
    width: 10rem;
    white-space: nowrap;
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
    color: #999999;
    content: attr(data-key);
  }
`;
export const AwardSteps = styled.div`
  text-align: center;
  .ms-steps-title {
    width: 24.8rem;
    background-position: 0 -45.4rem;
  }
  .ms-steps {
    display: flex;
    justify-content: space-between;
    padding: 4.8rem 3.6rem 5.3rem;
  }
  .ms-steps-icon {
    position: relative;
    width: 4.1rem;
    height: 4.1rem;
    background-repeat: no-repeat;
    text-align: center;
  }
  .ms-steps-icon::after {
    position: absolute;
    top: 5.1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 10rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: #493207;
    line-height: 1.2;
    content: attr(data-step-msg);
  }
  .step-1 {
    background-position: 0 -58.05rem;
  }
  .step-2 {
    background-position: -4.1rem -58.05rem;
  }
  .step-3 {
    background-position: -8.3rem -58.05rem;
  }
  .step-3::after {
    width: 6rem;
  }
  .ms-steps-share-btn {
    width: 26rem;
    line-height: 4.3rem;
    background-image: linear-gradient(to bottom, #ffe3b6, #f2b733);
    border-radius: 3rem;
    font-size: 1.6rem;
    color: #fff;
    text-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.15);
    letter-spacing: 0.1rem;
    margin-bottom: 2.9rem;
  }
`;
export const MoneyMethod = styled.div`
  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
  }
  &:before {
    left: 0;
    background-image: radial-gradient(
      circle at 0 75.5%,
      /* 这里的颜色不支持transparent, 只能写死成page的底色 */ #ffe3ce 0%,
      #ffe3ce 1rem,
      #fffff7 1rem,
      #fffff7 100%
    );
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  &:after {
    right: 0;
    background-image: radial-gradient(
      circle at 100% 75.5%,
      #ffe3ce 0%,
      #ffe3ce 1rem,
      #fffff7 1rem,
      #fffff7 100%
    );
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  .ms-method {
    position: relative;
    z-index: 2;
    padding-bottom: 2rem;
  }
  .ms-method-title {
    width: 18rem;
    background-position: 0 -49.4rem;
  }
  .ms-method-list {
    counter-reset: num;
    padding: 4.6rem 9.3rem 0 3.7rem;
  }
  .ms-method-li {
    position: relative;
    margin-bottom: 3rem;
  }
  .ms-method-li::before {
    position: absolute;
    top: 0.4rem;
    left: -1.5rem;
    font-size: 1.3rem;
    font-family: FZZhengHeiS-EB-GB;
    font-weight: 400;
    color: #ffaf76;
    content: counter(num) ".";
    counter-increment: num;
  }
  .mb15 {
    margin-bottom: 1.5rem;
  }
  .ms-method-li-head {
    line-height: 2rem;
    font-size: 1.3rem;
    font-weight: bold;
    color: #493207;
    margin-bottom: 0;
    text-align: justify;
  }
  .ms-method-li-con,
  .ms-method-list-msg {
    font-size: 1.1rem;
    font-weight: 500;
    color: #493207;
    line-height: 1.5rem;
    opacity: 0.75;
    margin-bottom: 0;
  }
  .ms-method-list-msg {
    text-align: center;
  }
  .ms-method-hr {
    border: 0;
    padding-top: 0.1rem;
    background: repeating-linear-gradient(
      to right,
      #d89f4c 0 0.4rem,
      transparent 0 calc(0.4rem + 0.6rem)
    );
    opacity: 0.9;
    margin: 1.8rem 2.3rem 1.3rem;
  }
  [data-method]::after {
    position: absolute;
    top: 0.5rem;
    background-image: var(--ms-image);
    background-repeat: no-repeat;
    background-size: 100vw auto;
    content: "";
  }
  [data-method="1"]::after {
    right: -6.8rem;
    width: 3.8rem;
    height: 3.8rem;
    background-position: -13.5rem -58rem;
  }
  [data-method="2"]::after {
    right: -7.6rem;
    width: 4.6rem;
    height: 4rem;
    background-position: -18rem -58rem;
  }
  [data-method="3"]::after {
    right: -7.3rem;
    width: 4.2rem;
    height: 3.9rem;
    background-position: -23.8rem -58rem;
  }
  .ms-method-noaward-title {
    width: 25.4rem;
    line-height: 2rem;
    background: #ffe7af;
    border-radius: 1rem;
    font-size: 1rem;
    font-weight: bold;
    color: #493207;
    text-align: center;
    margin: 0 auto 0.9rem;
  }
  .ms-method-noaward-list {
    font-size: 1.1rem;
    font-weight: 500;
    color: #493207;
    line-height: 1.5rem;
    margin-left: 7.4rem;
    opacity: 0.8;
  }
  .ms-method-noaward-li {
    position: relative;
  }
  .ms-method-noaward-li::before {
    position: absolute;
    top: 0.5rem;
    left: -1.1rem;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background-color: #eab864;
    content: "";
  }
  .ms-app-icon {
    width: 1.6rem;
    height: 1.6rem;
    background-position: 0 -62.7rem;
    transform: translateY(0.3rem);
    display: inline-block;
  }
`;
export const InviteRecord = styled.div`
  padding: 4.5rem 0 1rem;
  .ms-record-title {
    width: 21.8rem;
    background-position: 0 -53.4rem;
  }
  .ms-record-btn {
    position: relative;
    width: 6rem;
    line-height: 2;
    text-align: center;
    margin: 1rem auto 0;
    font-size: 1.2rem;
    color: #eb633d;
    display: block;
  }
  .ms-record-btn::after {
    position: absolute;
    top: 0;
    right: -0.2rem;
    transform: translateY(0.7rem) rotate(45deg);
    width: 0.7rem;
    height: 0.7rem;
    border-top: 0.1rem solid #eb633d;
    border-right: 0.1rem solid #eb633d;
    content: "";
  }
`;
export const RuleBtn = styled.div`
  position: fixed;
  top: 2.7rem;
  right: -0.3rem;
  width: 8.2rem;
  height: 2.6rem;
  line-height: 2.6rem;
  background-image: linear-gradient(to bottom, #fc9842, #eb633d);
  text-align: center;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  font-size: 1.4rem;
  color: #fff;
  z-index: 4;
`;
