<template>
    <div class="personal_msg">
      <mt-header title="个人信息" class="title">
          <mt-button @click="go_back()" slot="left">
            <i class="iconfont icon-back"></i>
          </mt-button>
          <mt-button class="right" slot="right" @click="baocun">保存</mt-button>
      </mt-header>
      <div class="picter">
       <img :src="avatar" class="avatar_img">
       <input type="file" name="avatar" accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage($event)" ref="avatarInput" class="uppic">
        <p>点击修改头像</p>
       </div>

      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell class="flex">
            <label>昵称</label>
            <p><input type="text" v-model="nike"></p>
          </van-cell>
          <van-cell class="flex">
            <label>性别</label>
            <van-radio name="1" @click="radio = '1'">男</van-radio>
            <van-radio name="2" @click="radio = '2'">女</van-radio>
          </van-cell>
        </van-cell-group>
      </van-radio-group>

    </div>
</template>

<script>
import API from 'api/api'
export default {
  name: 'personal_msg',
  components: {

  },
  data() {
    return {
      avatar: require('common/image/user_head.png'),
      radio: '1',
      file: '',
      nike: ''
    }
  },
  methods: {
    go_back() {
      this.$router.back(-1)
    },
    changeImage(e) {
      console.log(e)
      this.file = e.target.files[0]
      var reader = new FileReader()
      var that = this
      reader.readAsDataURL(this.file)
      reader.onload = function(e) {
        that.avatar = this.result
        console.log(this.result);
      }
    },
    baocun() {
      let params = 'file=' + this.file + '&nike=""'
      API.modifyUserInfo(params).then(result => {
        console.log(result);
      })
    }
  },
  created() {

  }
}
</script>

<style scoped>
  .personal_msg >>> .right{
    color:#666;
    font-size:12px;
  }
  .personal_msg >>> .title{
    height: 48px;
    background: #fff;
    color: #666666;
    font-size: 20px;
    padding: 0 16px;
    box-sizing:border-box;
    margin-bottom: 10px;
  }
  .personal_msg >>> .iconfont{
    font-size:20px;
  }
  .picter{
    background: #fff;
    height: 106px;
    position: relative;
    margin-top:-9px;
  }
  .uppic{
    width: 60px;
    height: 86px;
    background: red;
    margin:0 auto;
    display: block;
    position: absolute;
    left:50%;
    margin-left: -30px;
    top:15px;
    opacity: 0;
    z-index:100;
  }
  .avatar_img{
    width:60px;
    height:60px;
    background:rgba(0,0,0,0);
    border:0.5px solid rgba(223,223,223,1);
    box-shadow:0px 1px 3px rgba(0,0,0,0.16);
    border-radius:100%;
    position: absolute;
    left:50%;
    top:15px;
    margin-left: -30px;
  }
  .picter p{
    position: absolute;
    font-size: 10px;
    color:#929292;
    width: 100%;
    text-align: center;
    top:86px;
  }
  .flex label{
    float: left;
    margin-right: 30px;
    color:#666;
    font-size: 12px
  }
  .flex p{
    color:#929292;
  }
  .flex .van-radio{
    float: left;
    margin-right: 30px;
    color:#929292;
    font-size: 12px;
  }
  .flex >>> .van-radio .van-icon-checked{
    color:#EE722E;
  }
  .flex >>> .van-radio .van-icon-check{
    font-size: 18px
  }

</style>
