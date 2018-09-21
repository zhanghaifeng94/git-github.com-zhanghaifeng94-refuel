<template>
    <div class="coupon">
      <headers></headers>

    <div class="nav_box">
      <mt-navbar v-model="selected" class="nav flex_between">
          <mt-tab-item id="1">未领取</mt-tab-item>
          <mt-tab-item id="2">已领取</mt-tab-item>
          <mt-tab-item id="3">已失效</mt-tab-item>
      </mt-navbar>      
    </div>
    <mt-tab-container v-model="selected" class="con">
        <mt-tab-container-item id="1">
          <div class="nav_list blue" v-for="(item,index) in coupon_list" :key="item.id">
            <div class="left_list">
              <p>{{item.price}}</p>
              <span>元</span>
            </div>
            <div class="min_list">
              <p>{{item.type}}</p>
              <p>{{item.description}}</p>
              <p>{{item.time}}</p>
            </div>
            <div class="right_list">
              <router-link to="" class="use">领取</router-link>
            </div>
            <span class="left_round"></span>
            <span class="right_round"></span>          
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="nav_list" v-for="(item,index) in coupon_list" :key="item.id">
            <div class="left_list">
              <p>{{item.price}}</p>
              <span>元</span>
            </div>
            <div class="min_list">
              <p>{{item.type}}</p>
              <p>{{item.description}}</p>
              <p>{{item.time}}</p>
            </div>
            <div class="right_list">
              <router-link to="" class="use">使用</router-link>
            </div>
            <span class="left_round"></span>
            <span class="right_round"></span>          
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <div class="nav_list shixiao" v-for="(item,index) in coupon_list" :key="item.id">
            <div class="left_list">
              <p>{{item.price}}</p>
              <span>元</span>
            </div>
            <div class="min_list">
              <p>{{item.type}}</p>
              <p>{{item.description}}</p>
              <p>{{item.time}}</p>
            </div>
            <div class="right_list">
              <span class="ready_use"></span>
            </div>
            <span class="left_round"></span>
            <span class="right_round"></span>            
          </div>          
        </mt-tab-container-item>        
        <!--没有通知，消息的时候-->
      <p class="icon icon-gouwu none_msg" v-if="coupon_list.length==0"></p> 
    </mt-tab-container>
    </div>
</template>

<script>
  import Headers from 'base/header/header'
export default {
    name:"coupon",
    components: {
      Headers
    },    
    data () {
        return {
          selected: '1',
          title: '优惠券',
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
      },
      created() {
        Headers.props.title.default = this.title
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .con{
    margin:20px auto;
  }
  .con .mint-tab-container-wrap{
    display: block;
    backgound:red;
  }
  .msg_header{
    height:48px;
    background:#fff;
    color:#666;
    border-bottom:1px solid #dfdfdf;
    font-size:20px;
  }
  .nav_box{
    background:#fff;
    margin-top: -8px;
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
  .nav .mint-tab-item{
    flex:none;
    -webkit-box-flex:none;
    -ms-box-flex:none
  }
  .flex_between{
    display:flex;
    justify-content:space-between
  }
  .nav_list{
    position:relative;
    background:#f586a4;
    width:92%;
    padding:15px 25px;
    margin:0 auto 10px auto;
    border-radius:15px;
    box-sizing:border-box;
    -moz-box-sizing:border-box;
    -webkit-box-sizing:border-box;
    display:flex;
    color:#fff;
  }
  .shixiao.nav_list{
    background:#bebebe;
  }  
  .left_round{
    position:absolute;
    left:-15px;
    top:50%;
    width: 30px;
    height: 30px;
    background:#ececec;
    border-radius:100%;
    margin-top:-15px;
  }
  .right_round{
    position:absolute;
    right:-15px;
    top:50%;
    width: 30px;
    height: 30px;
    background:#ececec;
    border-radius:100%;
    margin-top:-15px;
  }
  .left_list{
    width:25%;
    border-right:1px dashed #ececec;
    align-items:center;
    display:flex;
  }
  .left_list p{
    font-size:35px;
  }
  .left_list span{
    line-height:40px;
  }
  .min_list{
    width:60%;
    font-size:12px;
    margin:0 15px 0;
    line-height:22px;
    
  }
  .right_list{
    width:20%;
    align-items:center;
    display:flex;
  }
  .use{
    background:#fff;
    color:#f586a4;
    padding:5px 10px;
    font-size:12px;
    border-radius:30px;
  }
  .ready_use{
    width:74px;
    height:55px;
  }
  .none_msg{
    width:130px;
    height:165px;
    margin:176px auto 0 auto;
    background:#fff
  }
</style>
