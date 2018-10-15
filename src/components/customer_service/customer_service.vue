<template>
    <div class="customer_service">
      <headers></headers>
        
      <ul class="box">
        <li class="list">
          <h1>申请退款</h1>
          <p>请联系客服说明退货原因，客服受理后，请<u>把退货商品订单编号发给客服并拒收快件</u></p>
        </li>
        <li class="list">
          <h1>申请退货</h1>
          <p>请联系客服说明退货原因，客服受理后，请<u>把退货商品订单编号与物流信息发给客服</u></p>
        </li>
        <li class="list" @click="onRecord()">
          <h1>联系电话</h1>
          <div>
            <span>座机：0.8-6359452</span>
            <span>手机：13026548952</span>
          </div>
        </li>       
      </ul>

    </div>
</template>

<script>
import Headers from 'base/header/header'
export default {
  name:'customer_service',
  components: {
    Headers
  },
  data() {
    return {
      title: '售后服务',
      rightText: '',
      rightIcon:'', 
      id:""     
    }
  },
  methods:{

  },
  created() {
    Headers.props.title.default = this.title,
    Headers.props.rightIcon.default = this.rightIcon
    Headers.props.rightText.default = this.rightText
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .box{
    background:#fff;
    padding-left:16px;
    padding-bottom:50px;
  }
  .box li{
    border-bottom:1px solid #ececec;
    padding:13px 16px 13px 0;
  }
  .flex_between{
    display:flex;
    justify-content:space-between;
    align-items:center
  }
  .flex{
    display:flex;
    align-items:center
  }
  .box li h1{
    font-size:12px;
    color:#666;
    margin-bottom:5px;
  }
  .box li p{
    font-size:10px;
    color:#929292;
    line-height:17px;
    margin-top:4px;
  }
  .box li p u{
    text-decoration:none;
    color:#EE722E
  }
  .box li:last-child{
    border:0
  }
  .box li span{
    font-size:12px;
    color:#929292;
    margin-top:10px;
    margin-right:60px;
  }
</style>