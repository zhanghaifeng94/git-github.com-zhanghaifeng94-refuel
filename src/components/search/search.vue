<template>
    <div class="search">
    	<div class="search_box flex">
    		<div class="box">
    			<i class="iconfont icon-search"></i>
    			<input type="text" name="" v-model="val">
    		</div>
    		<span @click="cancel()">取消</span>
    	</div>
		
		<div class="history h_record">
			<h1 class="title flex">
				<span>历史记录</span> 
				<i class="iconfont icon-search" @click="cancel_history()"></i>
			</h1>
			<ul class="list">
				<li v-for="(item,index) in history" :key="item.id" @click="getCon(item.con)">{{item.con}}</li>
			</ul>
		</div>
		<div class="history">
			<h1 class="title flex">
				<span>热门搜索</span> 
			</h1>
			<ul class="list">
				<li v-for="(item,index) in history" :key="item.id" @click="getCon(item.con)">{{item.con}}</li>
			</ul>
		</div>
    </div>
</template>

<script>
  export default {
  	name:"search",
 		data () {
		return {
  			val:"",
  			history:[
  				{con:"轮胎",id:"1"},
  				{con:"车灯",id:"2"},
  				{con:"轮胎",id:"3"},
  				{con:"车灯",id:"4"},
  				{con:"轮胎",id:"5"},
  				{con:"车灯",id:"6"},
  				{con:"轮胎",id:"7"},
  				{con:"车灯",id:"8"}
  			]
  		}
  		},
  		methods:{
  			getCon(con){
  				this.val=con
  			},
  			cancel(){
  				this.val=""
  			},
  			cancel_history(){
  				document.querySelector(".h_record").style.display = "none";
  			}
  		}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	.flex{
		display:flex;
		justify-content:space-between;
		align-items: center;
	}
	.search_box {
		margin:0 auto;
		border-bottom:1px solid #ececec;
		background:#fff
	}
	.box{
		margin:8px 0 8px 16px;
		background:#ececec;
		padding:0 10px;
		border-radius:5px;
		width:80%;
		box-sizing:border-box
	}
	.search_box input{
		height:32px;
		background:#ececec;
		font-size: 13px;
    	color: #666;
	}
	.search_box span{
		font-size:12px;
		color:#666;
		margin-right:16px;
	}
	.box i{
		color:#bebebe;
	}
	
	.history{
		padding:12px 16px;
		background:#fff;
		margin-bottom:10px;
	}
	.title{
		font-size:12px;
		color:#bebebe;
	}
	.list{
		width:90%;
		overflow:hidden
	}
	.list li{
		font-size:12px;
		color:#929292;
		margin-right:20px;
		margin-top:12px;
		float:left;
	}
</style>
