<template>
	<view>
		<web-view :src="'/hybrid/html/index.html?info=' + info" @message="handleMessage"></web-view>
	</view>
</template>

<script>
	import globalConfig from '@/config'
	export default {
		data() {
			return {
				info: encodeURIComponent(JSON.stringify({
					appId: globalConfig.yzPreviewAPPID,
					appKey: globalConfig.yzPreviewAPPKEY,
					dmc: globalConfig.yzPreviewDmcUrl
				}))
			}
		},
		methods: {
			handleMessage(evt) {
				let msg = '@message传递数据：' + JSON.stringify(evt.detail.data)
				uni.showModal({
					content: msg,
					showCancel: false
				});
				// todo 写入到store中
			}
		}
	}
</script>
