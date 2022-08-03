import styled from "styled-components";
import nocomment from "/public/images/mobile/articleShare/empty_data_noComment@3x.png"
export const CommentItemX = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 1.5rem;
  /* border-bottom: 0.05rem solid #ededeb; */
  &.no-comment {
    width: 100%;
    margin-top: 2.9rem;
    margin-bottom: 3.5rem;
    height: 16rem;
    background: url(${nocomment}) no-repeat center center;
    background-size: 29%;
    position: relative;
    border: none;
    div {
      margin-top: 12rem;
      text-align: center;
      font-size: 1.2rem;
      color: #b9b8b8;
    }
  }
  .avatar-x {
    position: relative;
    width: 3.6rem;
    height: 3.6rem;
    margin-right: 1.2rem;
  }
  .authority {
    position: absolute;
      right: -0.3rem;
      bottom: -0.3rem;
      border-radius: 50%;
      overflow: hidden;
      width: 1.8rem;
      height: 1.8rem;
      background: url(${props=>props.verify}) no-repeat center center;
      background-size: cover;
    }
  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: url(//www.alphazone.com.cn/resource/hxlogo-grey.png)
      center center / cover no-repeat rgb(234, 234, 234);
    overflow: hidden;
  }
  
  .col-2 {
    width: calc(100% - .34rem);
    height: 100%;
    .uname {
      span {
        font-size: 1.4rem;
        color: #333;
        line-height: 2rem;
        max-width: 14rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        /* font-weight: bold; */
        &.to-who {
          max-width: 10rem;
        }
      }
      .authertag {
        margin-left: .5rem;
        padding: 0 .3rem;
        line-height: 1.2rem;
        color: #fff;
        font-size: .8rem;
        font-weight: 400;
        background: linear-gradient(to right, #f87d3a, #ffa743);
      }
      .userlogo {
        width: 2.6rem !important;
        margin-left: .5rem;
      }
    }
    .comment {
      word-break: break-all;
      margin: .9rem 0;
      line-height: 1.35;
      img{
        width:6rem;
      }
    }
    .iconfont {
      font-size: 1.4rem;
      margin-right: .5rem;
    }
    .to-who .iconfont {
      margin: 0 .4rem;
      color: #7d7d7d;
    }
    .like {
      margin-left: 2rem;
    }
    .time-x {
      color: #999;
      font-size: 1.2rem;
      line-height: 1.15;
    }
  }
  .firstreply-x {
    position: relative;
  }
  .thirdreply-x {
    display: inline-block;
    margin-left: 7.7rem;
    margin-top: .7rem;
    color: #222423;
    padding: .8rem 2rem;
    background: #f1edec;
    border-radius: 3.3rem;
    font-size: 1rem;
    .iconfont {
      font-size: .9rem;
      margin-left: .4rem;
    }
  }
  .ab-x {
    position: absolute;
    top: .5rem;
    right: 0;
    color: #999;
    font-size: 1.2rem;
  }
  .col-2 {
    width: calc(100% - 4.3rem);
    height: 100%;
  }

`
export const CommentCItemX = styled(CommentItemX)`
    position: relative;
    width:auto;
    margin-left: 4.3rem;
    margin-top: 1.8rem;
    border-bottom:none;
    padding:0 ;
    .avatar-x {
      width: 2.4rem;
      height: 2.4rem;
      margin-right: .8rem;
    }
    .authority {
      width: 1.2rem;
      height: 1.2rem;
    }
`