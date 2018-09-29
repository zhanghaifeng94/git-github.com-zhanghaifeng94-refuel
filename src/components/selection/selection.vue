<template>
    <div class="selection">
    	<Headers></Headers>
      <div class="con">
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
      >
        <router-link to="/store/selection_detail" v-for="(item,index) in con" :key="item.id" class="list">
          <img :src="item.img" alt="">
          <p>{{item.title}}</p>
          <span>{{item.nav_title}}</span>
        </router-link> 
      </van-list>       
      </div>
    </div>
</template>

<script>
  import Headers from 'base/header/header'
  export default {
  	name:"selection",
    components: {
      Headers
    },    
    data () {
        return {
          title: '专题精选',
          rightText: '',
          rightIcon:'',
          con:[
            {id:1,title:"颈枕眼罩二合一，国庆出行睡眠神器",nav_title:"带帽多功能颈枕",img:require('common/image/store6.png')},
            {id:2,title:"颈枕眼罩二合一，国庆出行睡眠神器",nav_title:"带帽多功能颈枕",img:require('common/image/store6.png')},
            {id:3,title:"颈枕眼罩二合一，国庆出行睡眠神器",nav_title:"带帽多功能颈枕",img:require('common/image/store6.png')}         
          ],
          loading: false,
          finished: false
        }
      },
      created() {
        Headers.props.title.default = this.title
        Headers.props.rightText.default = this.rightText
        Headers.props.rightIcon.default = this.rightIcon
      },
      methods:{
        onLoad() {
          // 异步更新数据
          setTimeout(() => {
            let aa = {
              img: require('common/image/store6.png'),
              title: '带帽式多功能肩枕',
              nav_title:"带帽多功能颈枕"
            }
            for (let i = 0; i < 10; i++) {
              this.con.push(aa)
            }
            // 加载状态结束
            this.loading = false

            // 数据全部加载完成
            if (this.con.length >= 20) {
              this.finished = true
            }
          }, 500)
        }
      }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .con{
    background:#fff;
    padding:15px 0;
  }
  .list{
    box-shadow: 0px 2px 6px rgba(88,0,0,0.16);
    width:92%;
    margin:0 auto 10px auto;
    padding-bottom:15px;
    display:block;
  }
  .list img{
    width:100%;
    height:100%;
  }
  .list p{
    font-size:14px;
    color:#666;
    margin:8px 15px 5px 15px;
  }
  .list span{
    font-size:12px;
    color:#929292;
    margin:0 15px;
  }
</style>