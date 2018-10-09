<template>
    <div class="about">
      <headers></headers>
      <div class="box">
        <div class="logo">M50e</div>
        <p class="current">当前版本：{{type}}</p>
        <p class="con">{{about}}</p>
        <div class="bottom">
          <p>Copyright {{time}}</p>
          <p>{{company}}</p>
        </div>        
      </div>
    </div>
</template>

<script>
import Headers from 'base/header/header'
export default {
  name:'about',
  components: {
    Headers
  },
  data() {
    return {
      title: '关于M50e',
      rightText: '',
      rightIcon:'',  
      type:"1.10",    
      about:"M50eapp，为某某公司连锁合作加油站，完成线上充值，线下加油的一体化平台。",
      time:"2018-05-26",
      company:"武汉自由客信息科技有限公司"
    }
  },
  methods:{

  },
  created() {
    Headers.props.title.default = this.title,
    Headers.props.rightIcon.default = this.rightIcon
    Headers.props.rightText.default = this.rightText
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .box{
    border-top:1px solid #ececec;
  }
  .about{
    background:#fff;
    min-height:667px;
  }
  .logo{
    width:60px;
    height:60px;
    background:rgba(238,114,46,1);
    border-radius:10px;
    font-size:14px;
    color:#fff;
    text-align:center;
    line-height:60px;
    margin:30px auto 10px auto;
  }
  .current{
    font-size:10px;
    color:#666;
    padding-bottom:10px;
    border-bottom:1px solid #EE722E;
    margin:0 auto 25px auto;
    width:90px;
    text-align:center
  }
  .con{
    width:292px;
    height:269px;
    font-size:10px;
    line-height:17px;
    color:rgba(102,102,102,1);
    margin:0 auto 30px;
  }
  .bottom{
    position:fixed;
    bottom:15px;
    left:0;
    width:100%;
    color:#dfdfdf;
    text-align:center;
  }
  .bottom p{
    margin-bottom:8px;
    font-size:10px;
  }
</style>