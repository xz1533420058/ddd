var amapFile = require('../../libs/amap-wx.js')
const app =getApp()

Page({
  data:{
    jindu:Number,
    weidu:Number,
    endjindu:Number,
    endweidu:Number,
    yuanjia:Number,
    youhui:12
    
    ,
    markers: [ //标志点的位置
      //位置0
    ],
    polyline:[],
    distance: '',
    cost: Number,
  },
  onLoad: function() {
    var that= this;
    var key = '2e097df9b4d768ca1b5060444c1ebfe0';
    var myAmapFun = new amapFile.AMapWX({key:'2e097df9b4d768ca1b5060444c1ebfe0'});
    var jindu=app.globalData.myjindu
    var   weidu=app.globalData.myweidu
    var  endjindu=app.globalData.endjindu
    var   endweidu=app.globalData.endweidu
    this.setData({
      jindu:jindu,
      weidu:weidu,
      endjindu: endjindu,
      endweidu: endweidu,
      markers: [ //标志点的位置
        //位置0
        {
          id: 0,
          iconPath: "../index/img/qidian.png",
          latitude: weidu,
          longitude: jindu,
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
      ]
    }),    
    myAmapFun.getDrivingRoute({
      origin: [that.data.jindu,that.data.weidu].join(','),
      destination: [that.data.endjindu,that.data.endweidu].join(','),
      success: function(data){
        console.log(data)
        var points = [];
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
        console.log(points)
        that.setData({
          polyline: [{
            points: points,
            color: "#0000FF",
            width: 4,
            arrowLine: true,
            borderWidth: 2,
           
            // yuanjia:Number(data.taxi_cost)+Number(youhui)
           
          }]
        });
        if(data.paths[0] && data.paths[0].distance){
          that.setData({
            distance: data.paths[0].distance + '米',
          });
        }
        
        if(data.taxi_cost){
          that.setData({
            cost:parseInt(data.taxi_cost)
          });       
        }                 
      },
     
      fail: function(info){
        
      }
    })
  
  },
  gowait(){
    wx.navigateTo({
      url: '../wait/wait',
    })
  }
  
})