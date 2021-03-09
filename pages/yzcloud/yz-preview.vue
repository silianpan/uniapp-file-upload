<template>
	<view>
		<web-view v-if="yzPreviewUrl" :src="yzPreviewUrl"></web-view>
		<view v-else>文档地址无效，无法加载该文档</view>
	</view>
</template>

<script>
	import globalConfig from '@/config'
	export default {
		data() {
			return {
				yzPreviewUrl: ''
			}
		},
		onLoad(option) {
			// 接收H5页面，跳转页面url传递数据
			if (option.fileData) {
				const d = JSON.parse(decodeURIComponent(option.fileData))
				this.yzPreviewUrl = globalConfig.yzPreviewEic + '/api/view/file' + '?fileVersionId=' + d.fileVersionId + '&appId=' +
					globalConfig.yzPreviewAPPID + '&sign=' + d.sign
			}
		}
	}
</script>
