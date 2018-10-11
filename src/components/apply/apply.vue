<template>
    <div class="apply">
      <mt-header :title="title" class="title">
          <mt-button @click="go_back()" slot="left">
            <i class="iconfont icon-back"></i>
          </mt-button>
      </mt-header>
        
      <ul>
        <li v-for="(item,index) in lists" :key="index" class="product">
          <h1 class="num">订单编号：{{item.num}}</h1>
          <div class="flex_between min">
            <div class="flex">
              <img :src="item.img" alt="">
              <div>
                <p class="name">{{item.title}}</p>
                <span>{{item.color}}</span>
                <p class="price">￥{{item.price}}</p>
              </div>            
            </div>
            <p class="tip">交易成功</p>
          </div>
          <button type="button" v-if="id==1" class="btn" @click="onChange(id)">申请退货</button>
          <button type="button" v-if="id==2" class="btn" @click="onChange(id)">申请换货</button>
          <button type="button" v-if="id==3" class="btn" @click="onChange(id)">申请拒收</button>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name:'apply',
  components: {
    
  },
  data() {
    return {
        title:"申请拒收", 
        id:"",
        lists:[
        {img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"78",num:"6523158"},
        {img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"78",num:"6556158"},
        {img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"90",num:"65225655"}
      ]
    }
  },
  methods:{
    go_back() {
      this.$router.back(-1)
    },
    getParams () {
      // 取到路由带过来的参数
      this.id = this.$route.params.id
      if(this.id=="1"){
        this.title="申请退货"
      }else if(this.id=="2"){
        this.title="申请换货"
      }else{
        this.title="申请拒收"
      }
    },
    onChange(type_id){
      console.log(type_id)
      this.$router.push({
        name:'reasons_return',
        path:"/user/reasons_return",
        params:{
          type_id:type_id
        }
      })
    }
  },
  created() {
    this.getParams()
  },
  watch:{
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    '$route': 'getParams'
  }
}
</script>

<style scoped>
  .apply >>> .right{
    color:#666;
    font-size:12px;
  }
  .apply >>> .title{
    height: 48px;
    background: #fff;
    color: #666666;
    font-size: 20px;
    padding: 0 16px;
    box-sizing:border-box;
    margin-bottom: 10px;
  }
  .apply >>> .iconfont{
    font-size:20px;
  }
  .min{
    border-top:1px solid #ececec;
    border-bottom:1px solid #ececec;
    padding: 10px 16px 10px 0;
  }
  .product{
      background:#fff;
      margin-top:10px;
      padding: 10px 0 10px 16px;
      clear: both;
      overflow: hidden;
   }
   .product .name{
    font-size:12px;
    color:#666;
   }
   .num{
    font-size:12px;
    color: #666;
    margin-bottom: 10px;
   }
   .product img{
    width:60px;
    height:60px;
    margin-right:15px;
   }
   .product span{
    font-size:10px;
    color:#929292;
    display:block;
    margin:4px 0 20px 0;
   }
   .price{
    font-size:12px;
    color:#929292
   }
   .price u{
    font-size:10px;
    color:#bebebe;
    margin-left:4px;
    text-decoration:line-through
   }
   .btn{
    border:1px solid rgba(146,146,146,1);
    border-radius:4px;
    font-size:12px;
    color:#929292;
    padding:5px 10px;
    background:#fff;
    margin-top: 10px;
    float: right;
    margin-right: 16px;
   } 
   .flex_between{
    display:flex;
    justify-content:space-between;
    align-items:center
   }
   .flex{
    display:flex;
   }
   .tip{
    color: #BE6B6B;
    font-size: 12px;
   }
</style>