<template>
	<div class="ads_edit">
      <mt-header :title="title" class="title">
          <mt-button @click="go_back()" slot="left" class="left">
            <i class="iconfont icon-back"></i>
          </mt-button>
      </mt-header>
		
		<van-address-edit
		  :area-list="areaList"
		  show-set-default
		  show-search-result
		  :address-info="address_info"
		  @save="onSave"
		/>
	</div>
</template>
<script>
import Headers from 'base/header/header'
import areaList from "common/stylus/area"
export default {
	name:"ads_edit",
	components: {
	  Headers
	}, 
	data(){
		return{
			areaList,
       		title:"编辑地址",
			address_info:{
				id:"1",
				name:"欧阳阳",
				tel:"13026458965",
				province:"湖北省",
				city:"武汉市",
				county:"洪山区",
				addressDetail:"鲁巷",
				isDefault:true
			},
		}
	},
	methods:{
		go_back(){
			this.$router.back(-1)
		},
		onSave() {
	      //Toast('save');
	    }
	  
	},
	created() {
		console.log(this.$route.params.id)
		if(this.$route.params.id=="-1"){
			this.address_info={}
		}
	},
	watch:{
		'$route': 'getParams'
	}  
}	
</script>
<style scoped>
	.ads_edit >>> .mint-header{
		background: #fff;
	}
	.ads_edit >>> .left{
		color: #666;
		font-size: 20px;
	}
	.ads_edit >>> .mint-header-title{
		font-size: 20px;
		color: #666
	}
	.ads_edit >>> .right{
		color: #666;
		font-size: 12px;
	}
</style>