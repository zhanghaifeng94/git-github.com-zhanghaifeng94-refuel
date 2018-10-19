<template>
	<div class="ads_edit">
      <mt-header :title="title" class="title">
          <mt-button @click="go_back()" slot="left">
            <i class="iconfont icon-back"></i>
          </mt-button>
          <mt-button class="right">保存</mt-button>
      </mt-header>
		
		<van-address-edit
		  :area-list="areaList"
		  :show-delete="show_delete"
		  show-set-default
		  show-search-result
		  :search-result="searchResult"
		  @save="onSave"
		  @delete="onDelete"
		  @change-detail="onChangeDetail"
		/>
	</div>
</template>
<script>
import Headers from 'base/header/header'
export default {
	name:"ads_edit",
	components: {
	  Headers
	}, 
	data(){
		return{
       		title:"编辑地址"
			areaList,
			searchResult: [],
			show_delete:true
		}
	},
	methods:{
		go_back(){
			this.$router.back(-1)
		},
		onSave() {
	      //Toast('save');
	    },
	    onDelete() {
	      Toast('delete');
	    },
	    onChangeDetail(val) {
	      if (val) {
	        this.searchResult = [{
	          name: '黄龙万科中心',
	          address: '杭州市西湖区'
	        }];
	      } else {
	        this.searchResult = [];
	      }
	    }
	  }
	},
	created() {
		
	}
}	
</script>
<style scoped>

</style>