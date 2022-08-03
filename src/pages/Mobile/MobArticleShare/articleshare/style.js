import styled from "styled-components";
export const ArticleShareWrapper = styled.div`
  font-size: 1.3rem;
  .detail-con {
    padding: 0 1.5rem;
    overflow-x: hidden;
    .note-title {
      line-height: 1.5;
      color: #333333;
      font-weight: bold;
      margin-bottom: .8rem;
        margin-top: 0;
        font-size: 1.6rem;
    }
      .info-user {
        margin-bottom: 1.6rem;
        margin-top: 7.2rem;
      }
      .follow {
        color: #E72737;
        font-size: 1.2rem;
        padding: 0.5rem 1.5rem;
        border: 0.1rem solid #E72737;
        border-radius: 2.2rem;
      }
      .bottom-info-x {
        padding: 0 4rem;
        margin: 1rem 0;
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
      .note-detail {
        .img-x {
          flex-wrap: wrap;
          margin-top: 1.6rem;
        }
        .img-item {
          width: 18rem;
          height: 18rem;
          margin-bottom: 1.6rem;
          border-radius: 0.6rem;
          border: 0.1rem solid #f0f0f0;
          background: url(//www.alphazone.com.cn/resource/hxlogo-grey-square.png.png)
            center center / cover no-repeat rgb(234, 234, 234);
          overflow: hidden;
        }
      }
    .info-con {
      font-size: 1.4rem;
      color: #333;
    }
    .info-user {
      .username {
        span {
          font-size: 1.4rem;
          font-weight: bold;
          color: #333;
          max-width: 14rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          line-height: 1;
        }
        .userlogo {
          width: 2.6rem !important;
          margin-left: 0.5rem;
        }
      }
      .time {
        font-size: 1rem;
        color: #999999;
        margin-top: 0.3rem;
        line-height: 1.4;
        span{
          margin-right:.5rem;
        }
      }
    }
    .info-user-avatar-x {
      position: relative;
      width: 3.6rem;
      height: 3.6rem;
      margin-right: 1rem;
    }

    .info-user-avatar {
      width: 3.2rem;
      height: 3.2rem;
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
    .note-detail {
      margin-top: 0.5rem;
      * {
        font-size: 1.4rem !important;
        line-height: 2.2rem !important;
        color: #333 !important;
      }
      font[size="1"] {
        font-size: 0.9rem !important;
      }
      p {
        background: transparent !important;
      }
      img {
        max-width: 100%;
      }
    }
    /* .hrling {
      position: relative;
      left: -1.5rem;
      width: 100vw;
      height: 0.1rem;
      background-color: #f3f3f3;
    } */
    .disclaimer {
      margin-top: 2.6rem;
      /* padding-bottom: 2.6rem; */
      font-size: 1.1rem;
      font-weight: 400;
      line-height: 1.8rem;
      color: #b3b3b3;
    }
    .err {
      margin-top: 7rem;
      text-align: center;
    }
  }
`;
