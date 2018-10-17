<template>
    <div class="nav_list">
      <mt-header title="维修保养" class="title">
          <mt-button @click="go_back()" slot="left">
            <i class="iconfont icon-back"></i>
          </mt-button>
          <mt-button class="right" slot="right" @click="onSearch()">
            <i class="iconfont icon-search"></i>
          </mt-button>
      </mt-header>
      
      <div class="nav_box">
        <div class="nav">
          <div class="box">
            <p v-for="(item,index) in nav" @click="onTab(index,item)" :class="Isindex==index?'active':''">{{item.name}}</p>
          </div>
        </div>
      </div>

    <div class="love">
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
      >
        <router-link  :to="'/store/details/'+item.id" v-for="(item,index) in love" :key="index" class="love_list">
          <img :src="item.img" alt="">
          <p v-if="item.erea">{{item.erea}}</p>
          <span class="over">{{item.title}}</span>
          <span class="love_price">￥{{item.price}}</span>
        </router-link >
      </van-list>
    </div>

  </div>
</template>

<script>
export default {
  name:'nav_list',
  components: {
    
  },
  data() {
    return {
        Isindex:"0",
        loading: false,
        finished: false,
        nav:[
          {name:"润滑油",type:"1"},
          {name:"添加剂",type:"2"},
          {name:"轮胎",type:"3"},
          {name:"滤清器",type:"4"},
          {name:"防冻液",type:"5"},
          {name:"雨刷",type:"6"},
          {name:"清洁剂",type:"8"},
          {name:"火花塞",type:"9"},
          {name:"车灯",type:"10"},
          {name:"全部",type:"11"},
        ],
        love:[
          {img:require('common/image/store7.png'),title:"带帽式多功能肩枕",price:"66",id:1,},
          {img:require('common/image/store7.png'),title:"带帽式多功能肩枕",price:"66",id:2,erea:"限时特价"},
          {img:require('common/image/store7.png'),title:"带帽式多功能肩枕",price:"66",id:3,erea:"限时特价"},
          {img:require('common/image/store7.png'),title:"带帽式多功能肩枕",price:"66",id:4,erea:"限时特价"},
        ]

    }
  },
  methods:{
    go_back() {
      this.$router.back(-1)
    },
    onTab(index,val){
      //console.log(index)
      this.Isindex=index
    },
    onSearch(){
      this.$router.push({
        path:"/store/search"
      })
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        let aa = {
          img: require('common/image/store7.png'),
          title: '带帽式多功能肩枕',
          price:"66"
        }
        for (let i = 0; i < 10; i++) {
          this.love.push(aa)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.love.length >= 5) {
          this.finished = true
        }
      }, 1000)
    }
  },
  created() {
  }
}
</script>

<style scoped>
  .nav_list >>> .right{
    color:#666;
    font-size:12px;
  }
  .nav_list >>> .title{
    height: 48px;
    background: #fff;
    color: #666666;
    font-size: 20px;
    padding: 0 16px;
    box-sizing:border-box;
    margin-bottom: 10px;
  }
  .nav_list >>> .iconfont{
    font-size:20px;
  }
  .nav_box{
    background: #fff;
    width: 100%;
    padding:0 16px;
    box-sizing: border-box;
    margin-top: -10px;
  }
  .nav{
    width: 100%;
  }
  .box{
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
  }
  .box p{
    display: inline-block;
    padding:11px 0;
    margin-right: 30px; 
    color: #666;
    font-size: 14px;
  }
  .box p.active{
    color: #BE6B6B;
    border-bottom: 1px solid #BE6B6B;
  }
  .box::-webkit-scrollbar {
    display: none;
  }

  .love{
    order-top: 1px solid #ececec;
    padding: 16px;
    overflow:hidden;
    background:#fff;
  }
  .love h1{
    width:100%;
    font-size:14px;
    margin:9px 0 15px 0;
    text-align:center;
    color:#666;
  }
  .love h1 h2{
    font-size:10px;
    color:#929292;
    text-align:center;
    margin-top:6px;
  }
  .love_list{
    width:48%;
    float: left;
    margin-right:4%;
    box-shadow: 0px 2px 6px rgba(88,0,0,0.16);
    margin-bottom:10px;
    padding-bottom:10px;
    border-radius:5px;
      min-height: 232px;
  }
  .love_list:nth-child(2n){
    margin-right:0
  }
  .love_list img{
    width:100%;
    margin-bottom:4px;
  }
  .love_list p{
    margin:0 6px 4px 6px;
    background:#FF4848;
    padding:2px 6px;
    color:#fff;
    font-size:8px;
    border-radius:3px;
    display: inline-block;
  }
  .love_list span{
    display:block;
    font-size:12px;
    color:#666;
    margin:0 6px 4px 6px;
  }
  .love_list span.love_price{
    color:#EE722E
  }
  /*手机适配*/
  @media (max-width:375px) {
    .love_list{
      min-height:210px;
    }
  }
  @media (max-width:360px) {
    .love_list{
      min-height:205px;
    }
  }
  @media (max-width:320px) {
    .love_list{
      min-height:185px;
    }
  }
</style>