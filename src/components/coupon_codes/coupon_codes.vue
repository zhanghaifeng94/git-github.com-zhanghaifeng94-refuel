<template>
    <div class="coupon_codes">
    	<Headers></Headers>
      <ul class="list">
        <li v-for="item in list" :key="item.id" class="flex_between">
          <p>{{item.con}}</p>
          <button type="button" @click="onChange(item.state)" :class="item.state==2?'btn':''">兑换</button>
        </li>
      </ul>
    </div>
</template>

<script>
  import Headers from 'base/header/header'
  export default {
  	name:"coupon_codes",
    components: {
      Headers
    },    
    data () {
        return {
          title: '我的优惠码',
          rightText: '活动规则',
          rightIcon:'',
          rightPath:'',
          list:[
            {con:"JU3564",id:"1",state:1},
            {con:"JU4574",id:"2",state:1},
            {con:"JU3894",id:"3",state:2},
            {con:"JU2356",id:"4",state:2},            
          ]
        }
    },
    methods:{
      onChange(val){
        //console.log(val)
        if(val=="1"){
          //可以跳转
        }else{
          //已经失效
          
        }
      }
    },
    created() {
      Headers.props.title.default = this.title
      Headers.props.rightText.default = this.rightText
      Headers.props.rightIcon.default = this.rightIcon
      Headers.props.rightPath.default = this.rightPath
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .coupon_codes >>> .title .right{
    color:#666
  }
  .list{
    padding-left:16px;
    background:#fff;    
  }
  .list li{
    border-bottom:1px solid #ececec;
    padding:16px 16px 16px 0;
  }
  .flex_between{
    display:flex;
    justify-content:space-between;
    aligns-item:center
  }
  .list li p{
    font-size:14px;
    color:#666;
  }
  .list li button{
    width:44px;
    height:18px;
    border:1px solid rgba(190,190,190,1);
    border-radius:11px;
    font-size:10px;
    background:#fff;
    color:#bebebe;
  }
  .list li button.btn{
    border:1px solid #dfdfdf;
    color:#dfdfdf
  }
</style>
