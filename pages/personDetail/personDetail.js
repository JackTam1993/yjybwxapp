Page({
  data:{
    String1:"2",
    illness:"感冒",
    badHabit:"晚睡",
    medicalRecord:"无",
    id:"1"
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    this.setData({id:wx.getStorageSync('id')});
    console.log(this.data.id);
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: "居民详细信息", // 分享标题
      desc: '用于居民详细信息', // 分享描述
      path: '/pages/personDetail/personDetail' // 分享路径
    }
  },
  checkMedicalRecord: function () {
    wx.navigateTo({
      url: '../medicalRecord/medicalRecord'
    })
  }
})