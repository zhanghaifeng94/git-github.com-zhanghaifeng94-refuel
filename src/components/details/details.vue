<template>
    <div class="details">
      <div class="banner">
        <van-swipe @change="onChange" :autoplay="3000" :show-indicators="false">
          <van-swipe-item class="swipe" v-for="(item,index) in swipe" :key="index"><img v-lazy="item.src"></van-swipe-item>
        </van-swipe>
        <div class="back" @click="onBack()">
          <i class="iconfont icon-back"></i>
        </div>
        <div class="home" @click="onHome()">
          <i class="iconfont icon-home"></i>
        </div>
        <div class="number">
          <span>{{apiece}}</span>/<span>{{sum}}</span>
        </div>
      </div>
      <div class="fn_text_wrap">
        <div class="name">
          <div class="left">
            <div class="tit">带帽日式多功能颈枕</div>
          </div>
        </div>
        <div class="price">
          <div class="jg">
            <span class="xj">¥ 78</span>
            <span class="yj">¥ 89</span>
          </div>
          <div class="text">购买最高得6积分</div>
        </div>
      </div>
      <div class="choose">
        <div class="specification" @click="onSize()">
          <span>数量规格选择</span>
          <i class="iconfont icon-right"></i>
        </div>
        <div class="help">
          ● 30天无忧退换货 ● 48小时快速退款 ● M50e自营品牌 <br/> 国内部分地区不支持配送
        </div>
      </div>
      
      <div class="comment_box">
        <router-link to="/store/comment_list" class="total flex_between" target="div">
          <span>用户评价({{comment.total}})</span>
          <span><b>99.9%</b>好评率<i class="iconfont icon-right"></i></span>
        </router-link>  
        <div class="comment">
          <div class="top flex">
            <img :src="comment.src" alt="">
            <p>{{comment.name}}</p>
            <van-rate
              v-model="value"
              :size="15"
              :count="5"
              color="#FFC400"
              void-color="#ccc"
              readonly
            />
          </div>
          <div class="min">
            <span>{{comment.time}}</span>
            <span>{{comment.color}}</span>
          </div>
          <p class="con">{{comment.con}}</p>
          <div class="img_box flex_wrap">
            <img :src="item.img" alt="" v-for="(item,index) in comment.imgs" :key="index">            
          </div>
          <div class="replay">
            小5回复：{{comment.replay}}
          </div>
        </div>
      </div>

      <img :src="detail_img" alt="" class="msg">

      <div class="love">
        <h1>猜你喜欢</h1>
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
     
      <div class="h48"></div>
      <div class="bottom_btn flex_between">
        <div class="icons flex_between">
          <i class="iconfont icon-service" @click="onService()"></i>
          <i class="iconfont icon-cart"></i>
          <i class="iconfont icon-favor" v-if="state" @click="onLove(state)"></i> 
          <i class="iconfont icon-favorfill" v-if="!state" @click="onLove(state)"></i>        
        </div>
        <div class="flex btn" v-if="show">
          <p class="card">加入购物车</p>
          <p class="buy">立即购买</p>
        </div>
        <div class="btn" v-if="!show"><span>告罄</span></div>
      </div>

      <!--规格弹窗-->
      <div class="size_box" v-if="onTip">
        <div class="size">
          <div class="size_top">
            <img :src="product.img" alt="" class="pro_img">
            <div class="flex_box">
              <i class="iconfont icon-round_close_light" @click="onCancel()"></i>
              <p class="size_price">价格：￥{{product.price}}<u>￥{{product.r_price}}</u></p>
              <p class="other">{{size}}</p>
            </div>            
          </div>
          <div class="size_min">
            <h1>颜色</h1>
            <p v-for="(item,index) in product.colors" :key="index" :class="Isindex==index?'active':''" @click="onChice(item.none,index)">{{item.color}}</p>
          </div>
          <div class="size_bottom">
            <h1>数量</h1>
            <van-stepper
                v-model="val"
                integer
                :min="1"
                :max="40"
                :step="1"
              />
          </div>
        </div>
      </div>
    </div>
</template>

