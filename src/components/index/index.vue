<template>
    <div class="index">
      <div class="header">
        <i class="iconfont icon-saoma"></i>
        <i class="iconfont icon-xiaoxi"></i>
      </div>
      <mt-swipe :auto="0" class="swipe">
        <mt-swipe-item class="swipe-item" v-for="item in swipe" :key="item.id">
          <img :src="item.img" alt="" class="swipe-item-img">
        </mt-swipe-item>
      </mt-swipe>
      <div class="nav">
        <ul class="list">
          <li class="item" v-for="item in nav" :key="item.id">
            <img :src="item.img" alt="">
            <div>{{item.name}}</div>
          </li>
        </ul>
      </div>
      <div class="classify clearfix">
        <router-link class="classify-box" v-for="item in classify" to="" :key="item.id"><img :src="item.img" alt=""></router-link>
      </div>
      <div class="activity">
        <img src="../../common/image/03.png" alt="">
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      swipe: [{
        img: require('common/image/banner.png'),
        id: '1'
      }, {
        img: require('common/image/banner.png'),
        id: '2'
      }, {
        img: require('common/image/banner.png'),
        id: '3'
      }],
      nav: [{
        img: require('common/image/cz.png'),
        name: '会员充值',
        id: '1'
      }, {
        img: require('common/image/cx.png'),
        name: '会员查询',
        id: '2'
      }, {
        img: require('common/image/yh.png'),
        name: '优惠券',
        id: '3'
      }, {
        img: require('common/image/dh.png'),
        name: '油站导航',
        id: '4'
      }],
      classify: [{
        img: require('common/image/01.png'),
        id: '1'
      }, {
        img: require('common/image/02.png'),
        id: '2'
      }, {
        img: require('common/image/01.png'),
        id: '3'
      }, {
        img: require('common/image/02.png'),
        id: '4'
      } ]
    }
  },
  created() {

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .index
    overflow: auto;
    height: 100%;
    padding-bottom: 70px;
    background #fff
    .header
      background $color-header-background
      width 100%
      height 48px
      line-height 48px
      display flex
      padding 0 16px
      justify-content space-between;
      box-sizing border-box
      i
        font-size $font-size-large-xx
        color $color-text
    .swipe
      width 100%
      height 160px
      .swipe-item-img
        width 100%
        height 100%
      .mint-swipe-indicators
        .is-active
          background red
    .nav
      .list
        padding 24px 16px
        box-sizing border-box
        display flex
        color #929292
        .item
          width: 25%
          text-align center
          img
            width: 48px
            height: 47px
    .classify
      padding 0 16px
      box-sizing border-box
      .classify-box
        width 50%
        height: 114px
        float: left
        img
          width: 100%
          height: 100%
    .activity
      width: 100%
      height: 113px
      padding 0 16px
      box-sizing border-box
      img
        width: 100%
        height: 100%

</style>
