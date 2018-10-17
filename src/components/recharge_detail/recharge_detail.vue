<template>
    <div class="recharge_detail">
      <headers></headers>
      
      <div class="top">
        <h1>{{con.type_text}}</h1>
        <div class="flex min">
          <p class="icons"><i class="iconfont icon-AK-LYhuiyuanqia"></i></p>
          <div class="msg">
            <p>{{con.price}}元会员充值</p>
            <span v-if="con.reduce.length!=0">-{{con.reduce}}</span>
            <span>￥{{con.price}}</span>
          </div>
        </div>
      </div>
  
      <ul class="detail">
        <li>
          <p class="flex_between">
          充值编号：{{con.num}}             
          <button type="button" 
                    class="copy"
                    v-clipboard:copy="con.num"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError">
            复制</button></p>
          <p>下单时间：{{con.time}}</p>
        </li>
        <li>
          <p>支付方式：{{con.type}}</p>
          <p>商品合计：{{con.price}}</p>
          <p v-if="con.reduce.length!=0">优惠券减：-{{con.reduce}}</p>
        </li>
        <li>
          <p>应付合计：{{con.r_price}}</p>
          <router-link to="" class="flex_between link">
            充值成功得10积分
            <p>积分兑好礼<i class="iconfont icon-right"></i></p>
          </router-link>
        </li>
      </ul>

      <div class="flex_end btns">
        <button type="button">再次充值</button>
        <button type="button">删除订单</button>
      </div>
    </div>
</template>

<script>
import Headers from 'base/header/header'
import { Toast } from 'vant'
export default {
  name:'recharge_detail',
  components: {
    Headers
  },
  data() {
    return {
      title: '订单详情',
      rightText: '',
      rightIcon:'',
      con:{type_text:"已取消",price:"500",reduce:"",num:"652958126",time:"2018.09.26 12:20",r_price:"480",type:"微信"}
    }
  },
  methods:{
    onCopy(e) {
      Toast('复制成功')
    },
    onError(e) {
      Toast('复制失败')
    },
  },
  created() {
    Headers.props.title.default = this.title,
    Headers.props.rightIcon.default = this.rightIcon
    Headers.props.rightText.default = this.rightText
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .flex_end{
    display:flex;
    justify-content:flex-end;
    align-items:center
  }
  .flex_between{
    display:flex;
    justify-content:space-between;
    align-items:center
  }
  .flex{
    display:flex;
  }
  
  .top{
    background:#fff;
    padding-left:16px;
  }
  .top h1{
    width:100%;
    border-bottom:1px solid #DFDFDF;
    padding:10px 0;
    font-size:12px;
    color:#666;
  }
  .min{
    padding:10px 0;
  }
  .icons{
    background:#E2E2E2;
    padding:7px 5px;
    margin-right:10px;
  }
  .icons i{
    font-size:55px;
    color:#9FB9FF;
  }
  .msg p{
    font-size:12px;
    color:666;
    margin-bottom:18px;
  }
  .msg span{
    display:block;
    font-size:12px;
    color:#929292;
    line-height:20px;
  }
  .detail{
    padding:0 0 6px 16px;
    background:#fff; 
    margin-top:10px;
  }
  .detail li{
    padding:10px 16px 10px 0;
    border-top:1px solid #DFDFDF;
  }
  .detail li:first-child{
    border:0
  }
  .detail li p{
    font-size:12px;
    color:#666;
    line-height:20px;
  }
  .copy{
    border:1px solid rgba(146,146,146,1);
    border-radius:2px;
    font-size:8px;
    color:#929292;
    padding:2px 4px;
    background:#fff;
  }
  .link{
    font-size:12px;
    color:#929292;
    border:1px solid #BEBEBE;
    background:#FFE2E2;
    padding:7px 8px;
    width:100%;
    box-sizing:border-box;
    border-radius:4px;
    margin-top:10px;
  }
  .link p{
    font-size:12px;
    color:#929292;
  }
  .link p i{
    font-size:14px;
    color:#BEBEBE
  }
  .btns{
    background:#fff;
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    padding:6px 16px 6px 0;
    box-sizing:border-box;
    box-shadow:0px -1px 2px rgba(0,0,0,0.16);
  }
  .btns button{
    border:1px solid #929292;
    border-radius:4px;
    padding:11px;
    font-size:14px;
    color:#929292;
    background:#fff;
    margin-left:10px;
  }
</style>