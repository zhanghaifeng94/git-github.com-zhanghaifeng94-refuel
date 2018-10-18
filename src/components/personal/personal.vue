<template>
    <div class="setting">
      <headers></headers>
        
      <ul class="box">
        <li class="list flex_between" @click="onMsg()">个人信息 <i class="iconfont icon-right"></i></li>
        <li class="list flex_between" @click="onCode('1')">修改密码 <i class="iconfont icon-right"></i></li>
        <li class="list flex_between" @click="onCode('2')">修改支付密码 <i class="iconfont icon-right"></i></li>
      </ul>

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
      id:""     
    }
  },
  methods:{
    onCode(id){
      //console.log(id)
      this.$router.push({
        name:'change_password',
        path:"/user/change_password",
        params:{
          id:id,
        }
      })
    },
    onMsg(){
      //console.log(val,num)
      this.$router.push({
        name:'personal_msg',
        path:"/user/personal_msg",
      })
    },
  },
  created() {
    Headers.props.title.default = this.title
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
