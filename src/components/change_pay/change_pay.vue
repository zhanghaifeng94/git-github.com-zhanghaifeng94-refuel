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
				leftIcon:"iconfont icon-close"
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
</style>