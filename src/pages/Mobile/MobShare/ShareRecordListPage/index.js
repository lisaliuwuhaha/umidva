import React, { memo } from "react";
import { useState, useEffect } from "react";
import RecordListView from "../sharePageComponents/RecordListView";
import { PageScreen } from "./style";

export default memo(function ShareRecordList() {

  const [list, setList] = useState(null);
  useEffect(() => {
    const _list = window.localStorage.getItem("hx_record_list");
    setList(JSON.parse(_list));
  }, []);

  return (
    <PageScreen>
      {!!list && <RecordListView list={list} isLogin={1} isHome={0} />}
      <p className="no-more">已加载全部</p>
    </PageScreen>
  );
});
