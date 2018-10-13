<template>
    <div class="details">
      <div class="banner">
        <van-swipe @change="onChange" :autoplay="3000" :show-indicators="false">
          <van-swipe-item class="swipe" v-for="(item,index) in swipe" :key="index"><img v-lazy="item.src"></van-swipe-item>
        </van-swipe>
        <div class="back">
          <i class="iconfont icon-back"></i>
        </div>
        <div class="home">
          <i class="iconfont icon-home"></i>
        </div>
        <div class="share">
          <i class="iconfont icon-share"></i>
        </div>
        <div class="number">
          <span>{{apiece}}</span>/<span>{{sum}}</span>
        </div>
      </div>
      <div class="fn_text_wrap">
        <div class="name">
          <div class="left">
            <div class="tit">带帽日式多功能颈枕</div>
            <div class="js">带帽设计，遮光更安心</div>
          </div>
          <div class="right">
            <i class="iconfont icon-share"></i><span>分享</span>
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
        <div class="specification">
          <span>数量规格选择</span>
          <i class="iconfont icon-right"></i>
        </div>
        <div class="coupon">
          <div>
            <span>优惠</span>
            <b>满150减20</b>
          </div>
          <i class="iconfont icon-right"></i>
        </div>
        <div class="help">
          30天无忧退换货 48小时快速退款 M50e自营品牌 <br/> 国内部分地区不支持配送
        </div>
      </div>
    </div>
</template>

<script >
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
      apiece: 1
    }
  },
  created() {
    this.sum = this.swipe.length
  },
  methods: {
    onChange(index) {
      this.apiece = index + 1
    }
  }

}
</script>

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
        right 49px
      .share
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
      padding 20px 16px 15px 16px
      box-sizing border-box
      margin-bottom 10px
      .name
        display flex
        justify-content space-between
        align-items center
        margin-bottom 10px
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
        padding-top 10px
        border-top 1px solid #DFDFDF
        font-size 10px
        .xj
          font-size 14px
          color: #ee722e
    .choose
      padding 0 16px
      box-sizing border-box
      background #ffffff
      margin-bottom 10px
      .specification,.coupon,.help
        display flex
        justify-content space-between
        padding 10px 0
        color: #929292
        align-items center
        border-bottom 1px solid #DFDFDF
        font-size 12px

        b
          padding 4px 5px
          background #F97F7F
          color: #ffffff
          margin 0 10px
      .help
        border none
        line-height 18px
</style>
