<template>
    <div class="setting">
      <headers></headers>
      <div class="box">
        <router-link to="/user/advice" class="list flex_between">意见反馈 <i class="iconfont icon-right"></i></router-link>
         <router-link to="/user/about"  class="list flex_between">关于M50e <i class="iconfont icon-right"></i></router-link>
      </div>

      <button type="button" class="btn" @click="logout">退出登录</button>

    </div>
</template>

<script>
import Headers from 'base/header/header'
import API from 'api/api'
import { Toast } from 'vant'
export default {
  name:'setting',
  components: {
    Headers
  },
  data() {
    return {
      title: '设置',
      rightText: '',
      rightIcon: ''
    }
  },
  methods: {
    logout() {
      let vm = this
      API.logout().then(resule => {
        console.log(resule)
        if (resule.status === 1000) {
          Toast('退出成功')
          sessionStorage.removeItem('access-user')
          vm.$router.push({
            path: `/user`
          })
        }
      })
    }
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
