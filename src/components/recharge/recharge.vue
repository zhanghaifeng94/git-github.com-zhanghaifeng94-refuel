<template>
  <div class="recharge">
    <headers></headers>
    <div class="center">
      <card></card>
    </div>
    <div class="options">
      <ul class="list">
        <li v-for="(item,index) in list" ref="'item'" :id="item.id" :key="item.id" @click="active(item,index)" :class="resultNum === index?'active':''">
          <div class="name">{{item.name}}</div>
          <div class="price">售价：{{item.price}}元</div>
        </li>
      </ul>
    </div>
    <div class="amount">
      <span style="color: #666">支付金额：</span>
      <span style="color: #EE722E">{{amount}}元</span>
    </div>
    <div class="help">
      <div>我同意<router-link style="color: #856EFF" to="##">《服务款项》</router-link>中的说明
      </div>
      <div class="bot">温馨提示：本服务为会员服务。
        <span style="color:#FF6363;">由于是充值服务，故不能提供发票</span>
        详询客服热线xxx-xxx-xxx。
      </div>
    </div>
    <div class="btn_true base" v-if="card && amount" @click="infos()">充值</div>
    <div class="btn_false base" v-if="!card|| !amount">充值</div>
    <van-popup class="popup" v-model="show" position="bottom" :close-on-click-overlay="false">
      <div class="popup-title">
        <i class="iconfont icon-round_close_light" @click="close()"></i>
        确认付款
      </div>
      <div class="popup-content">
        <div class="popup-amount">¥{{amount}}元</div>
        <div class="popup-base">会&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;员：{{account.name}}</div>
        <div class="popup-base">会员卡号：{{account.number}}</div>
          <van-coupon-cell
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            @click="showList = true"
            class="popup-coupon"
          />
        <mt-radio
          align="right"
          v-model="radio"
          :options="options">
        </mt-radio>
        <!--<router-link to="/index/recharge_progress">-->
          <div class="btns" @click="generateOrder">立即支付</div>
        <!--</router-link>-->
      </div>
    </van-popup>

    <!-- 优惠券列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :show-exchange-bar="false"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange" @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script>
import Headers from 'base/header/header'
import Card from 'base/card/card'
import API from 'api/api'
import { Toast } from 'vant'

// const coupon = {
//   available: 1,
//   discount: 1,
//   denominations: 0,
//   originCondition: 0,
//   reason: '不可用原因：假的',
//   value: 150,
//   name: '优惠券名称',
//   startAt: 1489104000,
//   endAt: 1514592000
// }

