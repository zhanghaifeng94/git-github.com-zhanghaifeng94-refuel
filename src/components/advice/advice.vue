<template>
	<div class="advice">
		<headers></headers>
		<div class="box">
			<h1>请选择您的问题类型</h1>
			<van-radio-group v-model="radio">
			  <van-cell-group>
			    <van-cell :title="item.title" clickable @click="radio = 'item.val'" v-for="(item,index) in question" :key="index">
			      <van-radio :name="item.val" />
			    </van-cell>
			  </van-cell-group>
			</van-radio-group>	
			<h2>请详细描述您的建议</h2>	
			<van-cell-group class="text">
			  <van-field
			    v-model="message"
			    type="textarea"
			    placeholder="请输入留言"
			    rows="4"
			    autosize
			    maxlength="300"
			  />
			</van-cell-group>	
			<h3>上传照片 (最多4张)</h3>
			<van-uploader :after-read="onRead" accept="image/*" multiple class="photo">
			    <img class="head-img" src="../../common/image/phone.png" height="78" width="78" ref="goodsImg"/>
		  	</van-uploader>

			<button type="submit" class="btn" @click="onSubmit()">提交</button>
		</div>

		<!--成功的弹框提示-->
		<div class="tip" v-if="show">
			<span>提交成功</span>
			<p>感谢您的宝贵意见</p>
		</div>
	</div>

</template>
<script>
	import Headers from "base/header/header"
	import { Toast } from 'vant';
	export default{
		name:"advice",
		components:{
			Headers
		},
		data(){
			return{
			    title: '意见反馈',
			    rightText: '',
			    rightIcon:'',	
		        rightPath:"",
		        radio: '1',
		        message:"",
		        show:false,
		        question:[
		        	{title:"搜索，查找商品，商品发现",val:"1"},
		        	{title:"支付问题",val:"2"},
		        	{title:"客服服务",val:"3"},
		        	{title:"会员相关",val:"4"},
		        	{title:"售后，订单问题",val:"5"},
		        	{title:"其他",val:"6"},
		        ]
			}
		},
		methods:{
			//console.log(this.radio)
			onSubmit(){
				var vm=this
				vm.show=true
				setTimeout(function(){
					vm.show=false
				},1000)
			},
			onRead(file) {
		       console.log(file);
		       //将原图片显示为选择的图片
		       this.$refs.goodsImg.src = file.content;
		   }
			
		},
		created() {
			Headers.props.title.default = this.title,
			Headers.props.rightIcon.default = this.rightIcon
			Headers.props.rightText.default = this.rightText
			Headers.props.rightPath.default = this.rightPath
		}
	}
</script>
<style scoped>
	.box{
		background: #fff;
		margin-top: -9px;
		padding-bottom: 30px;
	}
	.box h1{
		width: 100%;
		text-align: center;
		padding: 16px 0;
		font-size: 14px;
		color:#666;
	}
	.box h2{
		padding: 20px 0 6px 16px;
		font-size: 14px;
		color:#666;
	}
	.box >>> .van-radio .van-icon-checked{
		color:#EE722E;
	}
	.text >>> .van-cell{
	    border: 1px solid #DFDFDF;
		width: 92%;
		margin: 0 auto;
		padding: 10px;
		font-size: 12px;
		color:#DFDFDF;
	}
	.text >>> [class*=van-hairline]::after{
		border:0 solid #fff;
	}
	.box h3{
		font-size: 12px;
		color: #929292;
		margin:15px 0 10px 16px;
	}
	.photo{
		margin:0 0 38px 16px;
		width: 78px;
		height: 78px;
		border-radius:2px;
	}
	.photo img{
		width: 100%;
		height:100%;
	}
	.van-icon{
		font-size: 50px;
	    color: #BEBEBE;
	    text-align: center;
	    margin: 15px auto;
	    display: block;
	}
	.btn{
		display: block;
		width: 92%;
		background:#EE722E;
		font-size: 20px;
		color: #fff; 
		margin:0 auto;
		border:0;
		border-radius: 5px;
		padding: 10px 0;
	}
	.tip{
		position: fixed;
		bottom: 190px;
		left: 0;
		margin-left: 4%;
		width: 92%;
		background:rgba(0,0,0,0.8);
		border-radius:10px;
		padding:20px 0 28px 0;
		font-size: 12px;
		color: #fff;
		text-align: center;
	}
	.tip span{
		font-size:14px;
		border-bottom: 1px solid #fff;
		padding-bottom: 10px;
		display: block;
		width: 70px;
		margin:0 auto 20px auto;  
	}
</style>