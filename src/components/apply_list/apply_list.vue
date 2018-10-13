<template>
    <div class="apply_list">
      <mt-header title="个人信息" class="title">
          <mt-button @click="go_back()" slot="left">
            <i class="iconfont icon-back"></i>
          </mt-button>
          <mt-button class="right" slot="right" @click="onCaccel()">取消申请</mt-button>
      </mt-header>
	  
	  <ul class="msg">
	  	<li>申请时间：{{apply.time}}</li>
	  	<li>订单编号：{{apply.num}}</li>
	  	<li>申请单号：{{apply.card_num}}</li>
	  	<li>售后类型：{{apply.type}}</li>
	  </ul>

      <ul class="box">
        <li class="product">
          <h1 class="num flex_between">
            <div class="flex t_left">
              <p class="t_min">申请退货商品</p>
            </div>
          </h1>
          <div class="flex_between min">
            <div class="flex">
              <img :src="apply.img" alt="">
              <div>
                <p class="name">{{apply.title}}</p>
                <span>{{apply.color}}</span>
                <p class="price">￥{{apply.price}}</p>
              </div>            
            </div>
            <p class="tip">x{{apply.acount}}</p>
          </div>
          <p class="money">总计:{{apply.price}}</p>
          <p class="money">应退:{{apply.r_price}}</p>
        </li>
      </ul>
	  
	  <div class="r_msg">
	  	<p>退货原因：{{apply.reason}}</p>
	  	<p>描&nbsp;&nbsp;述：{{apply.description}}</p>
	  </div>
    </div>
</template>

<script>
import { Dialog } from 'vant';
  export default {
  	name:"apply_list",
    components: {
      
    },    
    data () {
        return {
          title: '申请单',
          rightText: '',
          rightIcon:'',
          apply:{time:"2018.09.26 09:23",num:"654254542656",card_num:"12564235",type:"退款",img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"156.00",r_price:"156.00",type_num:"1",acount:"2",reason:"其他",description:"我想退货退款我想退货退款我想退货退款"}
        }
      },
      methods:{
      	go_back(){
      		this.$router.back(-1)
      	},
      	onCaccel(){
      		Dialog.confirm({
			  title: '',
			  message: '要取消此退货申请？'
			}).then(() => {
			  // on confirm
		       	this.$router.push({
			        name:'schedule',
			        path:"/user/schedule",
			        params:{
			          
			        }
		        })
			}).catch(() => {
			  // on cancel
			});
      	}
      },
      created() {
        
      }
  }
</script>

<style scoped rel="stylesheet/stylus">
	.apply_list >>> .right{
		color:#666;
		font-size:12px;
	}
	.apply_list >>> .title{
		height: 48px;
		background: #fff;
		color: #666666;
		font-size: 20px;
		padding: 0 16px;
		box-sizing:border-box;
		margin-bottom: 10px;
	}
	.apply_list >>> .van-dialog__message{
		text-align: center;
	}
	.msg{
		background: #fff;
		padding:10px 16px;
	}
	.msg li{
		font-size: 12px;
		color: #929292;
		line-height: 20px;
	}
	.apply_list >>> .iconfont{
		font-size:20px;
	}
	.r_msg{
		padding:10px 16px;
	}
	.r_msg p{
		font-size: 12px;
		color: #bebebe;
		line-height: 20px;
	}
	.min{
		border-top:1px solid #ececec;
		border-bottom:1px solid #ececec;
		padding: 10px 16px 10px 0;
	}
	.product{
	  background:#fff;
	  margin-top:10px;
	  padding: 10px 0 10px 16px;
	  clear: both;
	  overflow: hidden;
	}
	.product .name{
		font-size:12px;
		color:#666;
	}
	.num{
		font-size:12px;
		color: #666;
		margin-bottom: 10px;
		padding-right: 16px;
	}
	.product img{
		width:60px;
		height:60px;
		margin-right:15px;
	}
	.product span{
		font-size:10px;
		color:#929292;
		display:block;
		margin:4px 0 20px 0;
	}
	.price{
		font-size:12px;
		color:#929292
	}
	.flex_between{
		display:flex;
		justify-content:space-between;
		align-items:center
	}
	.flex{
		display:flex;
	}
	.tip{
		color: #666;
		font-size: 12px;
	}
	.t_min{
		margin-top: 2px;
	}
	.money{
		text-align: right;
		font-size: 12px;
		color: #666;
		margin:10px 16px 0 0;
	}
</style>

