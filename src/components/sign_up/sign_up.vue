<template>
    <div class="sign_up">
      <div class="header">
        <div class="iconfont icon-close go_back"></div>
        <div class="name">M50e站</div>
        <div class="sign_in">登录</div>
      </div>
      <div class="form">
        <div class="phone">
          <input type="text" placeholder="请输入手机号" v-model="account.phone" @change="verify(account.phone)">
        </div>
        <div class="code">
          <input type="text" placeholder="输入验证码" v-model="account.code">
          <span class="true" v-if="code">{{countDownText}}</span>
          <span class="false" v-if="!code">获取验证码</span>
        </div>
        <div class="password">
          <input type="password" v-model="account.password" placeholder="请设置密码">
        </div>
        <button class="button"  v-if="!button">注册</button>
        <button class="button1" v-if="button">注册</button>
      </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      code: false,
      button: false,
      account: {
        phone: '',
        password: '',
        code: ''
      },
      countDownText: '获取验证码'
    }
  },
  methods: {
    verify(val) {
      let regular = /^[1][3,4,5,7,8][0-9]{9}$/
      if (regular.test(val)) {
        this.code = true
      } else {
        Toast('手机号格式错误')
      }
    },
    countDown() {

    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .sign_up
    position: fixed
    top: 0
    bottom: 0
    z-index: 100
    width: 100%
    background: $color-background
    padding 0 16px
    box-sizing border-box
    .header
      display flex
      justify-content space-between;
      margin-bottom 30px
      height: 48px
      line-height 48px
      color #929292
      font-size 20px
      .go_back
        font-size 20px
        color #bebebe
      .sign_in
        font-size 12px
    .form
      width: 100%
      .phone,.code,.password
        height: 50px
        background #e8e8e8
        margin-bottom 10px
        font-size $font-size-medium
        input
          width: 100%
          height: 100%
          background #e8e8e8
          padding 0 16px
          box-sizing border-box
          color #929292
          border none
      .code
        input
          width: 70%
        span
          width: 86px
          height: 28px
          display inline-block
          border-radius 14px
          text-align center
          line-height 28px
        .false
          border 1px solid #bebebe
          color: #bebebe
        .true
          border 1px solid $color-header-background
          color: $color-header-background
      button
        width: 100%
        height: 40px
        line-height 40px
        text-align center
        margin-top 55px
        outline none
        border none
      .button
        background #c9c9c9
        color: #ebebeb
      .button1
        background $color-header-background
        color: $color-text

</style>
