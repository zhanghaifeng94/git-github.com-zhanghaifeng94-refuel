<template>
    <div class="apply_list">
      <mt-header title="个人信息" class="title">
          <mt-button @click="go_back()" slot="left">
            <i class="iconfont icon-back"></i>
          </mt-button>
          <mt-button class="right" slot="right">取消申请</mt-button>
      </mt-header>
		
    </div>
</template>

<script>
  export default {
  	name:"apply_list",
    components: {
      
    },    
    data () {
        return {
          title: '申请单',
          rightText: '',
          rightIcon:''
        }
      },
      methods:{

      },
      created() {
        
      }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .apply_list >>> .right{
    color:#666;
    font-size:12px;
  }
  .apply_list >>> .title{
    height: 48px;
    background: #fff;
    color: #666666;
    font-size: 20px;
    padding: 0 16px;
    box-sizing:border-box;
    margin-bottom: 10px;
  }
  .apply_list >>> .iconfont{
    font-size:20px;
  }
</style>

