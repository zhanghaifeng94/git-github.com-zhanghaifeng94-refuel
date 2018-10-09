<template>
	<div class="integrate">
		<headers></headers>
		<div class="top_box">
		  <div class="top">
		      <div>
		        <img :src="img" alt="">
		        <div class="user_msg">{{userName}}</div>
		        <div>
		          <p class="grade_name">积分</p>
		          <p class="grade">{{grade}}</p>
		        </div>
		      </div>
		  </div>
		</div>
		<p class="tip">积分轻松得</p>

		<ul class="list">
			<li>
				<img src="../../common/image/222.png" height="80" width="80" alt="">
				<p>充值返现</p>
				<span>充值完成立返积分</span>
			</li>
			<li>
				<img src="../../common/image/223.png" height="80" width="80" alt="">
				<p>消费购物</p>
				<span>确认收货立返积分</span>				
			</li>
			<li>
				<img src="../../common/image/224.png" height="80" width="80" alt="">
				<p>永不清空</p>
				<span>年末积分不清零</span>				
			</li>
		</ul>

		<router-link to="">
			<img src="../../common/image/489481.png" height="296" width="640" alt="">
		</router-link>

	</div>
</template>
<script>
	import Headers from "base/header/header"
	export default{
		name:"integrate",
		components:{
			Headers
		},
		data(){
			return{
			    title: '积分中心',
			    rightText: '积分指南',
			    rightIcon:'',	
		        userName:"欧阳阳阳",
		        grade:"100",
		        img:require('common/image/user_img.png'),			
			}
		},
		methods:{
			
		},
		created() {
			Headers.props.title.default = this.title,
			Headers.props.rightIcon.default = this.rightIcon
			Headers.props.rightText.default = this.rightText
		}
	}
</script>

<style scoped>
	.integrate{
		background:#fff;
		min-height: 610px;
	}
	.integrate >>> .title .right{
		color: #666;	
	}
	  .top_box{
	    background:#fff;
	    border-bottom-left-radius: 10px;
	    border-bottom-right-radius: 10px;
	    margin-top:-9px;
	    box-shadow: 0px -5px 8px -2px #c8c8c8 inset;
	    padding-top:10px;
	    padding-bottom: 3px;
	  }
	  .top{
	    width:92%;
	    margin:0 auto;
	    padding:20px 0 5px 20px;
	    background:linear-gradient(279deg,rgba(203,207,177,1) 0%,rgba(212,214,188,1) 100%);
	    box-shadow:0px 2px 6px rgba(88,0,0,0.16);
	    box-sizing:border-box;
	    overflow:hidden
	  }
	  .top img{
	    width:34px;
	    height:34px;
	    box-shadow:0px 2px 3px rgba(0,0,0,0.24);
	    border-radius:100%;
	    float:left;
	    margin-right:18px;
	  }
	  .user_msg{
	    font-size:14px;
	    color:#666;
	  }
	  .grade_name{
	    float:left;
	    margin-top:30px;
	    margin-right:50px;
	    color:#666
	  }
	  .grade{
	    font-size: 40px;
	    color: #666;
	    line-height: 65px;
	    position: absolute;
	    right: 120px;
	  }
	  .tip{
	  	font-size: 14px;
	  	color: #666;
	  	text-align: center;
	  	margin:15px 0 20px 0;
	  }
</style>