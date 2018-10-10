<template>
    <div class="order_details">
      <headers></headers>
      <div class="site">
        <div style="margin-bottom: 4px"><span>{{name}}</span> <span>{{phone}}</span></div>
        <div>{{site}}</div>
        <img :src="require('common/image/12-1.png')" alt="">
      </div>
      <div class="res">
        <div class="top">
          <div class="type">{{res.type_text}}</div>
        </div>
        <div class="content">
          <div class="img"><img v-lazy="res.img" alt=""></div>
          <div class="info">
            <div class="name">{{res.name}}</div>
            <div class="color">{{res.color}}</div>
            <div class="price">¥ {{res.price}}</div>
          </div>
          <div class="num">x {{res.num}}</div>
        </div>
        <div class="bottom">
          <span class="btn" v-if="res.type === '1'">再次购买</span>
          <span class="btn" v-if="res.type === '1' || res.type === '3' || res.type === '4'">退换/售后</span>
        </div>
        <van-popup class="password" v-model="password">
          <div class="tit">请输入支付密码</div>
          <van-password-input
            :value="value"
            @focus="showKeyboard = true"
          />
          <van-number-keyboard
            :show="showKeyboard"
            @input="onInput"
            @delete="onDelete"
            @blur="showKeyboard = false"
          />
        </van-popup>
      </div>
      <div class="expressage">
        <div class="expressage_number">快递单号：{{res.expressage_number}}</div>
        <div class="copy"
             v-clipboard:copy="res.order_number"
             v-clipboard:success="onCopy"
             v-clipboard:error="onError">
          复制</div>
      </div>
      <div class="contents">
        <div class="top">
          <div class="order_number">订单编号：65585246245</div>
          <div class="time">下单时间：2018.09.27   12:02</div>
        </div>
        <div class="cen">
          <div class="payment mb">支付方式：支付宝</div>
          <div class="total mb">商品合计：156.00</div>
          <div class="activity mb">活动优惠：-20.00</div>
          <div class="freight mb">运&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;费：0.00</div>
          <div class="coupon">优惠券减：-20.00</div>
        </div>
        <div class="bot">
          <div class="practical">实&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;付：100</div>
          <div class="exchange">
            <div class="left">确认收货得6积分</div>
            <div class="right">积分兑好礼 <i class="iconfont icon-right"></i></div>
          </div>
        </div>
      </div>
      <div class="foot">
        <span v-if="res.type === '1'" @click="on_delete()">删除订单</span>
        <span v-if="res.type === '2'">提醒发货</span>
        <span v-if="res.type === '3'" @click="confirm()">确认收货</span>
        <span v-if="res.type === '4'" @click="evaluate(res)">去评价</span>
      </div>
    </div>
</template>

<script>
import Headers from 'base/header/header'
import { Toast } from 'vant'
import { Dialog } from 'vant'
export default {
  components: {
    Headers
  },
  data() {
    return {
      title: '订单详情',
      name: '小熊',
      phone: '12121212',
      site: '湖北省武汉市洪山区光谷广场鲁巷',
      password: false,
      value: '',
      showKeyboard: true,
      res: {
        name: '带帽日式多功能颈枕',
        color: '藏青色',
        price: '78',
        type: '4',
        id: '4',
        type_text: '已发货',
        order_number: '12121212',
        expressage_number: '987656789765',
        num: '2',
        img: require('common/image/12.png')
      }
    }
  },
  created() {
    Headers.props.title.default = this.title
    Headers.props.rightText.default = ''
    Headers.props.rightPath.default = ''
  },
  methods: {
    onCopy(e) {
      Toast('复制成功')
    },
    onError(e) {
      Toast('复制失败')
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6)
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1)
    },
    confirm() {
      this.password = true
      this.showKeyboard = true
      this.value = ''
    },
    on_delete() {
      Dialog.confirm({
        title: '要删除此订单？',
        message: ''
      }).then(() => {

      }).catch(() => {

      })
    },
    evaluate(val) {
      this.$router.push({
        path: `/user/evaluate/${val.id}`
      })
    }
  },
  mounted() {

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.order_details
  .site
    width: 100%
    padding 20px 16px
    box-sizing border-box
    font-size 12px
    color: #666666
    background-color #ffffff
    margin-top -9px
    margin-bottom 20px
    img
      margin-left: -16px;
      width: 108%;
      height: 6px;
      margin-bottom: -22px;
  .res
    padding 10px 16px
    box-sizing border-box
    margin-bottom 10px
    background #ffffff
    .top
      display flex
      justify-content space-between
      padding-bottom 10px
      color #666666
      border-bottom 1px solid #DFDFDF
      font-size 12px
    .content
      display flex
      padding 10px 0
      /*align-items center*/
      .img
        width: 60px
        height: 60px
        border-radius 2px
        margin-right 10px
        img
          width: 100%
          height: 100%
      .info
        color: #929292
        font-size 12px
        .name
          color: #666666
          margin-bottom 4px
        .color
          font-size 10px
          margin-bottom 22px
      .num
        margin-left auto
        color: #be6b6b
        font-size 12px
    .bottom
      padding-top 10px
      text-align right
      border-top 1px solid #DFDFDF
      .btn
        display inline-block
        padding 5px 10px
        border 1px solid #929292
        color #929292
        font-size 12px
        border-radius 4px
      .btn_1
        background #FF4444
        color #ffffff
        border none
    .password
      width: 90%
      height: 50%
      border-radius 10px
      .tit
        text-align center
        padding 30px
        color #929292
  .expressage
    display flex
    justify-content space-between
    align-items center
    padding 12px 16px
    box-sizing border-box
    color: #ff4444
    font-size 12px
    background #ffffff
    margin-bottom 10px
    .copy
      padding 5px 10px
      border 0.5px solid rgba(146,146,146,1)
      border-radius 2px
      color #929292
      font-size 10px
  .contents
    padding 12px 16px 18px 16px
    box-sizing border-box
    background #ffffff
    font-size 12px
    margin-bottom 60px
    color #666666
    .top
      margin-bottom 12px
      .order_number
        margin-bottom 6px
    .cen
      padding 12px 0
      box-sizing border-box
      border-bottom 1px solid #DFDFDF
      border-top 1px solid #DFDFDF
      .mb
        margin-bottom 6px
    .bot
      margin-top 12px
      .practical
        margin-bottom 10px
      .exchange
        display flex
        align-items center
        justify-content space-between
        font-size 12px
        background rgba(255,226,226,1)
        border 1px solid rgba(190,190,190,1)
        border-radius 4px
        padding 8px
        box-sizing border-box
        i
          font-size 12px
  .foot
    width: 100%
    background #f9f9f9
    padding 6px 16px
    box-sizing border-box
    text-align right
    position fixed
    bottom 0
    box-shadow:0px -1px 2px rgba(0,0,0,0.16);
    span
      display inline-block
      color: #929292
      padding 11px
      box-sizing border-box
      border 1px solid rgba(146,146,146,1)
      border-radius 4px
</style>
