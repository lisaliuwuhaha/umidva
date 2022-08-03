import React, { memo, useState, useEffect, useContext } from "react";
import moment from "moment";
import UserFace from "@/components/common/UserFace";
import { isJSON,getOfficialVerifyLogo,getOfficialVerifyText } from "@/utils/util";
import { CommentItemX,CommentCItemX } from "./style";

export default memo(function CommentItem({ commengL, comment, uid, curtime }) {
  // 点击事件
  const onClick = () => {
    window.location.href = "//www.alphazone.com.cn/mobappDownload.html";
  };
  return (
    <>
      {commengL ? (
        comment.map((item, i) => {
          const {
            position,
            assess,
            face,
            uid: commentuid,
            nick_name,
            logo,
            new_logo,
            content,
            create_time,
            count,
            like,
            Children,
          } = item;
          return (
            <CommentItemX key={i} verify={new_logo}>
              <div className="firstreply-x u-f">
                <div className="ab-x">
                {getOfficialVerifyText(commentuid,position+'/'+assess)}
                </div>
                <div className="avatar-x">
                  <UserFace face={face} style={"col-1 avatar"} />
                   <div className="authority"></div>
                </div>
                <div className="col-2">
                  <div className="uname u-f-ac">
                    <span>{nick_name ? nick_name : "匿名用户"}</span>
                    {commentuid == uid && <div className="authertag">作者</div>}
                    {/* {!!logo && <img src={logo} className="userlogo" />} */}
                  </div>
                  <div className="comment">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: isJSON(content)
                          ? JSON.parse(content).content
                          : content,
                      }}
                    ></div>
                    {isJSON(content) &&
                      !!JSON.parse(content).image_slice &&
                      JSON.parse(content).image_slice.map((item, i) => {
                        return <img src={item} key={item} />;
                      })}
                  </div>
                  <div className="time-x u-f-jsb u-f-ac">
                    <div>{moment(create_time).from(moment(curtime))}</div>
                    <div className="u-f-ac">
                      <div className="count" onClick={onClick}>
                        <i className="iconfont">&#xe610;</i>
                        {count}
                      </div>
                      <div className="like" onClick={onClick}>
                        <i className="iconfont">&#xe6bc;</i>
                        {like}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {Children.length > 0 &&
                Children.map((it, k) => {
                  const {
                    position: cposition,
                    assess: cassess,
                    face: cface,
                    uid: cuid,
                    nick_name: cnick_name,
                    logo: clogo,
                    to_nick_name,
                    content: ccontent,
                    create_time: ccreate_time,
                    count: ccount,
                    like: clike,
                    new_logo:cnew_logo
                  } = it;
                  return (
                    <CommentCItemX className="u-f" key={k} verify={cnew_logo}>
                      <div className="ab-x">
                      {getOfficialVerifyText(cuid,cposition+'/'+cassess)}
                      </div>
                      <div className="avatar-x">
                        <UserFace face={cface} style={"col-1 avatar"} />
                        <div className="authority"></div>
                      </div>
                      <div className="col-2">
                        <div className="uname u-f-ac">
                          <span>{cnick_name ? cnick_name : "匿名用户"}</span>
                          {cuid == uid && <div className="authertag">作者</div>}
                          {/* {!!clogo && <img src={clogo} className="userlogo" />} */}
                          {!!to_nick_name && (
                            <span className="to-who">
                              <i className="iconfont">&#xe6bf;</i>
                              {to_nick_name}
                            </span>
                          )}
                        </div>
                        <div
                          className="comment"
                          dangerouslySetInnerHTML={{
                            __html: ccontent.content,
                          }}
                        ></div>
                        <div className="time-x u-f-jsb u-f-ac">
                          <div>
                            {moment(ccreate_time).from(moment(curtime))}
                          </div>
                          <div className="u-f-ac">
                            <div className="count" onClick={onClick}>
                              <i className="iconfont">&#xe610;</i>
                              {ccount}
                            </div>
                            <div className="like" onClick={onClick}>
                              <i className="iconfont">&#xe6bc;</i>
                              {clike}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CommentCItemX>
                  );
                })}
              {count > 2 && (
                <span className="thirdreply-x" onClick={onClick}>
                  查看全部{count}条回复<i className="iconfont">&#xe6f5;</i>
                </span>
              )}
            </CommentItemX>
          );
        })
      ) : (
        <CommentItemX className="comment-item no-comment">

          <div>快来发表你的评论吧!</div>
        </CommentItemX>
      )}
    </>
  );
});
