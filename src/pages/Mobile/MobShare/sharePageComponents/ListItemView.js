import { useState, useEffect } from "react";
import styled from "styled-components";
import classNames from "classnames";

const ListItem = styled.div`
  line-height: 3rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: #493207;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding-right: 1rem;
  &:nth-child(2n) {
    background: #fff7e5;
  }
  .ms-record-item-id {
    width: 8rem;
  }
  .ms-record-item-date {
    width: 7rem;
  }
  .ms-record-item-state {
    width: 4rem;
  }
  .ms-record-item-draw {
    width: 5rem;
  }
  .ms-record-item-vitality {
    width: 4rem;
    color: #c87a00;
  }
  .c93 {
    color: #939393;
  }
`;
const ListItemView = ({ item }) => {
  const id = item.username || "匿名用户",
    date = item.create_time || "",
    soft_verify = Number(item.soft_verify) || "",
    total_activity = item.total_activity || "";
  return (
    !!item && (
      <>
        <ListItem>
          <div className="ms-record-item-id text-hidden">{id}</div>
          <div className="ms-record-item-date">{date.slice(0, 10)}</div>
          <div className="ms-record-item-state c93">已注册</div>
          <div
            className={classNames({ "ms-record-item-draw": true, c93: soft_verify })}
          >
            {!soft_verify ? "未领" : "已领"}
          </div>
          <div className="ms-record-item-vitality">{total_activity}</div>
        </ListItem>
      </>
    )
  );
};

export default ListItemView;
