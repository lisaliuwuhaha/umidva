import styled from "styled-components";
import applogo from "/public/images/mobile/articleShare/app-logo.png";
export const ShareHFWrapper = styled.div`
  .jump-href {
  position: fixed;
  text-decoration: none;
  color: #fff;
  box-sizing: border-box;
  z-index:1 ;
}
.top-href {
  top: 0;
  width: 100%;
  height: 7rem;
  padding: 0 1.5rem;
  background-color: rgba(0, 0, 0, 0.6);
}

.top-href .th-lx .sharer-avtar-x {
  width: 5.2rem;
  height: 5.2rem;
  margin-right: .2rem;
}

.top-href .th-lx .sharer-avtar-x img {
  width: 100%;
}

.top-href .th-lx .sharer-rec {
  font-size: 1rem;
  line-height: 2.2rem;
  width: calc(100vw - 18.2rem);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
}

.top-href .th-lx .sharer-rec.sharer-name {
  margin-bottom: 0.3rem;
  font-size: 1.6rem;
  font-weight: bold;
  margin-left: .4rem;
}

.top-href .th-rx {
  width: 8rem;
  height: 3rem;
  line-height: 3rem;
  border-radius: 3rem;
  background-color: #F34848;
  text-align: center;
}

.bottom-href {
  width: 15rem;
  height: 4rem;
  bottom: 3rem;
  left: calc(50vw - 7.5rem);
  border-radius: 4rem;
  font-size: 1.6rem;
  background-color: #F34848;
  box-shadow: 0 .3rem .6rem rgba(0, 0, 0, .16);
}

.bottom-href .applogo-x {
  width: 4.2rem;
  height: 2.6rem;
  margin-right: .5rem;
  border-radius: 1.1rem;
  background: #fff url(${applogo}) no-repeat center center;
  background-size: 45%;
}
`