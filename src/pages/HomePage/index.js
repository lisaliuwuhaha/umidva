import React, { memo, useRef, useEffect, useState } from "react";
import {
  Wrapper,
  VideoView,
  MainView,
  PhoneView,
  AppInfo,
  QrcodeBtn,
  FooterView,
} from "./style";
import { Link, withRouter } from "react-router-dom";
import phoneBox from "/public/images/home/phone-x.png";
import phoneImg1 from "/public/images/home/phone-1.png";
import phoneImg2 from "/public/images/home/phone-2.png";
import phoneImg3 from "/public/images/home/phone-3.png";
import phoneImg4 from "/public/images/home/phone-4.png";
import phoneImg5 from "/public/images/home/phone-5.png";
import appTitle from "/public/images/home/appTitle.png";
import iosIcon from "/public/images/home/ios-btn-icon.png";
import androidIcon from "/public/images/home/android-btn-icon.png";
import appAndroidCode from "/public/images/home/AndroidDownloadEwm.png";
import appIOSCode from "/public/images/home/IOSDownloadEwm.png";

export default memo(function HomePage({ route }) {
  const isPlay = useRef(null);
  const [distance, setDistance] = useState(0); //定时轮播
  const [pageHeight, setPageHeight] = useState(1080);
  const [phoneSize, setPhoneSize] = useState({ _max: 1272, _min: 212 });
  const [isCarouselPlay, setIsCarouselPlay] = useState(false)
  let timer = null;

  const phoneViewSize = {
    original: {
      "phone-x-w": "246px",
      "phone-x-h": "489px",
      "phone-img-w": "212px",
      "phone-img-h": "460px",
      "phone-x-top": "190px",
    },
    shrink: {
      "phone-x-w": "172px",
      "phone-x-h": "342px",
      "phone-img-w": "148px",
      "phone-img-h": "322px",
      "phone-x-top": "120px",
    },
  };

  //页面加载,重置时调用轮播方法
  useEffect(() => {
    window.addEventListener(
      "resize",
      (e) => {
        handlePhoneSize().then((height) => {
          handleCarousel(height);
        });
      },
      false
    );
    handlePhoneSize().then((height) => {
      handleCarousel(height);
    });
    return () => {
      clearInterval(timer)
      window.removeEventListener('resize', handlePhoneSize)
    };
  }, []);

  //页面高度改变  重置轮播起始页
  useEffect(() => {
    setDistance(0);
  }, [pageHeight]);

  useEffect(() => {
    if (distance === 0 && isCarouselPlay) {
      setTimeout(() => {
        setDistance(phoneSize._min);
      }, 0);
    }
  }, [distance]);

  //轮播
  const handleCarousel = (pageHeight) => {
    let _max = pageHeight > 700 ? 1272 : 888,
      _min = pageHeight > 700 ? 212 : 148;
    setPhoneSize({ _max: _max, _min: _min });
    clearInterval(timer);
    timer = setInterval(() => {
      setDistance((distance) => {
        return distance === _max - _min ? 0 : distance + _min;
      });
      setIsCarouselPlay(true)
    }, 2000);
  };

  //重置手机样式大小
  const handlePhoneSize = () => {
    return new Promise((resolve, reject) => {
      let pageH = window.innerHeight;
      setPageHeight(pageH);
      const PhoneSize =
        pageH < 770 ? phoneViewSize.shrink : phoneViewSize.original;
      for (const value in PhoneSize) {
        document
          .querySelector(".phone-view")
          .style.setProperty(`--${value}`, PhoneSize[value]);
      }
      resolve(pageH);
    });
  };

  //在视频准备开始播放时执行
  const _playVideo = () => {
    isPlay.current.play();
  };
  return (
    <Wrapper>
      <div className="home-x">
        <div className="video-x">
          <VideoView
            ref={isPlay}
            onCanPlay={_playVideo}
            preload="auto"
            muted
            loop
          ><source src='./home-video.mp4'  type="video/mp4"/></VideoView>
        </div>
        <MainView className="phone-view">
          <div className="main-x">
            <PhoneView>
              <img className="phone-x" src={phoneBox} />
              <div className="carousel-x">
                <div
                  style={{
                    marginLeft: `-${distance}px`,
                    transition: distance > 0 ? "all .2s" : "all 0s",
                  }}
                >
                  <img className="carousel-img" src={phoneImg1} />
                  <img className="carousel-img" src={phoneImg2} />
                  <img className="carousel-img" src={phoneImg3} />
                  <img className="carousel-img" src={phoneImg4} />
                  <img className="carousel-img" src={phoneImg5} />
                  <img className="carousel-img" src={phoneImg1} />
                </div>
              </div>
            </PhoneView>
            <AppInfo>
              <img src={appTitle} alt="" width={"208px"} />
              <p className="info-subtitle">开启年轻人的金融世界第一站</p>
              <div className="qrcode-x">
                <QrcodeBtn>
                  <img src={iosIcon} className="btn-icon" alt="" />
                  <span>iOS 版</span>
                  <div className="app-qrcode">
                    <img src={appIOSCode} width="100%" alt="" />
                  </div>
                </QrcodeBtn>
                <QrcodeBtn className="and-btn">
                  <img src={androidIcon} className="btn-icon" alt="" />
                  <span>Android 版</span>
                  <div className="app-qrcode">
                    <img src={appAndroidCode} width="100%" alt="" />
                  </div>
                </QrcodeBtn>
              </div>
            </AppInfo>
          </div>
          <FooterView>
            <Link to={"/userPolicy/privacy"}>隐私政策</Link>
            <Link to={"/userPolicy/protocol"} className="ml100">
              用户服务协议
            </Link>
            <p className="footer-info">
              <span>沪ICP备2022001065号-2</span>
              {/* <span className="footer-info-divide">
                2022泸公网安备23556532323号
              </span> */}
              <span className="footer-info-divide">
                Copyright © 2022 上海火象趣数据科技有限公司 版权所有
              </span>
            </p>
          </FooterView>
        </MainView>
      </div>
    </Wrapper>
  );
});
