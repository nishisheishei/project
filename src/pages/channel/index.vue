<template>
  
  <div class="channel">
    <div class="box" v-for="(item, index) in designation" :key="index" @click="handleChannelGain(item)" >
      <div class="tupian">
          <image :src=" 'http://47.92.233.71:9000' + item.typeImgUrl" />
          <text >{{ item.typeName }}</text>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request"

export default {
  data() {
    return {
      designation: []
    }
  },
  created () {},
  mounted() {
    this.channelGetData()
  },
  methods: {
    async channelGetData () {
      const { data } = await request({
        url: '/api/wprogram/loadChannel',
        method: 'POST',
        data: {}
      })
      this.designation = data
    },

    handleChannelGain(value) {
      let url = '/pages/more/main?typeId=' + value.typeId
      mpvue.navigateTo({
        url:url
      })
    }
  }
}
</script>

<style  scoped>
.channel {
  width: 100%;
  height: 100%;
  background-color: black;
  position: fixed;
}

.channel .box {
  float: left;
}
.tupian {
    width: 375rpx;
    height: 375rpx;
    position: relative;
    background-color: #fff;
}

.tupian image {
    width: 375rpx;
    height: 375rpx;
    position: absolute;
}

.tupian text {
    width: 375rpx;
    font-size: 40rpx;
    color: #fff;
    line-height: 375rpx;
    text-align: center;
    position: absolute;
}
</style>>
