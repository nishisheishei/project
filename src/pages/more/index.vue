<template>
	<div>
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
</template>

<script>
import request from "@/utils/request"

export default {
	data() {
		return {
			moreListData: [],
			typeId: '',
			vName: ''
		}
	},
	created () {

	},
	mounted() {
		this.moreUserDataList()
	},
	methods: {
		async moreUserDataList() {
			const { data } = await request({
				url: '/api/wprogram/loadVoideByTypeId',
				method: 'POST',
				data: {
					typeId: this.typeId
				}
			})
			this.moreListData = data
		},
		handleMoreBotton(value){
			let url = '/pages/skeleton/main?param=' + JSON.stringify(value)
      mpvue.navigateTo({
        url: url,
      })
		}
	},
	onLoad: function(opitens) {
		var un = undefined
		if(un == opitens.typeId){
			console.log('数据异常')
		}else {
			this.typeId = opitens.typeId
		}
	}
}
</script>

<style scooped>
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