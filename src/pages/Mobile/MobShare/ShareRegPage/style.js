import styled from "styled-components";

export const PageScreen = styled.div`
  position: relative;
  font-family: PingFang SC;
  line-height: 1;
  max-width: 100vw;
  min-height: 100vh;
  background-color: #ffe4ce;
  padding-bottom: 6.5rem;
  .header-img {
    height: 113.87vw;
    display: block;
  }
`;
export const RegForm = styled.div`
  margin: 1rem 1.8rem 4.7rem;
  padding: 4.1rem 1.3rem 2.8rem;
  background: #fffff7;
  box-shadow: 0 0.1rem 1.9rem 0 rgba(255, 223, 210, 0.51);
  border-radius: 0.6rem;
  .input-x {
    border: 0.1rem solid #ff8e65;
    border-radius: 0.8rem;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  .input-x:nth-child(2) {
    margin-top: 2.5rem;
  }
`;
export const Input = styled.input`
  flex: 1;
  line-height: 5rem;
  background-color: transparent;
  padding: 0 0 0 1.3rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: #7b7979;
`;
export const CodeButton = styled.button`
  position: relative;
  height: 4.5rem;
  background-color: transparent;
  padding: 0 1rem;
  font-size: 1.5rem;
  white-space: nowrap;
  font-weight: bold;
  color: #ff5f23;
  /* white-space: nowrap; */
  &::before {
    position: absolute;
    top: 1.5rem;
    left: 0;
    height: 1.5rem;
    border-left: 0.1rem solid #ff8e65;
    display: inline-block;
    opacity: 0.8;
    content: "";
  }
`;
export const RegButton = styled.button`
  position: relative;
  width: 31.4rem;
  height: 4.7rem;
  margin-top: 2.5rem;
  font-size: 0;
  .reg-button-bg{
    position: absolute;
    top: 0;
    left: 0;
  width: 31.4rem;
  height: 4.7rem;
  }
`;
export const RegRule = styled.div`
  position: relative;
  padding: 5rem 0 0;
  margin: 0 1.8rem;
  counter-reset: num;
  .reset-rule:before {
    background-image: radial-gradient(
      circle at 0 67.5%,
      /* 这里的颜色不支持transparent, 只能写死成page的底色 */ #ffe3ce 0%,
      #ffe3ce 1rem,
      #fffff7 1rem,
      #fffff7 100%
    );
  }
  .reset-rule:after {
    background-image: radial-gradient(
      circle at 100% 67.5%,
      #ffe3ce 0%,
      #ffe3ce 1rem,
      #fffff7 1rem,
      #fffff7 100%
    );
  }
  .rule-title {
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 18.1rem;
    height: 4rem;
    z-index: 2;
  }
  .c5d20 {
    color: #ff5d20;
  }
  .posr {
    position: relative;
    z-index: 2;
  }
  .rule-msg {
    position: relative;
    font-size: 1.5rem;
    font-weight: bold;
    color: #493207;
    line-height: 2.2rem;
    padding: 0 2.2rem 1.6rem 4.4rem;
  }
  .rule-msg::before {
    position: absolute;
    transform: translateX(-1.5rem);
    font-size: 1.3rem;
    font-weight: 400;
    color: #ffaf76;
    content: counter(num) ".";
    counter-increment: num;
  }
  .app-icon {
    width: 1.7rem;
    height: 1.7rem;
    transform: translateY(0.2rem);
    display: inline-block;
  }
  .rule-notice {
    font-size: 1.3rem;
    font-weight: 500;
    color: #493207;
    padding: 0 3.2rem 2.6rem;
    text-align: center;
    line-height: 2rem;
    opacity: 0.75;
  }
`;
