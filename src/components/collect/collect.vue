<template>
    <div class="collect">
      <mt-header title="收藏" class="title">
          <mt-button @click="go_back()" slot="left">
            <i class="iconfont icon-back"></i>
          </mt-button>
          <mt-button class="right" slot="right" @click="onShow(btn)">{{btn}}</mt-button>
      </mt-header>
        <ul>
          <li v-for="(item,index) in lists" :key="index"  class="product">
            <div class="flex">
              <van-checkbox v-model="item.danxuan" class="check" v-if="show" @change="singleChecked(item.danxuan,index)"/>
              <img :src="item.img" alt="">
              <div>
                <p class="title">{{item.title}}</p>
                <span>{{item.color}}</span>
                <p class="price">￥{{item.price}}<u>￥{{item.discount}}</u></p>
              </div>            
            </div>
          </li>
        </ul>

      <div class="tip flex_between" v-if="show">
        <p class="flex">
          <van-checkbox v-model="checkAll" class="check" @change="choiceAll(checkAll)"/>全选
        </p>
        <button type="button">删除{{length}}</button>
      </div>
    </div>
</template>

<script>
import Headers from 'base/header/header'
export default {
  name:'collect',
  components: {
    Headers
  },
  data() {
    return {
      btn:"管理",
      show:false,
      length:"",
      checkAll:false,
      lists:[
        {img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"78","discount":"89",name:"radio",danxuan:false,id:"1"},
        {img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"78","discount":"89",name:"radio",danxuan:false,id:"2"},
        {img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"90","discount":"60",name:"radio",danxuan:false,id:"3"}
      ],

    }
  },
  methods:{
    onShow(val){
      if(val=="管理"){
        this.btn="完成"
        this.show=true
      }else{
        this.btn="管理"
        this.show=false
      }
    },
    go_back(){
      this.$router.back(-1)
    },
    singleChecked:function(checked,index){
        // if (!checked) {
        //   console.log(index)
        //   this.lists[index].danxuan = false;
        // } else{
        //   this.lists[index].danxuan = true;
        // }
        var isExitCheckedNo = this.lists.every(item=>{
         return item.danxuan === true     
       });
       console.log(isExitCheckedNo);
       
       if(isExitCheckedNo){
         this.checkAll = true   
         console.log("1111111") 
       }else{
           this.checkAll = false
           console.log("222") 
       }

    },
    choiceAll(checkAll){
      if(!checkAll){
            this.lists.forEach((item)=>{
              item.danxuan = false  
               console.log("555")
            })
            // this.checkAll = false
       }else{
            this.lists.forEach((item)=>{
              item.danxuan = true  
            })
            // this.checkAll = true
       }
    }
  },
  created() {

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
    font-size:13px;
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
  .flex_between{
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .collect >>> .mint-header{
    background:#fff;
  }
  .collect >>> .icon-back{
    color:#666
  }
  .collect >>> h1{
    color:#666;
  }
  .collect >>> .right {
    color:#666
  }
  .collect >>> .van-checkbox__icon--checked .van-icon{
    background:#EE722E;
    border:1px solid #EE722E
  }
  .check{
    margin-right:10px;
  }
 .flex{
  display:flex;
  align-items:center
 }
 .product{
    background:#fff;
    padding:10px 16px;
    margin-top:10px;
 }
 .product .title{
  font-size:12px;
  color:#666;
  line-height:12px;
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

</style>