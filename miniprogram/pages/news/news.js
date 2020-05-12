// miniprogram/pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // T1348649580692:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.setNavigationBarTitle({
      title: '今日新闻',
    })
    wx.request({
      url: 'https://c.m.163.com/nc/article/headline/T1348649580692/0-40.html',
      success(data) {
        if (data.data) {
          that.setData({
            T1348649580692: data.data.T1348649580692,
          });
        }


      },
      fail(data) {
        console.log(data);
      }

    })

  },
  towebpage:(event)=>{
    console.log("xxxxx"+event.currentTarget.dataSet)
    wx.navigateTo({
      url: '/pages/webpage/web?url='+event.currentTarget.dataSet.url,
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