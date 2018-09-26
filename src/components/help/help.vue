<template>
    <div class="help">
      <headers></headers>
      <h1>常见问题</h1>
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item v-for="item in list" :key="item.id" :title="item.title" :name="item.id">
         {{item.info}}
        </van-collapse-item>
      </van-collapse>
      <h1>服务信息</h1>
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item v-for="item in list" :key="item.id" :title="item.title" :name="item.id">
          {{item.info}}
        </van-collapse-item>
      </van-collapse>
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
      title: '帮助',
      activeName: '1',
      list: [{
        id: '1',
        title: '问题1',
        info: '阿斯顿阿斯顿'
      }, {
        id: '2',
        title: '问题1',
        info: '阿斯顿阿斯顿'
      }, {
        id: '3',
        title: '问题1',
        info: '阿斯顿阿斯顿'
      }]
    }
  },
  created() {
    Headers.props.title.default = this.title
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .help
    h1
      padding 10px 16px
      font-size 20px
      color: #666666
      border-bottom 1px solid #DFDFDF
    .van-collapse
      margin-bottom 20px

</style>
