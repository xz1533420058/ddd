// pages/vip/vip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tequan:[
      {img:'../index/img/suo.png',name:'会员尊享购',id:0},
      {img:'../index/img/suo.png',name:'会员日',id:1},
      {img:'../index/img/suo.png',name:'自己买单',id:2},
      {img:'../index/img/suo.png',name:'指定司机',id:3},
      {img:'../index/img/suo.png',name:'接驾慢必赔',id:4},
      {img:'../index/img/suo.png',name:'出行管家',id:5},
      {img:'../index/img/suo.png',name:'投诉速应',id:6},
    ],
    tequantop:[
      {img:'../index/img/suo.png',name:'周三88折',title:'臻卡',style:"background:#B0C4DE",id:0},
      {img:'../index/img/suo.png',name:'免费等候',title:'金卡',style:"background:yellow;color:#FF8C00",id:1},
      {img:'../index/img/suo.png',name:'兑换好礼',title:'白金',style:"",id:2},
      {img:'../index/img/suo.png',name:'帮人免单',title:'至尊',style:"background:#32CD32",id:3}, 
    ],
    showtequan:false,
    img:'../index/img/shangsanjiao.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  isshowtequan(){
    if(this.data.showtequan==false){
      this.setData({
        showtequan:true,
        img:"../index/img/shangsanjiao1.png"
      })
    }else{
      this.setData({
        showtequan:false,
        img:"../index/img/shangsanjiao.png"
      })
    }
  }
})