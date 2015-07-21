var loadOptions={
		container:".section",
		slow:true,//开启缓慢显示进度，默认 false
		slowtime:50,//缓慢显示进度的时间间隔，默认 50
		setRem:true,
		setWidth:true,
		maxWidth:800,//最大宽度
		radio:1.575,//页面比例：1260:800
		resize:true,
		fullpage:false
};
$(function(){
	//var data=new Date().getTime(); //调试用的
	//var str;
	
	$("body").loading({
		onload:function(pre){//加载中的回调，每加载完一张图片调用一次
			//var now=new Date().getTime();
		//	str+=now-data+"--";
			//data=now;
			$(".loading p i").html(pre+"%<br>"+this.src.replace(window.location.href,"")+"已加载");
			$(".section").css({backgroundImage:"url("+this.src+")"});
			//console.log(this.src.replace(window.location.href,""));
		},
		complete:function(pre){//加载完成的回调
			$(".loading p").html("完成");
		}
	});
});
