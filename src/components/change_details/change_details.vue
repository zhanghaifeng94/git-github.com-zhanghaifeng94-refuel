<template>
    <div class="change_details">
      <Headers></Headers>
      <div class="banner">
        <van-swipe @change="onChange" :autoplay="3000" :show-indicators="false">
          <van-swipe-item class="swipe" v-for="(item,index) in swipe" :key="index"><img v-lazy="item.src"></van-swipe-item>
        </van-swipe>
        <div class="number">
          <span>{{apiece}}</span>/<span>{{sum}}</span>
        </div>
      </div>
      <ul class="fn_text_wrap">
        <li>
          <p class="scour">￥0.00+500积分<u>￥89</u></p>
          <div class="">
            <span>包邮</span>
            <span>月销100件</span>
          </div>
        </li>
        <li>
          <h1>带帽日式多功能颈枕</h1>
          <p class="txt">带帽设计，遮光更安心</p>
        </li>
        <li class="flex_between choose" @click="onSize()">
          规格选择 <i class="iconfont icon-right"></i>
        </li>
        <li>
          积分兑换商品若无质量问题不支持退换
        </li>
      </ul>

      <img :src="detail_img" alt="" class="msg">
     
      <div class="h48"></div>
      <div class="bottom_btn" @click="onLink()">去兑换</div>

      <!--规格弹窗-->
      <div class="size_box" v-if="onTip">
        <div class="size">
          <div class="size_top">
            <img :src="product.img" alt="" class="pro_img">
            <div class="flex_box">
              <i class="iconfont icon-round_close_light" @click="onCancel()"></i>
              <p class="size_price">价格：￥{{product.price}}<u>￥{{product.r_price}}</u></p>
              <p class="other">{{size}}</p>
            </div>            
          </div>
          <div class="size_min">
            <h1>颜色</h1>
            <p v-for="(item,index) in product.colors" :key="index" :class="Isindex==index?'active':''" @click="onChice(item.color,index)">{{item.color}}</p>
          </div>
          <div class="size_bottom">
            <h1>数量</h1>
            <div class="size_num">
              <p @click="reduce(1)">-</p>
              <input type="number" name="" v-model="acount" @input="onInput(acount)">
              <p @click="add(1)">+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script >
