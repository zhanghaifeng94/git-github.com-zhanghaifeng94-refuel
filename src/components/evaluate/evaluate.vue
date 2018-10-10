<template>
    <div class="evaluate">
      <headers></headers>
      <div class="box">
        <div class="res">
          <div class="img">
            <img :src="res.img" alt="">
          </div>
          <div class="text">
            <div class="name">{{res.name}}</div>
            <div class="color">{{res.color}}</div>
          </div>
        </div>
        <div class="rate">评分
          <van-rate v-model="value" :size="14" :change="rate(value)"/>
          {{grade}}
        </div>
        <div class="input">
          <textarea name="" id="" placeholder="说说对商品的评价"></textarea>
          <van-uploader :after-read="onRead">
            <div class="file">
              <i class="iconfont icon-camerafill"></i>
            </div>
          </van-uploader>
        </div>
        <div class="btn"><span>提交</span></div>
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
      title: '评价',
      value: 5,
      grade: '非常满意',
      res: {
        name: '带帽日式多功能颈枕',
        color: '藏青色',
        price: '78',
        type: '4',
        id: '4',
        type_text: '已发货',
        order_number: '12121212',
        expressage_number: '987656789765',
        num: '2',
        img: require('common/image/12.png')
      }
    }
  },
  created() {
    Headers.props.title.default = this.title
    Headers.props.rightText.default = ''
    Headers.props.rightPath.default = ''
  },
  methods: {
    rate(e) {
      switch (e) {
        case 1:
          this.grade = '非常差'
          break
        case 2:
          this.grade = '差'
          break
        case 3:
          this.grade = '一般'
          break
        case 4:
          this.grade = '满意'
          break
        case 5:
          this.grade = '非常满意'
          break
      }
    }

  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.evaluate
  .box
    padding 10px 16px
    box-sizing border-box
    background #ffffff
    .res
      display flex
      margin-bottom 9px
      .img
        width 60px
        height 60px
        margin-right 10px
        img
          width: 100%
          height: 100%
      .text
        font-size 12px
        color: #929292
        .name
          color: #666666
          margin-bottom 4px
    .rate
      font-size 12px
      color: #666666
      align-items center
      display flex
      margin-bottom 9px
      .van-rate
        margin 0 8px
    .input
      padding 10px 0
      box-sizing border-box
      border-top 1px solid #DFDFDF
      border-bottom 1px solid #DFDFDF
      margin-bottom 10px
      textarea
        width: 100%
        font-size 12px
        min-height 50px
      .file
        padding 21px 19px
        border 1px solid #BCBCBC
        border-radius:2px;
        i
          color: #bebebe
          font-size 36px
    .btn
      text-align right
      span
        padding 5px 21px
        border-radius:4px;
        border 1px solid #929292
        font-size 12px
        display inline-block
        color: #929292
</style>
