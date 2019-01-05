import {HTTP} from '../utils/http.js'

class LikeModel extends HTTP{
  like(behavior,artID,category){
      let url = behavior == 'like' ? 'like':'like/cancel'
      this.request({
        url: url,
        method:'POST',
        data:{
          art_id:artID,
          type:category
        }
        // 这里没有指定success的回调函数，like也没有接收callback的回调函数，因为不需要在onlike的地方接收回调函数。
      })
    }
}
export {LikeModel}