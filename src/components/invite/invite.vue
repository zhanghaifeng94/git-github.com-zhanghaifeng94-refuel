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
        <button type="button" class="btn">分享</button>
        <p class="tip">被邀请好友可享首单20元直减券</p>      
      </div>
      
      <router-link to="/user/coupon_codes" class="bottom">我的优惠码 <i class="iconfont icon-back_android"></i></router-link>
    </div>
</template>

<script>
  import Headers from 'base/header/header'
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
</style>
