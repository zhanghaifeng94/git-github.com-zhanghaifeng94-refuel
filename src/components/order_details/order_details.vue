<template>
    <div class="order_details">
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
      title: '订单详情'
    }
  },
  created() {
    Headers.props.title.default = this.title
    Headers.props.rightText.default = ''
    Headers.props.rightPath.default = ''
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
