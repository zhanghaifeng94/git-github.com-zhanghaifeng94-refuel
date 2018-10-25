<template>
	<div class="order_pay">
		<Headers></Headers>
		<router-link to="/user/ads_list" class="ads flex_between">
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
		</router-link>
		<img src="../../common/image/12-1.png" class="bg">

		<div class="con" v-for="(shop,index) in shops" :key="index">
			<div class="flex_between">
				<div class="flex">
					<img :src="shop.img" alt="">
					<div>
						<h1>{{shop.name}}</h1>
						<p class="color">{{shop.color}}</p>
						<p class="price">￥{{shop.price}}<u>￥{{shop.r_price}}</u></p>
					</div>
				</div>
				<p class="num">×{{shop.num}}</p>
			</div>
			<p class="tip"><i class="iconfont icon-info">不支持30天无忧退货</i></p>
		</div>	
		<ul class="box">
			<li class="flex_between">
				优惠券
				<p>商场专用 满150减10<i class="iconfont icon-right"></i></p>
			</li>
			<li class="flex_between">
				会员积分
				<p>可用105积分抵用1.05元<i class="iconfont icon-right"></i></p>
			</li>
		</ul>

		<ul class="discount">
			<li class="flex_between">
				商品金额<span>{{need}}</span>
			</li>
			<li class="flex_between">
				会员积分<span>-1.05</span> 
			</li>
			<li class="flex_between">
				运费<span>0.00</span> 
			</li>
			<li class="flex_between">
				优惠券<span>-10.00</span> 
			</li>
		</ul>
		<div class="agreement">
			<i class="iconfont "></i>
			我已同意<router-link to="">《M50e服务协议》</router-link>
		</div>
		<div class="bottom flex_between">
			<p>应付：{{need}}</p>
			<button type="button" @click="onCheck()">付款</button>
		</div>


		<div class="tip_box" v-if="pay">
			<i class="iconfont icon-roundclose" @click="onCancel()"></i>
			<div class="pay_box">
				<h1>请输入支付密码<i></i></h1>
				<!-- 密码输入框 -->
				<van-password-input
				  :value="value"
				  info="密码为 6 位数字"
				  @focus="onFocus"
				/>
				<!-- 数字键盘 -->
				<van-number-keyboard
				  :show="showKeyboard"
				  @input="onInput"
				  @delete="onDelete"
				  @blur="onBlur"
				/>
			</div>
		</div>
	</div>
</template>
<script>
import Headers from 'base/header/header'
import { Dialog } from 'vant';
	export default{
		name:"order_pay",
		components:{
			Headers
		},
		data(){
			return{
				title: '确认订单',
				rightText: '',
				rightIcon:'',
				shops:[
					{img:require('common/image/store3.png'),name:"带帽式多功能颈枕",color:"藏青色",price:"78",r_price:"69",num:"3"},
					{img:require('common/image/store3.png'),name:"带帽式多功能颈枕",color:"藏青色",price:"87",r_price:"59",num:"5"},
					{img:require('common/image/store3.png'),name:"带帽式多功能颈枕",color:"藏青色",price:"56",r_price:"50",num:"1"},					
				],
				w_price:"0.00",
				need:"500",
				my_scour:"0",
				value:"",
				showKeyboard: false,
				show:true,	
				pay:false			
			}
		},
		methods:{
			onCheck(){
				this.pay=true
			},
	     	onFocus(){
	     		this.showKeyboard=true;
				this.show=false;
	     	},
	     	onBlur(){
	     		this.showKeyboard=false;
				this.show=true;
	     	},
		    onInput(key) {
		    	//console.log(this.value + key)
		    	var length=this.value + key
		    	//console.log(length.length)
		        this.value = (this.value + key).slice(0, 6);
		        if(length.length==6){
		        	this.pay=false;
		        	this.show=true;
		        	Dialog.alert({
					  title: '支付完成',
					}).then(() => {
					  // on close

					});
		        }
		    },
		    onDelete() {
		      this.value = this.value.slice(0, this.value.length - 1);
		    },
		    onCancel(){
		    	this.pay=false
		    }

		},
		created() {
			Headers.props.title.default = this.title
			Headers.props.rightText.default = this.rightText
			Headers.props.rightIcon.default = this.rightIcon
		},
	}
</script>
<style scoped>
	.order_pay{
		padding-bottom: 90px;
	}
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
	.con .price{
		color:#929292;
		font-size: 12px; 
	}
	.con .price u{
		text-decoration: line-through;
		font-size: 10px;
		color: #bebebe;
	}
	.con .num{
		color: #707070;
		font-size: 10px;
	}
	.tip{
		margin-top: 10px;
	}
	.tip i{
		font-size: 8px;
		color:#BEBEBE;
		line-height: 14px; 
	}
	.box{
		background: #fff;
		padding-left: 16px;
	}
	.box li:first-child{
		border-top:0;
	}	
	.box li{
		border-top: 1px solid #DFDFDF;
		padding:11px 0;
		font-size: 12px;
		color: #FF4848;
		padding-right: 16px;
	}
	.box li p{
		font-size: 12px;
		color: #666;
	}
	.box li p i{
		font-size: 14px;
		color: #bebebe;
		margin-left: 15px;
	}
	.bottom{
		position: fixed;
		bottom: 0;
		left:0;
		width: 100%;
		padding:6px 16px;
		box-shadow:0px -1px 2px rgba(0,0,0,0.16);
		box-sizing: border-box;
		background: #fff;
	}
	.bottom p{
		color: #FF4848;
		font-size: 12px;
	}
	.bottom button{
		color: #fff;
		font-size: 14px;
		background: #EE722E;
		padding: 11px 25px;
		border-radius: 30px;
		border:0;
	}
	.tip_box{
		background: rgba(0,0,0,0.6);
		position: fixed;
		top:0;
		left:0;
		width: 100%;
		height: 100%;
	}
	.tip_box .icon-roundclose{
		font-size: 24px;
		color: #fff;
		display: block;
		text-align: right;
		margin:25px 16px;
	}
	.pay_box{
		background: #fff;
		width: 92%;
		margin:97px auto 0 auto;
		border-radius: 10px;
		padding:20px;
		box-sizing: border-box; 
	}
	.pay_box h1{
		text-align: center;
		font-size: 14px;
		color: #666;
		margin-bottom: 30px;
	}
	.pay_box h1 i{
		width:100px;
		height:1px;
		background:rgba(223,223,223,1);
		display: block;
		margin:0 auto;
		margin-top: 10px;
	}
	.discount{
		background: #fff;
		margin:10px 0 20px 0;
		padding:0 16px;
	}
	.discount li{
		font-size: 12px;
		color: #666;
		padding: 12px 0;
	}
	.agreement{
		padding-left: 16px;
		font-size: 12px;
		color: #666
	}
	.agreement a{
		color: blue
	}
</style>