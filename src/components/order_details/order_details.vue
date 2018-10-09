<template>
    <div class="order_details">
      <headers></headers>
      <div class="site">
        <div style="margin-bottom: 4px"><span>{{name}}</span> <span>{{phone}}</span></div>
        <div>{{site}}</div>
        <img :src="require('common/image/12-1.png')" alt="">
      </div>
      <div class="res"></div>
      <!--<button type="button"-->
        <!--v-clipboard:copy="as"-->
        <!--v-clipboard:success="onCopy"-->
        <!--v-clipboard:error="onError">-->
        <!--复制</button>-->
    </div>
</template>

<script>
import Headers from 'base/header/header'
import BMap from 'BMap'
export default {
  components: {
    Headers
  },
  data() {
    return {
      title: '订单详情',
      name: '小熊',
      phone: '12121212',
      site: '湖北省武汉市洪山区光谷广场鲁巷',
      as: 'asasdasd'
    }
  },
  created() {
    Headers.props.title.default = this.title
    Headers.props.rightText.default = ''
    Headers.props.rightPath.default = ''
  },
  methods:{
    onCopy(e) {
      console.log(e)
      console.log('你刚刚复制: ' + e.text)
    },
    onError(e) {
      console.log('无法复制文本！')
    }

  },
  mounted(){
    
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.order_details
  .site
    width: 100%
    padding 20px 16px
    font-size 12px
    color: #666666
    background-color #ffffff
    margin-top -9px
    margin-bottom 20px
    img
      margin-left: -16px;
      width: 100%;
      height: 6px;
      margin-bottom: -22px;
</style>
