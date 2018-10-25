<template>
    <div class="comment_list">
    	<Headers></Headers>
    	<div class="box">
	        <div class="comment" v-for="(comment,index) in comments" :key="index">
	          <div class="top flex">
	            <img :src="comment.src" alt="">
	            <p>{{comment.name}}{{comment.value}}</p>
            <van-rate
              v-model="value"
              :size="15"
              :count="comment.value"
              color="#FFC400"
              void-color="#ccc"
              readonly
            />
	          </div>
	          <div class="min">
	            <span>{{comment.time}}</span>
	            <span>{{comment.color}}</span>
	          </div>
	          <p class="con">{{comment.con}}</p>
	          <div class="img_box flex_wrap">
	            <img :src="item.img" alt="" v-for="(item,index) in comment.imgs" :Key="index">            
	          </div>
	          <div class="replay">
	            小5回复：{{comment.replay}}
	          </div>
	        </div>    		
    	</div>
    </div>
</template>

<script>
  import Headers from 'base/header/header'
  export default {
  	name:"comment_list",
    components: {
      Headers
    },    
    data () {
        return {
          title: '评价',
          rightText: '',
          rightIcon:'',
          value:5,
  	      comments:
  	      [
      			{
      				src:require('common/image/user_img.png'),
      				total:235,
      				name:"1265489",
      				time:"2018.09.23 09:23",
      				color:"藏青色",
      				con:"手感很好，帽子也很管用，颜色正式我想要的。刚拿到有点皱，放一会就好了",
      				replay:"感谢您对M50e产品的信任和支持，有您的支持我们会更加努力做好每件产品，期待您的再次光临",
      				imgs:[
      				   {img:require('common/image/store3.png')},
      				   {img:require('common/image/member1.png')},          
      				   {img:require('common/image/store3.png')},
      				   {img:require('common/image/member1.png')},
      				],
              value:5
      			},
      			{
      				src:require('common/image/user_img.png'),
      				total:235,
      				name:"1265489",
      				time:"2018.09.23 09:23",
      				color:"藏青色",
      				con:"手感很好，帽子也很管用，颜色正式我想要的。刚拿到有点皱，放一会就好了",
      				replay:"感谢您对M50e产品的信任和支持，有您的支持我们会更加努力做好每件产品，期待您的再次光临",
      				imgs:[
      				   {img:require('common/image/store3.png')},
      				   {img:require('common/image/member1.png')},          
      				   {img:require('common/image/store3.png')},
      				   {img:require('common/image/member1.png')},
      				],
              value:4
      			},
      			{
      				src:require('common/image/user_img.png'),
      				total:235,
      				name:"1265489",
      				time:"2018.09.23 09:23",
      				color:"藏青色",
      				con:"手感很好，帽子也很管用，颜色正式我想要的。刚拿到有点皱，放一会就好了",
      				replay:"感谢您对M50e产品的信任和支持，有您的支持我们会更加努力做好每件产品，期待您的再次光临",
      				imgs:[
      				   {img:require('common/image/store3.png')},
      				   {img:require('common/image/member1.png')},          
      				   {img:require('common/image/store3.png')},
      				   {img:require('common/image/member1.png')},
      				],
              value:5
      			},			

  	      ]

        }
      },
      methods:{
      	
      },
      created() {
        Headers.props.title.default = this.title
        Headers.props.rightText.default = this.rightText
        Headers.props.rightIcon.default = this.rightIcon
      }
  }
</script>

<style scoped>
  .box{
  	background: #fff;
  	padding: 0 0 50px 16px;
  	margin-top: -9px;
  }
  .comment{
    padding: 0 16px 10px 0;
    border-bottom: 1px solid #ececec;
  }
  .total b{
    color: #EE722E;
    margin-right: 5px;
  }
  .flex{
    display: flex;
    align-items: center;
  }
  .top{
    padding:10px 0 5px 0;
  }
  .top img{
    width:22px;
    height:22px;
    border-radius: 100%;
    margin-right: 5px;
    background: #ececec; 
  }
  .top p{
    font-size: 12px;
    color: #707070;
    margin-right: 10px;
  }
  .icons i.icon-favorfill{
    color:#EE722E ;
    margin-right:6px 
  }
  .star{
    color: #FFC400
  }
  .min{
    margin:0 0 13px 0;
  }
  .min span{
    font-size: 8px;
    color: #bebebe;
    margin-right: 8px;
  }
  .con{
    font-size: 12px;
    color: #707070;
    line-height: 20px;
    margin-bottom: 7px;
  }
  .flex_wrap{
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
  }
  .img_box img{
    width: 24%;
    max-height: 78px;
    margin-bottom: 10px;
    height: 100%;
  }
  .replay{
    background: #ECECEC;
    border-radius: 2px;
    padding: 10px;
    line-height: 17px;
    font-size: 10px;
    color: #929292;
  }
</style>

