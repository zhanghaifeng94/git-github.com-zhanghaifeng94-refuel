<template>
    <div class="collect">
      <headers></headers>
      
      <ul class="nav flex_around">
        <li v-for="(item,index) in nav" :key="index" :class="index==ISindex?'active':''" @click="onTab(index,item)">{{item.name}}</li>
      </ul>
      
      <ul>
        <li v-for="(item,index) in lists" :key="index" class="product">
          <div class="flex_between">
            <div class="flex">
              <img :src="item.img" alt="">
              <div>
                <p class="title">{{item.title}}</p>
                <span>{{item.color}}</span>
                <p v-if="ISindex==1" class="price">￥{{item.price}}<u>￥{{item.discount}}</u></p>
              </div>            
            </div>
            <button type="button" v-if="ISindex==1" class="btn">立即购买</button>
          </div>
        </li>
      </ul>
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
      title: '收藏',
      rightText: '',
      rightIcon:'',
      ISindex:0,
      nav:[
        {name:"商品",id:"1"},
        {name:"专题",id:"2"},
      ],
      lists:[
        {img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"78","discount":"89"},
        {img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"78","discount":"89"},
        {img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"90","discount":"60"}
      ]

    }
  },
  methods:{
    onTab(index,val){
      this.ISindex=index
    }
  },
  created() {
    Headers.props.title.default = this.title,
    Headers.props.rightIcon.default = this.rightIcon
    Headers.props.rightText.default = this.rightText
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .nav{
    background:#fff;
    margin-top:-10px;
  }
  .flex_around{
    display:flex;
    justify-content:space-around;
    align-items:center
  }
  .nav li{
    font-size:14px;
    color:#666;
    padding:10px
  }
  .nav li.active{
    color:#BE6B6B;
    border-bottom:1px solid #BE6B6B;
  }
 .flex_between{
  display:flex;
  justify-content:space-between;
  align-items:center
 }
 .flex{
  display:flex;
 }
 .product{
    background:#fff;
    padding:10px 16px;
    margin-top:10px;
 }
 .product .title{
  font-size:12px;
  color:#666;
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
 }

</style>