<template>
	<div class="ads_list">
		<headers></headers>
		<img src="../../common/image/12-1.png" alt="" class="bg">
		<van-address-list
		  v-model="chosenAddressId"
		  :list="list"
		  @add="onAdd"
		  @edit="onEdit"
		/>
	</div>
</template>
<script>
import Headers from 'base/header/header'
export default {
	name:"ads_list",
	components: {
	  Headers
	}, 
	data(){
		return{
          title: '地址管理',
          rightText: '',
          rightIcon:'',
          chosenAddressId: '1',
	      list: [
	        {
	          id: '1',
	          name: '张三',
	          tel: '13000000000',
	          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
	        },
	        {
	          id: '2',
	          name: '李四',
	          tel: '1310000000',
	          address: '浙江省杭州市拱墅区莫干山路 50 号'
	        }
	      ]
		}
	},
	methods:{
		onAdd() {
	      //Toast('新增地址');
	      // this.$router.push({
       //    	path: "/user/ads_edit",
    	  //  })
	    },

	    onEdit(item, index) {
	      //Toast('编辑地址:' + index);
	      // this.$router.push({
       //    	path: "/user/ads_edit",
    	  //  })
	    }
	},
	created() {
		Headers.props.title.default = this.title
		Headers.props.rightText.default = this.rightText
		Headers.props.rightIcon.default = this.rightIcon
	}
}	
</script>
<style scoped>
	.bg{
		width: 100%;
		height: 100%;
		display: block;
		margin-top: -10px;
	}
</style>