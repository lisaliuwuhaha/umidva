import styled from "styled-components";
export const PlayerWrapper = styled.div`
  .prism-player {
    background-color: #333;
    z-index: 0;
    margin-bottom: 1.6rem;
  }

  .prism-player .prism-setting-list .prism-setting-item * {
    color: #ebecec !important;
  }

  .prism-player .prism-time-display {
    line-height: 4rem !important;
    margin-top: .5rem !important;
  }

  .prism-player .prism-setting-list .prism-setting-item .setting-content span {
    line-height: 3rem !important;
  }

  .prism-player .prism-setting-selector .header,
  .prism-player .prism-setting-selector .header span {
    line-height: 3rem !important;
    color: #fff !important;
  }

  .prism-player > div {
    color: #fff !important;
  }

  .prism-player > div .iconfont {
    color: red !important;
  }

  .prism-player .prism-big-play-btn,
  .prism-player .prism-big-play-btn .outter {
    width: 3.2rem;
    height: 3.2rem;
  }

  .prism-player .prism-setting-selector ul li.current {
    color: #30adf2 !important;
  }

  .prism-player .prism-setting-selector ul span,
  .prism-player .prism-time-display > span {
    color: #fff !important;
  }
  #playerno.playerwh {
    width: 100%;
    height: 24rem;
    background-color: #333;
    margin-bottom: 1.6rem;
    color:#fff !important;
    .iconfont {
      color: red !important;
      margin-right: 1rem;
      font-size: 3.2rem !important;
    }
  }
`;
