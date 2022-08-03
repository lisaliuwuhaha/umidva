import React, { memo } from "react";
import styled from "styled-components";
import ListHeadView from "./ListHeadView";
import ListItemView from "./ListItemView";
import ListLoading from "components/mobile/ListLoading";

const NoData = styled.p`
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  padding: 2rem 0;
`;

const RecordListView = ({ list, isHome = true, isLogin }) => {
  if (!isLogin) return <NoData>请先登录</NoData>;
  if (!list) return <ListLoading />;
  const _list = isHome ? list.slice(0, 10) : list;
  const showList = () =>
    _list.map((item, i) => <ListItemView item={item} key={i} />);
  return (
    <>
      <ListHeadView />
      {list.length === 0 ? <NoData>暂无数据</NoData> : showList()}
    </>
  );
};

export default RecordListView;
