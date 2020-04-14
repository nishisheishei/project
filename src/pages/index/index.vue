<template>
  <div class="content">
    <div class="content-input" @click="handleSkip">
      <input type="text"  disabled placeholder="搜索" >
    </div>

    <div style="margin-top: 20rpx;">
        <div class="font-image" v-for="(item, index) in contentList" :key="index" @click="handlePostBotton(item)"> 
          <image :src="'https://shijiewangguo.cn:9000' + item.vCoverUrl"></image>
          <div class="font-whole">
            <div class="font-span">
              <span></span>
              <span>{{ item.vTimeLength }}</span>
              <span>#{{ item.vTypeName }}</span>
            </div>
            <div class="font-field">
              <span>{{ item.vName }}</span>
            </div>
          </div>
        </div>
    </div>
  </div>
  
</template>

<script>
// import card from '@/components/card'
import request from '@/utils/request'

export default {
  data () {
    return {
      contentList: [],
      value: [],
      page: 1,
      scrollHeight: ''
    }
  },

  components: {
    // card
  },
  created () {},
  mounted () {
    this.getHomeList()
    // this.loading()
  },
  // 下拉刷新 //  "enablePullDownRefresh": true,
  // 上拉加载
  onReachBottom() {
    this.page++
    this.getHomeList()
  },

  methods: {
    // loading () {
    //   let data  = [ { name: "qw", age: 12} ,{ name: "ls", age: 12} ]
    //   let arr = [ { name: 'xioa', age : 34 } ]
    //   // data.push(arr)
    //   for(let i = 0; i < arr.length; i++) {
    //     data.push(arr[i])
    //   }
    //   console.log(data)

    // },
    async getHomeList () {
      try{
        const { data } = await request({
          url: "/api/wprogram/loadRecommend",
          method: "POST",
          data: {
            page: this.page
            // rows: 3
          }
        })
        let arrList = []
        arrList = data
        for(var i = 0; i < arrList.length; i++) {
          this.contentList.push(arrList[i])
        }
        // this.contentList = data
      } catch (err) {
        console.log(err)
      }
    },
    handlePostBotton(value) {
      let url = '/pages/skeleton/main?param=' + JSON.stringify(value)
      mpvue.navigateTo({
        url: url,
      })
    },
    handleSkip() {
      let url = '/pages/search/main'
      mpvue.navigateTo({
        url: url
      })
    }
  },
}
</script>

<style scoped lang="less">

/* 搜索框 */
 .content {
  width: 100%;
  height: 100%;
  background-color: black;
  padding-top: 20rpx;
}
.content-input {
  width: 710rpx;
  height: 50rpx;
  border: 1rpx solid #ccc;
  border-radius: 10rpx;
  background-color: #ccc;
  margin: 0 20rpx;
  // padding-top: 20rpx;
}
.content-input input {
  font-size: 24rpx;
  color: #fff;
  // margin-left: 20rpx;
}



.font-image {
  position: relative;
  height: 400rpx;
  box-sizing: border-box;
}
.font-image image {
  width: 100%;
  height: 400rpx;
}
.font-whole {
  bottom: 40rpx;
  position:absolute;
}
.font-whole .font-span {
  margin-left: 40rpx; 
}
.font-whole .font-span  span{
  margin-right: 10rpx;
  color: #fff;
  font-size: 24rpx;
}

.font-whole .font-field span {
  margin-top: 10rpx;
  margin: 0 44rpx;
  color: #fff;
  // 设置一行文字 多出来的以。。。方式表示 
  overflow: hidden;
  display:-webkit-box;
  text-overflow:ellipsis;
  word-break:break-all;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:1;
}

.content .scroll_view {
  height: 100%;
} 
</style>
