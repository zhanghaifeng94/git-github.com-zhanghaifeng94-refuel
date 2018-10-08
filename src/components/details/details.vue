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

</style>
