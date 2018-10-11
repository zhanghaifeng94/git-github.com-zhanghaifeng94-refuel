<template>
    <div class="reasons_return">
      <mt-header :title="title" class="title">
          <mt-button @click="go_back()" slot="left">
            <i class="iconfont icon-back"></i>
          </mt-button>
          <router-link to="" slot="right" class="right">退换货政策</router-link>
      </mt-header>

      <ul>
        <li></li>
      </ul>
        
    </div>
</template>

<script>
export default {
  name:'reasons_return',
  components: {
    
  },
  data() {
    return {
        title:"填写退货信息", 
        lists:{img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"78",num:"6523158"}
    }
  },
  methods:{
    go_back() {
      this.$router.back(-1)
    },
    getParams () {
      // 取到路由带过来的参数
      this.type_id = this.$route.params.type_id
      if(this.type_id=="1"){
        this.title="填写退货信息"
      }else if(this.type_id=="2"){
        this.title="填写换货信息"
      }else{
        this.title="填写拒收信息"
      }
    }
  },
  created() {
    this.getParams()
  },
  watch:{
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    '$route': 'getParams'
  }
}
</script>

<style scoped>
  .reasons_return >>> .right{
    color:#666;
    font-size:12px;
  }
  .reasons_return >>> .title{
    height: 48px;
    background: #fff;
    color: #666666;
    font-size: 20px;
    padding: 0 16px;
    box-sizing:border-box;
    margin-bottom: 10px;
  }
  .reasons_return >>> .iconfont{
    font-size:20px;
  }

</style>