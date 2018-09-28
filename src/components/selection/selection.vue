<template>
    <div class="selection">
    	<Headers></Headers>
		<router-link to="">
			
		</router-link>
    </div>
</template>

<script>
  import Headers from 'base/header/header'
  export default {
  	name:"selection",
    components: {
      Headers
    },    
    data () {
        return {
          title: '专题精选',
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