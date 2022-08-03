import React, { useEffect, useState, memo } from "react";
import { RecordView, RecordClose, RecordList } from "./style";
import PopupMask from "components/mobile/PopupMask";

export default ({ recordList = [], visible, onClose = null }) => {
  return visible ? (
    <PopupMask visible={visible}>
      <RecordView>
        <p className="record-tit">抽奖记录</p>
        {/* 列表 */}
        <RecordList>
          <ul className="record-con">
            <li className="record-li">
              <span>2022/6/10</span>
              <span>感谢参与</span>
            </li>
          </ul>
        </RecordList>
        {/* 关闭按钮 */}
        <div className="close-btn-x" onClick={onClose}>
          <RecordClose></RecordClose>
        </div>
      </RecordView>
    </PopupMask>
  ) : (
    <></>
  );
};
