<template>
    <div class="search">
    	<mt-search
		  v-model="value"
		  cancel-text="取消"
		  placeholder="搜索">
		</mt-search>

    </div>
</template>

<script>
  export default {
  	name:"search",
  	date:{
  		return:{
  			value:""
  		}
  	}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
