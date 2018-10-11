<template>
    <div class="progress">
      <headers></headers>

      <ul>
        <li></li>
      </ul>
        
    </div>
</template>

<script>
import Headers from 'base/header/header'
export default {
  name:'progress',
  components: {
    Headers
  },
  data() {
    return {
        title:"进度", 
        state:"",
        rightIcon:'',
        rightPath:"",
        rightText: '',
        lists:{img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"78",num:"6523158"}
    }
  },
  methods:{
    go_back() {
      this.$router.back(-1)
    },
    getParams () {
      // 取到路由带过来的参数
      this.state = this.$route.params.state
      console.log(this.state)
    }
  },
  created() {
    this.getParams()
    Headers.props.title.default = this.title
    Headers.props.rightIcon.default = this.rightIcon
    Headers.props.rightText.default = this.rightText
    Headers.props.rightPath.default = this.rightPath
  },
  watch:{
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    '$route': 'getParams'
  }
}
</script>

<style scoped>


</style>