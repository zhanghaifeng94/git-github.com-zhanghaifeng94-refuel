<template>
    <div class="card">
      <div class="card_true" v-if="card">
        <div class="iconfont icon-huiyuan"></div>
        <div class="serialNumber">编号：123 4565</div>
      </div>
      <div class="card_false" v-if="!card">
        <router-link to="/index/transactVIP">
          <div style="color: #fff"><i class="iconfont icon-AK-LYhuiyuanqia"></i>{{title}}</div>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '办理会员'
    }
  },
  data() {
    return {
      card: false
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
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
</style>
