<template>
    <div class="my_shop">
    	<Headers></Headers>
    </div>
</template>

<script>
  import Headers from 'base/header/header'
  export default {
  	name:"my_shop",
    components: {
      Headers
    },    
    data () {
        return {
          title: 'M50自有商品',
          rightText: '',
          rightIcon:'',
        }
      },
      created() {
        Headers.props.title.default = this.title
        Headers.props.rightText.default = this.rightText
        Headers.props.rightIcon.default = this.rightIcon
      }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
