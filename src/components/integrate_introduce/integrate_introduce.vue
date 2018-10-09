<template>
	<div class="integrate_introduce">
		<headers></headers>
		<div class="con_box">
			<div class="con" v-for="(rule,index) in rules" :key="index">
				<h1>{{rule.title}}</h1>
				<div  v-for="(item,index) in rule.list">
					<p>{{item.con1}}</p>
					<p>{{item.con2}}</p>
				</div>
			</div>				
		</div>
	</div>
</template>
<script>
import Headers from 'base/header/header'
export default{
	name: 'integrate_introduce',
	components: {
		Headers
	},
	data(){
		return{
		    title: '积分指南',
		    rightText: '',
		    rightIcon:'',
		    rules:[
		    	{
		    		title:"1.充值权益",
		    		list:[{con1:"会员卡充值会得到积分（根据充值额度计算积分）"}]
		    	},
		    	{
		    		title:"2.购物权益",
		    		list:[{con1:"在商城购物会得到积分（根据商品价值计算积分）"}]
		    	},
		    	{
		    		title:"3.消费权益",
		    		list:[{con1:"在商城付款时可用积分抵现（根据比率计算）",con2:"在积分商城可用积分兑换商品"}]
		    	},
		    ]
		}
	},
	methods:{
		
	},
	created() {
		Headers.props.title.default = this.title,
		Headers.props.rightIcon.default = this.rightIcon
		Headers.props.rightText.default = this.rightText
	}
}
	
</script>
<style scoped>
	.integrate_introduce{
		background:#fff;
		min-height: 667px;
	}
	.con_box{
		border-top: 1px solid #ececec;
		padding-top: 20px;
	}
	.con{
		width: 92%;
		margin-top: 22px;
		margin:0 auto;
	}
	.con h1{
		font-size: 14px;
		color: #666;
		line-height: 24px;
	}
	.con p{
		font-size:12px;
		color: #929292;
		line-height: 20px;
	}
</style>