// 永中云服务-云预览
// 文档管理接口url
const yzPreviewDmc = 'http://dmc.yozocloud.cn'
const yzPreviewEic = 'http://eic.yozocloud.cn'
const yzPreviewAPPID = 'appId'
const yzPreviewAPPKEY = 'appKey'
/**
 * api前缀
 */
const apiYzPreviewDmc = '/apiYzPreviewDmc'
const apiYzPreviewEic = '/apiYzPreviewEic'
/**
 * 针对不同平台的baseUrl
 */
const getYzPreviewDmc = () => {
	// #ifdef H5
	return apiYzPreviewDmc
	// #endif
	// #ifndef H5
	return yzPreviewDmc
	// #endif
}
const getYzPreviewEic = () => {
	// #ifdef H5
	return apiYzPreviewEic
	// #endif
	// #ifndef H5
	return yzPreviewEic
	// #endif
}
export default {
	/**
	 * 针对不同平台的baseUrl
	 */
	yzPreviewDmcUrl: getYzPreviewDmc(),
	yzPreviewEic,
	yzPreviewEicUrl: getYzPreviewEic(),
	yzPreviewAPPID,
	yzPreviewAPPKEY
}
