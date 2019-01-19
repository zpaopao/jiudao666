// components/mark/index.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots:true
  },
  externalClasses:['tag-class'],//外部样式类
  properties: {
    content:String
    // nums:Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function () {
      this.triggerEvent('taping', { content: this.properties.content},{})
    }
  }
})
