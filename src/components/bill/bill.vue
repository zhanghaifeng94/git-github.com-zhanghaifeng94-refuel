<template>
    <div class="recharge_record">
      <headers></headers>
      
      <ul class="nav flex_around">
        <li v-for="(item,index) in nav" :key="index" :class="index==ISindex?'active':''" @click="onTab(index,item)">{{item.name}}</li>
      </ul>

      <div class="list" v-for="(bill,index) in bills" :key="index">
        <h1 class="title">{{bill.month}}</h1>
        <p class="nav_title"  v-if="ISindex==0">充值支出 ￥{{bill.use}}&nbsp;&nbsp;&nbsp;加油支出 ￥{{bill.shouru}}&nbsp;&nbsp;&nbsp;充值优惠 ￥{{bill.discound}}</p>
        <p class="nav_title"  v-if="ISindex==1">积分收入{{bill.use}}积分&nbsp;&nbsp;&nbsp;积分支出{{bill.shouru}}积分</p>
        <div v-for="(item,index) in bill.list" :key="index" class="con">
          <span class="photo">
            <i class="iconfont icon-AK-LYhuiyuanqia" v-if="ISindex==0"></i>
            <i class="iconfont icon-jifen" v-if="ISindex==1"></i>
          </span>
          <div class="con_box">
            <div class="top flex_between">
              <p>{{item.type}}</p>
              <p>-{{item.price}}</p>
            </div>
            <div class="bottom flex_between">
              <p>{{item.time}}</p>
              <p>{{item.erea}}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="tip">仅显示一年记录</div>
    </div>
</template>

<script>
import Headers from 'base/header/header'
export default {
  name:'bill',
  components: {
    Headers
  },
  data() {
    return {
      title: '账单',
      rightText: '',
      rightIcon:'',
      ISindex:0,
      nav:[
        {name:"会员卡记录",id:"1"},
        {name:"积分记录",id:"2"},
      ],
      bills:[
        {
          month:"9月",use:"3800",shouru:"0.00",discound:"20.00",
          list:[
            {time:"9-18 12:20",price:"1800",erea:"充值券 -20",type:"会员充值"},
            {time:"9-20 12:20",price:"2000",erea:"交易关闭",type:"加油充值"},
          ]
        },
        {
          month:"10月",use:"4800",shouru:"10.00",discound:"20.00",
          list:[
            {time:"10-18 12:20",price:"1000",erea:"充值券 -20",type:"会员充值"},
            {time:"10-20 12:20",price:"2200",erea:"交易关闭",type:"会员充值"},
          ]
        }
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
  .list{
    margin-bottom:
  }
  .title{
    color:#666;
    font-size:12px;
    margin:10px 0 6px 15px;
  }
  .nav_title{
    margin:0 0 10px 15px;
    color:#666;
    font-size:10px;
  }
  .con{
    background:#fff;
    padding-left:15px;
    display:flex;
    display: -webkit-flex; /* Safari */
    align-items:center;
  }
  .photo{
    width:24px;
    height:24px;
    background:#929292;
    border-radius:100%;
  }
  .photo i{
    color: #fff;
    margin: 4px 4px;
    display: block;
  }
  .con_box{
    border-bottom:1px solid #ececec;
    width:100%;
    padding:10px 15px
  }
  .flex_between{
    display:flex;
    justify-content:space-between
  }
  .top p{
    color:#666;
    font-size:12px;
    margin-bottom:10px;
  }
  .bottom p{
    color:#929292;
    font-size:8px
  }
  .tip{
    color:#929292;
    font-size:10px;
    width:100%;
    text-align:center;
    margin:20px 0 11px;
    
  }
</style>