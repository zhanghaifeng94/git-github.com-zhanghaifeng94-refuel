<template>
    <div class="retrievePassword">
      <headers></headers>
      <div class="form">
        <div class="phone">
          <input type="text" placeholder="请输入手机号" v-model="account.phone" @blur="verify(account.phone)">
        </div>
        <div class="code">
          <input type="text" placeholder="输入验证码" v-model="account.code" @blur="all()">
          <span class="true" v-if="code" @click="countDown">{{countDownText}}</span>
          <span class="false" v-if="!code">获取验证码</span>
        </div>
        <div class="password">
          <input type="password" placeholder="请重新设置密码" v-model="account.password" @blur="all()">
        </div>
        <div class="confirmPwd">
          <input type="password" placeholder="请确认密码" v-model="account.confirmPwd" @blur="all()">
        </div>
        <button class="button"  v-if="!button">注册</button>
        <button class="button1" v-if="button">注册</button>
      </div>
    </div>
</template>

<script>
import Headers from 'base/header/header'
import { Toast } from 'mint-ui'
export default {
  components: {
    Headers
  },
  data(){
    return{
      title: '找回密码',
      rightIcon: '',
      rightText: '',
      leftIcon: 'icon-close',
      account: {
        phone: '',
        password: '',
        code: '',
        confirmPwd: ''
      },
      code: false,
      button: false,
      countDownText: '获取验证码'
    }
  },
  created() {
    Headers.props.title.default = this.title
    Headers.props.rightIcon.default = this.rightIcon
    Headers.props.rightText.default = this.rightText
    Headers.props.leftIcon.default = this.leftIcon
  },
  methods: {
    verify(val) {
      let regular = /^[1][3,4,5,7,8][0-9]{9}$/
      if (regular.test(val)) {
        this.code = true
      } else {
        Toast('手机号格式错误')
      }
      this.all()
    },
    countDown() {
      if (this.countDownText == '获取验证码' || this.countDownText == '再次发送') {
        let count = 60
        let vm = this
        function settime () {
          if (count === 0) {
            vm.countDownText = '再次发送'
            count = 60
          } else {
            vm.countDownText = count + 's'
            count--
            setTimeout(function() {
              settime()
            }, 1000)
          }
        }
        settime()
      }
    },
    all() {
      if (this.account.phone !== '' && this.account.code !== '' && this.account.password !== '' && this.account.confirmPwd !== '') {
        this.button = true
      } else {
        this.button = false
      }
    },
    go_back() {
      this.$router.go(-1)
    }
  },
  mounted() {
    this.all()
  },
  watch: {
    '$route' (to){
      this.account.phone = ''
      this.account.code = ''
      this.account.password = ''
      this.account.confirmPwd = ''
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .retrievePassword
    .form
      width: 100%
      margin-top 20px
      .phone,.code,.password,.confirmPwd
        height: 40px
        background #fff
        margin-bottom 10px
        font-size $font-size-medium
        input
          width: 100%
          height: 100%
          background #fff
          padding 0 16px
          box-sizing border-box
          color #BEBEBE
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
        width: 91%
        height: 40px
        line-height 40px
        text-align center
        margin-top 55px
        outline none
        border none
        margin-left 16px
        border-radius 4px
      .button
        background #c9c9c9
        color: #ebebeb
      .button1
        background $color-header-background
        color: $color-text
    .weixin
      margin-top 90px
      text-align center
      font-size $font-size-small
      .iconfont
        font-size 34px
        color #71C253
        margin-bottom 10px
</style>
