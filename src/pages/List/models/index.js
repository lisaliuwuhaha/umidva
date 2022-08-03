import request from '@/utils/request';
export default {
  namespace: 'list',
  state: {
    data: [],
    maxNum: 1,
  },
  reducers: {
    //定义的一些函数
    addNewData(state,result) {
      //state:指的是更新之前的状态数据
    //   result:请求到的数据
      if(result.data){ //如果state中存在data数据,直接返回,在做初始化的操作
          return result.data
      }
      let maxNum = state.maxNum + 1,
        newArr = [...state.data, maxNum];
      //通过return返回更新后的数据
      return {
        //更新状态值
        data: newArr,
        maxNum,
      };
    },
  },
  effects: {
    //新增effects配置，用于异步加载数据
    *initData(action, sagaEffects) {
      //定义异步方法
      const { call, put } = sagaEffects; //获取到call、put方法
      const url = 'http://192.168.0.56:8089/vmock/ds/list'; //定义请求的url
      let data = yield call(request, url); //执行请求
      yield put({
        //调用reducers中的方法
        type: 'addNewData', //指定方法名
        data: data, //传递ajax回来的数据
      });
    },
  },
};