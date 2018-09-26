<template>
    <div class="transactVIP">
      <headers></headers>
      <div class="content">
        <mt-field disableClear label="本人姓名：" @blur.native.capture="all()" v-model="account.name"></mt-field>
        <mt-field disableClear disabled label="手机号码：" v-model="account.phone">
          <span class="true" @click="countDown">{{countDownText}}</span>
        </mt-field>
        <mt-field @blur.native.capture="all()" disableClear label="验 证 码：" v-model="account.code"></mt-field>
        <mt-field @blur.native.capture="all()" type="password" disableClear label="支付密码：" v-model="account.payPassword"></mt-field>
      </div>
      <div class="btn btn_true" v-if="button">办理</div>
      <div class="btn btn_false" v-if="!button">办理</div>
    </div>
</template>

<script>
import Headers from 'base/header/header'
export default {
  components: {
    Headers
  },
  data() {
    return {
      title: '办理会员',
      rightPath: '/index/help',
      account: {
        name: '',
        phone: '111111',
        code: '',
        payPassword: ''
      },
      countDownText: '获取验证码',
      button: false
    }
  },
  created() {
    Headers.props.title.default = this.title
    Headers.props.rightText.default = '帮助'
    Headers.props.rightPath.default = this.rightPath
  },
  methods: {
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
      if (this.account.code !== '' && this.account.password !== '' && this.account.payPassword !== '') {
        this.button = true
      } else {
        this.button = false
      }
    },
  },
  mounted() {
    this.all()
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .transactVIP
    .content
      font-size 12px
      color: #666666
      span
        width: 86px
        height: 28px
        display inline-block
        border-radius 14px
        text-align center
        line-height 28px
        border 1px solid $color-header-background
        color: $color-header-background
        font-size 12px
    .btn
      width: 91%
      height 40px
      font-size 20px
      line-height 40px
      text-align center
      color $color-text
      border-radius:4px;
      position absolute
      bottom 230px
      margin-left 16px
    .btn_true
      background $color-header-background
    .btn_false
      background #C9C9C9
</style>
