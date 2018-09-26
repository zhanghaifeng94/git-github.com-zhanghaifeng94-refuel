<template>
	<div>
 		<headers></headers>

		<div class="nav_box">
			<mt-navbar v-model="selected" class="nav flex_between">
				  <mt-tab-item id="1">系统通知</mt-tab-item>
				  <mt-tab-item id="2">订单消息</mt-tab-item>
			</mt-navbar>			
		</div>
		<mt-tab-container v-model="selected" class="con">
			  <mt-tab-container-item id="1" class="nav_list">
			  		<router-link to="" v-for="(item,index) in system_list" :key="index">
					  	<div class="flex_between tip">
					  		<p>{{item.title}}</p>
					  		<p>{{item.time}}</p>
					  	</div>
					  	<div class="list_con">
					  		{{item.con}}
					  	</div>
				  	</router-link>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="2"  class="nav_list">
			  		<router-link to="" v-for="(item,index) in order_list" :key="index">
					  	<div class="flex_between tip">
					  		<p>{{item.title}}</p>
					  		<p>{{item.time}}</p>
					  	</div>
					  	<div class="list_con">
					  		{{item.con}}
					  	</div>
				  	</router-link>
			  </mt-tab-container-item>
			  <!--没有通知，消息的时候-->
			  <p class="icon icon-gouwu none_msg" v-if="order_list.length==0||system_list==0"></p>
		</mt-tab-container>
	</div>

</template>

<script>
  import Headers from 'base/header/header'
  export default {
  	name:"msg",
  	components: {
    	Headers
  	},
	data () {
      return {
      	selected: '1',
      	title: '消息中心',
      	rightIcon:'iconfont icon-service',
      	rightPath:"/index/service",
      	rightText: '',
      	order_list:[
      		{title:"商城通知",time:"2018-09-15",con:"您购买的神器已在路上，点击查看"},
      		{title:"会员通知",time:"2018-09-15",con:"您充值的会员卡已到账，点击查看"}
      		],
      	system_list:[
      		{title:"系统通知",time:"2018-09-15",con:"欢迎牟牟用户使用M50e站。小M在这已恭候您多时，希望您在这里使用愉快。更有超值礼包送上>>"},
      		{title:"系统通知",time:"2018-09-15",con:"您充值的会员卡已到账，点击查看"}
      		]
      }
    },
    watch: {
      selected: function (val, oldVal) {
        console.log(val)
        // click后打印出当前mt-tab-item的id
      }
    },
	  created() {
	    Headers.props.title.default = this.title
	    Headers.props.rightIcon.default = this.rightIcon
	    Headers.props.rightText.default = this.rightText
	    Headers.props.rightPath.default = this.rightPath
	  }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	.con{
		width:90%;
		margin:0 auto;
	}
	.msg_header{
		height:48px;
		background:#fff;
		color:#666;
		border-bottom:1px solid #dfdfdf;
		font-size:20px;
	}
	.nav_box{
		background:#fff;
		margin-top: -8px;
	}
	.nav{
		height:36px;
		width:60%;
		margin:0 auto
	}
	.nav .mint-tab-item{
		padding:0;
		padding:13px 0;
		font-size:14px;
	}
	.mint-tab-container{
		margin-top:3px;
	}
	.nav.mint-navbar .mint-tab-item.is-selected{
		color:#be6b6b;
		border-bottom:1px solid #be6b6b;
		margin-bottom:0;
	}
	.flex_between{
		display:flex;
		justify-content:space-between
	}
	.tip{
		margin:21px 0 6px 0;
		font-size:12px;
		color:#929292;
	}
	.list_con{
		background:#fff;
		padding:12px;
		font-size:12px
		color:#929292;
		text-align:left;
		border-radius:4px;
		line-height:20px;
	}
	.none_msg{
		width:130px;
		height:165px;
		margin:176px auto 0 auto;
		background:#fff
	}
	.nav .mint-tab-item{
		flex:none;
		-webkit-box-flex:none;
		-ms-box-flex:none
	}
</style>