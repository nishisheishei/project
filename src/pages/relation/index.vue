<template>
  <div>
    <view class="relation">
        <!-- <image src="" /> -->
        <image src="../../static/images/weixin.png" />
        <view class="relation-message">
            <view >名称 : {{ userName.userNiName }}</view>
            <view >微信号 : {{ userName.wcNum }}</view>
            <view >地区 : {{ userName.region }}</view>
            <!-- <view >名称 : </view>
            <view >微信号 : </view>
            <view >地区 : </view> -->
        </view>
    </view>
    <view class="relation-nevs">
        <view class="nevs">
            <text >联系人</text>
            <text >{{ userName.userName }}</text>
        </view>
    </view>
    <view class="relation-nevs">
        <view class="nevs">
            <text >联系电话</text>
            <!-- <text>bind:tap="handTelephone" data-telephone="{{ userName.telephone }}"</text> -->
            <text @click="handTelephone(userName.telephone)">{{ userName.telephone }}</text>
        </view>
    </view>
    <view class="relation-nevs">
        <view class="nevs">
            <text >地址</text>
            <text >北京市朝阳区</text>
        </view>
    </view>
  </div>
</template>

<script>
import request from "@/utils/request"

export default {
  data() {
    return {
      userName: {}
    }
  },
  created () {},
  mounted() {
    this.relationPostData()
  },
  methods: {
    async relationPostData() {
      const { data } = await request({
        url: '/api/wprogram/loadContact',
        method: 'POST',
        data: {}
      })
      this.userName = data
    },
    handTelephone(value) {
        mpvue.makePhoneCall({
            phoneNumber: value,
            success: function() {
            },
            fail: function() {
            }
        })
    }
  }
}
</script>

<style  scoped>
/* pages/xiangmu/index.wxss */
/* .relation {
    

} */

.relation {
    height: 234rpx;
    margin-top: 40rpx;
    margin-left: 48rpx;
}
.relation image {
    width: 150rpx;
    height: 150rpx;
    float: left;
    border: 1rpx #ccc solid;
    border-radius: 10rpx;
}
.relation .relation-message {
    float: left;
    margin-left: 34rpx;
    /* line-height: 60rpx; */
}
.relation-message view {
    color: #7e7e7e;
    padding-bottom: 10rpx;
}

.relation-nevs .nevs {
    margin: 0 33rpx;
    /* height: 110rpx; */
    border-top: 1rpx #ccc solid;
    display: flex;
}
/* .relation-nevs .nevs text {
    width: 160rpx;
    height: 110rpx;
    color: #161616;
    line-height: 110rpx;
} */
.relation-nevs .nevs text:first-child {
    width: 160rpx;
    height: 110rpx;
    line-height: 110rpx;
    color: #161616;
    /* margin: 30rpx; */
}

.relation-nevs .nevs text:last-child {
    flex: 1;
    height: 110rpx;
    line-height: 110rpx;
    color: #1f1f1f;
}
</style>>
