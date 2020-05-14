// miniprogram/pages/book/book.js
var app=getApp();   
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    listData:[
      {'id':0,'name':'诗经'},
      {'id':1,'name':'唐诗'},
      {'id':2,'name':'弟子规'},
      {'id':3,'name':'三字经'},
      {'id':4,'name':'增广贤文'},
      {'id':5,'name':'论语'},
      {'id':6,'name':'孟子'},
      {'id':7,'name':'中庸'},
      {'id':8,'name':'唐诗'}
    
    ],
  //  index:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title||'读书',
    })

  },
  animationed:function(){
    // wx.navigateTo({
    //   url: '../../tangshi/tangshi',
    // })

  },
  getInfo:function(){
    console.log('xxxxxxxxxxxxxxxxxxxxxx')
      // 获取用户信息
      wx.getSetting({
        success: res => {
          console.log(res)
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                console.log(res.userInfo)
                // this.setData({
                //   avatarUrl: res.userInfo.avatarUrl,
                //   getApp().globalData.userInfo: res.userInfo

                // })
              }
            })
          }
        },
        fail:res=>{
          console.log(res)
        }
      })
  },
  start:function(event){
    var url;
 
    url='../book/tangshi/tangshi'+"?title="+event.currentTarget.dataset.name;

     wx.navigateTo({
      url:url|| '../book/tangshi/tangshi?title=唐诗',
    })

      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  //  this. getInfo();
  //  wx.getUserInfo({
  //   success: res => {
  //     console.log(res.userInfo)
  //     // this.setData({
  //     //   avatarUrl: res.userInfo.avatarUrl,
  //     //   getApp().globalData.userInfo: res.userInfo

  //     // })
  //   }
  // })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})