export default {
  components: {
    Headers,
    Card
  },
  data () {
    return {
      title: '会员充值',
      rightText: '充值记录',
      chosenCoupon: -1,
      coupons: [],
      disabledCoupons: [],
      showList: false,
      rightPath: '/index/recharge_record',
      list: [{
        id: '1',
        name: '500元',
        price: '500.00'
      }, {
        id: '2',
        name: '1000元',
        price: '1000.00'
      }, {
        id: '3',
        name: '2000元',
        price: '2000.00'
      }],
      num: '',
      amount: '',
      card: true,
      show: false,
      radio: '支付宝',
      options: [
        {
          label: '支付宝',
          value: '支付宝'
        },
        {
          label: '微信',
          value: '微信'
        }
      ],
      account: {
        name: '',
        number: '',
        balance: ''
      },
      selectCoupon: []
      // coupon:[]

    }
  },
  created () {
    Headers.props.title.default = this.title
    Headers.props.rightText.default = this.rightText
    Headers.props.rightIcon.default = ''
    Headers.props.rightPath.default = this.rightPath
  },
  methods: {
    onChange: function (index) {
      this.showList = false
      this.chosenCoupon = index
      let params = 'type=1&money=' + this.amount * 100
      let vm = this
      API.getCouponStatus(params).then(result => {
        if (result.status === 1000) {
          this.selectCoupon = []
          result.data.usable.forEach((item, index2) => {
            if (index === index2) {
              this.selectCoupon.push(item)
            }
          })
        }
      })
    },
    onExchange (code) {
      this.coupons.push(coupon)
    },
    active (val, index) {
      this.num = index
      this.amount = val.price
    },
    close() {
      this.show = false
    },
    infos() {
      this.show = true
      let params = 'type=1&money=' + this.amount * 100
      let vm = this
      API.user_info().then(result => {
        if (result.status === 1000) {
          if (result.data.userInfo.member === 2) {
            vm.account.name = result.data.userInfo.username
            vm.account.number = result.data.userMemberId
          }
        }
      })
      API.getCouponStatus(params).then(result => {
        if (result.status === 1000) {
          vm.coupons = []
          vm.disabledCoupons = []
          result.data.usable.forEach(item => {
            item.startAt = item.startAt / 1000
            item.endAt = item.endAt / 1000
            vm.coupons.push(item)
          })
          result.data.notUsable.forEach(item => {
            item.startAt = item.startAt / 1000
            item.endAt = item.endAt / 1000
            vm.disabledCoupons.push(item)
          })
        }
      })
    },
    generateOrder() {
      let params = 'money=' + this.amount + '&couponId=' + this.selectCoupon[0].id
      let vm = this
      API.generate_order(params).then(result => {
        if(result.status === 1000){
          Toast('已生成订单，正在充值，请稍等')
          API.recharge('rechargOrderId=' + result.data).then(result1 => {
            if(result1.status === 1000){
              vm.$router.push({
                path: `/index/recharge_progress`
              })
            }
          })
        }
      })
    }
  },
  computed: {
    resultNum() {
      return this.num
    }
  },
  mounted() {
    // this.coupon()
  }
}
</script>
<style scoped>
  .recharge >>> .van-cell{
    font-size: 12px;
    padding: 2px 0;
    border-bottom: 1px solid #E8E8E8;
    color: #929292;
    margin-bottom: 10px
  }
  .recharge >>> .mint-radiolist-title{
    margin: 10px;
  }
  .recharge >>> .mint-cell{
    min-height: auto;
    margin-bottom: 10px;
    color: #666666;
  }
  .recharge >>> .mint-cell-wrapper{
    background-image: linear-gradient(180deg, #fff, #fff 50%, transparent 50%);
    padding: 0;
    font-size: 12px;
  }
  .recharge >>> .mint-radiolist-label{
    padding: 0;
  }
  .recharge >>> .mint-radio-label{
    margin: 0;
  }

</style>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .recharge
    .center
      padding 0 16px
    .options
      margin-top 30px
      background: #fff
      padding 20px 16px
      box-sizing border-box
      margin-bottom 20px
      .list
        display flex
        li
          width: 33.33%
          border:1px solid $main-color
          margin-right 14px
          text-align center
          padding 12px 0
          color $main-color
          font-size 12px
          border-radius 4px
          .name
            margin-bottom 3px
        li:last-child
          margin-right 0
        .active
          border 0
          background $main-color
          color #fff
    .amount
      background #fff
      padding 12px 16px
      box-sizing border-box
      display flex
      justify-content space-between;
      margin-bottom 15px
      font-size 12px
    .help
      padding 0 16px
      font-size 12px
      .bot
        font-size 10px
        margin-top 6px
        line-height 17px
    .base
      width: 91%
      height 40px
      font-size 20px
      line-height 40px
      text-align center
      color $color-text
      border-radius:4px;
      position absolute
      bottom 58px
      margin-left 16px
    .btn_true
      background $color-header-background
    .btn_false
      background #C9C9C9
    .popup
      border-radius:4px 4px 0px 0px
      .popup-title
        text-align center
        font-size 16px
        position: relative
        padding 14px 0
        color: #222222
        border-bottom 1px solid #DFDFDF
        i
          position absolute
          left 16px
          bottom  10px
          font-size 24px
          color: #bebebe
      .popup-content
        padding 0 16px
        .popup-amount
          padding 14px 0
          text-align center
          color: $main-color
          font-size 20px
          border-bottom 1px solid #E8E8E8
        .popup-base
          padding 8px 0
          border-bottom 1px solid #E8E8E8
          color: #929292
          font-size 12px
        .popup-coupon
          margin-bottom 20px
        .btns
          width: 100%
          height: 40px
          line-height: 40px
          text-align center
          border-radius:4px;
          box-shadow:0px 2px 6px rgba(88,0,0,0.16);
          margin-top 30px
          margin-bottom 60px
          color: #fff
          background #EE722E

</style>
