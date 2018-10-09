<template>
    <div class="voucher_details">
    	<Headers></Headers>
    	<div class="con">
	    	<div class="card flex_between">
	    		<h1 class="top">
	    			<p>{{con}}</p>
	    			<span>自领取1日内有效</span>
	    		</h1>
	    		<i class="iconfont icon-youhuiquan"></i>
	    	</div> 
	    	<button type="button" class="btn">{{grade}}积分兑换</button>   	

	    	<div class="introduce">
				<h1>权益介绍</h1>	    	
				<p>{{suggest}}</p>
	    	</div>	
    	</div>
    </div>
</template>

<script>
  import Headers from 'base/header/header'
  export default {
  	name:"voucher_details",
    components: {
      Headers
    }, 
    data () {
	    return {
	      title: '优惠券',
	      con:"0",
	      grade:"0",
	      rightText: '',
	      rightIcon:'',
	      suggest:"服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议"
	    }
  	},
  	methods:{
		getParams () {        
		// 取到路由带过来的参数         
			this.con = this.$route.params.con;
			this.grade= this.$route.params.grade;
			this.title= this.$route.params.con;
			//console.log(this.$route.params.con)
			//console.log(this.$route.params.grade)
		}
	},
	created() {
		this.getParams()
		Headers.props.title.default = this.title
		Headers.props.rightText.default = this.rightText
		Headers.props.rightIcon.default = this.rightIcon
	},
	watch:{
		'$route': 'getParams'
	}   
    
  }
</script>

<style scoped rel="stylesheet/stylus">
	.con{
		background: #fff;
		min-height: 620px;
		padding-top: 10px;
	}
	.card{
		width:92%;
		margin:0 auto;
		background:linear-gradient(279deg,rgba(199,176,199,1) 0%,rgba(121,220,203,1) 100%);
		border-radius:4px;
		box-shadow:0px 2px 6px rgba(88,0,0,0.16);
		padding: 18px;
		box-sizing: border-box;
	}
	.icon-youhuiquan{
		font-size: 58px;
		float: right;
		color: #fff;
	}
	.flex_between{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.top p{
		color: #fff;
		font-size: 20px;
		margin-bottom: 40px;
	}
	.top span{
		font-size:10px;
		color: #fff;
	}
	.btn{
		width: 92%;
		display: block;
		margin:30px auto 20px auto;
		border-radius: 4px;
		background: #ee722e;
		font-size: 20px;
		color: #fff;
		padding: 10px 0;
		border:0;
	}
	.introduce{
		border-top:20px solid #ececec;
		padding: 12px 16px;
	}
	.introduce h1{
		font-size: 14px;
		color: #666;
		margin-bottom: 2px;
	}
	.introduce p{
		font-size:12px;
		line-height:20px;
		color: #929292
	}
</style>

