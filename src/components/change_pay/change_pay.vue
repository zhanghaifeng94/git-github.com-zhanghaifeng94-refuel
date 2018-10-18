<template>
	<div class="change_pay">
		<Headers></Headers>
		<div class="ads flex_between">
			<div class="flex">
				<div class="left">
					<p>欧阳阳</p>
					<button type="button">默认</button>
				</div>
				<div>
					<p>13026594856</p>
					<p>湖北省武汉市洪山区光谷广场鲁巷</p>
				</div>
			</div>
			<i class="iconfont icon-right"></i>
		</div>
		<img src="../../common/image/12-1.png" class="bg">

		<div class="con">
			<div class="flex_between">
				<div class="flex">
					<img :src="shop.img" alt="">
					<div>
						<h1>{{shop.name}}</h1>
						<p class="color">{{shop.color}}</p>
						<span>￥{{shop.price}}+{{shop.grade}}积分</span>
					</div>
				</div>
				<p class="num">×{{shop.num}}</p>
			</div>
			<p><i class="iconfont ">不支持30天无忧退货</i></p>
		</div>

		
	</div>
</template>
<script>
import Headers from 'base/header/header'
	export default{
		name:"change_pay",
		components:{
			Headers
		},
		data(){
			return{
				title: '确认订单',
				rightText: '',
				rightIcon:'',
				leftIcon:"iconfont icon-close",
				shop:{img:require('common/image/store3.png'),name:"带帽式多功能颈枕",color:"藏青色",price:"0.00",grade:"500",num:"3"}
			}
		},
		created() {
			Headers.props.leftIcon.default = this.leftIcon
			Headers.props.title.default = this.title
			Headers.props.rightText.default = this.rightText
			Headers.props.rightIcon.default = this.rightIcon
		},
	}
</script>
<style scoped>
	.flex_between{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.ads{
		padding:20px 16px;
		background: #fff; 
	}
	.flex{
		display: flex;
	}
	.ads p{
		font-size: 12px;
		color: #666;
		margin-bottom: 4px;
	}
	.ads button{
		font-size: 8px;
		color: #FF4848;
		border:1px solid #FF4848;
		border-radius: 1px;
		padding: 2px 3px;
		background: #fff;
	}
	.left{
		margin-right: 15px;
	}
	.ads i{
		color: #D5D5D5;
		font-size: 8px;
	}
	.bg{
		width: 100%;
		display: block;
	}
	.con{
		background: #fff;
		box-shadow:0px 1px 3px rgba(0,0,0,0.16);
		border-radius: 4px;
		width: 92%;
		margin:20px auto;
		padding:10px;
		box-sizing: border-box;
	}
	.con img{
		width:70px;
		height: 70px;
		margin-right: 18px;
	}
	.con h1{
		font-size: 12px;
		color: #666;
		line-height: 20px;
	}
	.con .color{
		font-size: 10px;
		color: #929292;
		margin-bottom: 21px;
	}
	.con span{
		color:#EE722E;
		font-size: 12px; 
	}
	.con .num{
		color: #707070;
		font-size: 10px;
	}
</style>