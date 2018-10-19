<template>
    <div class="map">
    	<Headers></Headers>
    	<div>
			<div id="container" class="container" style="overflow: initial;"></div>
    		
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
          
        }
      },
      methods:{
      	getMap(){
			var map = new BMap.Map("container");          // 创建地图实例  
			var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
			map.centerAndZoom(point, 15);                 // 初始化地图，设置中心
			map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放           
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
		top: 140px;
	    left: 0;
	    width: 100%;
	    height: 100%;
	}  
</style>

