<template>
    <div class="store">
		<div class="header">
			<i class="iconfont icon-saoma"></i>
			<router-link to="/index/msg"><i class="iconfont icon-xiaoxi"></i></router-link>
		</div>
		<mt-swipe :auto="0" class="swipe">
			<mt-swipe-item class="swipe-item" v-for="item in swipe" :key="item.id">
			  <img :src="item.img" alt="" class="swipe-item-img">
			</mt-swipe-item>
		</mt-swipe>

		<div class="box">
			<van-row class="tip">
			  <van-col span="8">
			  	<i class="iconfont icon-roundcheck"></i>
			  	<span>M50自营品牌</span>
			  </van-col>
			  <van-col span="8">		  	
			  	<i class="iconfont icon-roundcheck"></i>
			  	<span>30天无忧退换货</span>
			  </van-col>
			  <van-col span="8">
				<i class="iconfont icon-roundcheck"></i>
			  	<span>48小时快速退款</span>
			  </van-col>
			</van-row>	
			<div class="activity">
		        <img src="../../common/image/store1.png" alt="">
		    </div>	 
			<div class="classify">
				<router-link class="classify_box" v-for="item in classify" to="" :key="item.id">
					<p>{{item.msg}}</p>
					<img :src="item.img" alt="">
				</router-link>
			</div>   
			
			<div class="advice">
				<div>
					<p>人气推荐</p>
					<router-link to="">更多 &</router-link>
				</div>
				<ul>
					<li></li>
				</ul>
			</div>

		</div>      


<!--       <div class="activity">
        <img src="../../common/image/03.png" alt="">
      </div> -->
    </div>
</template>

<script>
  export default {
  	  name:"store",
  	  data () {
		return {
		  swipe: [{
		    img: require('common/image/banner.png'),
		    id: '1'
		  }, {
		    img: require('common/image/banner.png'),
		    id: '2'
		  }, {
		    img: require('common/image/banner.png'),
		    id: '3'
		  }],
	      classify: [{
	        img: require('common/image/store2.png'),
	        id: '1',
	        msg:"M50自有商品"
	      }, {
	        img: require('common/image/store2.png'),
	        id: '2',
	        msg:"M50自有商品"
	      }, {
	        img: require('common/image/store2.png'),
	        id: '3',
	        msg:"M50会员优享"
	      }, {
	        img: require('common/image/store2.png'),
	        id: '4',
	        msg:"M50自有商品"
	      } ],
	      advice:[
	      	{img:"require('common/image/store2.png')",title:"日式和风声波式"}
	      ]

	   	} 
	  }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
    .header{
      background :#EE722E
      width :100%
      height: 48px
      line-height: 48px
      display: flex
      padding: 0 16px
      justify-content: space-between;
      box-sizing: border-box
    }
    .header i{
        color:#fff;
        font-size:24px
    }
    .header h1{
    	color:#fff;
    	font-size:20px;
    }
    .swipe{
      width :100%
      height :160px
    }
	.swipe >>> .swipe-item-img{
		width :100%
		height :100%
	}
    .swipe >>> .mint-swipe-indicator.is-active{
        background :red
    }
    .swipe >>> .mint-swipe-indicators{
		left: 85%;
	}
	.swipe >>> .is-active{
		background: #980000;
		opacity: 1;
	}
	.box{
		padding:0 16px 100px 16px;
		background:#fff;
		overflow:hidden;
	}
	.tip{
		margin:8px 0 20px 0;
	}
	.tip i{
		font-size:10px;
		margin-right:6px;
		color:#742900
	}
	.tip span{
		font-size:10px;
		color:#929292
	}
	.activity img{
		width:100%;
	}
	.classify_box{
		position:relative;
		width:50%;
		float:left;
		margin-top:20px;
	}
	.classify_box p{
		position:absolute;
		top:10px;
		left:10px;
		color:#fff;
		font-size:14px;
	}
	.classify_box img{
		width:100%;
		border-left:1px solid #fff;
		border-bottom:1px solid #fff;
		box-sizing:border-box;
	}
</style>
