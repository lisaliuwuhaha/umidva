import styled from "styled-components";

export const LotteryView = styled.div`
  position: relative;
  width: 33rem;
  height: 33rem;
  margin: 3rem auto 0;
  background: url(${require("/public/images/mobile/gfgWxw/gfg-turntable.png")})
    0 0 / 100% 100% no-repeat;
  border-radius: 50%;
  .r-line {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -0.05rem;
    margin-left: -15rem;
    width: 30rem;
    height: 0;
    border-top: 0.1rem solid rgba(238, 80, 91, 0.8);
  }
  .r-line[data-i="1"] {
    transform: rotate(-120deg);
  }
  .r-line[data-i="2"] {
    transform: rotate(-60deg);
  }
  .turn-group-x {
    position: absolute;
    top: calc(50% - 9.5rem);
    left: 50%;
    margin: 0 -15.2rem;
    display: flex;
    width: 30.4rem;
    justify-content: center;
    font-size: 1.3rem;
    color: #fefefe;
    line-height: 1.7rem;
  }
  .turn-group-x + .turn-group-x {
    top: 50%;
  }
`;
export const TurntableOpt = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -3.3rem;
  margin-left: -3.4rem;
  width: 6.8rem;
  height: 6.6rem;
  z-index: 1;
  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -3.3rem;
    margin-left: -3.4rem;
    width: 6.8rem;
    height: 6.6rem;
    background: url(${require("/public/images/mobile/gfgWxw/gfg-pointer-bg.png")})
      0 0 / 100% 100% no-repeat;
    content: "";
    z-index: 1;
  }
  .rotate-x {
    position: absolute;
    bottom: 3.3rem;
    right: 3.4rem;
    width: 15rem;
    height: 15rem;
    overflow: hidden;
    transform-origin: bottom right;
    transform: rotate(30deg);
  }
  .sector {
    position: absolute;
    width: 300px;
    height: 300px;
    background-color: #abc;
    border-radius: 50%;
    clip: rect(auto, auto, 150px, auto);
    background-image: radial-gradient(#ff3232 10%, #3e211b 100%);
    transform: rotate(30deg);
  }
  .pointer-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -3.05rem;
    margin-left: -3.05rem;
    width: 6.1rem;
    height: 6.1rem;
    background: url(${require("/public/images/mobile/gfgWxw/gfg-pointer.png")})
      0 0 / 100% 100% no-repeat;
    /* transform-origin: 50% 3.45rem; */
    z-index: 1;
  }
  .animation {
    transition: all 5s;
  }
`;

export const TurntableItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem;
  box-sizing: border-box;
  z-index: 1;
  text-shadow: 0 0 0.7rem #d32f10;
  &[data-turn-i="1"] {
    transform: translateY(-1.7rem);
  }
  &[data-turn-i="2"] {
    transform: translateY(-5rem);
  }
  &[data-turn-i="3"] {
    transform: translateY(-1.5rem);
  }
  &[data-turn-i="4"] {
    transform: translateY(-1rem);
  }
  &[data-turn-i="5"] {
    transform: translateY(4rem);
  }
  &[data-turn-i="6"] {
    transform: translateY(0rem);
  }
  &[data-turn-i="3"],
  &[data-turn-i="4"] {
    min-width: 9.5rem;
    text-shadow: 0 0 0.7rem #faad14a6;
  }
  .item-icon {
    width: 5.8rem;
    height: 6.1rem;
    white-space: nowrap;
  }
  .puzzle-icon {
    background-position: 0 -5.75rem;
  }
  .gold-icon {
    background-position: -11rem -5.75rem;
    transform: translateY(0.8rem);
  }
  .face-icon {
    background-position: -5.8rem -5.75rem;
    transform: translateY(0.8rem);
  }
`;
export const LotteryBtn = styled.button`
  position: relative;
  /* width: 27.6rem;
  line-height: 6.1rem; */
  width: 73.6vw;
  height: 16.8vw;
  font-size: 2.2rem;
  font-weight: bold;
  text-align: center;
  color: #fff;
  margin: 3.4rem auto 0;
  background-position: 0 -11.85rem;
  display: block;
  .lottery-msg {
    position: absolute;
    bottom: -3.2rem;
    left: 50%;
    width: 22rem;
    line-height: 2.2rem;
    background: #831601;
    border-radius: 0.7rem;
    font-size: 1.1rem;
    font-weight: bold;
    color: var(--c255);
    margin-left: -11rem;
  }
  .lottery-msg::before {
    position: absolute;
    top: -0.8rem;
    left: 50%;
    width: 0;
    height: 0;
    margin-left: -0.15rem;
    border: 0.4rem solid transparent;
    border-bottom-color: #831601;
    content: "";
  }
`;
