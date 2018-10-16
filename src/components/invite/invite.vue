<template>
    <div class="invite">
    	<Headers></Headers>
      <div class="con">
        <img src="../../common/image/invite.png" alt="" class="bg">
        <h1>邀请好友得优惠</h1>
        <p class="indroduce">为好友提供优惠链接，TA首次下单后您可获得优惠兑换码作为奖励。邀请越多获码越多。兑换优惠券越多</p>
        <ul class="link flex_between"> 
          <li>
            <img src="../../common/image/invite1.png" height="60" width="60" alt="">
            <p>分享专属优惠给好友</p>
          </li>
          <li class="jiantou">
            <i class="iconfont icon-back_android"></i>
          </li>
          <li>
            <img src="../../common/image/invite2.png" alt="">
            <p>好友领券下单</p>          
          </li>
          <li class="jiantou">
            <i class="iconfont icon-back_android"></i>
          </li>        
          <li>
            <img src="../../common/image/invite3.png" alt="">
            <p>好友确认收货您得券</p>           
          </li>
        </ul>  
        <button type="button" class="btn" @click="onShow()">分享</button>
        <p class="tip">被邀请好友可享首单20元直减券</p>      
      </div>
      
      <router-link to="/user/coupon_codes" class="bottom">我的优惠码 <i class="iconfont icon-back_android"></i></router-link>

      <div class="tip_box" v-if="copy_show">
        <div class="tip_con">
          <h1>复制链接分享给好友<i></i></h1>
          <div class="btns flex_between">
            <button type="button" @click="onCancle()">取消</button>
            <button type="button" 
                    class="copy"
                    v-clipboard:copy="link"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError">
            复制</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Headers from 'base/header/header'
  import { Toast } from 'vant'
  export default {
  	name:"invite",
    components: {
      Headers
    },    
    data () {
        return {
          title: '邀请有礼',
          rightText: '',
          rightIcon:'',
          copy_show:false,
          link:"【好友给您发来了专属优惠券】好友为您送来了M50e的20元充值券/20元商城券，赶紧下单吧！http：//m.m50.cn点击链接，再选择浏览器打开"
        }
      },
      methods:{
        onCopy(e) {
          this.copy_show=false
          Toast('已复制，快分享给好友')
        },
        onError(e) {
          this.copy_show=false
          Toast('复制失败')
        },
        onCancle(){
          this.copy_show=false
        },
        onShow(){
          this.copy_show=true
        }
      },
      created() {
        Headers.props.title.default = this.title
        Headers.props.rightText.default = this.rightText
        Headers.props.rightIcon.default = this.rightIcon
      }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .con{
    background:#fff;
    padding:20px 16px;
  }
  .bg{
    width:209px;
    height:202px;
    display:block;
    margin:0 auto
  }
  .con h1{
    font-size:20px;
    color:#222
    margin-bottom:20px;
    text-align:center;
  }
  .indroduce{
    font-size:12px;
    color:#666;
    line-height:20px;
  }
  .flex_between{
    display:flex;
    justify-content:space-between;
  }
  .link li{
    width:32%;
    margin-top:20px;
  }
  .link li.jiantou{
    width:2%;
    color:#F6D6D6;
    font-size:14px;
    margin:35px 0 20px 0;
  }
  .link li p{
    font-size:10px;
    color:#929292;
    text-align:center;
    margin-top:15px;
  }
  .link li img{
    width:50px;
    height:50px;
    display:block;
    margin:0 auto;
  }
  .btn{
    width:100%;
    border:0;
    height:40px;
    background:rgba(238,114,46,1);
    border-radius:4px;
    box-shadow:0px 2px 6px rgba(88,0,0,0.16);
    font-size:20px;
    color:#fff;
    margin:20px 0;
  }
  .tip{
    font-size:10px;
    color:#929292;
    text-align:center;
  }
  .bottom{
    margin:20px 0;
    font-size:14px;
    color:#666;
    text-align:center;
    display:block;
    width:100%;
  }
  .bottom i{
    font-size:14px;
    color:#bebebe;
    margin-left:5px;
  }
  .tip_box{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.6)
  }
  .tip_con{
    position:fixed;
    bottom:200px;
    left:4%;
    width:92%;
    background:#fff;
    border-radius:10px;
    padding:30px 40px;
    box-sizing:border-box;
  }
  .tip_con h1{
    font-size:14px;
    color:#666;
    text-align:center
  }
  .tip_con h1 i{
    width:100px;
    height:1px;
    background:#DFDFDF;
    display:block;
    margin:25px auto;
  }
  .btns button{
    background:rgba(201,201,201,1);
    box-shadow:0px 0px 0px rgba(88,0,0,0.16);
    padding:10px 30px;
    font-size:20px;
    color:#fff;
    border-radius:20px;
    border:0;
  }
  .btns button.copy{
    background:#EE722E;
  }
</style>
