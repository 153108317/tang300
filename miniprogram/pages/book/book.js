// miniprogram/pages/test.js
var tang300=require('../../data/json.js');
var plugin = requirePlugin("WechatSI");
const innerAudioContext = wx.createInnerAudioContext();
innerAudioContext.autoplay = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"唐诗300首"

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '读书',
    })
    this.setData({
      dataList:tang300.dataList
    });

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

  },
  onspeek:function( event){
    plugin.textToSpeech({
      lang: "zh_CN",
      tts: true,
      content: event.currentTarget.dataset.s,
      success: function(res) {
          console.log("succ tts", res.filename)   
          innerAudioContext.onReady
          innerAudioContext.src =res.filename
          innerAudioContext.onPlay(() => {
            console.log('开始播放')
          })
      },
      fail: function(res) {
          console.log("fail tts", res)
      }
  });

  }

})