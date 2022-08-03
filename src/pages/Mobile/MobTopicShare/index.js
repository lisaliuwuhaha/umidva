import React, {
  memo,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useContext
} from "react";
import "antd/dist/antd.css";
import { modalContext } from "@/utils/modalContext";
import {banXoom, numberFormat } from "@/utils/util";
import { useDocumentTitle } from "@/utils/comFunc";
import { Tabs,Spin } from "antd";
import ShareHF from "@/components/mobile/ShareHF";
import ListCon from "./list";
import { connect } from 'dva';
import { Helmet } from 'umi';
import { TopicShareX,WrapSpin} from "./style";
import Loading from "/public/images/mobile/loading.gif";
import list from "./list";
const { TabPane } = Tabs;
const MobTopicShare=memo((props)=>{
  console.log(props)
  const {dispatch,curtime,detail,notelist,location,loading,isServer}=props
  const { showPagePopup } = useContext(modalContext);
  const face = !!location.query.face
    ? location.query.face
    : "/resource/hxlogo-grey.png";
  const username = decodeURI(location.query.name);
  const id = location.query.id;
  // const isLoading = loading.models.mobtopicshare;
  // const isLoading = loading.effects["mobtopicshare/getDate"]||loading.effects["mobtopicshare/loadTopicById"]||loading.effects["mobtopicshare/loadTopicNoteList"];
  const isLoading = loading.global
  console.log(detail)
  
  
  const hRef = useRef();
  const [maxheight, setMaxheight] = useState(66);
  const [height, setHeight] = useState(66);
  useEffect(() => {
    if(!isServer){
      loadTopicNoteList(id, 0, 1, 15)
      loadTopicById(id)
      getDate()
    }
    JSON.stringify(detail) != "{}"&&setHeight(hRef.current.clientHeight)
  
    !isLoading&&(JSON.stringify(detail) == "{}"||notelist.length==0)&&showPagePopup({
      text: "内容加载出错",
      type: "",
      _time: Math.random(),
    });
    
  }, [])
  
  
  
  const {
    id: uid,
    nick_name,
    face: creatorface,
    create_time,
    name,
    views,
    count,
    memo,
    new_logo
  } = detail;

  // useDocumentTitle(name);ssr的时候改变网页标题涉及到dom操作,需要用到dynamic,用Helmet更直接

  const loadTopicNoteList=(topic, type, page, size)=>{
    dispatch({ 
      type:'mobtopicshare/loadTopicNoteList',
      payload:{ topic, type, page, size}
    })
  }
  const loadTopicById=(id)=>{
    dispatch({ 
      type:'mobtopicshare/loadTopicById',
      payload:{ id}
    })
    
  }
  const getDate=()=>{
    dispatch({ 
      type:'mobtopicshare/getDate'
    })
  }
  // 切换tab
  const changeTab = async (tab) => {
    loadTopicNoteList(id, tab, 1, 15)
  };
 
  const antIcon = (
    <img src={Loading}/>
  );

  return (
    <WrapSpin spinning={!!isLoading} indicator={antIcon}>
        <Helmet>
        <title>{name}</title>
      </Helmet>
      <ShareHF face={face} username={username} dec="话题" />
      <TopicShareX maxheight={maxheight} verify={new_logo}>
        {JSON.stringify(detail) != "{}" && (
          <div className="detail-con">
            <div className="detailtop-con">
              <div className="suber-info-x u-f-ac">
                <div className="upavatar-x">
                  <div
                    className="avatar-x"
                    style={{
                      backgroundImage: `url(${"//www.alphazone.com.cn/" + creatorface
                        })`,
                    }}
                  >
                    <div className="authority"></div>
                  </div>
                </div>
                <div>
                  <div className="username">{nick_name}</div>
                  <p className="time">
                    <span>话题发布者</span>
                    {create_time.substring(0, 16)}
                  </p>
                </div>
              </div>
              <div className="topicname-x">
                <span>话题</span>#{name}#
              </div>
              <div className="refinfo-x u-f-ac">
                浏览 {numberFormat(Number(views))}
                <span></span> 内容 {numberFormat(Number(count))}
              </div>
            </div>
            <div className="bt-dec-x">
              <div className="dec-x">
                <div className="dec" ref={hRef}>
                  {memo}
                </div>
              </div>
              <div
                className={"blur-x iconfont" + (height > 66 ? "" : " hide")}
                onClick={() => {
                  setMaxheight(hRef.current.clientHeight);
                  setHeight(66);
                }}
              ></div>
            </div>
          </div>
        )}
        <Tabs defaultActiveKey="0" onChange={(tab) => changeTab(tab)}>
          <TabPane tab={<span>热门</span>} key="0" data-type="0">
            <ListCon list={notelist} name={username} face={face} curtime={curtime} />
          </TabPane>
          <TabPane tab={<span>最新</span>} key="1" data-type="1">
            <ListCon list={notelist} name={username} face={face} curtime={curtime} />
          </TabPane>
          {id == 1 && (
            <TabPane tab={<span>创作者</span>} key="2" data-type="2">
              <ListCon list={notelist} name={username} face={face} curtime={curtime} />
            </TabPane>
          )}
        </Tabs>
      </TopicShareX>
      </WrapSpin>
  );
});
MobTopicShare.getInitialProps = async (ctx) => {
  const { store, isServer, history, match, route } = ctx;
  if (!isServer) { return {isServer} }
  const id=history.location.query.id
  await store.dispatch({ 
    type:'mobtopicshare/getDate'
  })
  await store.dispatch({ 
    type:'mobtopicshare/loadTopicNoteList',
    payload:{ topic:id, type:0, page:1, size:15}
  })
  await store.dispatch({ 
    type:'mobtopicshare/loadTopicById',
    payload:{ id}
  })
  return store.getState();
};
const mapStateToProps=(state) => {
  return {
    detail:state.mobtopicshare.detail,
    notelist:state.mobtopicshare.notelist,
    curtime:state.mobtopicshare.curtime,
    loading:state.loading  //传递全局loading状态
  };
}
export default connect(mapStateToProps)(MobTopicShare);