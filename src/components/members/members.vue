<template>
    <div class="members">
    	<Headers></Headers>
      <div class="top_box">
          <div class="top">
              <div>
                <img :src="img" alt="">
                <div class="user_msg">{{userName}}</div>
                <div>
                  <p class="grade_name">积分</p>
                  <p class="grade">{{grade}}</p>
                </div>
              </div>
          </div>
      </div>
  
      <div class="con">
        <div class="love">
          <h1 class="flex_between love_title">猜你喜欢 <router-link to="/store/like">更多</router-link></h1>
          <ul class="love_list flex_wrap list_box">
            <li v-for="(item,index) in list" :key="index" @click="change_details(item.type,item.id,item.title)">
              <img :src="item.img" alt="">
              <p>{{item.title}}</p>
              <span>{{item.grade}}积分</span>
              <router-link to="">立即兑换</router-link>
            </li>
          </ul>
        </div>  
        <div class="love">
          <h1 class="flex_between love_title">精品好货 <router-link to="/store/like">更多</router-link></h1>
          <div class="love_list">
            <img :src="like" alt="" class="like_img">
            <ul class="flex_wrap list_box">
              <li v-for="item in list" :key="index"  @click="change_details(item.type,item.id)">
                <router-link to=""><img :src="item.img" alt=""></router-link>
                <p>{{item.title}}</p>
                <span>{{item.grade}}积分</span>
                <router-link to="">立即兑换</router-link>
              </li>
            </ul>
          </div>            
        </div>


      </div>
    </div>
</template>

<script>
  import Headers from 'base/header/header'
  export default {
  	name:"members",
    components: {
      Headers
    },    
    data () {
        return {
          title: '会员优享',
          rightText: '记录',
          rightIcon:'/user/bill',
          rightPath:"",
          userName:"欧阳阳阳",
          grade:"100",
          like:require('common/image/like.png'),
          img:require('common/image/user_img.png'),
          list:[
            {img:require('common/image/member1.png'),title:"5充值优惠券",grade:"500",id:"1",type:"1"},
            {img:require('common/image/member2.png'),title:"5商城优惠券",grade:"500",id:"2",type:"1"},
            {img:require('common/image/member3.png'),title:"日式多功能颈枕",grade:"500",id:"3",type:"2"},
            {img:require('common/image/member1.png'),title:"5充值优惠券",grade:"500",id:"4",type:"1"},
            {img:require('common/image/member2.png'),title:"5商城优惠券",grade:"500",id:"5",type:"1"},
            {img:require('common/image/member4.png'),title:"日式多功能颈枕",grade:"500",id:"6",type:"2"},
          ],
          first:{img:require('common/image/product.png'),grade:"69999",title:"AirPods耳机"}
        }
      },
      methods:{
        change_details(type,id,name){
          console.log(type)
          if(type=="1"){
            this.$router.push({
              name:'voucher_details',
              path:"/store/voucher_details",
              params:{
                id:id,
                con:name,
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
        Headers.props.rightPath.default = this.rightPath
      }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .members >>> .title .right{
    color:#666
  }
  .top_box{
    background:#fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-top:-9px;
    box-shadow: 0px -5px 8px -2px #c8c8c8 inset;
    padding-top:10px;
    padding-bottom: 3px;
  }
  .top{
    width:92%;
    margin:0 auto;
    padding:20px 0 5px 20px;
    background:linear-gradient(279deg,rgba(203,207,177,1) 0%,rgba(212,214,188,1) 100%);
    box-shadow:0px 2px 6px rgba(88,0,0,0.16);
    box-sizing:border-box;
    overflow:hidden
  }
  .top img{
    width:34px;
    height:34px;
    box-shadow:0px 2px 3px rgba(0,0,0,0.24);
    border-radius:100%;
    float:left;
    margin-right:18px;
  }
  .user_msg{
    font-size:14px;
    color:#666;
  }
  .grade_name{
    float:left;
    margin-top:30px;
    margin-right:50px;
    color:#666
  }
  .grade{
    font-size: 40px;
    color: #666;
    line-height: 65px;
    position: absolute;
    right: 120px;
  }
  .con{
    background:#fff;
    padding-top:20px;
    padding-bottom:60px;
  }
  .flex_between{
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .love_title{
    width:92%;
    margin:0 auto;
    color:#666;
    font-size:14px;
    margin-bottom:10px;
    margin-top:20px;
  }
  .love_title a{
    font-size:12px;
  }
  .list_box{
    padding:15px 0 0 0;
  }
  .love_list{
    width:92%;
    margin:0 auto;
    border:0.5px solid rgba(190,190,190,1);
    border-radius:4px;
  }
  .love_list li{
    width:33%;
    text-align:center;
    margin-bottom:15px;
  }
  .flex_wrap{
    display:flex;
    justify-content:flex_wrap;
    align-items:center;
    flex-wrap:wrap;
  }
  .love_list li img{
    width:60px;
    height:60px;
    border-radius:100%;
  }
  .love_list li p{
    font-size:12px;
    color:#666;
    margin-top:10px;
  }
  .love_list li span{
    display:block;
    color:#EE722E;
    font-size:8px;
    margin:4px 0;
  }
  .love_list li a{
    color:#929292;
    font-size:8px;
  }
  .like_img{
    width:100%;
  }
</style>
