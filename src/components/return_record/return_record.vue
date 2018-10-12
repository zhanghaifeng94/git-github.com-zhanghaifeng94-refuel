<template>
    <div class="return_record">
      <headers></headers>
        
      <ul class="box">
        <li v-for="(item,index) in lists" :key="index" class="product" @click="onProgress(item.type_num)">
          <h1 class="num flex_between">
            <div class="flex t_left">
              <p v-if="item.type==1" class="r_shop">退货</p>
              <p v-if="item.type==2" class="c_shop">换货</p>
              <p class="t_min">订单编号：{{item.num}}</p>
            </div>
            <p class="time">{{item.time}}</p>
          </h1>
          <div class="flex_between min">
            <div class="flex">
              <img :src="item.img" alt="">
              <div>
                <p class="name">{{item.title}}</p>
                <span>{{item.color}}</span>
                <p class="price">￥{{item.price}}</p>
              </div>            
            </div>
            <p class="tip" v-if="item.type_num==1">待受理</p>
            <p class="tip" v-if="item.type_num==2">用户寄回商品</p>
            <p class="tip" v-if="item.type_num==3">申请失败</p>
            <p class="tip" v-if="item.type_num==4">已退货</p>
            <p class="tip" v-if="item.type_num==5">请拒收快件</p>
          </div>
          <p class="money">应退:{{item.r_price}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
import Headers from "base/header/header"
export default {
  name:'return_record',
  components: {
    Headers
  },
  data() {
    return {
        title: '售后记录',
        rightText: '',
        rightIcon:'', 
        id:"" ,
        lists:[
        {img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"78",num:"6523158",time:"2018.09.26  09:35",r_price:"156.00",type:"1",type_num:"1"},
        {img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"78",num:"6556158",time:"2018.09.26  09:35",r_price:"156.00",type:"1",type_num:"2"},
        {img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"90",num:"65225655",time:"2018.09.26  09:35",r_price:"156.00",type:"1",type_num:"3"},
        {img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"90",num:"65225655",time:"2018.09.26  09:35",r_price:"156.00",type:"1",type_num:"4"},        
        {img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"90",num:"65225655",time:"2018.09.26  09:35",r_price:"156.00",type:"2",type_num:"1"},
        {img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"90",num:"65225655",time:"2018.09.26  09:35",r_price:"156.00",type:"2",type_num:"5"}
      ]
    }

  },
  methods:{
    onProgress(state){
      this.$router.push({
        name:'schedule',
        path:"/user/schedule",
        params:{
          state:state
        }
      })
    }
  },
  created() {
    Headers.props.title.default = this.title,
    Headers.props.rightIcon.default = this.rightIcon
    Headers.props.rightText.default = this.rightText
  },
  watch:{
    
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
    padding-right: 16px;
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
   .r_shop{
      border:1px solid #6896D1;
      padding: 2px 3px;
      margin-right:20px;
      border-radius: 2px;
      color:#6896D1;
      font-size: 12px; 
   }
   .t_min{
    margin-top: 2px;
   }
   .time{
    font-size: 10px;
    color: #929292
   }
   .money{
    text-align: right;
    font-size: 12px;
    color: #666;
    margin:10px 16px 0 0;
    }
    .r_price{
      border:1px solid #FF8C74;
      padding: 2px 3px;
      margin-right:20px;
      border-radius: 2px;
      color:#FF8C74;
      font-size: 12px; 
    }
    .c_shop{
      border:1px solid #C7B900;
      padding: 2px 3px;
      margin-right:20px;
      border-radius: 2px;
      color:#C7B900;
      font-size: 12px; 
   }
   .box{
    padding-bottom: 30px;
   }
</style>