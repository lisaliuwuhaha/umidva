import styled from "styled-components";
export const NewsShareWrapper = styled.div`
  .news-x {
    padding: 0 1.6rem;
    padding-top: 7rem;
    .prititle {
      font-size: 1.8rem;
      color: #333;
      font-weight: 700;
      line-height: 1.33;
    }
    .subtitle {
      margin-top: 0.8rem;
      font-size: 1.2rem;
      color: #999;
      font-weight: 400;
      line-height: 1.33;
      span {
        margin-left: 1.6rem;
      }
    }
    .voice-x {
      width: 100%;
      height: 4rem;
      margin-top: 2rem;
      margin-bottom: 1.4rem;
      background-color: #fafafa;
      border-radius: 0.4rem;
    }
    .voice-con {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 0 1.5rem;
    }
    .content {
      font-size: 1rem;
      color: #333;
      font-weight: 400;
      line-height: 1.85;
      img {
        width: 100%;
      }
      p {
        margin: 0.6rem 0;
        word-break: normal;
        word-wrap: break-word;
        text-align: justify;
        font-size: 1.3rem;
      }
      strong {
        color: #333;
      }
      em {
        font-style: normal;
      }
      .hsyylwzlfont30 {
        background-color: #f5f5f7;
        color: #858585;
        margin: 0.8rem 0;
        line-height: 1.62;
        text-align: justify;
        position: relative;
        padding: 1.6rem 1.8rem;
      }

      .hsyylwzlfont31 {
        font-size: 1.6rem;
        font-weight: 700;
        color: #333;
        line-height: 1.5;
        border-style: solid;
        border-width: 0 0 0 0.3rem;
        margin: 1.2rem 0;
        padding: 0 0 0 0.8rem;
      }
    }
  }

  #pauseBtn {
    margin-left: 1.6rem;
    color: #666;
    cursor: pointer;
  }

  .playTime,
  .progress-x {
    flex: 1;
  }

  .progress-x {
    position: relative;
    width: 100%;
  }

  #progressId {
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background: #dedfde;
  }

  /* 表示总长度背景色 */
  progress::-webkit-progress-bar {
    background-color: #dedfde;
  }

  /* 表示已完成进度背景色 */
  progress::-webkit-progress-value {
    background-color: #e72737;
  }

  #playedTime,
  #playAllTime {
    color: #999999;
    font-size: 1.2rem;
  }

  #playedTime {
    margin-right: 0.8rem;
  }

  #playAllTime {
    margin-left: 0.8rem;
  }

  #controlBtn {
    position: absolute;
    top: -0.4rem;
    left: 0;
    width: 0.4rem;
    height: 0.4rem;
    background: #e72737;
    box-shadow: 0px 0.2rem 0.6rem 0 #fbbbb6;
    border: 0.2rem solid #fff;
    border-radius: 50%;
    cursor: pointer;
  }

  .disclaimer {
    margin-top: 2.6rem;
    padding-bottom: 2.6rem;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.64;
    color: #b3b3b3;
  }
`;
