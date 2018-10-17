<template>
	<div class="change_station">
 		<headers></headers>
		<mt-search v-model="value" class="list_box">
		  <div v-for="item in result" class="list" @click="adrress(item.id)">
		  	<h1>{{item.title}}</h1>
				<p>地址：{{item.value}}</p>
		  </div>
		</mt-search>
	</div>

</template>

<script>
  import Headers from 'base/header/header'
  export default {
  	name:"change_station",
  	components: {
    	Headers
  	},
	data () {
      return {
      	value:"",
      	title: '加油站',
      	rightIcon:'',
      	rightText: '',
      	result:[
      		{title:"中国石化加油站(关谷万科中心西)1",value:"雄楚大道1002号关山中学附近",id:1},
      		{title:"中国石化加油站(关谷万科中心西)2",value:"雄楚大道1002号关山中学附近",id:2},
      		{title:"中国石化加油站(关谷万科中心西)3",value:"雄楚大道1002号关山中学附近",id:3}
      	]
      }
    },
    methods:{
    	adrress(id){
    		//console.log(val)
    		this.$router.push({
    			path: "/refuel"

    		})
    	}
    },
	  created() {
	    Headers.props.title.default = this.title
	    Headers.props.rightIcon.default = this.rightIcon
	    Headers.props.rightText.default = this.rightText
	  }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	.list_box >>> .mint-search-list{
		top:75px;
	}
	.list_box >>> .mint-searchbar-inner{
		height:40px;
	}
	.list_box >>> .mint-searchbar{
		background: #fff;
	    width: 90%;
	    margin: 0 auto;
	    padding: 0 10px;
	    border-radius: 5px;
	}
	.list_box >>> .mint-searchbar-inner .mintui-search{
		font-size:25px
	}
	.list{
		background:#fff;
		border-radius:5px;
		padding:10px;
		width:90%;
		margin:0 auto 10px auto;
		box-sizing:border-box;
	    box-shadow: 0 1px 5px rgba(88,0,0,0.16);
	}
	.list h1{
		font-size:14px;
		color:#666
	}
	.list p{
		color:#666;
		font-size:12px;
		margin-top:10px;
	}
</style>