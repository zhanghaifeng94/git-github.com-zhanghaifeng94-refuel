<template>
    <div class="service">
 		<headers></headers>

    </div>
</template>

<script>
  import Headers from 'base/header/header'
  export default {
  	name:"service",
  	  	components: {
    	Headers
  	},
	data () {
      return {
      	title: '客服',
      	rightIcon:'i',
      	rightPath:"",
      	rightText: '',

      }
    },
	created() {
		Headers.props.title.default = this.title
		Headers.props.rightIcon.default = this.rightIcon
		Headers.props.rightText.default = this.rightText
		Headers.props.rightPath.default = this.rightPath
	}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
