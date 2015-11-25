# Loading-plug
页面加载进度插件，根据图片的加载情况显示页面加载进度条
插件用途：
1、移动端使用rem单位。基值为100。
2、移动端使用页面加载进度效果。
3、移动端自适应页面大小。

```javascript
var loadOptions={
	container:".section",
	slow:true,//开启缓慢显示进度，默认 false
	slowtime:50,//缓慢显示进度的时间间隔，默认 50
	setRem:true,//使用rem单位
	setWidth:true,//设置最大宽度
	maxWidth:800,//最大宽度
	maxRadio:1.575,//最大页面比例
	minRadio:1.575,//最小页面比例
	radio:1.575,//页面比例：1260:800
	resize:true,//自适应
	fullpage:false,//是否适应fullpage插件
	autoHeight:true //尽量适应全屏
};
$(function(){
	$("body").loading({
		onload:function(pre){//加载中的回调，每加载完一张图片调用一次
			$(".loading p i").html(pre+"%<br>"+this.src.replace(window.location.href,"")+"已加载");
			$(".section").css({backgroundImage:"url("+this.src+")"});
		},
		complete:function(pre){//加载完成的回调
			$(".loading p").html("完成");
		}
	});
});
```