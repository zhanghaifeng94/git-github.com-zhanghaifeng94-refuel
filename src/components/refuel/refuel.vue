<template>
    <div class="refuel">
      <div class="header">
        <i class="iconfont icon-saoma"></i>
        <h1>输入加油枪号</h1>
        <router-link to="/index/msg"><i class="iconfont icon-xiaoxi"></i></router-link>
      </div>

	  <div class="nav">
	  	<span><i class="iconfont icon-jiayouzhanxinxi"></i></span>
	  	<div class="flex_between nav_right">
		  	<div class="right_box">
		  		<h1>您当前在</h1>
		  		<p>{{address}}</p>
		  	</div>
		  	<router-link to="/refuel/change_station" class="change">更改加油站</router-link>
	  	</div>
	  </div>

	  <div class="list">
	  	<div class="search_box">
	  		<img src="../../common/image/qiang.png" alt="">
	  		<input type="text" name="" placeholder="请选择油枪号(询问加油员)" v-model='val' disabled="disabled">
	  	</div>
		<ul class="list_box">
			<li v-for="(item,index) in list" :key="item.id" :class="Isindex==index?'active':''" @click="chice(item.con)">{{item.con}}#</li>
		</ul>
        <button class="submit" @click="tijiao()">确认</button>
	  </div>

    </div>
</template>

<script>
import { Toast } from 'vant';
// import BMap from 'BMap'
// import {map} from '../../api'
export default {
	name:"refuel",
	components: {
	},
	data () {
		return{
			Isindex:-55,
			val:"",
			address:"",
			list:[
				{id:1,con:1},
				{id:2,con:2},
				{id:3,con:3},
				{id:4,con:4},
				{id:5,con:5},
				{id:6,con:6},
				{id:7,con:7},
				{id:8,con:8},
				{id:9,con:9},
				{id:10,con:10},
				{id:11,con:11},
				{id:12,con:12},
				{id:13,con:13},
				{id:14,con:14},
				{id:15,con:15},
				{id:16,con:16},
				{id:17,con:17},
				{id:18,con:18},
				{id:19,con:19},
				{id:20,con:20},
			],
			location:""
		}
	},
	methods:{
		chice(data){
			//console.log(data)
			this.Isindex=data-1;
			this.val=data;
		},
		getParams () {
		// 取到路由带过来的参数
			this.address = this.$route.params.con
		},
		tijiao(){
			if(this.val==""){
				Toast('请选择油枪号')
			}else{
				console.log("成功")
	    		this.$router.push({
	    			name:'pay',
	    			path:"/refuel/pay"
	    		})
			}
		},
	},
	created() {
		this.getParams()
	},
  	mounted () {
 	    let _this = this
		var geolocation = new BMap.Geolocation()
		geolocation.getCurrentPosition(function(r) {
		if (this.getStatus() == BMAP_STATUS_SUCCESS) {
		  const myGeo = new BMap.Geocoder()
		  myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), data => {
		    if (data.addressComponents) {
		      const result = data.addressComponents
		      const location = {
		        creditLongitude: r.point.lat, // 经度
		        creditLatitude: r.point.lng, // 纬度
		        creditProvince: result.province || '', // 省
		        creditCity: result.city || '', // 市
		        creditArea: result.district || '', // 区
		        creditStreet: (result.street || '') + (result.streetNumber || '') // 街道
		      }
		      _this.location = location
		      console.log(location)
		    }
		  })
		}
		})
	},
	watch:{
		// 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
		//'$route': 'getParams'
	}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .header{
      background :#EE722E
      width :100%
      height: 48px
      line-height: 48px
      display: flex
      padding: 0 16px
      justify-content: space-between;
      box-sizing: border-box
    }
    .header i{
        color:#fff;
        font-size:24px
    }
    .header h1{
    	color:#fff;
    	font-size:20px;
    }
    .nav{
    	display:flex;
    	margin:10px 0;
    	padding:10px 16px;
    	background:#fff;
    	align-items:center;
    }
    .nav span{
    	border-radius:100%;
	    border: 1px solid #929292;
	    display:flex;
	    align-items:center;
	    justify-content:center;
	    margin-right:10px;
    }
    .nav i{
    	margin: 4px;
	    border-radius: 100%;
	    font-size:20px;
	    text-align:center;
	    color:#929292
    }
    .flex_between{
	   	display:flex;
	    justify-content:space-between;
	    align-items:center;
    }
    .nav_right{
    	width:100%;
    }
    .right_box h1{
		color:#666;
		font-size:14px;
		font-weight:nomal;
		margin-bottom:5px;
    }
    .change,
    .right_box p{
    	color:#EE722E;
    	font-size:12px;
    }
	.list{
		background:#fff;
		padding:0 16px 36px 16px;
	}
	.search_box{
		display:flex;
	    align-items:center;
	    border-bottom:1px solid #ececec;
	    padding:10px 0;
	}
	.search_box img{
		width:32px;
		height:32px;
		margin-right:10px
	}
	.search_box input{
		font-size:12px;
		color:#666;
		height:32px;
		width:100%;
		background:#fff;
	}
	.list_box{
		display:flex;
		flex-wrap:wrap;
		justify-content:space-between;
	    align-items:center;
		padding:14px 0;
		border-bottom:1px solid #ececec
	}
	.list_box li{
		width:20%;
		border: 1px solid #BEBEBE;
		padding:14px 0;
		text-align:center;
		margin-bottom:14px;
		border-radius:4px;
		color:#BEBEBE
	}
	.list_box li.active{
		background:#EE722E;
		color:#fff;
		border: 1px solid #EE722E;
	}
	.submit{
		width:100%;
		background:#EE722E;
		color:#fff;
		font-size:20px;
		border-radius:4px;
		margin:20px 0;
		padding:10px 0;
		border:0
	}

</style>
