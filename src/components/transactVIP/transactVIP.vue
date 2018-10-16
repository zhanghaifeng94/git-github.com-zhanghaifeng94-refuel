<template>
    <div class="transactVIP">
      <headers></headers>
      <div class="content">
        <mt-field disableClear label="本人姓名：" @input.native.capture="all()" v-model="account.name"></mt-field>
        <mt-field disableClear readonly label="手机号码：" v-model="account.phone">
          <span class="true" v-if="code" @click="vcode">{{countDownText}}</span>
          <span class="false" v-if="!code">{{countDownText}}</span>
        </mt-field>
        <mt-field @input.native.capture="all()" disableClear label="验 证 码：" v-model="account.code"></mt-field>
        <div @click="confirm">
          <mt-field type="password" disableClear readonly label="支付密码：" v-model="account.payPassword"></mt-field>
        </div>
      </div>
      <van-popup class="password" v-model="show" :close-on-click-overlay="false">
        <div class="tit">请输入支付密码</div>
        <van-password-input
          :value="value"
          @focus="showKeyboard = true"
        />
        <van-number-keyboard
          :show="showKeyboard"
          theme="custom"
          @input="onInput"
          @delete="onDelete"
          @close="complete"
          close-button-text="完成"
          @blur="showKeyboard = false"
        />
      </van-popup>
      <div class="btn btn_true" v-if="button" @click="manage">办理</div>
      <div class="btn btn_false" v-if="!button">办理</div>
    </div>
</template>

<script>
import Headers from 'base/header/header'
import { Toast } from 'vant'
import API from 'api/api'
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
        phone: '',
        code: '',
        payPassword: ''
      },
      countDownText: '获取验证码',
      button: false,
      code: true,
      show: false,
      showKeyboard: true,
      value: ''
    }
  },
  created() {
    Headers.props.title.default = this.title
    Headers.props.rightText.default = '帮助'
    Headers.props.rightPath.default = this.rightPath
    let user = JSON.parse(window.sessionStorage.getItem('user'))
    this.account.phone = user.userInfo.phone

  },
  methods: {
    countDown() {
      if (this.countDownText == '获取验证码' || this.countDownText == '再次发送') {
        let count = 60
        let vm = this
        function settime () {
          if (count === 0) {
            vm.code = true
            vm.countDownText = '再次发送'
            count = 60
          } else {
            vm.code = false
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
      if (this.account.code !== '' && this.account.name !== '' && this.account.payPassword !== '') {
        this.button = true
      } else {
        this.button = false
      }
    },
    vcode() {
      let params = 'phone=' + this.account.phone
      let vm = this
      API.getVcode(params).then(result => {
        if (result.status === 1000) {
          Toast('验证码发送成功')
          vm.countDown()
        } else {
          Toast('验证码发送失败')
        }
      })
    },
    manage() {
      let params = 'username=' + this.account.name + '&phone=' + this.account.phone + '&vcode=' + this.account.code + '&payPwd=' + this.account.payPassword
      let vm = this
      API.transactVIP(params).then(result => {
        console.log(result)
        if (result.status === 1000) {
          Toast(result.msg)
          vm.$router.push({
            path: '/index'
          })
        } else {
          Toast(result.msg)
        }
      }, error => {
        Toast('服务器错误')
      })
    },
    confirm() {
      this.show = true
      this.showKeyboard = true
      this.value = ''
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6)
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1)
    },
    complete() {
      if (this.value.length === 6) {
        this.account.payPassword = this.value
        this.show = false
        this.all()
      }
    }
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
        font-size 12px
      .false
        border 1px solid #bebebe
        color: #bebebe
      .true
        border 1px solid $color-header-background
        color: $color-header-background
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
    .password
      width: 90%
      height: 50%
      border-radius 10px
      .tit
        text-align center
        padding 30px
        color #929292
</style>
