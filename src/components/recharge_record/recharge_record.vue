<template>
    <div class="recharge_record">
      <headers></headers>
      <ul class="flex_around nav">
        <li v-for="(item,index) in nav" :key="index" :class="Isindex==index?'active':''" @click="onTab(index)">{{item.name}}</li>
      </ul>
      
      <ul class="lists">
        <li v-for="(list,index) in lists" :key="index">
          <div class="top flex_between">
            <p>充值编号：{{list.num}}</p>
            <i class="iconfont icon-delete" @click="onCancel(list)"></i>
          </div>
          <div class="min flex_between" @click="onDetail(list.id)">
            <div class="flex">
              <p class="icons"><i class="iconfont icon-AK-LYhuiyuanqia"></i></p>
              <div class="msg">
                <p>{{list.price}}元会员充值</p>
                <span v-if="list.reduce!=''">-{{list.reduce}}</span>
                <span>￥{{list.price}}</span>
              </div>
            </div>
            <p class="type">{{list.type_text}}</p>
          </div>
          <div class="bottom flex_between">
            <p>应付：{{list.r_price}}</p>
            <router-link to="/index/recharge" class="agin">再次充值</router-link>
          </div>
        </li>
      </ul>

      <div class="none" v-if="lists.length===0">
        <i class="iconfont icon-dingdan-copy"></i>
        <p>您还没有相关的订单呢</p>
      </div>
    </div>
</template>

<script>
import Headers from 'base/header/header'
import { Dialog } from 'vant'
export default {
  name:'recharge_record',
  components: {
    Headers
  },
  data() {
    return {
      title: '充值订单',
      rightText: '',
      rightIcon:'',
      Isindex:0,
      nav:[
        {name:"全部",type:"1"},
        {name:"已完成",type:"2"},
      ],
      lists:[
        {num:"5625998423",price:"500",reduce:"20",type:"1",type_text:"交易完成",r_price:"480",id:"1"},
        {num:"5625998423",price:"500",reduce:"",type:"1",type_text:"已取消",r_price:"500",id:"2"},
      ]
    }
  },
  methods:{
    onTab(index){
      this.Isindex=index
    },
    onCancel(index){
     Dialog.confirm({
        title: '确定删除此订单？',
        message: ''
      }).then(() => {

      }).catch(() => {

      })
    },
    onDetail(id){
      this.$router.push({
        path: `/index/recharge_detail/${id}`,
      })
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
  .flex_around{
    display:flex;
    justify-content:space-around;
    align-items:center;
  }
  .flex_between{
    display:flex;
    justify-content:space-between;
    align-items:center
  }
  .flex{
    display:flex
  }
  .nav{
    background:#fff;
    margin-top:-10px;
  }
  .nav li{
    padding:11px;
    color:#666;
    font-size:14px;
  }
  .nav li.active{
    color:#BE6B6B;
    border-bottom:1px solid #BE6B6B;
    box-sizing:border-box
  }
  .lists{
    padding:10px 0;
  }
  .lists li{
    background:#fff;
    padding-left:16px;
    margin-bottom:10px;
  }
  .top{
    padding:10px 16px 10px 0;
    font-size:12px;
    color:#666
  }
  .icons{
    background:#E2E2E2;
    padding:7px 5px;
    margin-right:10px;
  }
  .icons i{
    font-size:55px;
    color:#9FB9FF;
  }
  .min{
    padding:10px 16px 10px 0;
    border-top:1px solid #DFDFDF;
    border-bottom:1px solid #DFDFDF
  }
  .msg p{
    font-size:12px;
    color:666;
    margin-bottom:18px;
  }
  .msg span{
    display:block;
    font-size:12px;
    color:#929292;
    line-height:20px;
  }
  .type{
    color:#BE6B6B;
    font-size:12px;
  }
  .bottom{
    padding:10px 16px 10px 0;
  }
  .bottom p{
    font-size:12px;
    color:#666;
  }
  .bottom .agin{
    border:1px solid #929292;
    border-radius:4px;
    padding:5px 10px;
    font-size:12px;
    color:#929292;
  }
  .none i{
    font-size:166px;
    margin:160px auto 20px auto;
    display:block;
    text-align:center;
    color:#E0E0E0
  }
  .none p{
    color:#BEBEBE;
    font-size:12px;
    width:100%;
    text-align:center;
  }


</style>