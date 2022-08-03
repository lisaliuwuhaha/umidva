import React, {
  memo,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import moment from "moment";
// import PlayerHandle from "@/components/player";
import AsyncPlayerHandle from "@/components/asyncplayer"
import {numberFormat,getOfficialVerifyText} from "@/utils/util";
import {
  getdate,
  getTopicById,
  getTopicNoteList,
} from "@/services/articleshare";
import { ListItem } from "./style";
export default memo(function ListCon({ list,name,face,curtime}) {
  console.log(list);
  useEffect(() => {}, []);
  const hrefChange=(id)=>{
    console.log(id)
    window.location.href="/mobile/mobArticleShare?face="+face+"&name="+name+"&id="+id
  }
  return (
    <>
      {list.length > 0 ? (
        list.map((item, i) => {
          const {id,top,user_face,nick_name,name,logo,create_time,title,content,flag1,images,flag,vid,cover_url,topic_name,position,assess,direction,count,views,like,uid,new_logo}=item
          return <ListItem verify={new_logo} data-id={id} key={i} onClick={()=>hrefChange(id)}>
          {!!top&&<div className="istop">置顶</div>}
      <div className="list-itemcontent-x">
        <div className="info-user u-f-ac u-f-jsb">
          <div className="u-f-ac">
            <div className="info-user-avatar-x">
            {!!user_face?<div className="info-user-avatar" style={{backgroundImage: `url(${
                        "//www.alphazone.com.cn/" + user_face})`}}></div>:<div className="info-user-avatar"></div>}
             <div className="authority"></div>
            </div>
            <div>
              <div className="username u-f-ac">
                <span>
                {
                  !!nick_name?nick_name:(name?name:'匿名用户')
                }
                </span>
                {/* {!!logo&&<img src={logo} className="userlogo"></img>} */}
              </div>
              <p className="time"><span>{position?position:'--'+'/'+assess?assess:'--'}</span>{ moment(create_time).from(moment(curtime))}</p>
            </div>
          </div>
          {nick_name != name&&<div className="follow">关注</div>}
        </div>
        <div className="note-title">{title}</div>
        <div className="info-con">
          <div className="note-detail">
          
        <div className="conten-x" dangerouslySetInnerHTML={{__html:content}}></div>
              {
                !!flag1&&<div className="img-x u-f">
                {images.length>0&&images.map((item,i)=>{
                  return <div className="img-item" style={{backgroundImage:`url(${item})`,
                                width:
                                images.length == 2 ||
                                images.length == 4
                                    ? "calc(40vw - 3rem)"
                                    :(images.length !=1&&"calc(33.33vw - 2.3rem)") ,
                                height:
                                images.length == 2 ||
                                images.length == 4
                                    ? "calc(40vw - 3rem)"
                                    : (images.length !=1&&"calc(33.33vw - 2.3rem)"),
                                marginRight:
                                images.length == 2 ||
                                images.length == 4
                                    ? "2.4rem"
                                    : (i+1) % 3 == 0
                                    ? 0
                                    : "1.6rem",}} key={i}></div>
                })}
            </div>
              }
              {
                !!flag&&<AsyncPlayerHandle
                      vid={vid}
                      coverUrl={cover_url}
                      direction={direction}
                    />
              }
          </div>
          <div className="bottom-info-x">
            <span></span>{topic_name}
          </div>
        </div>
      </div>
      <div className="bottom-info-x u-f-jsb u-f-ac">
                    <div className="views">
                      <i className="iconfont">&#xe6ef;</i>
                      {numberFormat(Number(views))}
                    </div>
                    <div className="count">
                      <i className="iconfont">&#xe610;</i>
                      {numberFormat(Number(count))}
                    </div>
                    <div className="like">
                      <i className="iconfont">&#xe6bc;</i>
                      {numberFormat(Number(like))}
                    </div>
                  </div>
    </ListItem>
        })
      ) : (
        <div className="list-item no-comment"></div>
      )}
    </>
  );
});