import { Toast } from 'vant';
import Headers from 'base/header/header'
export default {
  name:"change_details",
  components:{
     Headers
  },
  data() {
    return {
      title: '商品详情',
      rightText: '',
      rightIcon:'',
      swipe: [{
        src: require('common/image/12.png'),
        id: '1'
      }, {
        src: require('common/image/12.png'),
        id: '2'
      }, {
        src: require('common/image/12.png'),
        id: '3'
      }],
      sum: '',
      apiece: 1,
      Isindex:-1,
      state:true,
      onTip:false,
      detail_img: require('common/image/222222.png'),
      acount:"1",
      product:{
        img:require('common/image/store3.png'),
        colors:[
          {color:"藏青色",none:true},
          {color:"麻灰色",none:false}
          ],
        price:"78",
        r_price:"69"
      },
      size:"请选择规格属性"
    }
  },
  created() {
    this.sum = this.swipe.length
    Headers.props.title.default = this.title
    Headers.props.rightText.default = this.rightText
    Headers.props.rightIcon.default = this.rightIcon
  },
  methods: {
    onChange(index) {
      this.apiece = index + 1
    },
    onSize(){
      this.onTip=true
    },
    onCancel(){
      this.onTip=false
    },
    onChice(con,index){
      //console.log(con)
      this.Isindex=index
      this.size="已选："+con

    },
    reduce(num){
      this.acount-=num
      console.log(this.acount)
      if(this.acount<=1){
        this.acount=1;
        Toast('数量最少为1');
      }
    },
    onInput(val){
      console.log(val)
      this.acount=val
    },
    add(num){
      var really=Number(this.acount)
      this.acount=really
      this.acount+=num
    },
    onLink(){
      this.$router.push({
        path:"/store/change_pay"
      })
    }
  }

}
</script>
<style scoped>
  .size_box{
    position: fixed;
    top:0;
    left:0;
    background: rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
  }
  .size{
    position: fixed;
    bottom:40px;
    width: 100%;
    background: #fff;
    padding: 16px;
    box-sizing: border-box;
  }
  .size_top{
    display: flex;
  }
  .pro_img{
    max-width: 78px;
    max-height: 78px;
    margin-right: 4px;
    float: left;
  }
  .flex_box{
    width: 100%;
  }
  .icon-round_close_light{
    width: 100%;
    display: block;
    text-align: right;
    font-size: 24px;
    color: #BEBEBE;
  }
  .size_price{
    color: #EE722E;
    font-size: 12px;
    margin-bottom: 4px;
    margin-top: 26px;
  }
  .size_price u{
    font-size:10px;
    color: #929292;
    text-decoration: line-through;
  }
  .other{
    font-size: 12px;
    color: #707070;
  }
  .size_bottom h1,
  .size_min h1{
    margin:15px 0 6px 0;
    font-size: 14px;
    color: #707070;
  }
  .size_min p{
    border:1px solid rgba(112,112,112,1);
    border-radius:2px;
    padding:4px 6px;
    color: #707070;
    display: inline-block;
    margin-right: 6px; 
    margin-bottom: 12px;
  }
  .size_min p.active{
    border: 1px solid #EE722E;
    color: #EE722E;
  }
  .bottom_btn{
    position: fixed;
    bottom: 0;
    left: 0;
    background:rgba(238,114,46,1);
    box-shadow:0px 2px 6px rgba(88,0,0,0.16);
    padding:10px 0; 
    width: 100%;
    z-index: 1000;
    font-size:20px;
    color: #fff;
    text-align: center;
  }
  .size_num{
    display: inline-block;
    border:1px solid #707070;
    border-radius: 2px;
    height: 18px;
    width: 50%;
  }
  .size_num p{
    float: left;
    text-align: center;
    width: 20%;
  }
  .size_num input{
    float: left;
    width: 60%;
    border-left: 1px solid #707070;
    text-align: center;
    box-sizing: border-box;
    border-right: 1px solid #707070;
  }
  .h48{
    width: 100%;
    height:48px;
  }
  .msg{
    width: 100%;
    height: 100%;
  }
  .flex_between{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn{
    border-radius: 50px;
    overflow: hidden;
    width:55%;
    background:#EE722E;
    font-size: 14px;
    color: #fff; 
    text-align: center;
  }
  .btn p{
    width: 50%;
    padding: 10px 0; 
  }
  .btn span{
    display: block;
    padding: 10px 0; 
  }
  .btn p.buy{
    background: #FF4444
  }
  .banner{
    position: relative;
    margin-top: -10px;
  }
  .banner .swipe{
    width: 100%
    height 360px
  }
  .banner .swipe img{
    width: 100%;
    height: 100%;
  }
  .number{
    width: 36px;
    height: 21px;
    background: rgba(0,0,0,0.4);
    border-radius: 11px;
    font-size: 12px;
    color: #fff;
    position: absolute;
    bottom: 20px;
    right: 6px;
    line-height: 21px;
    text-align: center;
  }
  .fn_text_wrap{
    background: #fff;
    padding-left: 16px;
    margin-bottom: 10px;
  }
  .fn_text_wrap li{
    border-top: 1px solid #dfdfdf;
    padding:10px 16px 10px 0;
    color: #EE722E;
    font-size:12px;
  }
  .fn_text_wrap li:first-child{
    border-top: 0
  }
  .fn_text_wrap li .scour{
    font-size: 14px;
    margin-bottom: 10px;
  }
  .fn_text_wrap li .scour u{
    font-size: 10px;
    color: #929292;
    margin-left: 10px;
    text-decoration: line-through;
  }
  .fn_text_wrap li span{
    font-size: 10px;
    color: #929292;
    margin-right: 66px;
  }
  .fn_text_wrap li h1{
    font-size: 14px;
    color: #666;
    margin-bottom: 4px;
  }
  .fn_text_wrap li .txt{
    font-size: 12px;
    color: #929292;
  }
  .fn_text_wrap li.choose{
    font-size: 12px;
    color: #929292
  }
  .fn_text_wrap li.choose i{
    font-size: 14px;
  }
</style>



