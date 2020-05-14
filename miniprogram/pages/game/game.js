// miniprogram/pages/game/game.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topUp:0,
    xx:110,
    rights2:330,
    rights3:220,
    e3top:500,
    etop:900,
    e2top:350
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  up:function(){

    if(this.data.topUp>5){
      this.data.topUp-=15;
      this.setData({
        tops:this.data.topUp
      })
    }
    
  },
  down:function(){
    if(this.data.topUp<1000){
      this.data.topUp+=15
      this.setData({
        tops:this.data.topUp
      })
    }
    
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
    var that=this
    setInterval(function(){

      if(that.data.etop>1350){
         that.data.etop=30
      }else if(that.data.etop<0){
        that.data.etop=1300

      }else{
        that.data.etop+=Math.random()*35-17
        that.setData({
          etop:that.data.etop
        })
      }
     

      
      if(that.data.e2top>1350){
        that.data.e2top=430
     }else if(that.data.e2top<0){
       that.data.e2top=700

     }else{
       that.data.e2top+=Math.random()*45-22
       that.setData({
         e2top:that.data.e2top
       })
     }


      
     if(that.data.e3top>1350){
      that.data.e3top=430
   }else if(that.data.e3top<0){
     that.data.e3top=700

   }else{
     that.data.e3top+=Math.random()*45-23
     that.setData({
       e3top:that.data.e3top
     })
   }



      if(that.data.xx<750){
        that.data.xx+=Math.random()*45-23;  
        that.setData({
          rights:that.data.xx
        })
      }else{
        that.data.xx=20;  
        that.setData({
          rights:that.data.xx
        })
      }

      
      if(that.data.rights2<750){
        that.data.rights2+=Math.random()*45-23;  
        that.setData({
          rights2:that.data.rights2
        })
      }else{
        that.data.rights2=20;  
        that.setData({
          rights2:that.data.rights2
        })
      }

        
      if(that.data.rights3<750){
        that.data.rights3+=Math.random()*45-23;  
        that.setData({
          rights3:that.data.rights3
        })
      }else{
        that.data.rights3=20;  
        that.setData({
          rights3:that.data.rights3
        })
      }
   
    },100)

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