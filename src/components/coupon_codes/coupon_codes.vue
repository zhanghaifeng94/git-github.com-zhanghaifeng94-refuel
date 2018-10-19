<template>
    <div class="coupon_codes">
    	<Headers></Headers>
      <ul class="list">
        <li v-for="item in list" :key="item.id" class="flex_between">
          <p>{{item.code}}</p>
          <button type="button" @click="onChange(item)" :class="item.status=== 2 ?'btn':''">{{item.text}}</button>
        </li>
      </ul>
    </div>
</template>

<script>
  import Headers from 'base/header/header'
  import { Toast } from 'vant';
  export default {
  	name:"coupon_codes",
    components: {
      Headers
    },    
    data () {
        return {
          title: '我的优惠码',
          rightText: '活动规则',
          rightIcon:'',
          rightPath:'/user/rule',
          list:[
            {con:"JU3564",id:"1",state:1},
            {con:"JU4574",id:"2",state:1},
            {con:"JU3894",id:"3",state:2},
            {con:"JU2356",id:"4",state:2},            
          ]
        }
    },
    methods: {
    onChange(val) {
      console.log(val);
      if (val.status === 1) {
        sessionStorage.setItem('codes', JSON.stringify(val))
        this.$router.push({
          path: `/index/coupon`
        })
      }
    },
    couponCode() {
      let vm = this
      API.couponCode().then(result => {
        console.log(result)
        if (result.status === 1000) {
          vm.list = []
          result.data.forEach(item => {
            if(item.status === 1){
              item.text = '兑换'
            }else if(item.status === 2){
              item.text = '已兑换'
            }
            vm.list.push(item)
          })
        }
      })
    }
  },
  mounted() {
    this.couponCode()
  },
  created() {
    Headers.props.title.default = this.title
    Headers.props.rightText.default = this.rightText
    Headers.props.rightIcon.default = this.rightIcon
    Headers.props.rightPath.default = this.rightPath
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .coupon_codes >>> .title .right{
    color:#666
  }
  .list{
    padding-left:16px;
    background:#fff;
  }
  .list li{
    border-bottom:1px solid #ececec;
    padding:16px 16px 16px 0;
  }
  .flex_between{
    display:flex;
    justify-content:space-between;
    aligns-item:center
  }
  .list li p{
    font-size:14px;
    color:#666;
  }
  .list li button{
    width:44px;
    height:18px;
    border:1px solid rgba(190,190,190,1);
    border-radius:11px;
    font-size:10px;
    background:#fff;
    color:#bebebe;
  }
  .list li button.btn{
    border:1px solid #dfdfdf;
    color:#dfdfdf
  }
</style>
