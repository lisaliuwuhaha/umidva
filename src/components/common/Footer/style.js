import styled from "styled-components";

export const FooterView = styled.div`
  position: relative;
  padding: 44px 15.28% 40px;
  background-color: #1a1a1a;
  z-index: 10;
  .flex-x {
    display: flex;
    justify-content: space-between;
  }
  .c999 {
    color: #999999;
  }
  .cfff {
    color: #ffffff;
    font-family: DINPro;
    opacity: 0.8;
  }
  .mb9 {
    margin-bottom: 9px;
  }
  .ml30{
    margin-left: 30px;
  }
  .qr-code-msg {
    position: relative;
    margin-left: 30px;
    display: inline-block;
    padding-right: 11px;
    cursor: pointer;
  }
  .ml40 {
    margin-left: 40px;
  }
  .pt60 {
    padding-top: 60px;
  }
  .qr-code-icon {
    font-size: 14px;
    color: #fff;
    margin-left: 13px;
  }
  .qr-code-img {
    position: absolute;
    top: 50%;
    right: -106px;
    width: 106px;
    height: 106px;
    margin-top: -53px;
    background-color: #fff;
    border-radius: 4px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: 100% 100%;
    display: none;
  }
  .qr-code-icon:hover + .qr-code-img {
    display: block;
  }
  .qr-code-img::after {
    position: absolute;
    top: 50%;
    left: -10px;
    width: 0px;
    height: 0px;
    margin-top: -6px;
    border: 6px solid transparent;
    border-right-color: #fff;
    content: "";
  }
`;

export const MainInfo = styled.div`
  line-height: 20px;
  font-size: 14px;
  padding-bottom: 27px;
  font-weight: 400;
  border-bottom: 1px solid rgba(204, 204, 204, 0.5);
  margin-bottom: 18px;
  .logo-x{
    display: flex;
    align-items: center;
    margin-bottom: 26px;
    width: auto;
  }
  .logo-img{
    width: 54px;
    height: 35px;
  }
  .logo-icon {
    width: 102px;
    height: 25px;
  }
`;

export const OtherInfo = styled.div`
  font-size: 10px;
  line-height: 20px;
  .interval::before {
    /* position: absolute; */
    width: 0;
    height: 12px;
    max-height: 12px;
    border-left: 1px solid #999;
    display: inline-block;
    margin: 0 10px;
    vertical-align: middle;
    content: "";
  }
`;
