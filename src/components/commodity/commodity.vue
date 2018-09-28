<template>
    <div class="commodity">
      <headers></headers>
    </div>
</template>

<script>
import Headers from 'base/header/header'
import API from 'api/api'
  export default {
    components: {
      Headers,
    },
    data(){
      return{
        title:'会员查询'
      }
    },
    created(){
      Headers.props.title.default = this.title
      Headers.props.rightText.default = ''
      // Headers.props.rightPath.default = ''
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
