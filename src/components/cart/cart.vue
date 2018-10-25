<template>
    <div class="cart">
      <mt-header title="购物车" class="title">
        <mt-button @click="go_back()" slot="left">
          <i class="iconfont icon-back"></i>
        </mt-button>
        <router-link to="" slot="right" class="coupon">领券</router-link>
        <mt-button class="right" slot="right" @click="onShow(btn)">{{btn}}</mt-button>
      </mt-header>
      <ul>
        <li v-for="(item,index) in lists" :key="index"  class="product">
          <div class="flex">
            <van-checkbox v-model="item.danxuan" class="check" @change="singleChecked(item.danxuan,index)"/>
            <img :src="item.img" alt="">
            <div class="box">
              <p class="title">{{item.title}}</p>
              <span>{{item.color}}</span>
              <div class="flex_between">
                <p class="price">￥{{item.price}}<u>￥{{item.discount}}</u></p> 
                <van-stepper
                  v-model="item.num"
                  integer
                  :min="1"
                  :max="40"
                  :step="1"
                />
              </div>
            </div>            
          </div>
        </li>
      </ul>

      <div class="invalid_box">
        <h1 class="flex_between">失效商品 <button type="button" @click="onClear()">清空失效商品</button></h1>
        <ul class="invalid">
          <li v-for="(item,index) in lists" :key="index" class="flex">
            <span class="invalid_tip">失效</span>
            <img :src="item.img" alt="">
            <div class="invalid_right">
              <p class="name flex_between">{{item.title}} <span>×{{item.num}}</span></p>
              <span class="color">{{item.color}}</span>
              <p class="price">￥{{item.price}}<u>￥{{item.discount}}</u></p> 
           </div>
          </li>
        </ul>
      </div>

      <div class="tip flex_between">
        <p class="flex">
          <van-checkbox v-model="checkAll" class="check" @change="choiceAll(checkAll)"/>全选
        </p>
        <div v-if="show" class="show">
          合计：{{calcTotalPrice | formatPrice}}
          <button type="button" :class="this.length==0?'active':''" @click="onOrder()">下单({{length}})</button>
        </div>
        <button type="button"  v-if="!show" :class="this.length==0?'active':''">删除({{length}})</button>
      </div>

      <div class="cart">
        <span class="">
          
        </span>
      </div>
    </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  name:'cart',
  components: {
    
  },
  data() {
    return {
      btn:"管理",
      length:0,
      checkAll:false,
      show:true,
      value:1,
      lists:[
        {img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"78","discount":"89",name:"radio",danxuan:false,id:"1",num:1},
        {img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"78","discount":"89",name:"radio",danxuan:false,id:"2",num:1},
        {img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"90","discount":"60",name:"radio",danxuan:false,id:"3",num:1}
      ],
      total:0,
    }
  },
  methods:{
    onShow(val){
      if(val=="管理"){
        this.btn="完成"
        this.show=false
      }else{
        this.btn="管理"
        this.show=true
      }
    },
    go_back(){
      this.$router.back(-1)
    },
    singleChecked:function(checked,index){
        if (!checked) {
          this.length-=1
        } else{
          this.length+=1
        }
       
        if(this.length===this.lists.length){
          this.checkAll = true   
        }else{
          this.checkAll = false
        }

    },
    choiceAll(checkAll){
      if(!checkAll){
          if(this.length===this.lists.length){
            this.lists.forEach((item)=>{
              item.danxuan = false 
            })
          }else{
            return false
          }
       }else{
          this.lists.forEach((item)=>{
            item.danxuan = true 
          })
       }
    },
    onClear(){
      Dialog.confirm({
        title: '确定清空所有无效商品？',
      }).then(() => {
        // on confirm
      }).catch(() => {
        // on cancel
      });
    },
    onOrder(){
      this.$router.push({
        path: `/user/order_pay`,
      })
    }
  },
  created() {

  },
  computed: {
      //只要goods里面的数据有修改，就会执行calcTotalPrice
      calcTotalPrice () {
        var goods = this.lists,
          totalPrice = 0;
        //forEach回调，第一个参数是当前循环的对象，第二个参数是索引  
        goods.forEach(function (good, i) {
          console.log(good)
          if (good.danxuan) {
            totalPrice += good.price * good.num
            //console.log(totalPrice)
          }
        });
        return totalPrice;
      }
    },
    filters: {
      //格式化金额显示，避免出现NaN的情况
      formatPrice (val) {
        return isNaN(val) ? 0 : val;
      }
    }

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .tip{
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    background:#fff;
    padding:5px 16px;
    box-sizing:border-box
  }
  .tip p{
    font-size:12px;
    color:#929292;
  }
  .tip button{
    font-size:14px;
    color:#fff;
    padding:10px 16px;
    border-radius:50px;
    border:0;
    background:#EE722E
  }
  .tip button.active{
    background:#ccc;
  }
  .flex_between{
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .cart >>> .mint-header{
    background:#fff;
  }
  .cart >>> .icon-back{
    color:#666
  }
  .cart >>> h1{
    color:#666;
    font-size:20px;
  }
  .cart >>> .right {
    color:#666
  }
  .cart >>> .van-checkbox__icon--checked .van-icon{
    background:#EE722E;
    border:1px solid #EE722E
  }
  .cart >>> .coupon{
    color:#EE722E;
    margin-right:14px;
  }
  .cart >>>.van-stepper__minus,
  .cart >>> .van-stepper__plus{
    width:25px;
    height:18px;
  }
  .cart >>> .van-stepper__input{
    width:25px;
    height:14px;
  }
  .check{
    margin-right:10px;
  }
  .flex{
    display:flex;
    align-items:center
  }
  .product{
    background: #fff;
    padding: 10px;
    margin-top: 10px;
    box-sizing: border-box;
    width: 92%;
    margin: 10px auto 0 auto;
    box-shadow:0px 1px 3px rgba(0,0,0,0.16);
    border-radius:4px;
  }
  .product .title{
    font-size:12px;
    color:#666;
    line-height:12px;
  }
  .product img{
    width:70px;
    height:70px;
    margin-right:15px;
  }
  .product span{
    font-size:10px;
    color:#929292;
    display:block;
    margin:10px 0;
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
  }
  .box{
    width:70%;
  }
  .show{
    color:#ee722e;
    font-size:12px;
  }
  .invalid_box{
    width:92%;
    background:rgba(252,252,252,1);
    box-shadow:0px 1px 3px rgba(0,0,0,0.16);
    border-radius:4px;
    margin:10px auto 50px auto;
    padding:0 0 0 10px;
    box-sizing:border-box
  }
  .invalid_box h1{
    font-size:12px;
    color:#666;
    padding:10px 0;
  }
  .invalid_box button{
    font-size:8px;
    color:#666;
    padding:2px 4px;
    border:1px solid #929292;
    border-radius:1px;
    background:rgba(252,252,252,1);
    margin-right:10px;
  }
  .invalid li{
    padding:10px 10px 10px 0;
    border-top:1px solid #dfdfdf;
  }
  .invalid_tip{
    background:#BEBEBE;
    border-radius:1px;
    padding:2px;
    color:#fff;
    font-size:8px;
    margin-right:3px;
  }
  .invalid li img{
    width:70px;
    height:70px;
    margin-right:18px;    
  }
  .invalid_right .name{
    font-size:12px;
    color:#BEBEBE;
    margin-bottom:4px;
  }
  .invalid_right .color{
    font-size:12px;
    color:#BEBEBE;
    margin-bottom:26px;
    display:block
  }
  .invalid_right{
    width:66%;
  }  
 
    // 手机适配
  @media (max-width:414px) {
    
    .box{
      width:68%;
    }
  }
  @media (max-width:375px) {
    .invalid_right{
      width:63%;
    }
    .box{
      width:65%;
    }
  }
  @media (max-width:360px) {
    .invalid_right{
      width:61%;
    }
  }
  @media (max-width:320px) {
    .invalid_right{
      width:56%
    }
    .box{
      width:59%;
    }
  }

</style>