import React, { memo, useState, useEffect, useContext } from "react";
import moment from "moment";
import UserFace from "@/components/common/UserFace";
import PlayerHandle from "@/components/player";
import { modalContext } from "@/utils/modalContext";
import { urlToLink, numberFormat,getOfficialVerifyLogo,communityLinkableAccount,getOfficialVerifyText} from "@/utils/util";
import CommentPage from "../commentPage";
import { useDocumentTitle } from "@/utils/comFunc";
import { viewnote } from "@/services/articleshare";
import { ArticleShareWrapper } from "./style";

export default memo(function ArticleShareTemp({ id, curtime }) {
  const [noteDetail, setNoteDetail] = useState({});
  const { showPagePopup } = useContext(modalContext);
  const {
    title,
    category,
    update_time,
    uid,
    content: content1,
    face,
    nick_name,
    name,
    logo,
    views,
    count,
    like,
    new_logo,
    assess,
    position
  } = noteDetail;
  let contentAll = !!content1 && JSON.parse(content1);
  let { content, direction, vid, image_slice, cover_url } = contentAll;
  let flag = vid ? 1 : 0;

  useEffect(() => {
    getNote();
  }, []);
  useDocumentTitle(title);
  //获取评论列表
  const getNote = () => {
    viewnote({ id }, false)
      .then((res) => {
        setNoteDetail(res.data[0]);
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
  // 点击事件
  const onClick = () => {
    window.location.href = "//www.alphazone.com.cn/mobappDownload.html";
  };
  return (
    <ArticleShareWrapper verify={new_logo}>
      <div className={`detail-con ${category == 11 ? "shequbox" : "box"}`}>
        {!!noteDetail && !!category ? (
          <>
            {category != 11 ? (
              <>
              <div className="info-user u-f-ac u-f-jsb">
                  <div className="u-f-ac">
                    <div className="info-user-avatar-x">
                      <UserFace face={face} style={"info-user-avatar"} />
                      <div className="authority"></div>
                    </div>

                    <div>
                      <div className="username u-f-ac">
                        <span>
                          {!!nick_name ? nick_name : !!name ? name : "匿名用户"}
                        </span>
                        {/* {!!logo && <img src={logo} className="userlogo" />} */}
                      </div>
                      <p className="time">
                          {!!position&&<span>{position}/{assess?assess:'--'}</span>}
                          {moment(update_time).from(moment(curtime))}
                        </p>
                    </div>
                  </div>
                  {(!!nick_name || !!name) && (
                    <div className="follow" onClick={onClick}>
                      关注
                    </div>
                  )}
                </div>
                <div className="note-title">{title}</div>
                <div className="note-detail">
                  <div
                    style={{ width: "100%", whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: communityLinkableAccount(uid) ? urlToLink(content) : content,
                    }}
                  ></div>
                  {!!flag && (
                    <PlayerHandle
                      vid={vid}
                      coverUrl={cover_url}
                      direction={direction}
                    />
                  )}
                </div>
                <div className="disclaimer">
                  免责声明：以上内容仅代表作者的个人观点，不代表火象的任何立场，不构成任何操作建议。火象亦无法证实上述内容的真实性、准确性和原创性，在作出任何投资决定前，投资者应更具自身情况考虑投资产品相关的风险因素，对此火象不做任何保证和承诺。
                </div>
                <div className="bottom-info-x u-f-jsb u-f-ac">
                    <div className="views">
                      <i className="iconfont">&#xe6ef;</i>
                      {numberFormat(Number(views))}
                    </div>
                    <div className="count" onClick={onClick}>
                      <i className="iconfont">&#xe610;</i>
                      {numberFormat(Number(count))}
                    </div>
                    <div className="like" onClick={onClick}>
                      <i className="iconfont">&#xe6bc;</i>
                      {numberFormat(Number(like))}
                    </div>
                  </div>
              </>
            ) : (
              <>
                <div className="info-user u-f-ac u-f-jsb">
                  <div className="u-f-ac">
                    <div className="info-user-avatar-x">
                      <UserFace face={face} style={"info-user-avatar"} />
                      <div className="authority"></div>
                    </div>

                    <div>
                      <div className="username u-f-ac">
                        <span>
                          {!!nick_name ? nick_name : !!name ? name : "匿名用户"}
                        </span>
                        {/* {!!logo && <img src={logo} className="userlogo" />} */}
                      </div>
                      <p className="time">
                      {!!position&&<span>{position}/{assess?assess:'--'}</span>}
                          {moment(update_time).from(moment(curtime))}
                        </p>
                    </div>
                  </div>
                  {(!!nick_name || !!name) && (
                    <div className="follow" onClick={onClick}>
                      关注
                    </div>
                  )}
                </div>
                <div className="note-title">{title}</div>
                <div className="info-con">
                  <div className="note-detail">
                    <div
                      style={{ width: "100%", whiteSpace: "pre-line" }}
                      dangerouslySetInnerHTML={{
                        __html: communityLinkableAccount(uid) ? urlToLink(content) : content,
                      }}
                    ></div>
                    {!!image_slice && (
                      <div className="img-x u-f">
                        {image_slice.map((item, i) => {
                          return (
                            <div
                              className="img-item"
                              key={item}
                              style={{
                                backgroundImage: `url(${item})`,
                                width:
                                  image_slice.length == 2 ||
                                  image_slice.length == 4
                                    ? "calc(40vw - 3rem)"
                                    : image_slice.length !=1&&
                                      "calc(33.33vw - 2.3rem)",
                                height:
                                  image_slice.length == 2 ||
                                  image_slice.length == 4
                                    ? "calc(40vw - 3rem)"
                                    : image_slice.length !=1&&
                                      "calc(33.33vw - 2.3rem)",
                                marginRight:
                                  image_slice.length == 2 ||
                                  image_slice.length == 4
                                    ? "2.4rem"
                                    : (i + 1) % 3 == 0
                                    ? 0
                                    : "1.6rem",
                              }}
                            ></div>
                          );
                        })}
                      </div>
                    )}
                    {!!flag && (
                      <PlayerHandle
                        coverUrl={cover_url}
                        vid={vid}
                        direction={direction}
                      />
                    )}
                  </div>
                  <div className="disclaimer">
                    免责声明：以上内容均由用户个人提供，仅代表作者的个人观点，可能包含第三方制作的内容，故不受火象的直接控制，仅供参考。不构成且不得被用作或被认为是购买或出售任何金融产品或服务的要约，推荐或招揽；也不构成对未来可能的市场价格表现的预测。投资者应根据自身情况合理管理相关风险。
                  </div>
                  {/* <div className="hrling"></div> */}
                  <div className="bottom-info-x u-f-jsb u-f-ac">
                    <div className="views">
                      <i className="iconfont">&#xe6ef;</i>
                      {numberFormat(Number(views))}
                    </div>
                    <div className="count" onClick={onClick}>
                      <i className="iconfont">&#xe610;</i>
                      {numberFormat(Number(count))}
                    </div>
                    <div className="like" onClick={onClick}>
                      <i className="iconfont">&#xe6bc;</i>
                      {numberFormat(Number(like))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <div className="err">
            <i className="iconfont icon-none">&#xe6a6;</i>暂无内容
          </div>
        )}
      </div>
      <CommentPage id={id} uid={uid} cat={category} curtime={curtime} />
    </ArticleShareWrapper>
  );
});
