// import request 
import {
    getdate,
    getTopicById,
    getTopicNoteList,
  } from "@/services/articleshare";
  import { urlToLink, communityLinkableAccount } from "@/utils/util";
 // 处理数据
 const handleData = (data) => {
    for (var i = 0; i < data.length; i++) {
      var contentAll = JSON.parse(data[i].contentP);
      data[i].flag = contentAll.vid ? 1 : 0; //是否有视频
      data[i].flag1 = contentAll.image_slice ? 1 : 0; //是否有图片
      data[i].top = data[i].top == "1" ? 1 : 0; //是否置顶
      data[i].content = contentAll.content;
      data[i].images = contentAll.image_slice;
      data[i].vid = contentAll.vid;
      data[i].direction = contentAll.direction
      data[i].cover_url = contentAll.cover_url ? contentAll.cover_url : "";
      if (communityLinkableAccount(data[i].uid)) {
        data[i].content = urlToLink(data[i].content);
      }
    }
    return data;
  };
export default {
  namespace: 'mobtopicshare',
  state: {
    curtime: '',
    detail:{},
    notelist:[]
  },
  reducers: {
    setCurtime(state,action){
        return {
            ...state,
            curtime:action.data.datetime
        }
    },
    setList(state,action){
        return {
            ...state,
            notelist:handleData(action.data.data)
        }
    },
    seDetail(state,action){
        return {
            ...state,
            detail:!!action.data.data?action.data.data[0]:{}
        }
    },
  },
  effects: {
    //新增effects配置，用于异步加载数据
    *getDate({payload},{select,call, put}){
        let data = yield call(getdate); //执行请求
      yield put({
        //调用reducers中的方法
        type: 'setCurtime', //指定方法名
        data: data, //传递ajax回来的数据
      });
    },
    *loadTopicNoteList({payload},{select,call, put}){
        let data = yield getTopicNoteList(payload); //执行请求
      yield put({
        //调用reducers中的方法
        type: 'setList', //指定方法名
        data: data, //传递ajax回来的数据
      });
    },
    *loadTopicById({payload},{select,call, put}){
        let data = yield getTopicById(payload); //执行请求
      yield put({
        //调用reducers中的方法
        type: 'seDetail', //指定方法名
        data: data, //传递ajax回来的数据
      });
    }
    // *initData(params, sagaEffects) {
    //   //定义异步方法
    //   const {select,call, put } = sagaEffects; //获取到call、put方法
    //   const url = '/ds/list'; //定义请求的url
    //   let data = yield call(request, url); //执行请求
    //   yield put({
    //     //调用reducers中的方法
    //     type: 'addNewData', //指定方法名
    //     data: data, //传递ajax回来的数据
    //   });
    // },
  },
};
