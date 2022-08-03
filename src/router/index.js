import React from 'react';
import { Redirect } from "react-router-dom";
import mobileRouter from './mobRouter' //移动端活动页路由

export default [
  {
    path: "/",
    exact: true,
    component: '../pages/HomePage/index'
  },
  {
    path: '/list', component: '../pages/List/index' 
  },
  // 活动页
  {
    path: '/mobile',
    component: '../pages/Mobile/index',
    routes: mobileRouter
  },
]