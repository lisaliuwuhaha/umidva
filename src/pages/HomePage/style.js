import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  max-width: 100vw;
  min-height: 100vh;
  background-color: #000;
  overflow: hidden;
  .home-x {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .video-x {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .video-x::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    content: "";
  }
`;
export const VideoView = styled.video`
  min-width: 100%;
  min-height: 100%;
`;

export const MainView = styled.div`
  --phone-x-w: 246px;
  --phone-x-h: 489px;
  --phone-img-w: 212px;
  --phone-img-h: 460px;
  --phone-x-top: 190px;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding-top: var(--phone-x-top);
  box-sizing: border-box;
  color: #fff;
  .main-x {
    position: relative;
    display: flex;
    justify-content: center;
  }
`;
export const PhoneView = styled.div`
  position: relative;
  width: var(--phone-x-w);
  height: var(--phone-x-h);
  overflow: hidden;
  .phone-x {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
  .carousel-x {
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--phone-img-w);
    height: var(--phone-img-h);
    overflow: hidden;
    transform: translate(-50%, -50%);
    border-radius: 6px;
    white-space: nowrap;
  }
  .carousel-img {
    width: var(--phone-img-w);
    height: var(--phone-img-h);
    display: inline-block;
  }
  /* @media (max-height: 700px) {
    --phone-x-w: 172px;
    --phone-x-h: 342px;
    --phone-img-w: 148px;
    --phone-img-h: 322px;
  } */
`;
export const AppInfo = styled.div`
  margin-left: 100px;
  padding-top: 91px;
  .info-subtitle {
    font-size: 32px;
    font-weight: 500;
    line-height: 45px;
    color: #ffffff;
    margin: 19px 0 54px;
    white-space: nowrap;
  }
  .qrcode-x {
    min-width: 350px;
    display: flex;
  }
`;
export const QrcodeBtn = styled.div`
  position: relative;
  width: 160px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  font-size: 16px;
  /* font-weight: bold; */
  line-height: 44px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &.and-btn {
    margin-left: 28px;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  &:hover .app-qrcode {
    display: block;
  }
  .btn-icon {
    width: 32px;
    transform: translateX(-5px);
  }
  .app-qrcode {
    position: absolute;
    top: 57px;
    left: 0;
    width: 146px;
    height: 146px;
    padding: 8px;
    background-color: #fff;
    border-radius: 3px;
    display: none;
  }
  .app-qrcode::before {
    position: absolute;
    top: -12px;
    left: 50%;
    margin-left: -7px;
    border: 7px solid transparent;
    border-bottom-color: #fff;
    content: "";
  }
`;
export const FooterView = styled.div`
  position: absolute;
  bottom: 67px;
  left: 50%;
  width: 100%;
  text-align: center;
  transform: translateX(-50%);
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #ffffff;
  .ml100 {
    margin-left: 100px;
  }
  .footer-info {
    font-size: 10px;
    font-weight: 400;
    line-height: 14px;
    color: #c1c1c1;
    margin-top: 19px;
  }
  .footer-info-divide {
    position: relative;
    margin-left: 20px;
  }
  .footer-info-divide::before {
    position: absolute;
    top: 1px;
    left: -10px;
    width: 0;
    height: 14px;
    border-left: 1px solid #707070;
    content: "";
  }
`;
