var wonderLand = {

	// 帧率
	fpsElement: document.getElementById('fps'),
	fps: 0,
	lastAnimationFrameTime: 0,
	lastFpsUpdateTime: 0,

	resources: {
		background: '../images/asset220.png'
	},


	// 背景
	background: {
		load: function() {

		},

		update: function() {

		},

		draw: function() {

		}
	},

	// 更新帧率
	updateFps: function(now) {
		this.fps = 1000 / (now - this.lastAnimationFrameTime);
		this.lastAnimationFrameTime = now;
		if(now - this.lastFpsUpdateTime > 1000) {
			this.fpsElement.innerHTML = this.fps.toFixed() + 'fps';
			this.lastFpsUpdateTime = now;
		}
	},

	// 更新
	update: function() {
		this.background.update();
	},

	// 渲染
	draw: function() {
		this.background.draw();
	},

	// 主循环
	loop: function(now) {
		var self = wonderLand;
		self.updateFps(now);
		self.update();
		self.draw();
		requestNextAnimationFrame(self.loop);
	},

	// 开始游戏主循环
	startLoop: function() {
		requestNextAnimationFrame(wonderLand.loop);
	}
};