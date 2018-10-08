<template>
    <div class="order">
      <headers></headers>
      <div class="tab">
        <ul>
          <li v-for="(item, index) in tabList" :key="index" @click="tab(item,index)" :class="active == index?'active':''">{{item.name}}</li>
        </ul>
      </div>
      <div class="list">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <router-link :to="'/user/order_details/'+item.id">
              <div class="top">
                <div class="order_number">{{item.order_number}}</div>
                <div v-if="item.type === '1'" class="iconfont icon-delete" @click="order_delete(item)"></div>
              </div>
              <div class="content">
                <div class="img"><img v-lazy="item.img" alt=""></div>
                <div class="info">
                  <div class="name">{{item.name}}</div>
                  <div class="color">{{item.color}}</div>
                  <div class="price">¥ {{item.price}}</div>
                </div>
                <div class="type">{{item.type_text}}</div>
              </div>
              <div class="bottom">
                <span class="btn" v-if="item.type === '1'">再次购买</span>
                <span class="btn" v-if="item.type === '1'">退换/售后</span>
                <span class="btn" v-if="item.type === '2'">提醒发货</span>
                <span class="btn" v-if="item.type === '3'">快递单号</span>
                <span class="btn btn_1" @click="confirm" v-if="item.type === '3'">确认收货</span>
                <span class="btn" v-if="item.type === '4'">去评价</span>
              </div>
              <van-popup class="password" v-model="password">
                <div class="tit">请输入支付密码</div>
                <van-password-input
                  :value="value"
                  @focus="showKeyboard = true"
                />
                <van-number-keyboard
                  :show="showKeyboard"
                  @input="onInput"
                  @delete="onDelete"
                  @blur="showKeyboard = false"
                />
              </van-popup>
            </router-link>
          </li>
        </ul>
        <div class="null" v-if="!list">
          <i class="iconfont icon-dingdan-copy"></i>
          您还没有相关的订单呢
        </div>
      </div>
    </div>
</template>

<script>
import Headers from 'base/header/header'
export default {
  components: {
    Headers
  },
  data() {
    return {
      title: '我的订单',
      password: false,
      value: '',
      showKeyboard: true,
      tabList: [{
        name: '全部',
        type: '0'
      },
      {
        name: '待发货',
        type: '2'
      },
      {
        name: '已发货',
        type: '3'
      },
      {
        name: '待评价',
        type: '4'
      }],
      active: '0',
      list: [{
        name: '带帽日式多功能颈枕',
        color: '藏青色',
        price: '78',
        type: '1',
        id: '1',
        type_text: '交易成功',
        order_number: '12121212',
        img: require('common/image/12.png')
      }, {
        name: '带帽日式多功能颈枕',
        color: '藏青色',
        price: '78',
        type: '2',
        id: '2',
        type_text: '待发货',
        order_number: '12121212',
        img: require('common/image/12.png')
      }, {
        name: '带帽日式多功能颈枕',
        color: '藏青色',
        price: '78',
        type: '3',
        id: '3',
        type_text: '已发货',
        order_number: '12121212',
        img: require('common/image/12.png')
      }, {
        name: '带帽日式多功能颈枕',
        color: '藏青色',
        price: '78',
        type: '4',
        id: '4',
        type_text: '待评价',
        order_number: '12121212',
        img: require('common/image/12.png')
      }]
    }
  },
  created() {
    Headers.props.title.default = this.title
    Headers.props.rightText.default = ''
    Headers.props.rightPath.default = ''
  },
  methods: {
    tab (val, index) {
      this.active = index
    },
    order_delete(val) {
      console.log(val)
    },
    listeach() {
      this.list.forEach(item => {
        console.log(item)
        if (item.type === '1') {
          item.type_text = '交易成功'
        } else if (item.type === '2') {
          item.type_text = '待发货'
        } else if (item.type === '3') {
          item.type_text = '已发货'
        } else if (item.type === '4') {
          item.type_text = '待评价'
        }
      })
    },
    confirm() {
      this.password = true
      this.showKeyboard = true
      this.value = ''
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6)
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1)
    }
  },
  mounted() {
    this.listeach()
  }

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.order
  .tab
    padding 0 16px
    box-sizing border-box
    border-bottom 1px solid #DFDFDF
    background #ffffff
    margin-top -10px
    ul
      display flex
      justify-content space-between
      font-size 14px
      color: #666666
      li
        padding 11px 0
      .active
        color: #be6b6b
        border-bottom 2px solid #be6b6b
  .list
    .null
      text-align center
      color #bebebe
      font-size 12px
      i
        font-size 166px
        color #e0e0e0
        display block
        margin-bottom 15px
        margin-top 160px
    ul
      li
        padding 10px 16px
        box-sizing border-box
        margin-top 10px
        background #ffffff
        .top
          display flex
          justify-content space-between
          padding-bottom 10px
          color #666666
          border-bottom 1px solid #DFDFDF
          font-size 12px
        .content
          display flex
          padding 10px 0
          align-items center
          .img
            width: 60px
            height: 60px
            border-radius 2px
            margin-right 10px
            img
              width: 100%
              height: 100%
          .info
            color: #929292
            font-size 12px
            .name
              color: #666666
              margin-bottom 4px
            .color
              font-size 10px
              margin-bottom 22px
          .type
            margin-left auto
            color: #be6b6b
            font-size 12px
        .bottom
          padding-top 10px
          text-align right
          border-top 1px solid #DFDFDF
          .btn
            display inline-block
            padding 5px 10px
            border 1px solid #929292
            color #929292
            font-size 12px
            border-radius 4px
          .btn_1
            background #FF4444
            color #ffffff
            border none
        .password
          width: 90%
          height: 50%
          border-radius 10px
          .tit
            text-align center
            padding 30px
            color #929292
</style>
