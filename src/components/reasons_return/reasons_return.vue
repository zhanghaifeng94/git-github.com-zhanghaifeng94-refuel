<template>
    <div class="reasons_return">
      <mt-header :title="title" class="title">
          <mt-button @click="go_back()" slot="left">
            <i class="iconfont icon-back"></i>
          </mt-button>
          <router-link to="" slot="right" class="right">退换货政策</router-link>
      </mt-header>

      <ul class="flex_between nav_box">
        <li v-for="(item,index) in nav" :class="item.id==state?'active':''" :key="index" class="">{{item.title}}</li>
      </ul>
      
      <div class="boxes">
        <ul class="box">
          <li class="product">
            <div class="flex_between min">
              <div class="flex">
                <img :src="apply.img" alt="">
                <div>
                  <p class="name">{{apply.title}}</p>
                  <span>{{apply.color}}</span>
                  <p class="price">￥{{apply.price}}</p>
                </div>            
              </div>
              <p class="tip">x{{apply.acount}}</p>
            </div>
          </li>
        </ul>
        <div class="select flex_between">
          <span>{{reason}}</span>
          <i class="iconfont icon-unfold"></i>
        </div>
        <van-cell-group>
          <van-field  0
            v-model="message"
            type="textarea"
            placeholder="请输入留言"
            rows="6"
            autosize
          />
        </van-cell-group>
      </div>
        
      
      <div class="tip_box">
        
      </div>

    </div>
</template>

<script>
export default {
  name:'reasons_return',
  components: {
    
  },
  data() {
    return {
        title:"填写退货信息", 
        reason:"请选择原因",
        state:0,
         apply:{time:"2018.09.26 09:23",num:"654254542656",card_num:"12564235",type:"退款",img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"156.00",r_price:"156.00",type_num:"1",acount:"2",reason:"其他",description:"我想退货退款我想退货退款我想退货退款"},
        nav:[
          {title:"提交申请",id:"0"},
          {title:"客服受理",id:"1"},
          {title:"寄回退货",id:"2"},
          {title:"收到物品",id:"3"},
          {title:"完成退款",id:"4"},
          ],
    }
  },
  methods:{
    go_back() {
      this.$router.back(-1)
    },
    getParams () {
      // 取到路由带过来的参数
      this.type_id = this.$route.params.type_id
      if(this.type_id=="1"){
        this.title="填写退货信息"
      }else if(this.type_id=="2"){
        this.title="填写换货信息"
      }else{
        this.title="填写拒收信息"
      }
    }
  },
  created() {
    this.getParams()
  },
  watch:{
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    '$route': 'getParams'
  }
}
</script>

<style scoped>
  .reasons_return >>> .right{
    color:#666;
    font-size:12px;
  }
  .reasons_return >>> .title{
    height: 48px;
    background: #fff;
    color: #666666;
    font-size: 20px;
    padding: 0 16px;
    box-sizing:border-box;
    margin-bottom: 10px;
  }
  .reasons_return >>> .iconfont{
    font-size:20px;
  }
  .flex_between{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav_box{
    background: #fff;
    margin-top: -9px;
    padding:0 16px;
  }
  .nav_box li{
    font-size: 10px;
    color: #666;
    padding: 12px 0;
    width: 20%;
    text-align: center;
  }
  .nav_box li.active{
    color:#fff;
    background: url(../../common/image/active.png);
    background-size: 100%;
  }
  .product{
    background:#fff;
    margin-top:10px;
    padding: 10px 0 10px 0;
    clear: both;
    overflow: hidden;
  }
  .product .name{
    font-size:12px;
    color:#666;
  }
  .product img{
    width:60px;
    height:60px;
    margin-right:15px;
  }
  .product span{
    font-size:10px;
    color:#929292;
    display:block;
    margin:4px 0 20px 0;
  }
  .price{
    font-size:12px;
    color:#929292
  }
  .flex_between{
    display:flex;
    justify-content:space-between;
    align-items:center
  }
  .flex{
    display:flex;
  }
  .tip{
    color: #666;
    font-size: 12px;
  }
  .boxes{
    background: #fff;
    padding: 0 16px;
  }
  .select{
    border:1px solid #DFDFDF;
    width: 100%;
    padding: 10px;
    border-radius: 2px;
    font-size: 12px;
    color: #dfdfdf;
    box-sizing: border-box;
  }
  .select i{
    font-size: 14px;
    color: #bebebe;
  }


</style>