<template>
   <div>
    <view class="log-list">
    <video class="log-item" autoplay  controls  src=""/>
    </view>
    <view class="logs-biaoti">
    <view class="biao-ti">
        <text>3333</text>
    </view>
    <view class="font-gao">
        <text># 名称 /</text>
        <text >222</text>
    </view>
    <view class="font-jianjie">
        <text >111</text>
    </view>
    </view>
  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'
// import card from '@/components/card'

export default {
  // components: {
  //   card
  // },

  data () {
    return {
      
    }
  },

  created () {
    
  }
}
</script>

<style>
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
