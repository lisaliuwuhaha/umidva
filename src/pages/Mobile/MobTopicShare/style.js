import styled from "styled-components";
import topicBg from "/public/images/mobile/articleShare/topic_bg.png";
import { Spin } from 'antd';
 
export const WrapSpin = styled(Spin)`
    .ant-spin-dot{
      width:150px;
      height:150px;
      left:calc(50% - 75px) !important;
      /* top:calc(50% - 75px)!important; */
    }
`;
 
export const TopicShareX = styled.div`
  font-size: 1.4rem;
  p{
    margin-bottom:0 !important;
  }
  .detail-con {
    color: #fff;
    border-bottom: 1.3rem solid #f7f7f7;
    .detailtop-con {
      padding-top: 10.5rem;
      background: url(${topicBg}) no-repeat top center;
      background-size: cover;
    }
    .bt-dec-x {
      position: relative;
      top: -2rem;
      max-height: ${(props) => props.maxheight + "px"};
      padding-top: 2rem;
      margin-bottom: 2rem;
      background-color: #fff;
      border-radius: 1.2rem 1.2rem 0px 0px;
      transition: max-height 0.5s;
      .dec {
        margin: 0 1.5rem;
        font-size: 1.4rem;
        color: #333333;
        line-height: 2.2rem;
      }
    }
    .dec-x {
      position: relative;
      max-height: ${(props) => props.maxheight + "px"};
      overflow: hidden;
      transition: max-height 0.5s;
    }
    .blur-x {
      position: absolute;
      bottom: -4rem;
      left: 0;
      width: 100%;
      height: 5.6rem;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        #ffffff 100%
      );
      cursor: pointer;
      &::after {
        content: "\\e6fb";
        position: absolute;
        left: calc(50% - 0.8rem);
        top: calc(50% + 0.8rem);
        color: #979797;
        font-size: 1.5rem;
      }
    }
  }

  .suber-info-x {
    margin: 0 1.5rem 2.6rem 1.5rem;
    line-height: 1;
    .username {
      font-size: 1.6rem;
      margin-bottom: 1rem;
      font-weight: bold;
      max-width: 14rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .time {
      font-size: 1.2rem;
      font-weight: 400;
      color: #999999;
      span {
        margin-right: 1.2rem;
      }
    }
  }

  .upavatar-x {
    position: relative;
    width: 4.8rem;
    height: 4.8rem;
    margin-right: 1.6rem;
  }
  .authority {
    position: absolute;
    right: -0.1rem;
    bottom: -0.1rem;
    border-radius: 50%;
    overflow: hidden;
    width: 1.6rem;
    height: 1.6rem;
    background: url(${props=>props.verify}) no-repeat center center;
    background-size: cover;
  }
  .avatar-x {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    overflow: hidden;
    background: url(//www.alphazone.com.cn/resource/hxlogo-grey.png) center
      center / cover no-repeat rgb(234, 234, 234);
  }

  .topicname-x {
    margin: 0 1.5rem 1.6rem 1.5rem;
    font-size: 1.8rem;
    line-height: 2.7rem;
    span {
      position: relative;
      top: -0.4rem;
      padding: 0 0.4rem;
      margin-right: 0.8rem;
      font-size: 1rem;
      line-height: 1.6rem;
      background-color: #f55045;
      border-radius: 0.2rem;
    }
  }
  .refinfo-x {
    line-height: 1;
    margin: 0 1.5rem;
    padding-bottom: 4rem;
    span {
      margin: 0 0.8rem;
      width: 0.1rem;
      height: 1rem;
      background-color: #f3f3f3;
    }
  }

  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0;
    &::before {
      border-bottom: 0.1rem solid #f3f3f3;
    }
  }
  .ant-tabs-tab {
    height:5.3rem ;
    padding: 0;
    /* margin: 1.5rem 0.7rem 0.6rem 1.5rem; */
    margin: 0 0.7rem 0 1.5rem;
    /* padding-bottom: 0.7rem; */
    font-size: 1.6rem;
    color: #666;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #333;
    font-weight: bold;
    text-shadow: none;

    span {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        right: 0.9rem;
        bottom: -0.8rem;
        width: 1.2rem;
        height: 0.2rem;
        background: #f55045;
        border-radius: 0.1rem;
      }
    }
    &#rc-tabs-0-tab-2 span::after {
      right: 1.9rem;
    }
  }
  .ant-card-bordered {
    border-top: 0.2rem solid red;
  }
  .ant-tabs-ink-bar {
    visibility: hidden;
  }
`;
