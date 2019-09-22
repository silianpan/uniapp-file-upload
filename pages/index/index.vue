<template>
	<view>
		<button style="margin-bottom: 20rpx;" type="primary" @tap="clickAndroidUpload">一、Android上传目录文件</button>
		<button type="primary" @tap="clickH5Upload">二、H5上传目录文件(不分系统)</button>
	</view>
</template>

<script>
	export default {
		methods: {
			clickAndroidUpload() {
				uni.navigateTo({
					url: './androidUpload',
				})
			},
			clickH5Upload() {
				uni.navigateTo({
					url: './h5Upload',
				})
			}
		}
	}
</script>
