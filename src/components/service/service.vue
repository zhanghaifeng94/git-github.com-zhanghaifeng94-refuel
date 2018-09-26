<template>
  <div class="service">
    <headers></headers>
    <div class="centent">
      <div class="welcome box">
        <div class="portrait"></div>
        <div class="public">尊贵的M50e会员，欢迎您的来访</div>
      </div>
      <div class="common box">
        <div class="portrait"></div>
        <div class="public">
          <div class="tit">常见问题</div>
          <ul class="list">
            <li v-for="(item,index) in list" :key="index" @click="send(item)">{{item.title}}</li>
          </ul>
        </div>
      </div>
      <div class="box" v-for="(item,index) in record" :key="index" :class="{'box-2': (item.direction === '1')}">
        <div class="portrait"></div>
        <div class="public">{{item.title}}</div>
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
  data () {
    return {
      title: '客服',
      rightIcon: '',
      rightText: '',
      record: [{
        title: '什么时候发货',
        id: '1',
        direction: '1'
      }, {
        title: '明天',
        id: '1',
        direction: '2'
      }],
      list: [{
        title: '什么时候发货',
        id: '1'
      }, {
        title: '如何取消订单',
        id: '2'
      }, {
        title: '退货如何办理',
        id: '3'
      }, {
        title: '退货发什么快递',
        id: '4'
      }, {
        title: '在线客服',
        id: '5'
      }]
    }
  },
  created() {
    Headers.props.title.default = this.title
    Headers.props.rightIcon.default = this.rightIcon
    Headers.props.rightText.default = this.rightText
  },
  methods:{
    send(val) {
      console.log(val)
      val.direction = '1'
      this.record.push(val)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .service
    .centent
      padding 20px 16px
      .box
        display flex
        margin-bottom 10px
        .portrait
          width: 36px
          height: 36px
          border-radius 50%
          margin-right 8px
          background: #fff
        .public
          max-width 70%
          background #fff
          color: #929292
          font-size 12px
          padding 12px 12px
          box-shadow 0px 1px 2px rgba(0,0,0,0.16)
          border-radius 4px
          box-sizing border-box
          .tit
            border-bottom 1px solid #DFDFDF
            padding-bottom 12px
            margin-bottom 10px
          .list
            li
              margin-bottom 10px
              color: #766bdb
      .common
        .public
          width: 70%
      .box-2
        justify-content: flex-end
        .portrait
          order: 1
          margin-right 0
          margin-left 8px
        .public
          color #ffffff
          background-color #766BDB

</style>
