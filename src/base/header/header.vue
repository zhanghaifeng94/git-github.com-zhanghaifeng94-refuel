<template>
    <div class="header">
      <mt-header :title="title" class="title">
          <mt-button @click="go_back()" slot="left">
            <i class="iconfont" :class="leftIcon"></i>
          </mt-button>
        <router-link :to="rightPath" slot="right">
          <mt-button class="right" :icon="rightIcon">{{rightText}}</mt-button>
        </router-link>
      </mt-header>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    leftIcon: {
      type: String,
      default: 'icon-back'
    },
    rightIcon: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    rightPath: {
      type: String,
      default: ''
    }
  },
  methods: {
    go_back() {
      this.$router.back(-1)
    }
  }

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .title
    height: 48px
    background #fff
    color: #666666
    font-size 20px
    padding 0 16px
    box-sizing border-box
    margin-bottom 10px
    .iconfont
      font-size 20px
    .right
      font-size 12px
      color #766BDB
</style>
