<template>
  <div class="ware-search">
      <div class="nav-input">
        <input type="text" placeholder="搜索精彩短片" v-model="content">
        <button @click="handleSearchData">搜索</button>
      </div>
      <!-- <div class="hot-topic">
        <div>
          <div class="hot-narage">
            <span>热门搜索</span>
          </div>
          <div class="hot-buttom">
            <span>123</span>
          </div>
        </div>
      </div> -->
      <div v-if="hidden" class="font-hidd">
        <div class="font-image" v-for="(item, index) in moreListData" :key="index" @click="handleMoreBotton(item)"> 
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
import request from "@/utils/request"

export default {
  data () {
    return {
      content: '',
      hidden: false,
      moreListData: []
    }
  },
  methods: {
    async handleSearchData() {
      if(this.content == '' || this.content == undefined) {
        mpvue.showToast({
          title: '请输入查询内容',
          icon: 'none',
          duration: 2000
        })
      }else {
        let vName = this.content
        const { data } = await request({
          url: '/api/wprogram/findVoideByName',
          method: 'POST',
          data: {
            vName
          }
        })
        let moreListData = data
        if(moreListData.length == 0) {
          mpvue.showToast({
            title: '为查询到相关内容',
            icon: 'none',
            duration: 2000
          })
        } else {
          this.hidden = true
          this.moreListData = data
        }
      }
      
    },
    handleMoreBotton(value) {
      let url = '/pages/skeleton/main?param=' + JSON.stringify(value)
      mpvue.navigateTo({
        url: url,
      })
    }
  }
}
</script>

<style scoped>
.ware-search {
  width: 100%;
  height: 100%;
  background-color: black;
  position: fixed;
}
.nav-input {
  display: flex;
}
.nav-input input{
  margin: 15rpx 5rpx 15rpx 30rpx;
  padding-left: 30rpx;
  background-color: #ccc;
  border-radius: 10rpx;
  font-size: 20rpx;
  color: #fff;
  float: left;
  flex: 1;
}
.nav-input button {
  margin-top: 15rpx;
  margin-right: 10rpx;
  float: left;
  width: 150rpx;
  height: 44rpx;
  font-size: 20rpx;
  line-height: 44rpx;
  background-color: #ccc;
}
/* .hot-topic {
  margin: 0 40rpx;
}
.hot-narage span{
  color: #ccc;
  font-size: 30rpx;
  margin: 20rpx 0;
}
.hot-buttom span {
  color: #fff;
  font-size: 25rpx;
  background-color: #ccc;
  border-radius: 10rpx;
  padding: 0 10rpx;
} */

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