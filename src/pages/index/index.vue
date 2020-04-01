<template>
  <div class="content">
    <!-- 搜索框 -->
    <div class="content-input" @click="handleSkip">
      <input type="text" placeholder="搜索精彩短片" disabled >
    </div>
    <!-- 轮播图 -->
    <!-- <swiper class="font-swiper" indicator-dots indicator-color="rgba(235,68,80)" indicator-active-color="#4daaf9">
      <swiper-item class="font-item">
        <image src="../../static/tabs/remen.png"></image>
      </swiper-item>
      <swiper-item class="font-item">
        <image src="../../static/tabs/remen.png"></image>
      </swiper-item>
      <swiper-item class="font-item">
        <image src="../../static/tabs/remen.png"></image>
      </swiper-item>
      <swiper-item class="font-item">
        <image src="../../static/tabs/remen.png"></image>
      </swiper-item>
    </swiper> -->
    <!-- 图片展示区域 -->
    <div class="font-image" v-for="(item, index) in contentList" :key="index" @click="handlePostBotton(item)"> 
      <image :src="'http://47.92.233.71:9000' + item.vCoverUrl"></image>
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
</template>

<script>
// import card from '@/components/card'
import request from '@/utils/request'

export default {
  data () {
    return {
      contentList: [],
      value: []
    }
  },

  components: {
    // card
  },

  methods: {
    async getHomeList () {
      const { data } = await request({
        url: "/api/wprogram/loadRecommend",
        method: "POST",
        data: ""
      })
      this.contentList = data
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

  created () {
    // this.getHomeList()

  },
  mounted () {
    this.getHomeList()
  },
}
</script>

<style scoped>
/* 搜索框 */
.content {
  width: 100%;
  height: 100%;
  background-color: black;
  position: fixed;
}
.content-input {
  width: 710rpx;
  height: 50rpx;
  border: 1rpx solid #ccc;
  border-radius: 10rpx;
  background-color: #ccc;
  margin: 20rpx 20rpx;
}
.content-input input {
  font-size: 24rpx;
  color: #fff;
}

/* 轮播图 */
.font-swiper {
  width: 100%;
  height: 400rpx;
  background-color: #ccc;
}
.font-item image {
  width: 100%;
  height: 400rpx;
}
/* 图片区域 */
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
  /* 设置一行文字 多出来的以。。。方式表示 */
  overflow: hidden;
  display:-webkit-box;
  text-overflow:ellipsis;
  word-break:break-all;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:1;
}
</style>
