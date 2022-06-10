import React, { memo,useEffect } from 'react'
import { connect } from 'dva';
import { Button } from 'antd';

const namespace = 'list'


const List = memo((props) => {
  const { dataList, maxNum,dispatch } = props
  useEffect(() => {
    init()
  }, [])
  
  const add=()=>{
    dispatch({ //通过dispatch调用model中定义的函数,通过type属性,指定函数命名,格式:namespace+'/函数名'
      type:namespace+'/addNewData'
    })
  }
  const init=()=>{
    dispatch({ //通过dispatch调用model中定义的函数,通过type属性,指定函数命名,格式:namespace+'/函数名'
      type:namespace+'/initData'
    })
  }
  return (
    <>
    <ul>
      {

        dataList.map((item, index) => {
          return <li key={index}>{item}</li>
        })
      }
    </ul>
    <Button onClick={()=>add()}>点我</Button>
    </>
    


  )
})

// 说明:第一个回调函数,作用:将page层和model层进行链接,返回model中的数据
//并且,将返回的数据,绑定到this.props

export default connect((state) => {
  return {
    dataList: state[namespace].data,
    maxNum: state[namespace].maxNum
  }
})(List);
