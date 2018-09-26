<template>
    <div class="pay">
   		<headers></headers>
		<div class="box">
			<h1>M50e会员</h1>
			<img :src="result.img" alt="">
		</div>
		<p>{{result.name}}</p>

		<!--支付弹窗-->
		<div class="tip_box" v-if="tip_status">
			<i class="iconfont icon-roundclose cancle" @click="onCancle()"></i>
			<div class="box tip">
				<h1>M50e会员</h1>
				<card v-if="show"></card>
				<div v-if="pay_status">
					<div class="tip_msg">
						<p>商户：{{pay.shop}}</p>
						<p>支付：-{{pay.price}}元</p>
					</div>
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
				<div class="pay_box" v-if="!pay_status">
					<span>已支付：</span>
					<h2>-200元</h2> 
					<input type="submit" name="" value="完成" @click="onSubmit()">	
				</div>
			</div>
		</div>

    </div>
</template>

<script>
  import Headers from 'base/header/header'
  import Card from 'base/card/card'
 
  export default {
  	name:"change_station",
  	components: {
    	Headers,
    	Card
  	},
	data () {
      return {
      	value:"",
      	title: '支付',
      	rightIcon:'',
      	rightText: '',
      	result:{img:require('common/image/code.png'),name:"123 4556"},
      	pay:{shop:"光谷鲁巷加油站",price:200},
      	value: '',
      	showKeyboard: false,
      	show:true,
      	pay_status:true,
        tip_status:false
      }
    },
     methods: {
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
	    	console.log(length.length)
	        this.value = (this.value + key).slice(0, 6);
	        if(length.length==6){
	        	this.pay_status=false;
	        	this.show=true;
	        }
	    },
	    onDelete() {
	      this.value = this.value.slice(0, this.value.length - 1);
	    },
	    onSubmit(){
	    	this.$dialog.confirm({
			  title: '加油订单',
			  message: 'M50e会员您确定要放弃支付么？'
			}).then(() => {
			  // on confirm
			  this.$router.go('/refuel');
			}).catch(() => {
			  // on cancel
			  this.$router.go('/refuel');
			});
	    },
	    onCancle(){
	    	this.tip_status=false
	    }
	  },
	  created() {
	    Headers.props.title.default = this.title
	    Headers.props.rightIcon.default = this.rightIcon
	    Headers.props.rightText.default = this.rightText
	  }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	.box{
		background:#fff;
		width:90%;
		margin:72px auto 116px auto;
		padding:10px 0 50px;
	}
	.box h1{
		font-size:14px;
		padding:10px;
		border-bottom:1px solid #ccc;
		width:100px;
		margin:0 auto;
		text-align:center;
		color:#666;
	}
	.box img{
		width:150px;
		height:150px;
		display:block;
		margin:0 auto;
		margin-top:46px;
	}
	.pay p{
		color:#BEBEBE;
		font-size:12px;
		width:100%;
		text-align:center;
	}
	
	//支付弹窗
	.tip_box{
		position:fixed;
		top:0;
		left:0;
		background:rgba(0,0,0,0.5);
		width:100%;
		height:100%;
	}
	.cancle{
		color:#fff;
		float:right;
		margin:16px 16px 0 0
	}
	.tip{
		margin:84px auto 0 auto;
		border-radius:4px;
		padding:20px;
		box-sizing:border-box;
	}
	.tip h1{
		margin-bottom:10px;
	}
	.tip_msg{
		margin:20px 0 32px 0;
	}
	.tip_msg p{
		font-size:14px;
		color:#666;
		text-align:left;
		margin-top:10px;
	}
	.pay_box{
		margin-top:20px;
	}
	.pay_box span{
		font-size:14px;
		color:#666;
	}
	.pay_box h2{
		font-size:20px;
		color:#666;
		margin:0 0 36px 0;
		width:100%;
		text-align:center;
		font-weight:nomal;
	}
	.pay_box input{
		background:#EE722E;
		border-radius:20px;
		padding:10px 0;
		font-size:20px;
		color:#fff;
		width:100%;
	}
</style>