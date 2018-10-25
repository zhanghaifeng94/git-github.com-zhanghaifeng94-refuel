<template>
    <div class="change_password">
      <headers></headers>
      
      <div class="box">
        <input type="text" v-model="phone" placeholder="请输入手机号" @blur="onPhone(phone)" @input="onInput(phone)">
      </div>
      <div class="box flex_between">
        <input type="text" v-model="code" placeholder="请输入验证码" class="code" @input="all()">
        <button :class="code_btn?'color':''" disabled="false" @click="getCode()">{{codeText}}</button>
      </div>
      <div class="box">
        <input type="password" v-model="new_password" :placeholder="placeholder1"  @input="all()">
      </div>
      <div class="box">
        <input type="password" v-model="agin_password" :placeholder="placeholder2" @input="all()">
      </div>

      <button class="button"  v-if="!button">登录</button>
      <button class="button1" v-if="button">登录</button>
    </div>
</template>

<script>
import Headers from 'base/header/header'
import { Toast } from 'vant';

export default {
  name:'change_password',
  components: {
    Headers
  },
  data() {
    return {
      title: '修改密码',
      rightText: '',
      rightIcon:'',      
      codeText:"获取验证码",
      phone:"",
      code:"",
      new_password:"",
      agin_password:"",
      button:false,
      code_btn:false,
      placeholder1:"请重新设置密码",
      placeholder2:"修改密码"
    }
  },
  methods:{
    onPhone(val){
      var regular = /^[1][3,4,5,7,8][0-9]{9}$/
      if (regular.test(val)) {
        this.code_btn = true
      } else {
        Toast('手机号格式错误')
      }
    },
    onInput(val){
      var regular = /^[1][3,4,5,7,8][0-9]{9}$/
      if (regular.test(val)) {
        this.code_btn = true
      } else {
        this.code_btn = false
      }
    },
    all() {
      if (this.phone != '' && this.code != ''&& this.new_password != ''&& this.agin_password != '') {
        this.button = true
      } else {
        this.button = false
        //console.log("000")
      }
    },
    getCode(){

    },
    login(){
      if(this.new_password!==this.agin_password){
          Toast('两次密码不一样')
      }
    }
  },
  created() {
    Headers.props.title.default = this.title,
    Headers.props.rightIcon.default = this.rightIcon
    Headers.props.rightText.default = this.rightText
     //console.log(this.$route.params.id)
      if(this.$route.params.id=="1"){
        this.placeholder1="请重新设置密码"
        this.placeholder2="请确认密码"
        this.tltle="修改密码"
      }else{
        this.placeholder1="请重新设置支付密码"
        this.placeholder2="请确认支付密码"
        this.tltle="修改支付密码"
      }

  },
  mountesd(){
    this.all()
  },
  watch:{
  }  
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 .box{
  background:#fff;
  width:100%;
  height:40px;
  margin-top:10px;
 }
 .box input{
  padding-left:16px;
  font-size:14px;
  color:#bebebe;
  height:100%;
  width:100%;
  box-sizing:border-box
 }
 .box input.code{
  width:60%;
 }
 .flex_between{
  display:flex;
  justify-content: space-between;
  align-items: center;
 }
 .box button{
    border:1px solid rgba(190,190,190,1);
    border-radius:14px;
    font-size:12px;
    color:#bebebe;
    background:#fff;
    margin-right:16px;
    padding:5px 10px;
 }
 .box button.color{
  color:#EE722E;
  border:1px solid #EE722E;
 }
 .button{
    width:92%;
    display:block;
    background:#c9c9c9;
    color:#fff;
    font-size:20px;
    margin:120px auto 0 auto;
    padding:10px 0;
    border-radius:4px;
    border:0
 }
 .button1{
    background:#EE722E;
    color:#fff;
    font-size:20px;
    margin:120px auto 0 auto;
    padding:10px 0;
    border-radius:4px;
    border:0;
    width:92%;
    display:block;
 }
</style>