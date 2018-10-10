<template>
    <div class="setting">
      <headers></headers>
        
      <div class="box">
        <router-link to="/user/personal_msg" class="list flex_between">个人信息 <i class="iconfont icon-back_android"></i></router-link>
         <router-link to="/user/change_password"  class="list flex_between">修改密码 <i class="iconfont icon-back_android"></i></router-link>
         <router-link to="/user/change_payword" class="list flex_between">修改支付密码 <i class="iconfont icon-back_android"></i></router-link>
         <router-link to="/user/change_phone"  class="list flex_between">修改手机号 <i class="iconfont icon-back_android"></i></router-link>        
      </div>

    </div>
</template>

<script>
import Headers from 'base/header/header'
export default {
  name:'setting',
  components: {
    Headers
  },
  data() {
    return {
      title: '个人中心',
      rightText: '',
      rightIcon:'',      
    }
  },
  methods:{

  },
  created() {
    Headers.props.title.default = this.title,
    Headers.props.rightIcon.default = this.rightIcon
    Headers.props.rightText.default = this.rightText
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .box{
    background:#fff;
    padding-left:16px;
  }
  .list{
    border-bottom:1px solid #ececec;
    padding:10px 16px 10px 0;
    font-size: 12px;
    color:#666;  
  }
  .list span,
  .list i{
    color:#bebebe;
    font-size:14px;
  }
  .flex_between{
    display:flex;
    justify-content:space-between;
    align-items:center
  }
  .btn{
    position:fixed;
    bottom:70px;
    left:0;
    width:92%;
    margin-left:4%;
    border:1px solid rgba(102,102,102,1);
    border-radius:4px;
    box-shadow:0px 2px 6px rgba(88,0,0,0.16);
    font-size:20px;
    color:#666;
    padding:10px 0;
    background:#ececec
  }
</style>