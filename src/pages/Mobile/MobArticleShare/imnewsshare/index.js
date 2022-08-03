import React, { memo, useState, useEffect, useContext } from "react";
import moment from "moment";
import md5 from "js-md5";
import { modalContext } from "@/utils/modalContext";
import { useDocumentTitle } from "@/utils/comFunc";
import { getNewsData } from "@/services/articleshare";
// import { isJSON } from "@/utils/util";
import { ImnewsShareWrapper } from "./style";

export default memo(function ImnewsShareTemp({ id, curtime }) {
  const [newsDetail, setNewsDetail] = useState({});
  const [currentTime, setCurrentTime] = useState("00:00");
  const [allTime, setAllTime] = useState("00:00");
  const [left, setLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const { showPagePopup} = useContext(modalContext);

  const { createTime, stkName, source, title, content, newCommentContent } =
    newsDetail;
  let t = null;
  useEffect(() => {
    getimNewsData(id);
  }, []);
  useDocumentTitle(title);

  //获取新闻详情
  const getimNewsData = (id) => {
    getNewsData({ text: "/news/" + id }, false)
      .then((res) => {
        if(!res.data.success){
          showPagePopup({
            text: res.data.msg,
            type: "",
            _time: Math.random(),
          });
        }else{
          setNewsDetail(res.data.data);
        }
      })
      .catch((err) => {
        console.log("请求出错", err);
        showPagePopup({
          text: "内容加载出错",
          type: "",
          _time: Math.random(),
        });
      });
  };

  return (
    <ImnewsShareWrapper>
      <div className="news-x im">
        {JSON.stringify(newsDetail) != "{}" ? (
          <>
            <div className="prititle">{title }</div>
            <div className="subtitle u-f-ac">
              来源： {source}
              <span>{moment(createTime).from(moment(curtime))}</span>
            </div>
            <div className="content">{content}</div>
            <div className="topicx">#{stkName}</div>
            <div className="u-f-ac nctitlex">
              <div className="nctitlelogo u-f-ajc">
                <div></div>
              </div>
              <div>火象观点:</div>
            </div>
            <div className="content sub">{newCommentContent}</div>
            <div className="disclaimer news">
              免责声明：本文不构成本平台任何的投资建议，本平台不对文章信息准确性、完整性和及时性作出任何保证，亦不对因使用使用或信赖该信息引发的任何损失承担责任。
            </div>
          </>
        ) : (
          <div className="no-wificontent"></div>
        )}
      </div>
    </ImnewsShareWrapper>
  );
});
