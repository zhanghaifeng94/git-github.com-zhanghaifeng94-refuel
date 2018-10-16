<template>
    <div class="coupon">
      <headers></headers>

    <div class="nav_box">
      <!--<div class="search">-->
        <!--<input type="text" placeholder="请输入优惠券码">-->
        <!--<button type="button">兑换</button>-->
      <!--</div>-->
      <mt-navbar v-model="selected" class="nav flex_between">
          <mt-tab-item id="0">未领取</mt-tab-item>
          <mt-tab-item id="1">已领取</mt-tab-item>
          <mt-tab-item id="2">已失效</mt-tab-item>
      </mt-navbar>
    </div>
      <mt-tab-container v-model="selected" class="con">
          <mt-tab-container-item id="0">
          <div class="nav_list" v-for="(item,index) in coupon_list" :key="item.id" :class="item.active">
            <div class="left_list">
              {{item.denominations/100}}<span>元</span>
            </div>
            <div class="min_list">
              <p>{{item.types}}</p>
              <p>每满{{item.originCondition/100}}元减{{item.denominations/100}}元券</p>
              <p>{{item.startAt}}-{{item.endAt}}</p>
            </div>
            <div class="right_list">
              <div to="" class="use" @click="draw(item.id)">领取</div>
            </div>
          </div>
            <div v-if="coupon_list.length === 0" style="text-align: center;margin-top: 20px">暂无优惠券</div>
        </mt-tab-container-item>
        <mt-tab-container-item id="1">
          <div class="nav_list" v-for="(item,index) in coupon_list" :key="item.id" :class="item.active">
            <div class="left_list">
              {{item.denominations/100}}<span>元</span>
            </div>
            <div class="min_list">
              <p>{{item.types}}</p>
              <p>每满{{item.originCondition/100}}元减{{item.denominations/100}}元券</p>
              <p>{{item.startAt}}-{{item.endAt}}</p>
            </div>
            <div class="right_list">
              <router-link :to="item.type === 1 ? '/index/recharge' : '/store'" class="use">使用</router-link>
            </div>

          </div>
          <div v-if="coupon_list.length === 0" style="text-align: center;margin-top: 20px">暂无优惠券</div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <div class="nav_list shixiao" v-for="(item,index) in coupon_list" :key="item.id">
            <div class="left_list">
              {{item.denominations/100}}<span>元</span>
            </div>
            <div class="min_list">
              <p>{{item.types}}</p>
              <p>每满{{item.originCondition/100}}元减{{item.denominations/100}}元券</p>
              <p>{{item.startAt}}-{{item.endAt}}</p>
            </div>
            <div class="right_list">
              <i class="iconfont icon-yishixiao"></i>
            </div>
          </div>
          <div v-if="coupon_list.length === 0" style="text-align: center;margin-top: 20px">暂无优惠券</div>
        </mt-tab-container-item>
    </mt-tab-container>
    </div>
</template>