<script >
import { Toast } from 'vant';
export default {
  data() {
    return {
      swipe: [{
        src: require('common/image/12.png'),
        id: '1'
      }, {
        src: require('common/image/12.png'),
        id: '2'
      }, {
        src: require('common/image/12.png'),
        id: '3'
      }],
      sum: '',
      value: 5,
      val:1,
      apiece: 1,
      loading: false,
      finished: false,
      Isindex:-1,
      show:true,
      state:true,
      onTip:false,
      detail_img: require('common/image/222222.png'),
      love:[
        {img:require('common/image/store7.png'),title:"带帽式多功能肩枕",price:"66",id:1,},
        {img:require('common/image/store7.png'),title:"带帽式多功能肩枕",price:"66",id:2,erea:"限时特价"},
        {img:require('common/image/store7.png'),title:"带帽式多功能肩枕",price:"66",id:3,erea:"限时特价"},
        {img:require('common/image/store7.png'),title:"带帽式多功能肩枕",price:"66",id:4,erea:"限时特价"},
      ],
      comment:{
        src:require('common/image/user_img.png'),
        total:235,
        name:"1265489",
        time:"2018.09.23 09:23",
        color:"藏青色",
        con:"手感很好，帽子也很管用，颜色正式我想要的。刚拿到有点皱，放一会就好了",
        replay:"感谢您对M50e产品的信任和支持，有您的支持我们会更加努力做好每件产品，期待您的再次光临",
        imgs:[
           {img:require('common/image/store3.png')},
           {img:require('common/image/member1.png')},          
           {img:require('common/image/store3.png')},
           {img:require('common/image/member1.png')},
         ]
      },
      size:"请选择规格属性",
      product:{
        img:require('common/image/store3.png'),
        colors:[
          {color:"藏青色",none:true},
          {color:"麻灰色",none:false}
          ],
        price:"78",
        r_price:"69"
      },
    }
  },
  created() {
    this.sum = this.swipe.length
  },
  methods: {
    onChange(index) {
      this.apiece = index + 1
    },
    onBack(){
      this.$router.back(-1)
    },
    onHome(){
      this.$router.push({
        path: "/store"
      })
    },
    onSize(){
      this.onTip=true
    },
    onCancel(){
      this.onTip=false
    },
    onService(){
      this.$router.push({
        path: "/index/service"
      })
    },
    onChice(val,index){
      //console.log(val)
      this.Isindex=index
      if(val==true){
        this.show=false
      }else{
        this.show=true
      }
    },
    onLove(state){
      console.log(state)
      if(state==true){
        this.state=false
        Toast('收藏成功');
      }else{
        this.state=true
        Toast('取消收藏');
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
  }

}
</script>
<style scoped>
  .size_box{
    position: fixed;
    top:0;
    left:0;
    background: rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
  }
  .size{
    position: fixed;
    bottom:40px;
    width: 100%;
    background: #fff;
    padding: 16px;
    box-sizing: border-box;
  }
  .size_top{
    display: flex;
  }
  .pro_img{
    max-width: 78px;
    max-height: 78px;
    margin-right: 4px;
    float: left;
  }
  .flex_box{
    width: 100%;
  }
  .icon-round_close_light{
    width: 100%;
    display: block;
    text-align: right;
    font-size: 24px;
    color: #BEBEBE;
  }
  .size_price{
    color: #EE722E;
    font-size: 12px;
    margin-bottom: 4px;
    margin-top: 26px;
  }
  .size_price u{
    font-size:10px;
    color: #929292;
    text-decoration: line-through;
  }
  .other{
    font-size: 12px;
    color: #707070;
  }
  .size_bottom h1,
  .size_min h1{
    margin:15px 0 6px 0;
    font-size: 14px;
    color: #707070;
  }
  .size_min p{
    border:1px solid rgba(112,112,112,1);
    border-radius:2px;
    padding:4px 6px;
    color: #707070;
    display: inline-block;
    margin-right: 6px; 
    margin-bottom: 12px;
  }
  .size_min p.active{
    border: 1px dashed #EE722E;
    color: #EE722E;
  }
  .bottom_btn{
    position: fixed;
    bottom: 0;
    left: 0;
    background:rgba(249,249,249,1);
    box-shadow:0px 0px 0px rgba(0,0,0,0.16);
    padding:5px 16px; 
    width: 100%;
    height:auto;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    z-index: 1000;
  }
  .icons{
    width:38%;
  }
  .icons i{
    font-size: 20px;
    color: #666;
  }
  .btn{
    border-radius: 50px;
    overflow: hidden;
    width:55%;
    background:#EE722E;
    font-size: 14px;
    color: #fff; 
    text-align: center;
  }
  .btn p{
    width: 50%;
    padding: 10px 0; 
  }
  .btn span{
    display: block;
    padding: 10px 0; 
  }
  .btn p.buy{
    background: #FF4444
  }
  .h48{
    width: 100%;
    height:48px;
  }
  .msg{
    width: 100%;
    height: 100%;
  }
  .love{
    border-top: 10px solid #ececec;
    padding: 16px;
    overflow:hidden;
    background: #fff;
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
  .comment_box{
    background: #fff;
    padding-left: 16px;
  }
  .flex_between{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .total{
    padding:10px 16px 10px 0;
    border-bottom: 1px solid #ececec;
    font-size: 12px;
    color: #707070;
  }
  .icon-right{
    font-size: 14px;
  }
  .comment{
    padding: 0 16px 10px 0;
  }
  .total b{
    color: #EE722E;
    margin-right: 5px;
  }
  .flex{
    display: flex;
    align-items: center;
  }
  .top{
    margin:10px 0 5px 0;
  }
  .top img{
    width:22px;
    height:22px;
    border-radius: 100%;
    margin-right: 5px;
    background: #ececec; 
  }
  .top p{
    font-size: 12px;
    color: #707070;
    margin-right: 10px;
  }
  .icons i.icon-favorfill{
    color:#EE722E ;
    margin-right:6px 
  }
  .star{
    color: #FFC400
  }
  .min{
    margin:0 0 13px 0;
  }
  .min span{
    font-size: 8px;
    color: #bebebe;
    margin-right: 8px;
  }
  .con{
    font-size: 12px;
    color: #707070;
    line-height: 20px;
    margin-bottom: 7px;
  }
  .flex_wrap{
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
  }
  .img_box img{
    width: 24%;
    max-height: 78px;
    margin-bottom: 10px;
    height: 100%;
  }
  .replay{
    background: #ECECEC;
    border-radius: 2px;
    padding: 10px;
    line-height: 17px;
    font-size: 10px;
    color: #929292;
  }
  /*手机适配*/
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
<style scoped lang="stylus" rel="stylesheet/stylus">
  .details
    .banner
      position relative
      .swipe
        width: 100%
        height 360px
        img
          width 100%
          height 100%
      .back,.home,.share
        width: 34px
        height: 34px
        background rgba(0,0,0,0.4)
        border-radius 50%
        position: absolute
        top 7px
        text-align center
        line-height 34px
        color #ffffff
        i
         font-size 20px
      .back
        left 8px
      .home
        right 8px
      .number
        width 36px
        height 21px
        background rgba(0,0,0,0.4)
        border-radius 11px
        text-align center
        font-size 12px
        color #ffffff
        position absolute
        bottom 20px
        right 16px
        line-height 21px
    .fn_text_wrap
      background #ffffff
      padding 20px 0 15px 16px
      box-sizing border-box
      margin-bottom 10px
      .name
        display flex
        justify-content space-between
        align-items center
        margin-bottom 10px
        padding:0 16px 0 0
        .tit
          color: #666666
          margin-bottom 4px
          font-size 14px
        .js
          color: #929292
          font-size 12px
        .right
          border-left 1px dashed #707070
          padding-left 13px
          display flex
          align-items center
          i
            font-size 20px
            color: #707070
            margin-right 6px
          span
            color: #929292
            font-size 8px
      .price
        color: #929292
        display flex
        justify-content space-between
        padding 10px 16px 0 0
        border-top 1px solid #DFDFDF
        font-size 10px
        .xj
          font-size 14px
          color: #ee722e
    .choose
      padding 0 0 0 16px
      box-sizing border-box
      background #ffffff
      margin-bottom 10px
      .specification,.help
        display flex
        justify-content space-between
        color: #929292
        align-items center
        border-bottom 1px solid #DFDFDF
        font-size 12px
        padding:10px 16px 10px 0
        b
          padding 4px 5px
          background #F97F7F
          color: #ffffff
          margin 0 10px
      .help
        border none
        line-height 18px
</style>


