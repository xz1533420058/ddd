// pages/quxiao/quxiao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    quxiaobox:[
      {font:"我选错了出发地或目的地",style:"",id:"1"},
      {font:"我选错了出发地或目的地",style:"",id:"2"},
      {font:"我选错了出发地或目的地",style:"",id:"3"},
      {font:"我选错了出发地或目的地",style:"",id:"4"},
      {font:"我选错了出发地或目的地",style:"",id:"5"},
      {font:"我选错了出发地或目的地",style:"",id:"6"},
      {font:"我选错了出发地或目的地",style:"",id:"7"},
      {font:"我选错了出发地或目的地",style:"",id:"8"},
      {font:"我选错了出发地或目的地",style:"",id:"9"},
      {font:"我选错了出发地或目的地",style:"",id:"10"},
      {font:"其他",style:"",id:"11"}
    ],
    quxiaoboxlen:5,
    moreshow:true
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
  liyou(e){
    // var ss = quxiaobox[e.currentTarget.dataset.pid-1].
    var chak = this.data.quxiaobox
    if( chak[e.currentTarget.dataset.pid-1].style==''){
      chak[e.currentTarget.dataset.pid-1].style="orange"
      this.setData({
        quxiaobox:chak
      })
    }
    else{
      chak[e.currentTarget.dataset.pid-1].style=""
      this.setData({
        quxiaobox:chak
      })
    }
  },
  more(){
    this.setData({
    quxiaoboxlen:11,
    moreshow:false
    })
    console.log(this.data.moreshow)
  },
  goquxiao(){
    console.log(this.data.quxiaobox)
    var liyoubox=[]
    for(var i=0;i<this.data.quxiaobox.length;i++){
      if(this.data.quxiaobox[i].style != ''){
        liyoubox.push(this.data.quxiaobox[i])  
      }
    }
    console.log(liyoubox)
    if(liyoubox.length==0){
      wx.showToast({
        title: '请选择原因',
        icon:'none'
      })
    }
    else{
      wx.showToast({
        title: '取消成功',
      })
      wx.reLaunch({
        url: '../quxiaoend/quxiaoend',
      })
    }
  },
  back(){
    wx.navigateBack({
      delta: 0,
    })
  }
})