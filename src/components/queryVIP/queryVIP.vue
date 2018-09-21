<template>
    <div class="queryVIP">
      <mt-header title="会员查询" class="header">
        <router-link to="/" slot="left">
          <mt-button>
            <i class="iconfont icon-back"></i>
          </mt-button>
        </router-link>
      </mt-header>
      <div class="center">
        <div class="card_true" v-if="card">
          <div class="iconfont icon-huiyuan"></div>
          <div class="serialNumber">编号：123 4565</div>
        </div>
        <div class="card_false" v-if="!card">
          <div><i class="iconfont icon-AK-LYhuiyuanqia"></i>办理会员</div>
        </div>
        <div class="btn_true base" v-if="card" @click="query()">查询</div>
        <div class="btn_false base" v-if="!card">查询</div>
      </div>
      <div class="info" v-if="info">
        <div class="name">卡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主：xxx</div>
        <div class="number">会员卡号：xxx</div>
        <div class="balance">余&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;额：xxx</div>
      </div>
      <div class="more" v-if="info">查看更多</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      card: true,
      info: false
    }
  },
  methods: {
    query() {
      this.info = true
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .queryVIP
    .header
      height: 48px
      background #fff
      color: #666666
      font-size 20px
      padding 0 16px
      box-sizing border-box
      margin-bottom 10px
      .icon-back
        font-size 20px
    .center
      width: 100%
      padding 0 16px
      box-sizing border-box
      margin-bottom 30px
      .card_true,.card_false
        width: 100%
        height: 166px
        background:linear-gradient(279deg,rgba(170,205,210,1) 0%,rgba(121,220,203,1) 100%);
        border-radius:4px;
        box-shadow:0px 2px 6px rgba(88,0,0,0.16);
        .iconfont
          font-size 53px
          color: rgba(74,87,106,0.1);
          text-align right
          margin-right 22px
          padding-top 22px
          padding-bottom 65px
        .serialNumber
          font-size $font-size-small-s
          color: #60a49e
          padding-left 16px
      .card_false
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff
        font-size 18px
        .iconfont
          font-size 17px
          margin 0
          padding 0
          color: #ffffff
          margin-right 12px
      .base
        width: 91%
        height 40px
        font-size 20px
        line-height 40px
        text-align center
        color $color-text
        border-radius:4px;
        position absolute
        bottom 100px
        /*margin-top 251px*/
      .btn_true
        background $color-header-background
      .btn_false
        background #C9C9C9
    .info
      border-top 1px solid #DFDFDF
      margin-bottom 60px
      div
        background $color-background-t
        padding 12px 16px
        color: #666666
        font-size 12px
        border-bottom 1px solid #DFDFDF
    .more
      color: #EE722E
      font-size 12px
      text-align center

</style>
