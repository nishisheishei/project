<template>
   <div>
     <view class="log-list">
        <video class="log-item" autoplay  controls  :src=" 'http://47.92.233.71:9000' + skeletonData.vUrl"/>
      </view>
      <view class="logs-biaoti">
        <view class="biao-ti">
          <text>{{ skeletonData.vName }}</text>
        </view>
        <view class="font-gao">
          <text># {{skeletonData.vTypeName }} /</text>
          <text >{{ skeletonData.vTimeLength }}</text>
        </view>
        <view class="font-jianjie">
          <text >{{ skeletonData.vIntroduction }}</text>
        </view>
      </view>
   </div>
</template>

<script>
import request from "@/utils/request"
export default {
  data() {
    return {
      skeletonData: {}
    }
  },
  created () {},
  mounted() {
  },
  methods: {
  },
  onLoad: function(option) {
    var un = undefined
    if(un == option.param) {
      console.log('异常处理没接收到数据')
    }else {
      let data = JSON.parse(option.param)
      this.skeletonData = data
    }
  }
}
</script>

<style scoped>
.log-list {
  /* display: flex;
  flex-direction: column;
  padding: 40rpx; */
  width: 750rpx;
  height: 350rpx;
}
.log-item {
  /* margin: 10rpx; */
  width: 750rpx;
  height: 350rpx;
}

.logs-biaoti {
  margin: 60rpx 20rpx 0 20rpx;
  width: 710rpx;
  
}
.logs-biaoti .biao-ti {
  text-align: center;
}
.logs-biaoti .biao-ti text {
  letter-spacing: 3rpx;
  font-size: 30rpx;
  color: black;
  font-weight: 700;
  word-break:break-all;
}

.logs-biaoti .font-gao {
  text-align: center;
  margin: 20rpx 0;
}

.logs-biaoti .font-gao text {
  color: #000;
  font-size: 22rpx;
}

.logs-biaoti .font-jianjie text {
  color: #000;
  font-size: 24rpx;
}
</style>