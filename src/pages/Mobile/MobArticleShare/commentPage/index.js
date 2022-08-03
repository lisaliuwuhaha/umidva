import React, { memo, useState, useEffect, useContext } from "react";
import moment from "moment";
import CommentItem from "@/components/mobile/commentItem";
import { modalContext } from "@/utils/modalContext";
import { isJSON } from "@/utils/util";
import { notesCommentList } from "@/services/articleshare";
import { CommentWrapper } from "./style";

export default memo(function CommentPage({ id, uid, cat, curtime,type }) {
  const [hasNextPage, setHasNextPage] = useState(false);
  const [commengL, setCommengL] = useState(false);
  const [comment, setComment] = useState([]);
  const { showPagePopup } = useContext(modalContext);


  useEffect(() => {
    getCommentList();
  }, [id]);
  //获取评论列表
  const getCommentList = () => {
    notesCommentList({ id, page: 1, size: 25 }, false)
      .then((res) => {
        console.log(res)
        setCommengL(res.data.length > 0);
        setHasNextPage(res.hasNextPage);
        setComment(res.data);
      })
      .catch((err) => {
        console.log("评论列表加载出错", err);
        showPagePopup({
          text: "评论列表加载出错",
          type: "",
          _time: Math.random(),
        });
      })
  };
  return (
    <CommentWrapper>
    {
      type=='1'?<ul className="comment-list">
        <CommentItem commengL={commengL} comment={comment} uid={uid} curtime={curtime}/>
        </ul>:<div
        className={"comment-con box" + (cat == 11 ? " shequcomment" : "")
        }
      >
        <p className="title">{cat == 11 ? "评论区" : "全部评论"}</p>
        <ul className="comment-list">
        <CommentItem commengL={commengL} comment={comment} uid={uid} curtime={curtime}/>
        </ul>
      </div>
    }
      
      <div className="mas-bottom-x">
        {!hasNextPage && !!commengL && <div> ───── T^T 已经到底啦 ─────</div>}
      </div>
    </CommentWrapper>
  );
});
