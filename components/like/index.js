// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean
    },
    count:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      //count:9,
      // like:true,
      // count1:1,
      // count2:0,
      likeImage:"images/like.png",
      unlikeImage:"images/like@dis.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(){
      let like = this.properties.like
      let count = this.properties.count
      count = like ? count-1 : count+1;
       this.setData({
         count:count,
         like:!like
       })
      //  激活自定义组件：
      let behavior = this.properties.like ? 'like' : 'cancel'
      this.triggerEvent('like',{behavior:behavior},{})
    }
  }
})
