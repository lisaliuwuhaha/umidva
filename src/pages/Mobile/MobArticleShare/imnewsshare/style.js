import styled from "styled-components";
import applogow from "/public/images/mobile/articleShare/app-logow.png";
import empty_data from "/public/images/mobile/articleShare/empty_data_network.png";

export const ImnewsShareWrapper = styled.div`
  .news-x {
    padding: 0 1.6rem;
    padding-top: 7rem;
  }
  .news-x.im .prititle {
    font-size: 1.8rem;
    color: #333;
    font-weight: 700;
    line-height: 1.56;
  }
  .news-x .subtitle {
    margin-top: 0.8rem;
    font-size: 1.2rem;
    color: #999;
    font-weight: 400;
  }

  .news-x .subtitle span {
    margin-left: 1.6rem;
  }
  .news-x.im .content {
    font-size: 1.4rem;
    color: #333;
    font-weight: 400;
    line-height: 1.71;
    margin-top: 2rem;
    margin-bottom: 1.2rem;
  }

  .news-x.im .topicx {
    box-sizing: border-box;
    padding: 0 1.2rem;
    margin-bottom: 3.6rem;
    font-size: 1.2rem;
    color: #666;
    line-height: 2;
    background: #f7f7f7;
    border-radius: 0.2rem;
    display: inline-block;
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .news-x.im .nctitlex {
    font-size: 1.6rem;
    font-weight: 700;
    color: #f34848;
    line-height: 1.31;
  }

  .news-x.im .nctitlelogo {
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.4rem;
    background: linear-gradient(180deg, #ff405c 0%, #c60221 100%);
    border-radius: 1.6rem;
  }

  .news-x.im .nctitlelogo > div {
    width: 1.2rem;
    height: 1rem;
    background: url(${applogow}) no-repeat center center;
    background-size: cover;
  }

  .news-x.im .content.sub {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }

  .news-x.im .disclaimer {
    font-size: 1.1rem;
    font-weight: 400;
    color: #b3b3b3;
    line-height: 1.45;
    margin-top: 3.2rem;
    padding-bottom: 3.2rem;
  }
  .no-wificontent {
    width: 100%;
    margin-top: calc(50vh - 12rem);
    height: 16rem;
    background: url(${empty_data}) no-repeat center center;
    background-size: 40%;
  }
`;
