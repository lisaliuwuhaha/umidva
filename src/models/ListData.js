export default {
  namespace: 'list',
  state: {
    data: [1, 2, 3],
    maxNum: 3,
  },
  reducers: { //定义的一些函数
    'addNewData'(state){ //state:指的是更新之前的状态数据
        let maxNum=state.maxNum+1,newArr=[...state.data,maxNum]
        //通过return返回更新后的数据
        return {
            data:newArr,
            maxNum
        }
    },
    
  },
};
