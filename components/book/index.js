// components/book/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //  title:String,
    //  num:Number,
    //  author:String,
    //  image:String
     book:Object
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
    clickBook:function(e){
      let bId = this.properties.book.id
      console.log(bId);
      
      this.triggerEvent('bookItem',{bId:bId},{})
    }
  }
})
