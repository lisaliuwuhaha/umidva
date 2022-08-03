import styled from "styled-components";
import topicon from "/public/images/mobile/articleShare/topicon.png";
import noComment from "/public/images/mobile/articleShare/empty_data_noComment@3x.png";
export const ListItem = styled.div`
    width: 100%;
    box-sizing: border-box;
    border-bottom: 0.8rem solid #f7f7f7;
    cursor: pointer;
    &.no-comment {
      width: 100%;
      margin-top: 2.9rem;
      margin-bottom: 3.5rem;
      height: 16rem;
      background: url(${noComment}) no-repeat center center;
      background-size: 37%;
      position: relative;
      border: none;
      div {
        margin-top: 13rem;
        text-align: center;
        font-size: 1.9rem;
        color: #b9b8b8;
      }
    }
    .istop {
      padding: 0 1.5rem;
      width: 100%;
      line-height: 3.1rem;
      box-sizing: border-box;
      border-bottom: 0.1rem solid #f3f3f3;
    }
    .list-itemcontent-x {
      padding: 2rem 1.5rem 0 1.5rem;
      width: 100%;
      box-sizing: border-box;
      .info-user {
        margin-bottom: 1.1rem;
        .username {
          font-weight: bold;
          color: #333;
          /* line-height: 1; */
          margin-bottom: .3rem;
          max-width: 15.5rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .time {
          font-size: 1rem;
          font-weight: 400;
          color: #999;
          line-height: 1;
          span {
            margin-right: .8rem;
          }
        }
        .follow {
          padding: 0 1.6rem;
          font-size: 1.2rem;
          font-weight: 500;
          color: #f55045;
          line-height: 1.83rem;
          border: .1rem solid #f55045;
          border-radius: 2.4rem;
          cursor: pointer;
        }
      }
      .note-title {
        margin-bottom: .3rem;
        font-size: 1.6rem;
        color: #333333;
        font-weight: bold;
        line-height: 1.5;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
        
      }
      .note-detail {
        margin-top: .5rem;
        .conten-x {
          font-size: 1.4rem;
          line-height: 1.5;
          color: #333;
          width: 100%;
          white-space: pre-line;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          word-break: break-all;
        }
        .img-x {
          flex-wrap: wrap;
          margin-top: 1.1rem;
        }
        .img-item {
          width: 18rem;
          height: 18rem;
          margin-bottom: 1.6rem;
          border-radius: .6rem;
          border: .1rem solid #f0f0f0;
          background: url(//www.alphazone.com.cn/resource/hxlogo-grey-square.png)
            center center / cover no-repeat rgb(234, 234, 234);
          overflow: hidden;
        }
        p {
          background: transparent !important;
        }
        .J_prismPlayer {
          background-color: #333;
          z-index: 0;
          margin-top: 1.2rem;
          &.prism-player .prism-setting-list .prism-setting-item * {
            color: #ebecec !important;
          }
          &.prism-player .prism-time-display {
            line-height: 4rem !important;
            margin-top: .5rem !important;
          }
          &.prism-player
            .prism-setting-list
            .prism-setting-item
            .setting-content
            span {
            line-height: 3rem !important;
          }
        }
      }
      img {
        max-width: 100%;
      }
      .bottom-info-x {
        display: inline-block;
        padding: 0 .8rem;
        margin-top: 1.2rem;
        background: #f7f7f7;
        line-height: 2;
        border-radius: .2rem;
        font-size: 1rem;
        color: #666;
        max-width: 15rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        span {
          position: relative;
          top: .2rem;
          display: inline-block;
          margin-right: .2rem;
          width: 1.2rem;
          height: 1.1rem;
          background: url(${topicon}) no-repeat center center;
          background-size: contain;
        }
      }
    }

  .list-itemcontent-x
    .note-detail
    .J_prismPlayer.prism-player
    .prism-setting-selector
    .header,
  .list-itemcontent-x
    .note-detail
    .J_prismPlayer.prism-player
    .prism-setting-selector
    .header
    span {
    line-height: 3rem !important;
    color: #fff !important;
  }

  .list-itemcontent-x .note-detail .J_prismPlayer > div {
    color: #fff !important;
  }

  .list-itemcontent-x .note-detail .J_prismPlayer > div .iconfont {
    color: red !important;
  }

  .info-user .username .userlogo {
    width: 2.6rem !important;
    margin-left: .5rem;
  }

  .info-user-avatar-x {
    position: relative;
    width: 3.2rem;
    height: 3.2rem;
    margin-right: 1rem;
    .authority {
      width: 1.6rem;
      height: 1.6rem;
      background: url(${props=>props.verify}) no-repeat center center;
    background-size: cover;
    }
  }

  .info-user-avatar {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    background: url(//www.alphazone.com.cn/resource/hxlogo-grey.png) center
      center / cover no-repeat rgb(234, 234, 234);
    overflow: hidden;
  }
  .prism-player .prism-big-play-btn,
  .prism-player .prism-big-play-btn .outter {
    width: 3.2rem;
    height: 3.2rem;
  }

  .list-itemcontent-x
    .note-detail
    .J_prismPlayer.prism-player
    .prism-setting-selector
    ul
    li.current {
    color: #30adf2 !important;
  }

  .list-itemcontent-x
    .note-detail
    .J_prismPlayer.prism-player
    .prism-setting-selector
    ul
    span,
  .list-itemcontent-x
    .note-detail
    .J_prismPlayer.prism-player
    .prism-time-display
    > span {
    color: #fff !important;
  }
  .wh {
    width: 100%;
    height: 24rem;
  }
  .bottom-info-x {
    padding: 0 4rem;
    margin-bottom: 1rem;
    color: #666;
    font-size: 1.2rem;
    .iconfont {
      font-size: 1.2rem;
      margin-right: 0.2rem;
    }
    .views .iconfont {
      font-size: 1rem;
    }
  }
`