<script>
import Headers from 'base/header/header'
import { Toast } from 'vant'
import API from 'api/api'
export default {
  name: 'coupon',
  components: {
    Headers
  },
  data () {
    return {
      selected: '0',
      title: '优惠券',
      rightText: '',
      rightIcon: '',
      coupon_list: [
        // {price: '20', 'type': '商场专用', 'description': '每满1000元减10元券', time: '2018.08.19-2018.09.25', path: '/index/shop', active: ''},
        // {price: '30', 'type': '充值专用', 'description': '每满1000元减10元券', time: '2018.08.19-2018.09.25', path: '/index/recharge', active: 'blue'},
        // {price: '50', 'type': '充值专用', 'description': '每满1000元减10元券', time: '2018.08.19-2018.09.25', path: '/index/recharge', active: 'blue'},
        // {price: '10', 'type': '商场专用', 'description': '每满1000元减10元券', time: '2018.08.19-2018.09.25', path: '/index/shop', active: ''}
      ],
      nulls: true
    }
  },
  watch: {
    selected: function (val, oldVal) {
      console.log(val)
      // click后打印出当前mt-tab-item的id
      this.couponList(val)
    }
  },
  created() {
    Headers.props.title.default = this.title
    Headers.props.rightText.default = this.rightText
    Headers.props.rightIcon.default = this.rightIcon
  },
  methods: {
    couponList(val) {
      let params = 'status=' + val
      let vm = this
      API.coupon(params).then(result => {
        if (result.status === 1000) {
          vm.coupon_list = []
          result.data.forEach(item => {
            item.startAt = item.startAt.split(' ')[0]
            item.endAt = item.endAt.split(' ')[0]
            if (item.type === 1) {
              item.types = '充值专用'
              item.active = 'blue'
            } else if (item.type === 2) {
              item.types = '商场专用'
            }
            vm.coupon_list.push(item)
          })
        }
      })
    },
    draw(id) {
      let params = 'couponId=' + id
      console.log(typeof String(params))
      API.pullCopon(String(params)).then(result => {
        console.log(result)
        if(result.status === 1000){
          Toast('领取成功')
          this.couponList(0)
        }
      })
    }
  },
  mounted() {
    this.couponList(0)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .search{
    border-bottom:2px solid #ececec;
    padding:6px 16px;
  }
  .search input{
    height:24px;
    font-size:7px;
    color:#BEBEBE;
    border:1px solid #BEBEBE;
    border-radius:3px;
    padding-left:8px;
    width:70%;
  }
  .search button{
    float:right;
    background:#c9c9c9;
    font-size:7px;
    padding:7px 13px;
    border:0;
    color:#fff;
    border-radius:3px;
  }
  .con{
    padding: 20px 16px 0 16px;
  }
  .con .mint-tab-container-wrap{
    display: block;
    backgound:red;
  }

  .msg_header{
    height:48px;
    background:#fff;
    color:#666;
    border-bottom:1px solid #dfdfdf;
    font-size:20px;
  }
  .nav_box{
    background:#fff;
    margin-top: -8px;
  }
  .nav{
    height:36px;
    width:60%;
    margin:0 auto
  }
  .nav .mint-tab-item{
    padding:0;
    padding:13px 0;
    font-size:14px;
  }
  .nav.mint-navbar .mint-tab-item.is-selected{
    color:#be6b6b;
    border-bottom:1px solid #be6b6b;
    margin-bottom:0;
  }
  .nav .mint-tab-item{
    flex:none;
    -webkit-box-flex:none;
    -ms-box-flex:none
  }
  .flex_between{
    display:flex;
    justify-content:space-between
  }
  @media screen and (min-width:320px) and (max-width:374px){
    .nav_list{
      padding 20px 10px 10px 0 !important
    .left_list{
      width: 36%;
      font-size 36px
      padding-top 15px
    }
    .right_list{
      margin-left 0
      i{
        font-size 56px !important
      }
    }
    }
  }
  @media screen and (min-width:376px) and (max-width:414px){
    .nav_list{
      padding 42px 26px 13px 0 !important
      .right_list{
        margin-left 30px
        i{
          font-size 60px
        }
      }
    }
  }
  .nav_list{
    background: url("~common/image/q8.png") no-repeat;
    background-size: 100%
    width:100%;
    padding 30px 26px 13px 0
    box-sizing border-box
    display:flex;
    color:#fff;
    margin-bottom 12px
  }
  .nav_list.blue{
    background: url("~common/image/q6.png") no-repeat;
    background-size: 100%
  }
  .shixiao.nav_list{
    background: url("~common/image/q2.png") no-repeat;
    background-size: 100%
  }
  .left_list{
    font-size:40px;
    width: 40%;
    text-align: center;
    padding-top 20px
  }
  .left_list span{
    font-size 14px
  }
  .min_list{
    font-size:12px;
    line-height:22px;
  }
  .right_list{
    margin-left 15px
    align-items:center;
    display:flex;
    i{
      font-size 54px
    }
  }
  .use{
    background:#fff;
    color:#f586a4;
    padding:5px 10px;
    font-size:12px;
    border-radius:30px;
  }
  .ready_use{
    width:74px;
    height:55px;
  }
  .none_msg{
    width:130px;
    height:165px;
    margin:176px auto 0 auto;
    background:#fff
  }
</style>
