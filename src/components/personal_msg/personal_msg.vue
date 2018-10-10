<template>
    <div class="personal_msg">
      <mt-header title="个人信息" class="title">
          <mt-button @click="go_back()" slot="left">
            <i class="iconfont icon-back"></i>
          </mt-button>
          <mt-button class="right" slot="right">保存</mt-button>
      </mt-header>
      <div class="picter">
       <img :src="avatar" class="avatar_img">
       <input type="file" name="avatar" accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage($event)" ref="avatarInput" class="uppic">
        <p>点击修改头像</p>
       </div>
    </div>
</template>

<script>
export default {
  name:'personal_msg',
  components: {
    
  },
  data() {
    return {
        avatar: require('common/image/user_head.png')  
    }
  },
  methods:{
    go_back() {
      this.$router.back(-1)
    },
    changeImage(e) {
       var file = e.target.files[0]
       var reader = new FileReader()
       var that = this
       reader.readAsDataURL(file)
       reader.onload = function(e) {
            that.avatar = this.result
       }
    },
  },
  created() {
    
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
<style type="text/css" media="screen">
  .personal_msg >>> .right{
    color:#666;
  }
  .picter{
    background: #fff;
    height: 106px;
    position: relative;
    margin-top:-9px;
  }
  .uppic{
    width: 60px;
    height: 80px;
    background: red;
    margin:0 auto;
    display: block;
    position: absolute;
    left:50%;
    margin-left: -30px;
    top:20px;
    opacity: 0                                                                                                                                                                                                
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
    top:20px;
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

</style>