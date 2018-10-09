<template>
    <div class="share_details">
    	<Headers></Headers>
      <div class="head">
        <img :src="img" alt="" class="user_img">
        <p class="tip">{{user_name}}送您TA的专属邀请卡</p>
        <div class="coupon_box flex_between">
          <div class="coupon">
            <p class="price">20<span>元</span></p>
            <p class="coupon_tip">充值专用</p>
            <button type="button" class="btn">领取</button>
          </div>
          <p class="min"><span>或</span></p>
          <div class="coupon">
            <p class="price">20<span>元</span></p>
            <p class="coupon_tip"><span>充值专用</span></p>
            <button type="button" class="btn">领取</button>
          </div>
        </div>
      </div>

      <div class="love">
        <h1 class="hot_title"><span>新用户热销排行</span></h1>
        <div class="">
          <van-list
            v-model="loading"
            :finished="finished"
            @load="onLoad"
          >
            <router-link  to="" v-for="(item,index) in love" :key="item.id" class="love_list">
              <img :src="item.img" alt="">
              <p v-if="item.erea">{{item.erea}}</p>
              <span class="over">{{item.title}}</span>
              <span class="love_price">￥{{item.price}}</span>
            </router-link >
          </van-list>
        </div>
      </div>


    </div>
</template>

<script>
  import Headers from 'base/header/header'
  export default {
  	name:"share_details",
    components: {
      Headers
    },    
    data () {
        return {
          title: 'M50e',
          rightText: '',
          rightIcon:'',
          rightPath:'',
          user_name:"欧阳阳",
          img:require('common/image/user_img.png'),
          show:false,
          loading: false,
          finished: false,
          love:[
            {img:require('common/image/store7.png'),title:"带帽式多功能肩枕",price:"66",id:1,},
            {img:require('common/image/store7.png'),title:"带帽式多功能肩枕",price:"66",id:2,erea:"限时特价"},
            {img:require('common/image/store7.png'),title:"带帽式多功能肩枕",price:"66",id:3,erea:"限时特价"},
            {img:require('common/image/store7.png'),title:"带帽式多功能肩枕",price:"66",id:4,erea:"限时特价"},
          ]
        }
    },
    methods:{
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
        }
    },
    created() {
      Headers.props.title.default = this.title
      Headers.props.rightText.default = this.rightText
      Headers.props.rightIcon.default = this.rightIcon
      Headers.props.rightPath.default = this.rightPath
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .head{
    background: #BFC58A;
    padding:20px 0 38px 0;
    margin-top: -10px;
  }
  .user_img{
    width:50px;
    height:50px;
    box-shadow:0px 1px 3px rgba(0,0,0,0.16);
    border-radius:100%;
    display: block;
    margin:0 auto;
  }
  .tip{
    color: #fff;
    margin:10px 0 35px 0;
    font-size: 14px;
    text-align: center;
    width: 100%;
  }
  .coupon{
    width: 114px;
    height: 179px;
    background: url(../../common/image/bg.png);
    background-size: 100%;
  }
  .coupon_box{
    padding: 0 35px;
  }
  .flex_between{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .price{
    font-size: 40px;
    color:#BFC58A;
    margin:30px 0 25px 0; 
    text-align: center;
  }
  .price span{
    font-size: 12px;
  }
  .coupon_tip{
    font-size: 8px;
    color: #bebebe;
    text-align: center;
  }
  .btn{
    width:44px;
    height:18px;
    background:rgba(191,197,138,1);
    border-radius:4px;
    font-size: 10px;
    color: #fff;
    margin: 25px auto 0 auto;
    border:0;
    display: block;
  }
  .min{
    height: 130px;
    width: 1px;
    background: #fff;
    position: relative;
  }
  .min span{
    position: absolute;
    top:50%;
    left: 50%;
    margin-top: -7.5px;
    margin-left: -7.5px;
    color: #fff;
    font-size:12px;
    height: 15px; 
    width: 15px;
    background:#BFC58A;
    line-height: 15px;
  }

  .love{
    padding: 16px;
    overflow:hidden;
    background:#fff;
  }
  .love h1{
    width:80%;
    font-size:14px;
    margin:30px auto 20px auto;
    text-align:center;
    color:#666;
    border-bottom: 1px solid #DFDFDF;
    position: relative;
  }
  .love h1 span{
    position: absolute;
    bottom: -6px;
    left: 50%;
    width: 110px;
    margin-left: -55px;
    background:#fff;
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
    height:202px
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
    width:50px;
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
</style>
