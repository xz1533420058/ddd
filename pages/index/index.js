// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    imglunmbo:[
      {img:"./img/DDDD.jpg",id:1},
      {img:"./img/DDDD2.jpg",id:2},
      {img:"./img/DDDD3.jpg",id:3},
    ],
    startweidu:Number,
    startjindu:Number,
    endweidu:Number,
    endjindu:Number,
    chufa:'请选择出发地',
    mudi:'请输入你的目的地',
    chufaxuanzhe:false,//选择出发地，默认false
    userboxshow:false,
    guanggaoshow:false,
  },
  // 事件处理函数
  onLoad(){
    
  },
  onReady(){
    this.setData({
      guanggaoshow:true
    })
  },
  
  chufadi(){
    console.log(1)
    var that = this;
    // var myAmapFun = new amapFile.AMapWX({key:'2e097df9b4d768ca1b5060444c1ebfe0'});
    // myAmapFun.getPoiAround({
    //   success: function(res){
    //     console.log(res)
    //     console.log(1)
    //     //成功回调
    //   },
    //   fail: function(info){
    //     //失败回调
    //     console.log(info)
    //   }
    // })
  wx.getLocation({
    altitude: 'altitude',
    success:function(res){
      // console.log(res)
      that.setData({
        startweidu:res.latitude,
        startjindu:res.longitude
      }),
      wx.chooseLocation({
        latitude: that.data.weidu,
        longitude: that.data.jindu,
        success(res){
          app.globalData.Startingaddress=res.address
          app.globalData.myjindu=res.longitude
          app.globalData.myweidu=res.latitude  

          that.setData({
            chufaxuanzhe:true,
            chufa:res.address,
            
          })
        }
      })
    } 
  })
  },
  mudidi(){
  console.log(2)
  var that = this;
  if(that.data.chufaxuanzhe==false){
    wx.showToast({
      title: '请先选择出发地',
      icon: 'none',
      duration: 1000
    })
  }
  else{
    wx.chooseLocation({
      latitude: that.data.weidu,
      longitude: that.data.jindu,
      success(res){
        app.globalData.endaddress=res.address
        app.globalData.endjindu=res.longitude
        app.globalData.endweidu=res.latitude
        that.setData({
          endweidu:res.latitude,
          endjindu:res.longitude,
        })
        wx.navigateTo({
          // url: '../map/map?endjindu='+that.data.endjindu+'&endweidu='+that.data.endweidu+'&startjindu='+that.data.startjindu+'&startweidu='+that.data.startweidu,
          url:'../map/map'
        })
        
      }
    })
  }
  
},
  usershowbox(){
    if(this.data.userboxshow==false){
      this.setData({
        userboxshow:true
      })
      
    }
    else{
      this.setData({
        userboxshow:false
      })
    }
  },
  godaijinquan(){
    wx.navigateTo({
      url: '../MyWelfare/MyWelfare',
    })
  },
  guanggaonoshow(){
    this.setData({
      guanggaoshow:false
    })
  },
  govip(){
    wx.navigateTo({
      url: '../vip/vip',
    })
  }
})
