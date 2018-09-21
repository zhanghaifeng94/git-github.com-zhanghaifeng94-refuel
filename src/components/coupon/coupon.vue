<template>
    <div class="coupon">
      <router-link to="/msg">进入消息页面</router-link>
    <mt-header title="优惠券" class="mint-header is-fixed msg_header">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

        <div class="nav_box">
      <mt-navbar v-model="selected" class="nav flex_between">
          <mt-tab-item id="1">未领取</mt-tab-item>
          <mt-tab-item id="2">已领取</mt-tab-item>
          <mt-tab-item id="3">已失效</mt-tab-item>
      </mt-navbar>      
    </div>
    <mt-tab-container v-model="selected" class="con">
        <mt-tab-container-item id="1" class="nav_list" v-for="(item,index) in coupon_list">
          <div class="left_list">
            <h1>{{item.price}}</h1>
            <span>元</span>
          </div>
          <div class="min_list">
            <p>{{item.type}}</p>
            <p>{{item.description}}</p>
            <p>{{item.time}}</p>
          </div>
          <div class="right_list">
            <router-link to="">使用</router-link>
          </div>
          <span class="left_round"></span>
          <span class="right_round"></span>
        </mt-tab-container-item>
        <mt-tab-container-item id="2"  class="nav_list">
          
        </mt-tab-container-item>
        <mt-tab-container-item id="3"  class="nav_list">
          
        </mt-tab-container-item>        
<!--         没有通知，消息的时候
 -->    <!--    <p class="icon icon-gouwu none_msg" v-if="order_list.length==0||system_list==0"></p>  -->
    </mt-tab-container>
    </div>
</template>

<script>
export default {
    name:"coupon",
    data () {
        return {
          selected: '1',
          coupon_list:[
            {price:"20","type":"商场专用","description":"每满1000元减10元券",time:"2018.08.19-2018.09.25",path:"/index/shop"},
            {price:"30","type":"充值专用","description":"每满1000元减10元券",time:"2018.08.19-2018.09.25",path:"/index/recharge"},
            {price:"50","type":"充值专用","description":"每满1000元减10元券",time:"2018.08.19-2018.09.25",path:"/index/recharge"},
            {price:"10","type":"商场专用","description":"每满1000元减10元券",time:"2018.08.19-2018.09.25",path:"/index/shop"},
            ]
        }
      },
      watch: {
        selected: function (val, oldVal) {
          console.log(val)
          // click后打印出当前mt-tab-item的id
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  body{
    background:#ececec;
  }
  .con{
    margin:20px auto;
  }
  .mint-tab-container.con .mint-tab-container-wrap{
    display: block;
  }
  .msg_header{
    height:60px;
    background:#fff;
    color:#666;
    border-bottom:1px solid #dfdfdf;
    font-size:20px;
  }
  .nav_box{
    background:#fff;
    margin-top:45px;
  }
  .nav{
    height:36px;
    width:60%;
    margin:0 auto
  }
  .nav .mint-tab-item{
    padding:0;
    padding:13px 0;
    font-size:14px;
  }
  .nav.mint-navbar .mint-tab-item.is-selected{
    color:#be6b6b;
    border-bottom:1px solid #be6b6b;
    margin-bottom:0;
  }
  .flex_between{
    display:flex;
    justify-content:space-between
  }
  .nav_list{
    position:relative;
    background:#f586a4;
    width:92%;
    padding:15px 25px 15px 31px;
    margin:0 auto 10px auto;
    border-radius:15px;
    box-sizing:border-box;
    -moz-box-sizing:border-box;
    -webkit-box-sizing:border-box;
  }
  .left_round{
    position:absolute;
    left:-15px;
    top:50%;
    width: 30px;
    height: 30px;
    background:#ececec;
  }
</style>
