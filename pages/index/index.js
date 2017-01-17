//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    id:""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  confirm:function () {
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    console.log(this.data.id)
    // if(reg.test(this.data.id)){
      if(true){
      wx.setStorageSync('id', this.data.id);
      wx.navigateTo({
        url: '../personDetail/personDetail'
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '输入身份证号码有误，请重新输入',
        showCancel:false,
        success: function(res) {
        
        }
})
    }
    
  },
  listenerIdInput:function(e){
    this.data.id = e.detail.value
  }
})