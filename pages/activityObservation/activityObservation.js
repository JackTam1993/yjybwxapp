Page({
  data:{
        location:[
          {name:"中心城区",checked:true},
          {name:"城乡结合部"},
          {name:"农村"}
          ],
        noise:[
          {name:"轻",checked:true},
          {name:"中"},
          {name:"重"}
          ],
        health:[
          {name:"好",checked:true},
          {name:"一般"},
          {name:"差"}
          ],
        plants:[
          {name:"好",checked:true},
          {name:"一般"},
          {name:"差"}
          ],
        familyRelationship:[
          {name:"好",checked:true},
          {name:"一般"},
          {name:"差"}
          ],
        neighborRelationship:[
          {name:"好",checked:true},
          {name:"一般"},
          {name:"差"}
          ],
        amusement:[
          {name:"无",checked:true},
          {name:"有且利用"}
          ],
        guardians:[
          {name:"好",checked:true},
          {name:"一般"},
          {name:"差"}
          ],
        harmed:[
          {name:"无",checked:true},
          {name:"有"}
          ],
        threated:[
          {name:"无",checked:true},
          {name:"有"}
          ],
        legalIssue:[
          {name:"无",checked:true},
          {name:"有"}
          ]
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
   
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
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  radioChange:function(){
    console.log("jj");
  }
})