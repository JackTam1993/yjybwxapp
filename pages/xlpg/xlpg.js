// pages/xlpg/xlpg.js
import newData from '../../utils/getNewData.js'
Page({
  data:{
    text:"焦虑自评量表",
    testTxt:[ {
        id:1,
        text:"我觉得比平时容易紧张和着急"
       
    },{
        id:2,
        text:"我无缘无故地感到害怕"
       
    },{
        id:3,
        text:"我容易心理烦乱和感到惊恐"
       
    },{
        id:4,
        text:"我觉得可能将要发疯"
    },{
        id:5,
        text:"我觉得一切都很好"
    },{
        id:6,
        text:"我手脚发抖打颤"
    },{
        id:7,
        text:"我容易感觉衰弱和乏力"
    }],
    // t:[],
    items: [
      {name: '1', value: '没有很少'},
      {name: '2', value: '有时'},
      {name: '3', value: '经常'},
      {name: '4', value: '总是这样'}
    ]
    
  },
  onLoad:function(params){
    // 页面初始化 options为页面跳转所带来的参数
    // var _this = this;
    // var param = {
    //   API_URL:"http://127.0.0.1:81/utils/xlpg.json"
    // };
    // newData.result(param).then(function(data){
    //   var datas = data.data.data;
    //    console.log( datas);
    //   _this.data.t = datas;
    //    console.log(_this.data.t);
    // }).catch(function(e){
    //   _this.setData=({
    //      loadtxt: '数据加载异常',
    //      loading: false
    //   });
    // });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  }
})
