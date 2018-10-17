<template>
    <div class="store">
		<div class="header">
	        <router-link to="/index/quick_pay"><i class="iconfont icon-zhifu1"></i></router-link>
			<router-link to="/store/search" class="search"><i class="iconfont icon-search glass"></i></router-link>
			<router-link to="/index/msg"><i class="iconfont icon-comment"></i></router-link>
		</div>
		<div class="nav_box">
			<div class="nav">
				<div class="nav_nav">
					<div v-for="(item,index) in nav" :key="index" class="nav_list" @click="onActive(index)" :class="Isindex==index?'onactive':''">{{item}}</div>
				</div>
			</div>
			<span class="up">
				<i :class="show?'iconfont icon-unfold jiantou':'iconfont icon-unfold animation'" @click="onShow()"></i>
			</span>
			<div class="open" v-if="show">
				<div v-for="(item,index) in nav2" :key="index" class="open_list" :class="Isindex==index?'active':''" @click="onActive(index)"> {{item}}</div>
			</div>
		</div>

		<mt-swipe :auto="0" class="swipe">
			<mt-swipe-item class="swipe-item" v-for="(item,index) in swipe" :key="index">
			  <img :src="item.img" alt="" class="swipe-item-img">
			</mt-swipe-item>
		</mt-swipe>

		<div class="con" v-if="status">
			<div class="box">
				<ul class="tip flex_between">
				  <li class="flex">
				  	<i class="iconfont icon-roundcheck"></i>
				  	<span>M50自营品牌</span>
				  </li>
				  <li class="flex">
				  	<i class="iconfont icon-roundcheck"></i>
				  	<span>30天无忧退换货</span>
				  </li>
				  <li class="flex">
					<i class="iconfont icon-roundcheck"></i>
				  	<span>48小时快速退款</span>
				  </li>
				</ul>
				<div class="activity">
			        <img src="../../common/image/store1.png" alt="">
			    </div>
				<div class="classify">
					<router-link :to="index==2?'/store/members':'/store/commodity'" class="classify_box" v-for="(item,index) in classify" :key="item.id">
						<p>{{item.msg}}</p>
						<img :src="item.img" alt="">
					</router-link>
				</div>
			</div>
			<div class="advice">
				<div class="advice_title flex">
					<p>人气推荐</p>
					<router-link to="">更多 <i class="iconfont icon-right"></i></router-link>
				</div>
				<router-link class="hot" to="">
					<img :src="hot.img" alt="">
					<div class="hot_msg">
						<h1>{{hot.title}}</h1>
						<p>{{hot.nav_title}}</p>
						<span>{{hot.price}}</span>
					</div>
				</router-link>
				<div class="advice_list">
					<router-link  to="" v-for="(item,index) in advice" :key="item.id" class="list" tag="li">
						<img :src="item.img" alt="">
						<div class="msg">
							<h1 class="over">{{item.title}}</h1>
							<div class="flex">
								<p>价格</p>
								<span>￥ {{item.price}}</span>
							</div>
						</div>
					</router-link >
				</div>
			</div>
		</div>

	
		<div class="con" v-if="!status">
			<div class="tuijian">
				<div v-for="(item,index) in tuijian" :key="index" class="tuijian_list" @click="onNav(item.id)">
					<img :src="item.img" alt="">
					<p>{{item.title}}</p>
				</div>
			</div>
		</div>

		<div class="love">
			<h1>{{title}}<h2>{{nav_title}}</h2></h1>
			<div class="">
				<van-list
					v-model="loading"
					:finished="finished"
					@load="onLoad"
				>
					<router-link  to="" v-for="(item,index) in love" :key="index" class="love_list">
						<img :src="item.img" alt="">
						<p v-if="item.erea">{{item.erea}}</p>
						<span class="over">{{item.title}}</span>
						<span class="love_price">￥{{item.price}}</span>
					</router-link >
				</van-list>
			</div>
		</div>

		<div class="car">
			<span class="car_icon"><i class="iconfont icon-cart"></i></span>
			<span @click="scrollToTop()" v-if="toTopShow"><img src="../../common/image/top.png" lt=""></span>
		</div>
    </div>
</template>

