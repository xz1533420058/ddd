// pages/MyWelfare/MyWelfare.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pbttact:1,
    color:'black',
    guoqi:[
      {name:"代价券",name2:"限代驾服务使用",time:"2019.11.22",rmb:'6',shiyong:"已使用",id:1},
      {name:"代价券",name2:"限代驾服务使用",time:"2019.11.22",rmb:'6',shiyong:"已使用",id:2},
      {name:"代价券",name2:"限代驾服务使用",time:"2019.11.22",rmb:'6',shiyong:"已使用",id:3},
    ],
    keyong:[]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      keyong:[
        {name:"代价券",name2:"限代驾服务使用",time:"2022.11.22",rmb:'6',shiyong:"可使用",id:1},
        {name:"代价券",name2:"限代驾服务使用",time:"2022.11.22",rmb:'6',shiyong:"可使用",id:2},
        {name:"代价券",name2:"限代驾服务使用",time:"2022.11.22",rmb:'6',shiyong:"可使用",id:3},
      ]
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

  },
  changetitle1(){
    if(this.data.pbttact!=1){
      this.setData({
        pbttact:1,
        color:'black',
        keyong:[
          {name:"代价券",name2:"限代驾服务使用",time:"2022.11.22",rmb:'6',shiyong:"可使用",id:1},
          {name:"代价券",name2:"限代驾服务使用",time:"2022.11.22",rmb:'6',shiyong:"可使用",id:2},
          {name:"代价券",name2:"限代驾服务使用",time:"2022.11.22",rmb:'6',shiyong:"可使用",id:3},
        ]
        
      })
    }
  },
  changetitle2(){
    if(this.data.pbttact!=2){
      this.setData({
        pbttact:2,
        color:'#A9A9A9',
        keyong:[
          {name:"代价券",name2:"限代驾服务使用",time:"2019.11.22",rmb:'6',shiyong:"已使用",id:1},
          {name:"代价券",name2:"限代驾服务使用",time:"2019.11.22",rmb:'6',shiyong:"已使用",id:2},
          {name:"代价券",name2:"限代驾服务使用",time:"2019.11.22",rmb:'6',shiyong:"已使用",id:3},
        ]
      })
    }
  }
})