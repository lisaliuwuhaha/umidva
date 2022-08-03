import styled, { keyframes } from "styled-components";
import "@/styles/mobCss.css";

const modal_a = `
  0% {
    opacity:0;
    z-index:-1;
  }
  10% {
    opacity: 1;
    z-index: 3;
  }
  90% {
    opacity: 1;
    z-index: 3;
  }
  100% {
    opacity: 0;
    z-index: -1;
  }
`;
const loading_a = `
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
const pop_x = keyframes`${modal_a}`;
const loading_x = keyframes`${loading_a}`;

export const MaskView = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.color};
  z-index: 10;
`;

export const PopView = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 1rem;
  line-height: 2rem;
  border-radius: 0.4rem;
  backdrop-filter: blur(3px);
  text-align: justify;
  font-size: 1.4rem;
  &.show-a {
    animation: ${pop_x} 2s linear;
    opacity: 0;
  }
  .loading-circle {
    width: 2rem;
    height: 2rem;
    border-top: 0.2rem solid #fff;
    border-right: 0.2rem solid #fff;
    border-bottom: 0.2rem solid #fff;
    border-left: 0.2rem solid transparent;
    border-radius: 50%;
    margin: 1rem 2.6rem;
    animation: ${loading_x} 0.8s linear 0s infinite normal;
  }
  .loading-t {
    margin-top: 2rem;
    mix-blend-mode: -1rem;
    font-size: 1.4rem;
    text-align: center;
  }
`;
