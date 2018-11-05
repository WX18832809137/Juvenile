[csdn博客地址](https://blog.csdn.net/WX18832809137)

在 manifest.json 配置文件中 配置一下代码

为啥配置这行代码
解析： ios系统播放视频会启动默认的播放器 为了防止ios系统调用自身播放器
所以添加如下代码

1. 打开文件代码视图
2. 搜索 plus  添加如下代码  截图在img文件夹里面
3. "allowsInlineMediaPlayback": true,
		"statusbar": {
			"immersed": true
		},