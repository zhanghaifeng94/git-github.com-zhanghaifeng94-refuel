<template>
    <div class="customer_service">
      <headers></headers>
        
      <ul class="box">
        <li class="list flex_between" @click="onReturn(1)">
          <div class="flex">
            <i class="iconfont icon-tui"></i>
            <div>
              <h1>退货退款</h1>
              <p>因质量问题、错发等问题需要退货退款，或因漏发需要退款</p>
            </div>
          </div>
          <i class="iconfont icon-right"></i>
        </li>
        <li class="list flex_between" @click="onReturn(2)">
          <div class="flex">
            <i class="iconfont icon-huan"></i>
            <div>
              <h1>换货</h1>
              <p>因尺寸、错发等问题需要换货，或因漏发需要补发货</p>
            </div>
          </div>
          <i class="iconfont icon-right"></i>
        </li>
        <li class="list flex_between" @click="onReturn(3)">
          <div class="flex">
            <i class="iconfont icon-refund"></i>
            <div>
              <h1>仅退款</h1>
              <p>拒收包裹或未收到包裹</p>
            </div>
          </div>
          <i class="iconfont icon-right"></i>
        </li>
        <li class="list flex_between" @click="onRecord()">
          <div class="flex">
            <i class="iconfont icon-time"></i>
            <div>
              <h1>售后记录</h1>
            </div>
          </div>
          <i class="iconfont icon-right"></i>
        </li>
        <li class="list flex_between"  @click="onService()">
          <div class="flex">
            <i class="iconfont icon-service"></i>
            <div>
              <h1>在线客服</h1>
            </div>
          </div>  
          <i class="iconfont icon-right"></i>
        </li>        
      </ul>

    </div>
</template>

<script>
import Headers from 'base/header/header'
export default {
  name:'customer_service',
  components: {
    Headers
  },
  data() {
    return {
      title: '售后服务',
      rightText: '',
      rightIcon:'', 
      id:""     
    }
  },
  methods:{
    onReturn(id){
      console.log(id)
      this.$router.push({
        name:'apply',
        path:"/user/apply",
        params:{
          id:id
        }
      })
    },
    onService(){
      this.$router.push({
        name:'service',
        path:"/user/service"
      })
    },
    onRecord(){
      this.$router.push({
        name:'return_record',
        path:"/user/return_record"
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
  .box li{
    border-bottom:1px solid #ececec;
    padding:13px 16px 13px 0;
  }
  .flex_between{
    display:flex;
    justify-content:space-between;
    align-items:center
  }
  .flex{
    display:flex;
    align-items:center
  }
  .icon-tui{
    font-size:20px;
    color:#6896D1;
    margin-right:6px
  }
  .icon-huan{
    font-size:20px;
    color:#C7B900;
    margin-right:6px;
  }
  .icon-refund{
    font-size:20px;
    color:#FF8C74;
    margin-right:6px;
  }
  .icon-time{
    font-size:20px;
    color:#B274D1;
    margin-right:6px
  }
  .icon-service{
    font-size:20px;
    color:#7373B4;
    margin-right:6px
  }
  .box li h1{
    font-size:12px;
    color:#666;
  }
  .box li p{
    font-size:10px;
    color:#929292;
    line-height:17px;
    margin-top:4px;
  }
  .icon-right{
    font-size:14px;
    color:#bebebe;
  }
</style>