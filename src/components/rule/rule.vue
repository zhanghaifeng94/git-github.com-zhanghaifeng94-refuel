<template>
    <div class="rule">
    	<Headers></Headers>
      <p class="rule_list" @click="link()">{{rule}}</p>
    </div>
</template>

<script>
  import Headers from 'base/header/header'
  export default {
  	name:"rule",
    components: {
      Headers
    },    
    data () {
        return {
          title: '活动规则',
          rightText: '',
          rightIcon:'',
          rightPath:'',
          rule:"服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议服务协议"
        }
    },
    methods:{
      link(){
        this.$router.push({
          path: '/user/share_details'
        })
      }
    },
    created() {
      Headers.props.title.default = this.title
      Headers.props.rightText.default = this.rightText
      Headers.props.rightIcon.default = this.rightIcon
      Headers.props.rightPath.default = this.rightPath
    }
  }
</script>

<style scoped rel="stylesheet/stylus">
  .rule_list{
    width:92%;
    margin:0 auto;
    font-size:12px;
    color:#929292;
    line-height:20px;
    margin-top:10px;
  }
</style>
