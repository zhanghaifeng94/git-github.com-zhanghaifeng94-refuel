<template>
    <div class="recharge">
      <headers></headers>
      <card></card>
      <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      />

      <!-- 优惠券列表 -->
      <van-popup v-model="showList" position="bottom">
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </div>
</template>

<script>
import Headers from 'base/header/header'
import Card from 'base/card/card'
const coupon = {
  available: 1,
  discount: 0,
  denominations: 150,
  originCondition: 0,
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000
};

export default {
  components: {
    Headers,
    Card
  },
  data() {
    return {
      title: '会员充值',
      rightText: '充值记录',
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false,
      rightPath:'/recharge_record'

    }
  },
  created() {
    Headers.props.title.default = this.title
    Headers.props.rightText.default = this.rightText
    Headers.props.rightPath.default = this.rightPath
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
