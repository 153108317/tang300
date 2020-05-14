//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

    this.globalData = {
      listData:[
        {'id':0,'name':'诗经'},
        {'id':1,'name':'唐诗'},
        {'id':2,'name':'弟子规'},
        {'id':3,'name':'唐诗'},
        {'id':4,'name':'唐诗'},
        {'id':5,'name':'唐诗'},
        {'id':6,'name':'唐诗'},
        {'id':7,'name':'唐诗'},
        {'id':8,'name':'唐诗'}
      
      ],
      userInfo: {},

    }
  }
})
