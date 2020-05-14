// miniprogram/pages/test.js
var tang300=require('../../../data/json.js');
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
    console.log('onLoad')
    switch(options.title){
      case '诗经':
        tang300=require('../../../data/shijing.js');
      break
        case '唐诗':
        tang300=require('../../../data/json.js');
        break
        case '弟子规':
        tang300=require('../../../data/dizigui.js');
        break
        case '三字经':
          tang300=require('../../../data/sanzijing.js');
          break
          
        case '增广贤文':
          tang300=require('../../../data/zengguangxianwen.js');
        break
               
        case '论语':
          tang300=require('../../../data/lunyu.js');
        break
               
        case '孟子':
          tang300=require('../../../data/mengzi.js');
        break
                
        case '中庸':
          tang300=require('../../../data/zhongyong.js');
        break
          default:
            break
    }
    
    wx.setNavigationBarTitle({
      title: options.title||'读书',
    })
    this.setData({
      dataList:tang300.dataList
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')


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