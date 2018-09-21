<template>
    <div class="queryVIP">
      <mt-header fixed title="会员查询" class="header">
        <router-link to="/" slot="left">
          <mt-button>
            <i class="iconfont icon-back"></i>
          </mt-button>
        </router-link>
      </mt-header>
      <div class="card">
        
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      card: false
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
      margin-bottom 10px
      .icon-back
        font-size 20px

</style>
