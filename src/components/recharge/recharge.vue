<template>
    <div class="recharge">
      <headers></headers>
    </div>
</template>

<script>
import Headers from 'base/header/header'
export default {
  components: {
    Headers
  },
  data() {
    return {
      title: '会员充值',
      rightText: '充值记录'

    }
  },
  created() {
    Headers.props.title.default = this.title
    Headers.props.rightText.default = this.rightText
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
