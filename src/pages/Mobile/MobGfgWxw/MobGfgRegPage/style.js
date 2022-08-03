import styled from "styled-components";

export const PageScreen = styled.div`
  position: relative;
  font-family: PingFang SC;
  line-height: 1;
  padding: 0 0 8.5rem;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: #111111;
  --thbc: rgba(229, 57, 44, 0.55);
  --thc: #e5392c;
  z-index: 0;
  &::after {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 5.5rem;
    height: 6.7rem;
    background: url(${require("/public/images/mobile/gfgWxwReg/page-footer-img.png")})
      0 0 / 100% 100% no-repeat;
    z-index: -1;
    content: "";
  }
  .header-bg {
    height: 33.2rem;
    background: url(${require("/public/images/mobile/gfgWxwReg/page-head.png")})
      0 0 / 100% 100% no-repeat;
  }
  .form-x {
    padding: 0 3.3rem 0 2.3rem;
    margin: 5.1rem 0 4.6rem;
  }
`;
export const FormInput = styled.div`
  position: relative;
  height: 4.4rem;
  line-height: 4.4rem;
  border: 0.1rem solid var(--thbc);
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--thc);
  border-radius: 0.6rem;
  [type="text"] {
    width: 100%;
    background-color: transparent;
    padding: 0 1.3rem;
  }
  & + & {
    margin: 3.2rem 0 4.2rem;
    padding-right: 8.5rem;
  }
  &::before {
    position: absolute;
    top: -0.5rem;
    left: 2.1rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--thbc);
    white-space: nowrap;
    background-color: #111111;
    padding: 0 0.5rem;
    line-height: 1;
    content: attr(data-tit);
  }
  .code-btn {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.4rem;
    color: var(--thc);
    line-height: 4.2rem;
    padding-right: 1.1rem;
  }
`;
export const FormBtn = styled.button`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 500;
  color: #100b0a;
  line-height: 4.2rem;
  background: var(--thc);
  border-radius: 0.6rem;
`;

export const RegRule = styled.div`
  margin: 0 1.5rem;
  background: #130d0c;
  border: 0.1rem solid var(--thbc);
  box-shadow: 0 0.1rem 1rem 0 var(--thbc);
  .reg-rule-tit {
    position: relative;
    line-height: 5rem;
    background: #1b1311;
    padding-left: 4rem;
    border-bottom: 0.1rem solid var(--thbc);
    font-size: 2rem;
    font-weight: 500;
    color: var(--thc);
  }
  .reg-rule-tit::before {
    position: absolute;
    top: 50%;
    left: 1.5rem;
    transform: translateY(-50%);
    width: 1.5rem;
    height: 2.3rem;
    background: url(${require("/public/images/mobile/gfgWxwReg/rule-icon.png")})
      0 0 / 100% 100% no-repeat;
    content: "";
  }
  .reg-rule-con {
    padding: 1.8rem 1.6rem 0;
    font-size: 1.4rem;
    color: var(--thc);
    line-height: 2rem;
  }
  .reg-rule-t:first-child {
    margin-bottom: 0.8rem;
  }
  .app-logo {
    width: 1.7rem;
    height: 1.7rem;
    background: url(${require("/public/images/mobile/1app-logo.png")}) 0 0 /
      100% 100% no-repeat;
    display: inline-block;
    vertical-align: top;
    transform: translateY(0.2rem);
  }
  .reg-rule-t {
    margin-bottom: 4.9rem;
  }
  .reg-rule-a {
    color: #fff;
    text-decoration: underline;
    transition: none;
  }
  .reg-rule-a:active {
    color: #fff;
  }
  .reg-rule-msg {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--thbc);
    line-height: 2rem;
    padding: 1.5rem 1.6rem 2.1rem;
    border-top: 0.1rem solid var(--thbc);
  }
`;
