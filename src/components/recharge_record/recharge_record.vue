<template>
    <div class="recharge_record">
      <headers></headers>
      会员充值

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
      title: '会员充值账单',
    }
  },
  created() {
    Headers.props.title.default = this.title
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>