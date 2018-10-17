<template>
  <div class="user">
		<div class="head">
			<div class="flex">
				<img :src="img" alt="" @click="onLink()">
				<div class="status_none" v-if="!state">
			      <router-link to="sign_in">登录</router-link>/             
			      <router-link to="sign_up">注册</router-link>					
				</div>
				<div class="status" v-if="state">欧阳</div>
			</div>
			<div class="ad flex" @click="integrate()">
				<div class="ad_left">
					<p>M50会员</p>
					<span>积分{{integral}}</span>
				</div>
				<div class="ad_right">
					<p>会员优享，超值换购</p>
					<span>iPhone XS大礼等着你</span>
				</div>
			</div>
		</div>

		<div class="order_box">
			<h1 class="flex_between" @click="order('0')">
				我的订单
				<i class="iconfont icon-right"></i>
			</h1>
			<ul class="order_status flex">
				<li @click="order('1')">
					<i class="iconfont icon-send"></i>
					<P>待发货</P>
				</li>
				<li @click="order('2')">
					<i class="iconfont icon-deliver"></i>
					<P>待收货</P>
				</li>
				<li @click="order('3')">
					<i class="iconfont icon-comment"></i>
					<P>待评价</P>
				</li>
				<li @click="onReturn()">
					<i class="iconfont icon-refund"></i>
					<P>退款/售后</P>
				</li>
			</ul>
			<router-link to="" class="card">
				<i class="iconfont icon-cart"></i>
				<span v-if="card_state">您的购物车空空如也</span>
				<span v-if="!card_state">您的购物车的商品还没结算</span>
			</router-link>
		</div>

		<div class="order_box service_box">
			<h1 class="flex_between">
				我的服务
			</h1>
			<div class="order_status flex_wrap">
				<router-link to="user/collect">
					<i class="iconfont icon-favor"></i>
					<P>收藏</P>
				</router-link>
				<router-link to="/user/bill">
					<i class="iconfont icon-form"> </i>
					<P>账单</P>
				</router-link>
				<router-link to="/user/invite">
					<i class="iconfont icon-present"></i>
					<P>邀请有礼</P>
				</router-link>
				<router-link to="/index/coupon">
					<i class="iconfont icon-comment"></i>
					<P>优惠券</P>
				</router-link>
				<router-link to="/index/service">
					<i class="iconfont icon-service"></i>
					<P>客服</P>
				</router-link>
				<router-link to="/index/help">
					<i class="iconfont icon-copy"></i>
					<P>帮助</P>
				</router-link>
				<router-link to="">
					<i class="iconfont icon-location"></i>
					<P>地址</P>
				</router-link>
				<router-link to="/user/setting">
					<i class="iconfont icon-settings"></i>
					<P>设置</P>
				</router-link>				
			</div>
		</div>	
  </div>	
</template>

<script>
export default {
  name: 'user',
  data() {
    return {
      state: false,
      integral: 10,
      card_state: true,
      img: require('common/image/user_head.png')
    }
  },
  methods:{
    order(id){
      console.log(id)
      this.$router.push({
          path: `/user/order/${id}`,
        })
    },
    integrate(){
      this.$router.push({
        path: '/user/integrate'
      })
    },
    onLink(){
      this.$router.push({
        path: '/user/personal'
      })
    },
    onReturn(){
      this.$router.push({
        path:"/user/customer_service"
      })
    }
  },


}
</script>

<style scoped>
  .head {
    background: #EE722E;
    position: relative;
    padding: 58px 16px
  }

  .head img {
    width: 46px;
    height: 46px;
    border-radius: 100%;
    margin-right: 10px;
    float: left;
    background: #fff;
  }

  .status,
  .status_none,
  .status_none a {
    color: #fff;
    font-size: 20px;
  }

  .flex {
    display: flex
  }

  .ad {
    position: absolute;
    bottom: -35px;
    width: 92%;
    left: 0;
    margin-left: 4%;
    border-radius: 10px;
    background: #fff;
    padding: 10px 0;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.06);
    box-sizing: border-box
  }

  .ad_left {
    margin: 0 0 0 10px;
    border-right: 1px solid #DFDFDF;
    padding-right: 12px;
  }

  .ad_left p {
    font-size: 14px;
    color: #EE722E;
    margin-bottom: 6px;
  }

  .ad_left span {
    font-size: 10px;
    color: #bebebe;
  }

  .ad_right p {
    margin-left: 20px;
    font-size: 14px;
    color: #929292;
    margin-bottom: 6px;
  }

  .ad_right span {
    margin-left: 20px;
    font-size: 8px;
    color: #929292;
  }

  .order_box {
    width: 92%;
    background: #fcfcfc;
    border-radius: 10px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.06);
    padding-bottom: 15px;
  }

  .order_box {
    margin: 45px auto 10px auto;
  }

  .service_box {
    margin: 0 auto 100px auto
  }

  .order_box h1 {
    border-bottom: 1px solid #DFDFDF;
    padding: 12px 10px;
    font-size: 14px;
    color: #222;
  }

  .order_box h1 i {
    color: #bebebe
  }

  .flex_between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .order_status {
    padding: 10px;
  }
  .order_status a,
  .order_status li {
    width: 25%;
  }

  .order_status i {
    color: #bebebe;
    display: block;
    text-align: center;
    font-size: 25px;
  }

  .order_status p {
    font-size: 12px;
    color: #929292;
    margin-top: 10px;
    text-align: center
  }

  .card {
    background: #00e2d3;
    border-radius: 5px;
    width: 94%;
    padding: 10px;
    box-sizing: border-box;
    display: block;
    margin: 0 auto;
    color: #fff;
    font-size: 14px;
  }

  .card i {
    font-size: 20px;
    margin-right: 10px;
  }

  .flex_wrap {
    display: flex;
    justify-content: flex_wrap;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
  }

  .flex_wrap i {
    margin-top: 20px;
  }
</style>
