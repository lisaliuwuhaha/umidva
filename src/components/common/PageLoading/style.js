import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  margin-right: 17px;
`;

export const Loader = styled.div`
  position: fixed;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 1000;
  /* opacity: 0; */
  transition: opacity 0.5s ease;
  overflow: hidden;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    width: 20px;
    height: 20px;
    margin: 20px 3px;
    background: #cccccc;
    border-radius: 50%;
    -webkit-animation: 0.9s bounce infinite alternate;
    animation: 0.9s bounce infinite alternate;
  }

  & div:nth-child(2) {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }

  & div:nth-child(3) {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  @-webkit-keyframes hideLoader {
    0% {
      width: 100%;
      height: 100%;
    }
    100% {
      width: 0;
      height: 0;
    }
  }

  @keyframes hideLoader {
    0% {
      width: 100%;
      height: 100%;
    }

    100% {
      width: 0;
      height: 0;
    }
  }
  @-webkit-keyframes bounce {
    to {
      opacity: 0.3;
      transform: translate3d(0, -1rem, 0);
    }
  }

  @keyframes bounce {
    to {
      opacity: 0.3;
      transform: translate3d(0, -1rem, 0);
    }
  }
`;
