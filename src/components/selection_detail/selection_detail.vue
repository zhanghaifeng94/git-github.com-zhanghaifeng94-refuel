<template>
    <div class="selection_detail">
      <mt-header title="颈枕眼罩二合一，国庆出行睡眠神器" class="head">
          <mt-button @click="go_back()" slot="left">
            <i class="iconfont icon-back back"></i>
          </mt-button>
          <mt-button class="right" slot="right">
            <i class="iconfont icon-favor back"></i>
            <i class="iconfont icon-share back"></i>
          </mt-button>
      </mt-header>
      
      <div class="detail">
        <div class="msg">
          <h1>颈枕眼罩二合一，国庆出行睡眠神器</h1>
          <span></span>
          <img :src="detail.img" alt="">
          <p>{{detail.con}}</p>        
        </div>
        <router-link to="" v-for="(item,index) in advice" :key="item.id" class="advice flex">
          <img :src="item.img" alt="">
          <div class="right">
            <h1>{{item.title}}</h1>
            <p>{{item.nav_title}}</p>
            <span class="erea">{{item.erea}}</span>
            <div class="price_box">
              <span class="price">￥{{item.price}}</span>
              <span class="old">￥{{item.old}}</span>
            </div>
            <u>立即购买</u>
          </div>
        </router-link>
      </div>

      <ul class="msg">
        <li>阅读{{msg.read}}</li>
        <li>转发{{msg.send}}</li>
        <li>收藏{{msg.love}}</li>
      </ul>

      <div class="bottom">
        <h1 class="bottom_title"><span>专题推荐</span></h1>
          <router-link to="/store/selection_detail" v-for="(item,index) in con" :key="item.id" class="list">
          <img :src="item.img" alt="">
          <p>{{item.title}}</p>
          <span>{{item.nav_title}}</span>
        </router-link> 
      </div>

    </div>
</template>

<script>
  export default {
  	name:"selection_detail",
    components: {
      
    },    
    data () {
      return {
        detail:{img:require('common/image/store6.png'),con:"经常出差的人或旅游的人，最难熬的就是睡觉问题。M50e款多功能枕，软硬适中，支撑力很强，戴上后头不会东倒西歪，一路醒几次，醒了也不觉得腰酸脖子痛。帽子的设计尤其周到，能遮光、当空调，一秒帮你隔绝世界，真的超级实用。出门带上它，相当于亲手为自己打开了幸福旅途的大门。这款颈枕，外面卖200多块，这里主要66。现在买，国庆出去正好能用上。"},
        advice:[
          {img:require('common/image/store6.png'),title:"带帽日式多功能颈枕",nav_title:"带帽设计，遮光更安心","erea":"限时特价","price":"66",old:"89",id:"1"}
        ],
        msg:{read:"10086",send:"1010",love:"96"},
        con:[
            {id:1,title:"颈枕眼罩二合一，国庆出行睡眠神器",nav_title:"带帽多功能颈枕",img:require('common/image/store6.png')},
            {id:2,title:"颈枕眼罩二合一，国庆出行睡眠神器",nav_title:"带帽多功能颈枕",img:require('common/image/store6.png')},
            {id:3,title:"颈枕眼罩二合一，国庆出行睡眠神器",nav_title:"带帽多功能颈枕",img:require('common/image/store6.png')}            
          ]
      }
    },
    methods:{
      onFavor(){

      },
      onShare(){

      },    
      go_back() {
        this.$router.back(-1)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .title
    height: 48px
    background #fff
    color: #666666
    font-size 20px
    padding 0 16px
    box-sizing border-box
    margin-bottom 10px
    .iconfont
      font-size 20px
    .right
      font-size 12px
      color #766BDB
</style>
<style scoped>
  .mint-header{
    background: #fff;
  }
  .head >>> .mint-header-title{
    color: #666;
  }
  .back{
    color: #666
  }
  .detail{
    background: #fff;
    padding: 15px 16px;
  }
  .msg h1{
    font-size: 18px;
    color: #222;
    margin-bottom:8px 
  }
  .msg span{
    width: 36px;
    height: 2px;
    background: #BE6B6B;
    display: block;
  }
  .msg img{
    width: 100%;
    margin:20px 0;
    border-radius: 5px;
  }
  .msg p{
    font-size: 12px;
    color: #666;
    line-height: 18px;
    text-indent: 2em;
  }
  .flex{
    display: flex;
  }
  .advice{
    box-shadow: 0px 2px 6px rgba(88,0,0,0.16);
    margin-top: 20px;
  }
  .advice img{
    width: 164px;
  }
  .right{
    padding: 20px 0 0 20px;
  }
  .right h1{
    font-size:12px;
    color: #666;
    font-weight: normal;
    margin-bottom: 4px; 
  }
  .right p{
    font-size: 10px;
    color: #929292;
  }
  .erea{
    display: block;
    color: #fff;
    background: #FF4848;
    font-size: 8px;
    width: 55px;
    padding: 3px 0;
    text-align: center;
    margin:5px 0 16px 0;
    border-radius: 3px;
  }
  .price_box{
    margin-bottom: 5px;
  }
  .price{
    font-size: 12px;
    color: #666;
  }
  .old{
    font-size: 10px;
    color: #929292;
    text-decoration: line-through;
  }
  .right u{
    text-decoration: none;
    font-size:12px;
    width: 200px;
    padding: 3px 6px;
    color: #EE722E;
    border:1px solid #EE722E;
    border-radius: 3px; 
  }
  .msg{
    background: #fff;
    margin:1px 0 30px 0;
    overflow: hidden;
  }
  .msg li{
    margin-left: 16px;
    float: left;
    font-size: 10px;
    color: #929292;
    line-height: 42px;
  }
  .bottom{
    width: 92%;
    margin:0 auto;
  }
  .bottom_title{
    border-bottom: 1px solid #d5d5d5;
    width: 100%;
    margin-bottom: 25px;
    position: relative;
  }
  .bottom_title span{
    position: absolute;
    top:-6px;
    left: 50%;
    margin-left: -50px;
    font-size: 16px;
    color: #666;
    width: 100px;
    background: #ececec;
    text-align: center;
  }
  .list{
    box-shadow: 0px 2px 6px rgba(88,0,0,0.16);
    width:100%;
    margin:0 auto 10px auto;
    padding-bottom:15px;
    display:block;
    background: #fff;
  }
  .list img{
    width:100%;
    height:100%;
  }
  .list p{
    font-size:14px;
    color:#666;
    margin:8px 15px 5px 15px;
  }
  .list span{
    font-size:12px;
    color:#929292;
    margin:0 15px;
  }
</style>