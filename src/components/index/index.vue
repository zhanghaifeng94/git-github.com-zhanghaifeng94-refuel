<template>
    <div class="index">
      <div class="header">
        <i class="iconfont icon-scan"></i>
        <router-link to="/index/msg"><i class="iconfont icon-comment"></i></router-link>
      </div>
      <mt-swipe :auto="0" class="swipe">
        <mt-swipe-item class="swipe-item" v-for="(item,index) in swipe" :key="index">
          <img v-lazy="item.imgUrl" alt="" class="swipe-item-img">
        </mt-swipe-item>
      </mt-swipe>
      <div class="nav">
        <ul class="list">
          <li class="item" v-for="(item,index) in nav" :key="index">
            <router-link :to="item.path">
              <img :src="item.img" alt="">
              <div>{{item.name}}</div>
            </router-link>

          </li>
        </ul>
      </div>
      <div class="classify clearfix">
        <router-link class="classify-box" v-for="(item,index) in classify" to="" :key="index"><img v-lazy="item.imgUrl" alt=""></router-link>
      </div>
      <div class="activity">
        <img v-lazy="activity.imgUrl" alt="">
      </div>
    </div>
</template>

<script>
import API from 'api/api'
export default {
  data () {
    return {
      swipe: [
      //   {
      //   img: require('common/image/banner.png'),
      //   id: '1'
      // }, {
      //   img: require('common/image/banner.png'),
      //   id: '2'
      // }, {
      //   img: require('common/image/banner.png'),
      //   id: '3'
      // }
      ],
      nav: [{
        img: require('common/image/cz.png'),
        name: '会员充值',
        id: '1',
        path: '/index/recharge'
      }, {
        img: require('common/image/cx.png'),
        name: '会员查询',
        id: '2',
        path: '/index/queryVIP'
      }, {
        img: require('common/image/yh.png'),
        name: '优惠券',
        id: '3',
        path: '/index/coupon'
      }, {
        img: require('common/image/dh.png'),
        name: '油站导航',
        id: '4',
        path: '/index/recharge'
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
      }],
      activity: ''
    }
  },
  created() {

  },
  methods: {
    dispose() {
      let vm = this
      API.index().then(result => {
        if (result.status === 1000) {
          vm.swipe = []
          vm.classify = []
          let arr = result.data
          console.log(arr)
          arr.IndexSlideList.forEach(item => {
            vm.swipe.push(item)
          })
          arr.indexActivityList.forEach(item => {
            vm.classify.push(item)
          })
          vm.activity = arr.indexEventList[0]
        }
      })
    }

  },
  mounted() {
    this.dispose()
  }
}
</script>
<style scoped>
  .index >>> .mint-swipe-indicators{
    left: 85%;
  }
  .index >>> .is-active{
    background: #980000;
    opacity: 1;
  }
  .header i.icon-comment{
    font-size:26px;
  }
</style>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .index
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
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
        width 49%
        height: 114px
        float: left
        margin-right 2px
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
