# uniapp-file-upload
uni-app系统目录文件上传（非只图片和视频）解决方案

## 永中云服务

1.0.1新版本已经发布~

新版本基于永中云服务-云预览，完善并实现了跨平台H5文件（非只图片和视频）上传，[永中开发者平台](https://open.yozocloud.cn/)。

参考技术文档[《跨平台文档在线预览解决方案（五）-水印、防复制、在线编辑等》](https://juejin.cn/post/6938247508325842958)

## 背景
公司领导提出这样的产品需求：需要上传目录文件，不只是图片和视频，而且同时要支持Android和IOS两大移动端。另外公司App的架构采用的是uni-app。

## 思考
* 第一个想到的方案就是，看uni-app框架能否支持。答案可想而知，uni-app组件本身没有提供文件上传组件，不支持```<input type="file"/>```
* uni-app App端内置HTML5+引擎，提供plus接口，对于Android系统可以直接调用Android系统函数，打开系统目录。而对于IOS而言，没有找到使用方法
* 既然内置HTML5+引擎，能否直接嵌入H5页面呢？当然可以。于是采用H5方式实现

## H5页面文件上传
嵌入H5页面，需要采用web-view标签，如下：
<web-view src="/hybrid/html/index.html" @message="handleMessage"></web-view>

注意：
* h5页面必须在项目目录：/hybrid/html/下面，因为这样uni-app才不会进行编译
* @message事件是h5页面向应用发送数据的回调

## web-view传递数据问题
### 1、@message
第一种解决方法：通过@message传递数据，在h5页面中，上传完文件后，获取上传后的文件信息，直接postMessage后，web-view页面会接收
```js
uni.postMessage({
	data: {
		action: data
	}
});
```
#### 问题
当运行代码的时候，并没有执行@message回调，需要点击h5页面返回的时候，才会调用回调函数。于是在执行完postMessage后，调用如下函数返回上一级页面
```js
uni.navigateBack({
	delta: 1
});
```

注意：
* 在h5页面中调用uni-app接口时，需要添加uni SDK
<script type="text/javascript" src="https://js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.1.js"></script>

* 如果要让web-view的上一级页面，即表单页面接收数据，解决方法是：放到store中，表单页面从store中获取

### 2、页面跳转url传递数据
第二种解决方法：通过页面跳转url传递数据。在h5页面上传完文件后，调用页面跳转函数，将文件数据放到url参数中，如下：
```js
uni.redirectTo({
	url: './h5Upload?fileData=' + data,
})
```

## Demo
github：https://github.com/silianpan/uniapp-file-upload

* 两种方案

<img src="http://silianpan.cn/wp-content/uploads/2019/09/fc333860ebc49b6db159e08a6e29fcb4.png" width="320" />

* 表单页

<img src="http://silianpan.cn/wp-content/uploads/2019/09/7e35411c5ad85b57534e68ee68b77158.png" width="320" />

* 选择系统目录文件

<img src="http://silianpan.cn/wp-content/uploads/2019/09/553e4abb905801436d341747342c0288.png" width="320" />

* 页面跳转url传递数据

<img src="http://silianpan.cn/wp-content/uploads/2019/09/7f4c2261bc4b102262d855b0359ce3d4.png" width="320" />

## 附：Android选择系统目录
<img src="http://silianpan.cn/wp-content/uploads/2019/09/ac3a52f7fd7c907c9058019354853d44.png" width="320" />

转载请注明：[溜爸 » uni-app系统目录文件上传（非只图片和视频）解决方案](http://silianpan.cn/index.php/2019/09/22/uniapp_file_upload/)
