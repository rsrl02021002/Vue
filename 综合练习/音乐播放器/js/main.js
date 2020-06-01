/*
  1:歌曲搜索接口
    请求地址:https://autumnfish.cn/search
    请求方法:get
    请求参数:keywords(查询关键字)
    响应内容:歌曲搜索结果

  2:歌曲url获取接口
    请求地址:https://autumnfish.cn/song/url
    请求方法:get
    请求参数:id(歌曲id)
    响应内容:歌曲url地址
  3.歌曲详情获取
    请求地址:https://autumnfish.cn/song/detail
    请求方法:get
    请求参数:ids(歌曲id)
    响应内容:歌曲详情(包括封面信息)
  4.热门评论获取
    请求地址:https://autumnfish.cn/comment/hot?type=0
    请求方法:get
    请求参数:id(歌曲id,地址中的type固定为0)
    响应内容:歌曲的热门评论
  5.mv地址获取
    请求地址:https://autumnfish.cn/mv/url
    请求方法:get
    请求参数:id(mvid,为0表示没有mv)
    响应内容:mv的地址
*/
var app = new Vue({
	el: "#player",
	data: {
		music: "",
		musicList: [],
		musicUrl: "",
		musicPicUrl: "",
		musicComments: [],
		isPlaying: false,
		mvUrl: "",
		isMv:"display:none",
		isShow:false
	},
	methods: {
		// 获取音乐列表
		searchMusic: function() {
			var that = this;
			axios.get("https://autumnfish.cn/search?keywords=" + this.music).then(function(response) {
				that.musicList = response.data.result.songs;
				// console.log(response.data.result.songs)
			}, function(err) {
				console.log(err)
			})
		},
		// 获取音乐地址
		getMusicUrl: function(musicId) {
			var that = this;
			axios.get("https://autumnfish.cn/song/url?id=" + musicId).then(function(response) {
				that.musicUrl = response.data.data[0].url
			}, function(err) {
				console.log(err)
			})
		},
		// 获取封面地址
		getCoverUrl: function(musicId) {
			var that = this;
			axios.get("https://autumnfish.cn/song/detail?ids=" +
				musicId).then(function(response) {
				that.musicPicUrl = response.data.songs[0].al.picUrl;
				// console.log(response.data.songs[0].al.picUrl)
			}, function(err) {
				console.log(err)
			})
		},
		// 获取评论地址
		getCommentsUrl: function(musicId) {
			var that = this;
			axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicId).then(function(response) {
				that.musicComments = response.data.hotComments;
				// console.log(response.data.hotComments);
			}, function(err) {
				console.log(err)
			})
		},
		// 唱片是否旋转，磁头是否放在唱片上
		play: function() {
			this.isPlaying = true;
			// console.log("play")
		},
		pause: function() {
			this.isPlaying = false;
		},
		// 获取mv地址
		getMvUrl: function(mvId) {
			var that = this;
			axios.get("https://autumnfish.cn/mv/url?id=" + mvId).then(function(response) {
				that.mvUrl = response.data.data.url;
				// console.log(response.data.data.url);
			}, function(err) {
				console.log(err)
			})
		},
		// 点击图标,显示mv播放页
		playMv:function(){
			this.isMv='';
		},
		// 隐藏mv播放页
		changeShow(){
			this.isShow=!this.isShow;
		}
	}
})
// 错误:
// var that = this;放在方法内
// 我常放在方法前,methods下

// 错误:
// axios.get("https://autumnfish.cn/mv/url?mvid=" + mvId)
// 正确
// axios.get("https://autumnfish.cn/mv/url?id=" + mvId)
// 规定了    请求参数:id(mvid,为0表示没有mv)