<template>
    <div class="commodity">
      <headers></headers>
      <div class="banner"><img :src="banner" alt=""></div>
      <div class="tab">
        <ul>
          <li v-for="(item, index) in tabList" :key="index" @click="tab(item,index)" :class="active == index?'active':''">{{item.name}}</li>
        </ul>
      </div>
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
        class="list"
      >
        <ul class="clearfix">
          <li v-for="(item,index) in list" :key="index">
            <router-link to="">
              <div class="pic"><img v-lazy="item.img" alt=""></div>
              <div class="info">
                <div class="limit" v-if="item.limit">{{item.limit}}</div>
                <div class="title">{{item.title}}</div>
                <div class="price">¥ {{item.price}}</div>
              </div>
            </router-link>
          </li>
        </ul>
      </van-list>
    </div>
</template>

<script>
import Headers from 'base/header/header'
import API from 'api/api'
export default {
  components: {
    Headers
  },
  data() {
    return {
      title: 'M50自有商品',
      banner: require('common/image/shop_banner.png'),
      tabList: [{
        name: '编辑推荐',
        type: '1'
      },
      {
        name: '美食',
        type: '2'
      },
      {
        name: '好物',
        type: '3'
      },
      {
        name: '热销',
        type: '4'
      }],
      active: '0',
      list: [{
        img: require('common/image/store7.png'),
        id: '1',
        title: '带帽式多功能肩枕',
        limit: '限时特价',
        price: 66
      }, {
        img: require('common/image/store7.png'),
        id: '2',
        title: '带帽式多功能肩枕',
        price: 66
      }, {
        img: require('common/image/store7.png'),
        id: '3',
        title: '带帽式多功能肩枕',
        limit: '限时特价',
        price: 66
      }, {
        img: require('common/image/store7.png'),
        id: '4',
        title: '带帽式多功能肩枕',
        price: 66
      }],
      loading: false,
      finished: false
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
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        let aa = {
          img: require('common/image/store7.png'),
          title: '带帽式多功能肩枕',
          price: 66
        }
        for (let i = 0; i < 10; i++) {
          this.list.push(aa)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 100) {
          this.finished = true
        }
      }, 500)
    }
  },
  mounted() {

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .commodity
    background #ffffff
    .banner
      width: 100%
      height: 140px
      img
        width: 100%
        height: 100%
    .tab
      padding 11px 16px
      box-sizing border-box
      border-bottom 1px solid #DFDFDF
      ul
        display flex
        justify-content space-between
        font-size 14px
        color: #666666
        .active
          color: #be6b6b
    .list
      padding 10px 16px
      box-sizing border-box
      ul
        li
          float: left
          width: 48%
          min-height 215px
          margin-right 10px
          margin-bottom 10px
          background rgba(252,252,252,1)
          border-radius 4px
          box-shadow 0 1px 4px rgba(0,0,0,0.16);
          .pic
            width 100%
            img
              width: 100%
          .info
            padding 6px 10px
            font-size 12px
            .limit
              padding 4px
              background #FF4848
              border-radius 1px
              box-sizing border-box
              margin-bottom 4px
              display inline-block
              color: #ffffff
              font-size 8px
            .title
                color: #666666
                margin-bottom 4px
                display: -webkit-box
                -webkit-box-orient: vertical
                -webkit-line-clamp: 2
                overflow: hidden
            .price
              color: #ee722e
        li:nth-child(2n)
          margin-right 0


</style>
