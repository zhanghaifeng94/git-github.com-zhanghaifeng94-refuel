<template>
    <div class="map">
    	<Headers></Headers>
    	<div class="map_box">
    		<div class="search">
    			<i class="iconfont icon-search"></i>
    			<input type="text" name="" v-model="val">
    		</div>
			<div id="container" class="container" style="overflow: initial;"></div>
    		<ul class="advice">
    			<li v-for="(item,index) in link" :key="index" class="flex_betweeen">
    				<div class="left">
    					<h1>{{item.name}}</h1>
    					<p>地址：{{item.address}}</p>
    					<p>{{item.route}}公里 &nbsp;&nbsp;&nbsp;<i></i>{{item.time}}分钟</p>
    				</div>
    				<div class="right">
    					<i class="iconfont icon-luxian"></i>
    					<p>路线</p>
    				</div>
    			</li>
    		</ul>
    	</div>
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
          title: '油站导航',
          rightText: '',
          rightIcon:'',
          val:"",
          link:[
          	{name:"中国石化加油站(光谷万科中心西)",address:"雄楚大道1002号关山中学附近",time:"13",route:"1.6",id:"1"},
          	{name:"中国石化加油站(光谷万科中心西)",address:"雄楚大道1002号关山中学附近",time:"13",route:"1.6",id:"2"},
          	
          ]
        }
      },
      methods:{
      	getMap(){
			var map = new BMap.Map("container");          
			// 创建地图实例  
			//map.centerAndZoom("武汉",15);      
			// 初始化地图,用城市名设置地图中心点
			var point = new BMap.Point(114.400724,30.5143);  
			// 创建点坐标  
			map.centerAndZoom(point, 15);                 
			// 初始化地图，设置中心
			map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放  
			map.enableContinuousZoom(true);    
			//启用地图惯性拖拽，默认禁用
			var marker = new BMap.Marker(point);  // 创建标ghj注
			map.addOverlay(marker);               
			// 将标注添加到地图中
			//marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
			//    var local = new BMap.LocalSearcs   h(map, {      
			//     renderOptions:{map: map}      
			// });      
			// local.search("鲁巷");
 
        }
      },
      created() {
        Headers.props.title.default = this.title
        Headers.props.rightText.default = this.rightText
        Headers.props.rightIcon.default = this.rightIcon
      },
	  mounted(){
	    this.getMap();
	  }
  }
</script>

<style scoped>
	#container{
		overflow: initial;
		top: -10px;
	    left: 0;
	    width: 100%;
	    min-height: 620px;
	}  
	.map_box{
		width: 100%;
		height: 100%;
	}
	.search{
		position: fixed;
		z-index: 1000;
		left:4%;
		width: 92%;
		background:rgba(255,255,255,0.89);
		box-shadow:0px 2px 8px rgba(88,0,0,0.24);
		border-radius:4px;
		padding: 0 12px;
		box-sizing: border-box;
		display: flex;
    	align-items: center;
	}
	.search i{
		font-size: 24px;
		color: #BEBEBE
	}
	.search input{
		width: 88%;
		height: 44px;
		background: none;
	}
	.flex_betweeen{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.advice{
		position: fixed;
		bottom: 30px;
		left: 4%;
		width: 92%;
	}
	.advice li{
		background: #fff;
		padding: 12px 30px 12px 10px;
		box-shadow:0px 2px 6px rgba(0,0,0,0.16);
		border-radius:4px;
		margin-top: 10px;
	}
	.advice li h1{
		font-size: 14px;
		color: #666;
		margin-bottom: 15px;
	}
	.advice li p{
		font-size: 12px;
		color: #666;
		margin-top: 5px;
	}
	.advice li .right i{
		font-size: 24px;
		color: #666
	}
	.advice li .right p{
		color: #666;
		font-size: 10px;

	}
</style>

