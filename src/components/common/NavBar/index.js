import { useState, useEffect } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { NavView, MenuView, AppLogo, RecordLink } from "./style";
import classNames from "classnames";
import { themes } from "@/styles/globalStyle.js";

import LogoDark from "/public/images/home/app-logo-dark.svg";
import LogoLight from "/public/images/home/app-logo-light.svg";
import LogoImg from "/public/images/home/hotsign-logo-img.png";

let navUl = [
  {
    path: "/",
    name: "首页",
  },
  {
    path: "/cooperationPage",
    name: "合作招商",
  },
  {
    path: "/aboutUsPage",
    name: "关于我们",
  },
];

export default ({ }) => {
  const location = useLocation();
  const [pathName, setPathName] = useState(location.pathname); //url地址
  const [theme, setTheme] = useState(themes.light); //nav主题色
  //当路由发生变化时
  useEffect(() => {
    if (location.pathname === "/") setTheme(themes.dark);
    setPathName(location.pathname);
    return () => {
      setTheme(themes.light);
    };
  }, [location.pathname]);
  //换主题色
  useEffect(() => {
    for (const value in theme) {
      document.documentElement.style.setProperty(`--${value}`, theme[value]);
    }
  }, [theme]);

  //导航按钮
  const NavItem = ({ path, name }) => {
    return (
      <Link
        className={classNames({
          "menu-item": true,
          active: pathName === path,
        })}
        to={path}
      >
        {name}
      </Link>
    );
  };

  return (
    <NavView name={pathName}>
      {/* app图标 */}
      <NavLink to={"/"} className="logo-x" alt="LOGO">
        <img width={"54"} height={"35"} src={LogoImg} alt="LOGO" />
        <AppLogo src={pathName === "/" ? LogoDark : LogoLight} />
      </NavLink>
      {/* 导航列表 */}
      <MenuView>
        {navUl.map((item) => (
          <NavItem {...item} key={item.name} />
        ))}
        <a href="https://www.huosign.com/crm/#/login" className="ml50" target='_blank'>
          <RecordLink>
            <i className="iconfont record-icon">&#xe69e;</i>
            机构中心
          </RecordLink>
        </a>
      </MenuView>
    </NavView>
  );
};
