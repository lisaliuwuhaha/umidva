import styled from "styled-components";

export const NavView = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 86px;
  background-color: var(--navBgc);
  box-shadow: ${(props) =>
    props.name === "/home" ? "none" : "0px 3px 4px rgba(0, 0, 0, 0.05)"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 0 8.81% 0 9.72%;
  z-index: 10;
  .logo-x{
    display: flex;
    align-items: center;
  }
`;
export const MenuView = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: var(--navColor);
  .menu-item {
    position: relative;
    white-space: nowrap;
    padding: 10px 0;
  }
  .menu-item::after {
    position: absolute;
    bottom: 3px;
    left: 50%;
    width: 10px;
    height: 0;
    border-bottom: 2px solid var(--navActiveColor);
    border-radius: 2px;
    margin-left: -5px;
    opacity: 0;
    content: "";
    /* transition: all 0.1s linear; */
  }
  .menu-item:hover,
  .menu-item:hover::after,
  .menu-item.active,
  .menu-item.active::after {
    font-weight: bold;
    color: var(--navActiveColor);
    border-color: var(--navActiveColor);
    opacity: 1;
  }
  .menu-item:not(:first-child) {
    margin-left: 50px;
  }
  .ml50{
    margin-left: 50px;
  }
`;
export const AppLogo = styled.img`
  /* width: 143px;
  height: 33px; */
  width: 102px;
  height: 25px;
`;
export const RecordLink = styled.div`
  width: 110px;
  font-weight: 400;
  padding: 10px 0;
  text-align: center;
  background: var(--recordBtnBg);
  color: var(--recordBtnColor);
  border-radius: 6px;
  /* margin-left: 50px; */
  display: inline-block;
  &:hover {
    color: var(--recordHoverBtnColor);
    background: var(--recordHoverBtnBg);
  }
  .record-icon {
    width: 13px;
    height: 13px;
    display: inline-block;
    margin-right: 7px;
  }
`;
