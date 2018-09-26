<template>
    <div class="recharge_record">
      <headers></headers>
      <div class="list">
        <h1 class="title">{{semptember[0].month}}</h1>
        <p class="nav_title">支出 ￥{{semptember[0].use}}  收入 ￥{{semptember[0].shouru}}</p>
        <div v-for="(item,index) in semptember" :key="index" class="con">
          <span class="icon photo"></span>
          <div class="con_box">
            <div class="top flex_between">
              <p>{{item.type}}</p>
              <p>-{{item.price}}</p>
            </div>
            <div class="bottom flex_between">
              <p>{{item.time}}</p>
              <p>-{{item.erea}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="list">
        <h1 class="title">{{oct[0].month}}</h1>
        <p class="nav_title">支出 ￥{{oct[0].use}}  收入 ￥{{oct[0].shouru}}</p>
        <div v-for="(item,index) in oct" :key="index" class="con">
          <span class="icon photo"></span>
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
  name:'recharge_record',
  components: {
    Headers
  },
  data() {
    return {
      title: '会员充值账单',
      rightText: '',
      rightIcon:'',
      semptember:[
        {month:"9月",use:"3800",shouru:"0.00","time":"8-18 12:20","price":"1800",erea:"充值券 -20",type:"会员充值"},
        {month:"9月",use:"3800",shouru:"0.00","time":"8-18 12:20","price":"1800",erea:"交易关闭",type:"会员充值"}
      ],
      oct:[
        {month:"10月",use:"3200",shouru:"0.00","time":"8-18 12:20","price":"1800",erea:"充值券 -20",type:"会员充值"},
        {month:"10月",use:"4100",shouru:"0.00","time":"8-18 12:20","price":"1800",type:"会员充值"}
      ]
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
    background:#ccc;
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