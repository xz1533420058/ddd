// pages/waitdriver/waitdriver.js
var amapFile = require('../../libs/amap-wx.js')
const app=getApp()
var points = []
var points2=[]
var s=0
var w=0
let sijiluxian1=null
let sijiluxian2=null
Page({
  /**
   * 页面的初始数据
   */
  data: {
    jindu:Number,
    weidu:Number,
    endjindu:Number,
    endweidu:Number,
    yuanjia:Number,
    distance:'',
    markers: [ //标志点的位置
      //位置0
    ],
    driver:{ driverjundu:103.943224427,
    driverweidu:30.766577854},
    polyline:[],
    polyline1:[],
    cost: Number,
    julidanwei:'公里',
    shijidaokefu:'预计还需',
    shijian:'',
    shijijuning:'司机据您',
    shijidaoqidian:true,
    maphight:null,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that= this;
    var key = '2e097df9b4d768ca1b5060444c1ebfe0';
    var myAmapFun = new amapFile.AMapWX({key:'2e097df9b4d768ca1b5060444c1ebfe0'});
    var gojindu=app.globalData.myjindu
    var goweidu=app.globalData.myweidu
    var endjindu=app.globalData.endjindu
    var endweidu=app.globalData.endweidu
    // var gojindu=103.90256
    // var goweidu=30.79589
    // var endjindu= 103.943224427
    // var endweidu=30.766577854
    var driverjundu=that.data.driver.driverjundu
    var driverweidu=that.data.driver.driverweidu
    that.setData({
      markers: [ //标志点的位置
        //位置0
        {
          id: 0,
          iconPath: "../index/img/qidian.png",
          latitude:goweidu,
          longitude: gojindu,
          width: 50,
          height: 50
        },
        //位置1
        {
          id: 1,
          iconPath: "../index/img/zhongdian.png",
          latitude:endweidu,
          longitude:endjindu,
          width: 50,
          height: 50
        }, 
        {
          id: 2,
          iconPath: "../index/img/qiche.png",
          latitude:driverweidu,
          longitude:driverjundu,
          width: 25,
          height: 25
        },       
      ],
      jindu:gojindu,
      weidu:goweidu,
      
    })
    
    myAmapFun.getDrivingRoute({
      origin: [driverjundu,driverweidu].join(','),
      destination: [gojindu,goweidu].join(','),
      success: function(data){
        console.log(data)
        if(data.paths && data.paths[0] && data.paths[0].steps){
          var steps = data.paths[0].steps;
          for(var i = 0; i < steps.length; i++){
            var poLen = steps[i].polyline.split(';');
            for(var j = 0;j < poLen.length; j++){
              points.push({
                latitude: parseFloat(poLen[j].split(',')[1]),
                longitude: parseFloat(poLen[j].split(',')[0])
              })
            } 
          }
        }
        // console.log(points.length)
        
          
        // for(var s= 0;s<points.length;s++){
        //   setInterval(function(){
        //     that.setData({
        //       driverjundu:points[s].longitude,
        //       driverweidu:points[s].latitude
        //     })
        //     console.log(points[s].longitude)
            
        //   }
        //    , 10000);
        // }
        // that.setpoints();
        console.log("上面开始")
        sijiluxian1=setInterval(function(){
          if(s==points.length-1){
            clearInterval(sijiluxian1)
            that.setpointss()
            wx.showToast({
              title: '司机已到达您的位置，请及时沟通上车',
              icon: 'none',
              duration: 1000
            })
          }
          else{
          that.setData({
            markers: [ //标志点的位置
              // 位置0
              {
                id: 0,
                iconPath: "../index/img/qidian.png",
                latitude:goweidu,
                longitude: gojindu,
                width: 50,
                height: 50
              },
              //位置1
              // {
              //   id: 1,
              //   iconPath: "../index/img/zhongdian.png",
              //   latitude:endweidu,
              //   longitude:endjindu,
              //   width: 50,
              //   height: 50
              // }, 
              {
                id: 2,
                iconPath: "../index/img/qiche.png",
                latitude:points[s].latitude,
                longitude:points[s].longitude,
                width: 25,
                height: 25
              },       
            ],
          })
          myAmapFun.getDrivingRoute({
            origin: [points[s].longitude,points[s].latitude].join(','),
            destination: [gojindu,goweidu].join(','),
            success(data){
              if(data.paths[0] && data.paths[0].distance){
                var shijian1 = data.paths[0].distance/300
                if(data.paths[0].distance>=1000){
                  var juli = data.paths[0].distance/1000
                  console.log(juli)
                  that.setData({
                  distance: juli.toFixed(1),
                  julidanwei:'公里',
                  shijian:shijian1.toFixed(0)
                });
                }
                else{
                  that.setData({
                    distance: data.paths[0].distance,
                    julidanwei:'米',
                    shijian:shijian1.toFixed(0)
                  });
                }
                
              }
            }
          }
          )
          
          // setTimeout(this.setpointss, 1000)
          s++
          }     
    } ,1000)
    
      
    console.log("上面结束")
        // that.setData({
        //   polyline: [{
        //     points: points,
        //     color: "#0000FF",
        //     width: 4,
        //     arrowLine: true,
        //     borderWidth: 2,
           
        //     // yuanjia:Number(data.taxi_cost)+Number(youhui)
           
        //   }]
        // });
        // if(data.paths[0] && data.paths[0].distance){
        //   that.setData({
        //     distance: data.paths[0].distance + '米',
        //   });
        // }
        
        // if(data.taxi_cost){
        //   that.setData({
        //     cost:parseInt(data.taxi_cost)
        //   });       
        // }                 
      },
     
      fail: function(info){
        
      }
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
    clearInterval(sijiluxian1)
    clearInterval(sijiluxian2)
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
  godriver(){
    wx.navigateTo({
      url: '../driver/driver',
    })
  },
  quxiao(){
    wx.showModal({
      title:'匿名联系司机',
      content:'为了保护您的隐私，使用15656565654匿名拨打',
      cancelText:"关闭",
      confirmText:"联系司机",
      confirmColor: '#EE7621',
      success(res){
        if(res.confirm){
        }else if(res.cancel){
          wx.showToast({
            title: '为您接通',
            icon:'none',
            duration:2000,
          })
        }
      }
    })
  },
  quxiao(){
    wx.showModal({
      title:'您要取消订单吗',
      content:'正在为您安排司机，确定不要再等一下吗？',
      cancelText:"取消订单",
      confirmText:"暂不取消",
      confirmColor: '#EE7621',
      success(res){
        if(res.confirm){
        }else if(res.cancel){
          wx.showToast({
            title: '取消成功 为您返回主页',
            icon:'none',
            duration:2000,
          })
          wx.redirectTo({
            url: '../index/index',
          })
        }
      }
    })
  },
  gobaojin(){
    wx.navigateTo({
      url: '../baojin/baojin',
    })
  },
  setpointss(){
    var that= this;
    var key = '2e097df9b4d768ca1b5060444c1ebfe0';
    var myAmapFun = new amapFile.AMapWX({key:'2e097df9b4d768ca1b5060444c1ebfe0'});
    var gojindu=app.globalData.myjindu
    var goweidu=app.globalData.myweidu
    var endjindu=app.globalData.endjindu
    var endweidu=app.globalData.endweidu
    // var gojindu=103.90256
    // var goweidu=30.79589
    // var endjindu= 103.943224427
    // var endweidu=30.766577854
    that.setData({
      shijijuning:"司机已行驶",
      shijidaokefu:'已行驶',
      shijidaoqidian:false,
      maphight:'height: 68vh'
    })
    myAmapFun.getDrivingRoute({
      origin: [gojindu,goweidu].join(','),
      destination: [endjindu,endweidu].join(','),
      success: function(data){
        if(data.paths && data.paths[0] && data.paths[0].steps){
          var steps = data.paths[0].steps;
          for(var i = 0; i < steps.length; i++){
            var poLen = steps[i].polyline.split(';');
            for(var j = 0;j < poLen.length; j++){
              points2.push({
                latitude: parseFloat(poLen[j].split(',')[1]),
                longitude: parseFloat(poLen[j].split(',')[0])
              })
            } 
          }
        }
        console.log(points2)
        var points4=[points2[w]]
        console.log("下面开始")
      sijiluxian2 =  setInterval(function(){
        if(w==points2.length-1){
          clearInterval(sijiluxian2)
          wx.showToast({
            title: '司机已到达目的地，请及付款',
            icon: 'none',
            duration: 1000
          })
          wx.navigateTo({
            url: '../pay/pay',
          })
        }
        else{
          points4.push(points2[w])
          that.setData({
            polyline1: [{
              points: points4,
              color: "#0000FF",
              width: 4,
              arrowLine: true,
              borderWidth: 2,
              // yuanjia:Number(data.taxi_cost)+Number(youhui)
            }],
            markers: [ //标志点的位置
                // 位置0
                {
                  id: 0,
                  iconPath: "../index/img/qidian.png",
                  latitude:goweidu,
                  longitude: gojindu,
                  width: 50,
                  height: 50
                },
                // 位置1
                {
                  id: 1,
                  iconPath: "../index/img/zhongdian.png",
                  latitude:endweidu,
                  longitude:endjindu,
                  width: 50,
                  height: 50
                }, 
                {
                  id: 2,
                  iconPath: "../index/img/qiche.png",
                  latitude:points2[w].latitude,
                  longitude:points2[w].longitude,
                  width: 25,
                  height: 25
                },       
              ],
          })
          myAmapFun.getDrivingRoute({
            origin: [points2[w].longitude,points2[w].latitude].join(','),
            destination: [gojindu,goweidu].join(','),
            success(data){
              if(data.paths[0] && data.paths[0].distance){
                var shijian1 = data.paths[0].distance/300
                if(data.paths[0].distance>=1000){
                  var juli = data.paths[0].distance/1000
                  console.log(juli)
                  that.setData({
                  distance: juli.toFixed(1),
                  julidanwei:'公里',
                  shijian:shijian1.toFixed(0)
                });
                }
                else{
                  that.setData({
                    distance: data.paths[0].distance,
                    julidanwei:'米',
                    shijian:shijian1.toFixed(0)
                  });
                }
              }
            }
          }
          )
          w++
        }
      } ,2000)
      console.log("下面结束")
      },
      fail: function(info){  
      }
    })
  }
})