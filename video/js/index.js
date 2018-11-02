mui.init();

window.onload = function() {
	/*750代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
	  为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
	getRem(750, 100)
};
window.onresize = function() {
	getRem(750, 100)
};

function getRem(pwidth, prem) {
	var html = document.getElementsByTagName("html")[0];
	var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
	html.style.fontSize = oWidth / pwidth * prem + "px";
}
var html = '<div class="mui-video-Container" id="video_Container">' +
	'<div class="mui-video-full"><div class="rprogress"><span class="ladtit">加载</span><div class="rschedule"></div></div><span class="mui-full-back"> <svg class="icon" aria-hidden="true"><use xlink:href="#icon-houtui1"></use></svg><span class="vtitle"></span></span><span class="mui-pay_ico"><svg class="icon" aria-hidden="true">' +
	'<use xlink:href="#icon-bofang1"></use></svg></span><div class="v_left"></div><div class="b_right"></div><div class="ptime"></div><div class="mui-video-txt"></div><div class="mui-videoControls"><span class="mui-time-total mui-quanping"><span class="mui-time-cout" style="font-size: 0.2rem;">00:00</span><span class="mui-full-btu"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-quanping"></use></svg></span></span><span class="mui-time-current" style="font-size: 0.2rem;">00:00</span><div class="mui-progressWrap"><div class="mui-wrap-right"><input type="range" id="mui-block-range" value="0" min="0" max="100"></div></div></div></div>' +
	'</div>';

document.getElementById("video").innerHTML = html;

mui.plusReady(function() {
	Html5video("#video_Container", {
		title: "移动端视频", //视频标题，当全屏时会显示
		url: "video.mp4", //支持本地视频和网络视频，格式MP4
		img: "img/timg.jpg", //视频截图封面
		time: "", //视频总时间以分钟单位，当网络缓慢时，没办法及时加载出来，如已知可以填写，可不填。
		autoplay: false, //是否自动播放视频
		isMobile: true, //是否开启当处于移动网络时，提示用户是否继续播放视频。,不支持浏览器环境
		isFull: false, //是否点击播放就全屏显示
		iospay: false, //如果是IOS系统是否采用苹果系统自带播放器, 可以在浏览器或微信中，全屏观看视频
		drag: true, //禁止拖动,调节,音量和亮度 
		isfull: true, //是否显示全屏按钮
		prompt: function(video) //当开启isMobile时,这里可以写提示用户的内容,h5+环境才有效
		{
			mui.confirm('你当前处于移动手机网络将会消耗手机流量，是否继续播放？', '提示', ["取消", "确定"], function(e) {
				if (e.index == 1) {
					video.play();
				}
			}, "div");
		}
	});
})
