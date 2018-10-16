<template>
    <div class="like">
    	<Headers></Headers>
		<ul class="lists">
			<li v-for="(item,index) in list" :key="item.id" class="flex_between">
				<div class="flex">
					<router-link to="">
						<img :src="item.img" alt="">
					</router-link>
					<div class="msg">
						<p>{{item.title}}</p>
						<span>{{item.grade}}积分</span>
						<b>{{item.erea}}</b>
					</div>				
				</div>
				<button type="button" class="btn" @click="reChange(item.title,item.grade,item.id,item.type)">马上兑</button>
			</li>
		</ul>
    </div>
</template>

<script>
  import Headers from 'base/header/header'
  export default {
  	name:"like",
    components: {
      Headers
    },    
    data () {
        return {
          title: '猜你喜欢',
          rightText: '',
          rightIcon:'',
          list:[
            {img:require('common/image/member1.png'),title:"5充值优惠券",grade:"500",id:"1",erea:"近30天已经兑换50件",type:"1"},
            {img:require('common/image/member2.png'),title:"5商城优惠券",grade:"500",id:"2",erea:"",type:"1"},
            {img:require('common/image/member3.png'),title:"日式多功能颈枕",grade:"500",id:"3",erea:"近30天已经兑换50件",type:"2"},
            {img:require('common/image/member1.png'),title:"5充值优惠券",grade:"500",id:"4",erea:"",type:"1"},
            {img:require('common/image/member2.png'),title:"5商城优惠券",grade:"500",id:"5",erea:"近30天已经兑换50件",type:"1"},
            {img:require('common/image/member4.png'),title:"日式多功能颈枕",grade:"500",id:"6",erea:"近30天已经兑换50件",type:"2"},
          ],
        }
      },
      methods:{
      	reChange(val,num,id,type){
      		//console.log(val,num)
      		if(type=="1"){
	      		this.$router.push({
	    			name:'voucher_details',
	    			path:"/store/voucher_details",
	    			params:{
	    				con:val,
	    				grade:num,
	    				id:id
	    			}

	    		})
      		}else{
      			this.$router.push({
	    			name:'change_details',
	    			path:"/store/change_details",
	    			params:{
	    				id:id
	    			}
	    		})
      		}
      	}
      },
      created() {
        Headers.props.title.default = this.title
        Headers.props.rightText.default = this.rightText
        Headers.props.rightIcon.default = this.rightIcon
      }
  }
</script>

<style scoped rel="stylesheet/stylus">
	.lists{
		background: #fff;
		min-height: 620px;
	}
	.lists li{
		border-bottom: 1px solid #cecece;
		padding: 14px 16px;
		overflow: hidden;
	}
	.lists li img{
		width: 40px;
		height: 40px;
		border-radius: 100%;
		margin-right: 10px;
	}
	.flex{
		display: flex;
	}
	.flex_between{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.msg p{
		font-size:12px;
		color: #666
	}
	.msg span{
		display: block;
		color: #EE722E;
		font-size: 8px;
		margin-top:3px;
	}
	.msg b{
		font-weight: normal;
		font-size: 8px;
		color: #929292
	}
	.btn{
		height:22px;
		border:1px solid #929292;
		border-radius:4px;
		font-size:12px;
		color: #929292;
		background: #fff;
	}
</style>