<script>
  export default {
  	  name:"store",
  	  data () {
		return {
		title:"猜你喜欢",
		nav_title:"",
		Isindex:0,
		toTopShow:false,
		status:true,
		show:false,
		loading: false,
        finished: false,
		  tuijian: [{
		    img: require('common/image/store3.png'),
		    id: '1',
		    title:"润滑油"
		  }, {
		    img: require('common/image/store3.png'),
		    id: '2',
		    title:"添加剂"
		  }, {
		    img: require('common/image/store3.png'),
		    id: '3',
		    title:"轮胎"
		  },{
		    img: require('common/image/store3.png'),
		    id: '4',
		    title:"滤清器"
		  }, {
		    img: require('common/image/store3.png'),
		    id: '5',
		    title:"防冻液"
		  }, {
		    img: require('common/image/store3.png'),
		    id: '6',
		    title:"雨刷"
		  }, {
		    img: require('common/image/store3.png'),
		    id: '7',
		    title:"清洁剂"
		  },{
		    img: require('common/image/store3.png'),
		    id: '8',
		    title:"火花塞"
		  }, {
		    img: require('common/image/store3.png'),
		    id: '9',
		    title:"车灯"
		  }, {
		    img: require('common/image/store3.png'),
		    id: '10',
		    title:"全部"
		  }],
		  swipe: [{
		    img: require('common/image/banner.png'),
		  }, {
		    img: require('common/image/banner.png'),
		  }, {
		    img: require('common/image/banner.png'),
		  }],
		  nav:["推荐","维修保养","车载电器","汽车装饰","安全自驾","维修保养"],
		  nav2:["推荐","维修保养","车载电器","汽车装饰","安全自驾","维修保养"],
		  select:[
			{
				img: require('common/image/store6.png'),
				title:"颈枕眼罩二合一，国庆大减价",
				msg:"带帽式多功能颈枕,限时七折",
				price:66
			}, {
				img: require('common/image/store6.png'),
				title:"颈枕眼罩二合一，国庆大减价",
				msg:"带帽式多功能颈枕,限时七折",
				price:66
			}, {
				img: require('common/image/store6.png'),
				title:"颈枕眼罩二合一，国庆大减价",
				msg:"带帽式多功能颈枕,限时七折",
				price:66
			}
		  ],
	      classify: [{
	        img: require('common/image/store2.png'),
	        msg:"M50自有商品"
	      }, {
	        img: require('common/image/store2.png'),
	        msg:"M50自有商品"
	      }, {
	        img: require('common/image/store2.png'),
	        msg:"M50会员优享"
	      }, {
	        img: require('common/image/store2.png'),
	        msg:"M50自有商品"
	      } ],
	      hot:{img:require('common/image/store8.png'),title:"日式和风声波式便携电动",price:"199",nav_title:"随时充电，精巧实用"},
	      advice:[
	      	{img:require('common/image/store3.png'),title:"带帽式多功能肩枕",price:"66"},
	      	{img:require('common/image/store4.png'),title:"智造智能随行杯",price:"159",},
	      	{img:require('common/image/store5.png'),title:"20寸 印花 纯PC拉链拉杆箱",price:"439"},
	      ],
	      love:[
	      	{img:require('common/image/store7.png'),title:"带帽式多功能肩枕",price:"66",id:11,},
	      	{img:require('common/image/store7.png'),title:"带帽式多功能肩枕",price:"66",id:12,erea:"限时特价"},
	      	{img:require('common/image/store7.png'),title:"带帽式多功能肩枕",price:"66",id:13,erea:"限时特价"},
	      	{img:require('common/image/store7.png'),title:"带帽式多功能肩枕",price:"66",id:14,erea:"限时特价"},
	      ]

	   	}
	  },
	  methods:{
	  	onShow(event){
	  		console.log()
	  		if(this.show==false){
	  			//打开
	  			this.show=true
	  			this.nav="";
	  		}else{
	  			this.show=false;
	  			this.nav=this.nav2
	  		}
	  	},
	  	onActive(index){
	  		this.Isindex=index
	  		if(index==0){
	  			this.status=true
	  			this.title="猜你喜欢"
	  			this.nav_title=""
	  		}else{
	  			this.status=false
	  			this.title="润滑油"
	  			this.nav_title="Catrol等品牌"
	  		}
	  	},
	  	onNav(type){
	  		this.$router.push({
				path:`/store/nav_list/${type}`
    		})
	  	},
		handleScroll() {
	        //首先修改相对滚动位置
	        this.scrollTop = this.scrollTop = window.pageYOffset || document.body.scrollTop
	        if (this.scrollTop > 300) {
	          this.toTopShow = true
	        }else {
	          this.toTopShow = false
	        }
	     },
	     onLoad() {
          // 异步更新数据
          setTimeout(() => {
            let aa = {
              img: require('common/image/store7.png'),
              title: '带帽式多功能肩枕',
              price:"66"
            }
            for (let i = 0; i < 10; i++) {
              this.love.push(aa)
            }
            // 加载状态结束
            this.loading = false

            // 数据全部加载完成
            if (this.love.length >= 5) {
              this.finished = true
            }
          }, 1000)
        },
	    scrollToTop() {
	        let timer = null, _that = this
	        //动画，使用requestAnimationFrame代替setInterval
	        cancelAnimationFrame(timer)
	        timer = requestAnimationFrame(function fn() {
	          if (_that.scrollTop > 0) {
	            _that.scrollTop -= 50
	            //然后修改这里实现动画滚动效果
	            document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop
	            timer = requestAnimationFrame(fn)
	          } else {
	            cancelAnimationFrame(timer);
	            _that.toTopShow = false
	          }
	        })
	      }
	  },
	  mounted() {
		  this.$nextTick(function () {
		    //修改事件监听
		    window.addEventListener('scroll', this.handleScroll)
		  });
	  },
	  destroyed() {
		  window.removeEventListener('scroll', this.handleScroll)
	  }

  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	.store{
		padding-bottom:100px;
		background:#fff;
	}
    .store .header i.icon-zhifu1{
    	font-size: 17px;
  	}
  	.header i.icon-comment{
  		font-size:26px;
  	}
  	.icon-right{
  		font-size:7px;
  	}
  	.jiantou{
  		-webkit-transform: rotate(180deg);
  		   -moz-transform: rotate(180deg);
  		    -ms-transform: rotate(180deg);
  		     -o-transform: rotate(180deg);
  		        transform: rotate(180deg);
  	}
  	.jiantou,
  	.animation{
  		-webkit-transition:-webkit-transform 0.5s linear;
    	transition:transform 0.5s linear;
  	}
  	.up i{
  		float:left
  	}
  	.select{
  		width:100%;
  		padding:15px 0;
  	}
    .select,
  	.nav{
    	white-space:nowrap;
    	overflow-x:auto;
    	float:left;
  	}
  	.select::-webkit-scrollbar,
	.nav::-webkit-scrollbar {
        display: none;
    }
    .select_box{
  		display:inline-block;
  		margin-right:10px;
		box-shadow: 0px 2px 6px rgba(88,0,0,0.16);
		width:230px;
		padding-bottom:14px;
    }
    .select_box img{
    	width:100%;
    	height:100%;
    }
    .select_msg{
    	margin:10px 11px 5px 11px;
    }
    .select_msg h1{
    	font-size:12px;
    	width:60%;
    	color:#666;
    }
    .select_msg span{
    	color:#EE722E;
    	font-size:12px;
    }
    .select_box p{
    	font-size:12px;
    	color:#929292;
    	margin:0 11px;
    }
  	.back_top{
  		-webkit-transform: rotate(-90deg);
  		   -moz-transform: rotate(-90deg);
  		    -ms-transform: rotate(-90deg);
  		     -o-transform: rotate(-90deg);
  		        transform: rotate(-90deg);
  		line-height:30px;
  	}
  	.car{
  		position:fixed;
  		bottom:68px;
  		right:16px;
  	}
  	.car_icon{
  		width:30px;
  		height:30px;
  		display:block;
  		background:rgba(0,0,0,0.4);
  		border-radius:100%;
  		color:#fff;
  		margin-bottom:10px;
  	}
  	.car span i{
  		font-size:20px;
  		display: block;
	    line-height: 32px;
	    text-align: center;
	    margin-top:10px;
  	}
  	.tuijian{
  		padding:16px 16px 0 16px;
  		overflow:hidden;
  	}
  	.tuijian_list{
  		float:left;
  		width:16%;
  		margin-right:5%;
  		margin-bottom:20px;
  	}
  	.tuijian_list:nth-child(5n){
  		margin-right:0
  	}
  	.tuijian_list img{
  		width:100%;
  		margin-bottom:5px;
  	}
  	.tuijian_list p{
  		text-align:center;
  		font-size:12px;
  		color:#929292;
  	}
  	.nav_box{
  		background:#ee722e;
  		position:relative;
  		background:#ee722e;
  		width:100%;
  		float:left
  	}
  	.up{
  		color:#fff;
  		font-size:24px;
  		float:left;
		margin: 12px 0 0 10px;
  	}
  	.search{
  		width:80%;
  		background:#fff;
  		height:34px;
  		border-radius:17px;
  		margin-top:7px;
  	}
  	.nav{
  		height:36px;
  		width:89%;
    	box-sizing: border-box;
  	}
  	.nav_list{
  		display:inline-block;
  		color:#fff;
  		font-size:14px;
  		padding-bottom:8px;
  		margin-top:13px;
  		margin-right:20px;
  	}
  	.nav_list.onactive{
  		color:#742900;
  		border-bottom:1px solid #742900
  	}
  	.nav_list:first-child{
  		margin-left:16px;
  	}
  	.open{
  		position:absolute;
  		top:36px;
  		background:#EE722E;
  		z-index:100;
  		padding:12px 16px 0 16px;
  		width:100%;
  		box-sizing:border-box;
   	}
   	.open_list{
   		float:left;
   		margin-bottom:12px;
   		color:#fff;
   		border:1px solid #fff;
   		border-radius:2px;
   		margin-right:6px;
   		width:22%;
   		margin-right:3%;
   		text-align:center;
   		padding:5px 0;
   		font-size:14px;
   	}
   	.open_list.active{
   		background:#EBA985
   	}
   	.open_list:nth-child(4n){
   		margin-right:0
   	}
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
  	.header i.glass{
  		color:#bebebe;
  		font-size:18px;
  		margin-left:12px;
  		position:absolute;
  		top:0;
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
	.con{
		background:#fff;
	}
	.box{
		padding:0 16px 16px 16px;
		background:#fff;
		overflow:hidden;
	}
	.tip{
		margin:8px 0 20px 0;
	}
	.flex_between{
		display:flex;
		justify-content:space-between;
		align-items:center
	}
	.tip i{
		font-size:10px;
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
	.advice{
		clear:both;
		border-top:20px solid #ececec;
		padding:16px;
		background:#fff;
	}
	.advice_title{
		font-size:12px;
		color:#666;
	}
	.advice_title p{
		font-size:14px;
	}
	.flex{
		display:flex;
		justify-content:space-between;
		align-items: center;
	}
	.hot{
		background:#FFD1D1;
		display:flex;
		margin-top:15px;
		box-shadow: 0px 2px 6px rgba(88,0,0,0.16);
	}
	.hot img{
		width: 114px;
		height: 114px;
		margin-right: 40px;
		margin-left: 10px;
	}
	.hot_msg{
		margin-top:20px;
	}
	.hot_msg h1{
		font-size:14px;
		font-weight:nomal;
		margin-bottom:5px;
		color:#666
	}
	.hot_msg p{
		color:#929292;
		font-size:12px;
		margin-bottom:19px;
	}
	.hot_msg span{
		color:#EE722E;
		font-size:14px;
	}
	.over{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.list{
		width:32%;
		font-size:10px;
		color:#666;
		margin-top:15px;
		margin-left:2%;
		box-sizing:border-box;
		display:inline-block
	}
	.list:first-child{
		margin-left:0
	}
	.list img{
		width:100%;
		height:100%;
	}
	.list h1{
		font-weight:nomal;
		margin:5px 0;
	}
	.msg span{
		color:#EE722E;
	}
	
	.love{
		border-top: 20px solid #ececec;
    	padding: 16px;
    	overflow:hidden;
    	background:#fff;
	}
	.love h1{
		width:100%;
		font-size:14px;
		margin:9px 0 15px 0;
		text-align:center;
		color:#666;
	}
	.love h1 h2{
		font-size:10px;
		color:#929292;
		text-align:center;
		margin-top:6px;
	}
	.love_list{
		width:48%;
		float: left;
		margin-right:4%;
		box-shadow: 0px 2px 6px rgba(88,0,0,0.16);
		margin-bottom:10px;
		padding-bottom:10px;
		border-radius:5px;
	    min-height: 232px;
	}
	.love_list:nth-child(2n){
		margin-right:0
	}
	.love_list img{
		width:100%;
		margin-bottom:4px;
	}
	.love_list p{
		margin:0 6px 4px 6px;
		background:#FF4848;
		padding:2px 6px;
		color:#fff;
		font-size:8px;
		border-radius:3px;
		display: inline-block;
	}
	.love_list span{
		display:block;
		font-size:12px;
		color:#666;
		margin:0 6px 4px 6px;
	}
	.love_list span.love_price{
		color:#EE722E
	}
	// 手机适配
	@media (max-width:375px) {
		.love_list{
			min-height:210px;
		}
	}
	@media (max-width:360px) {
		.love_list{
			min-height:205px;
		}
	}
	@media (max-width:320px) {
		.love_list{
			min-height:185px;
		}
	}
</style>

