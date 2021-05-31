<template>
	<view class="content">
		<view class="bgimg">
			<image src="../../static/scenic/jiantou.png" mode="" class="img1" @tap="back"></image>
			<image :src="bgimg" mode="" class="img2"></image>
			<view class="musiclist">
				<image src="../../static/scenic/music.png" mode="" class="left music" ></image>
				<view class="left keywords">
					<span>{{geshou}}</span><span>{{keywords}}</span>
				</view>
				<view class="listbtn right" @tap="golist">
					列表
				</view>
			</view>
		</view>
		<view class="mainbox">
			<view class="topbox">
				<view class="left addr">
					<view class="addname">
						{{addname}}
					</view>
					<view class="loction">
						{{loction}}
					</view>
				</view>
				<view class="right btns">
					<view class="left">
						<image src="../../static/food/col.png" mode="" class="btnimg"></image>
						<view class="">
							收藏
						</view>
					</view>
					<view class="right">
						<image src="../../static/food/share.png" mode="" class="btnimg"></image>
						<view class="">
							分享
						</view>
					</view>
				</view>
			</view>
			<view class="explain">
				<view class="left text">
					景区讲解
				</view>
				<view class="right voicebox">
					<image src="../../static/scenic/mic.png" mode="" class="mic"></image>
				</view>
			</view>
			<view class="title">
				<view class="line left" >
					
				</view>
				<view class="a left">
					民俗风情
				</view>
			</view>
			<view class="richtext">
				<u-parse :html="richtext"></u-parse>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bgimg:'../../static/scenic/gou.jpeg',
				geshou:'林俊杰',
				keywords:'这是一个关键词开发商大方身份卡升级',
				addname:'篝火晚会',
				loction:'佛顶山生态旅游项目',
				richtext:`
					<p>　　巴尼小镇是云南省怒江傈僳族自治州首个易地扶贫搬迁集中安置点。从山上的金满村搬迁到巴尼小镇，近3年的时间里，搬迁户们的生活发生了可喜的变化。</p>
					<p class="photo_img_20190808" style="text-align: center;"><img src="//p2.img.cctvpic.com/photoworkspace/contentimg/2020/07/16/2020071613380766481.jpg" alt="泸水市巴尼小镇易地扶贫搬迁安置点全景 李韩金摄（人民视觉）" isflag="1"></p>
					<p>　　搬出四面透风、容易漏雨的“千脚落地房”，住进如今宽敞明亮的楼房，当地居民的生活不断改善。另一边，留在山上的村民在企业帮助下改种经济林果，家庭收入节节攀升。</p>
					<p>　　这阵子，52岁的米四东心里老惦记个事：吃两碗包谷稀饭。包谷稀饭是把包谷和蚕豆混在一起，有时加点腊肉，搁在三脚架上，生火煮制而成。在高黎贡山上，包谷稀饭曾是金满村人的主食，大多数人连个菜都不舍得炒，就配一碗蘸水吃。从山上搬下来快3年了，米四东说：“在山上盼着吃大米饭，如今天天吃米饭，又想念包谷稀饭了。”</p>
				`
			};
		},
		methods:{
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			golist(){
				uni.navigateTo({
					url:"./musiclist"
				})
			}
		}
	}
</script>

<style lang="scss">
	.bgimg{
		width: 100%;
		height: 746rpx;
		position: relative;
		.img1{
			position: fixed;		
			z-index: 88;
			width: 15rpx;
			height: 27rpx;
			margin-top:44px;
			margin-left: 40rpx;
		}
		.img2{
			width: 100%;
			height: 100%;
			position: absolute;
		}
	}
	.musiclist{
		line-height: 48rpx;
		height: 48rpx;
		background: rgba(10,0,0,0.53);
		width: 100%;
		// opacity: 0.5;
		position: absolute;
		padding: 0 34rpx;
		bottom: 113rpx;
		.music{
			width: 38rpx;
			height: 39rpx;
			margin-top: 4rpx;
			z-index: 30;
		}
		.listbtn{
			height: 100%;
			width: 93rpx;
			border-radius: 7rpx;
			background: rgba(134,133,133,0.69);
			// opacity: 0.7;
			text-align: center;
			color: white;
		}
		.keywords{
			color: white;
			width: 400rpx;
			margin-left: 18rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			span{
				// display: inline-block;
				margin-right: 20rpx;
			}
		}
	}
	.mainbox{
		width: 100%;
		min-height: 400rpx;
		height: auto;
		margin-top: -90rpx;
		z-index: 1000;
		border-top-left-radius: 50rpx;
		border-top-right-radius: 50rpx;
		background: white;
		.topbox{
			height: 90rpx;
			margin-top: 40rpx;
			padding: 0 50rpx;
			
		}
	}
	.addname{
		font-size: 22px;
	}
	.loction{
		color: #656363;
		font-size: 13px;
	}
	.btnimg{
		width: 30rpx;
		height: 30rpx;
	}
	.btns{
		width: 150rpx;
		font-size: 12px;
		text-align: center;
	}
	.explain{
		width: 663rpx;
		margin: auto;
		height: 76rpx;
		line-height: 56rpx;
		margin-top: 30rpx;
		border-bottom: 2px solid #E5E5E5;
	}
	.voicebox{
		width: 533rpx;
		background: #F7F7F7;
		border-radius: 11px;
		height: 56rpx;
		.mic{
			width: 20rpx;
			height: 28rpx;
			margin-top: 15rpx;
			margin-left: 19rpx;
		}
	}
	.title{
		width: 663rpx;
		margin: auto;
		height: 33rpx;
		margin-top: 18rpx;
		.a{
			margin-left: 10rpx;
		}
	}
	.line{
		width: 6rpx;
		height: 33rpx;
		background: #09BB07;
	}
	.richtext{
		min-height: 500rpx;
		height: auto;
		width: 718rpx;
		margin: auto;
		background: #F7F7F7;
		margin-top: 27rpx;
		border-radius: 16px;
	}
</style>
