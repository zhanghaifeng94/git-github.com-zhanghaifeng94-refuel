<template>
    <div class="schedule">
      <headers></headers>

      <ul class="flex_between nav_box">
        <li v-for="(item,index) in nav" :class="item.id==state?'active':''" :key="index" class="">{{item.title}}</li>
      </ul>
      
      <div class="box">
        <div class="line">
          <div class="one">
            <p>2018.09.26 09:23</p>
            <h1>申请已提交，等待客服受理，通常需要1-2工作日</h1>
          </div>  
          
          <!--退款进度-->
          <div>
            <div class="apply">
              <img src="../../common/image/12-1.png">
              <div class="apply_box">
                <div class="apply_msg">
                  <p>2018.09.26 09:23</p>
                  <h1>申请已提交，等待客服受理，通常需要1-2工作日</h1>
                </div>
                <div class="apply_msg">
                  <h1>收货人：{{address.name}}</h1>
                  <h1>电&nbsp;话：{{address.phone}}</h1>
                  <h1>地&nbsp;址：{{address.ads}}</h1>
                </div>
                <div class="wuliu">
                  <h1>物流信息</h1>
                  <div class="form" v-if="show">
                    <input type="text" name="" placeholder="快递公司名称" @input="input()" v-model="all.companey">
                    <input type="text" name="" placeholder="退货快递单号" @input="input()" v-model="all.num">
                    <input type="submit" name="" value="提交" class="btn" :class="btn_show?'active':''" @click="onSubmit(all.companey,all.num)">
                  </div>
                  <div v-if="!show">
                    <p>快递公司：{{shop_msg.companey}}</p>
                    <p>快递单号：{{shop_msg.num}}</p>                    
                  </div>
                </div>                
              </div>
            </div>

            <div class="one">
              <p>2018.09.28 09:23</p>
              <h1>取消申请</h1>
            </div>  

            <div class="one">
              <p>2018.09.28 09:23</p>
              <h1>商品已到达，正在验收</h1>
            </div>  
            
            <!--产品损坏，退回-->
            <div class="apply">
              <div class="apply_box">
                <div class="apply_msg">
                  <p>2018.09.26 09:23</p>
                  <h1>已验收，请与客服联系</h1>
                </div>
                <div class="apply_msg">
                  <p>因商品人为损坏，请与客服联系</p>
                </div>
                <div class="return_msg">
                  <h1>物流信息</h1>
                  <p>快递公司：{{shop_msg.companey}}</p>
                  <p>快递单号：{{shop_msg.num}}</p>
                </div> 
              </div>
            </div>            

            <!--成功退货-->
            <div class="one">
              <p>2018.09.28 09:23</p>
              <h1>已验收，退款完成</h1>
            </div> 
          </div>


          <!--拒收进度-->
          <div>
            <div class="one">
              <p>2018.09.28 09:23</p>
              <h1>申请通过，请不要签收商品</h1>
            </div>   

            <div class="one">
              <p>2018.09.28 09:23</p>
              <h1>商品已退回，退款完成</h1>
            </div>             
          </div>      
        </div>

      </div>
    </div>
</template>

<script>
import Headers from 'base/header/header'
import { Toast } from 'vant';
export default {
  name:'schedule',
  components: {
    Headers
  },
  data() {
    return {
        title:"进度", 
        state:"",
        rightIcon:'',
        rightPath:"/user/apply_list",
        show:true,
        btn_show:false,
        all:{
          companey:"",
          num:""
        },
        rightText: '查看/取消申请',
        lists:{img:require('common/image/12.png'),title:"带帽式多动能颈枕",color:"藏青色","price":"78",num:"6523158"},
        nav:[
          {title:"提交申请",id:"0"},
          {title:"客服受理",id:"1"},
          {title:"寄回退货",id:"2"},
          {title:"收到物品",id:"3"},
          {title:"完成退款",id:"4"},
          ],
        address:{name:"M50e",phone:"13026459652",ads:"湖北省武汉市洪山区鲁巷"},
        shop_msg:{companey:"韵达快递",num:"665524489652136548"}
    }
  },
  methods:{
    go_back() {
      this.$router.back(-1)
    },
    getParams () {
      // 取到路由带过来的参数
      this.state = this.$route.params.state
      console.log(this.state)
    },
    input() {
      var vm=this
      if (vm.all.companey !== '' && vm.all.num !== '')  {
        vm.btn_show = true
      } else {
        vm.btn_show = false
      }
    },
    onSubmit(com,val){
      var state=this.btn_show;
      if(state==false){
        Toast('请将信息填写完整再点击提交');
      }else{
        console.log(com,val)
        this.shop_msg.companey=com;
        this.shop_msg.num=val;
        this.show=false;
        Toast('提交成功');
      }
    }
  },
  created() {
    var vm=this
    this.getParams()
    vm.input()
    Headers.props.title.default = this.title
    Headers.props.rightIcon.default = this.rightIcon
    Headers.props.rightText.default = this.rightText
    Headers.props.rightPath.default = this.rightPath
  },
  watch:{
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
    '$route': 'getParams'
  }
}
</script>

<style scoped>
.schedule >>> .title .right{
color: #666
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
 .box{
  padding: 0 16px;
 }
 .one{
  position: relative;
  padding:10px;
  background: #fff;
  border-radius: 2px;
  font-size: 10px;
  color: #929292;
  margin-top:10px;
 }
 .one h1{
  font-size: 12px;
  color: #666;
  margin-top: 5px;
 }
 .apply:before,
 .one:before{
    content:"";
    position: absolute;
    top: 10px;
    left: -12px;
    width: 5px;
    height: 5px;
    border-radius: 100%;
    color: #BE6B6B;
    border: 1px solid #BE6B6B;
    background: #ececec;
    float: left;
 }
 .line{
  border-left: 1px solid #BEBEBE;
  height: auto;
  padding:10px 0 30px 8px; 
 }
 .apply{
  background: #fff;
  margin-top:10px;
  position: relative;
 }
 .apply img{
  display: block;
  width: 100%;
  height: 100%;
 }
 .apply_msg{
  padding:10px 0;
  border-bottom: 1px solid #dfdfdf;
 }
 .apply_msg p{
  font-size: 10px;
  color: #929292;
 }
 .apply_msg h1{
  font-size: 12px;
  color: #666;
  line-height: 20px;
 }
 .return_msg h1,
 .wuliu h1{
  margin:10px 0;
  font-size: 12px;
  color: #666;
 }
 .return_msg p,
 .wuliu p{
  font-size: 12px;
  color: #929292;
  line-height: 20px;
 }
 .wuliu input{
  width: 100%;
  border-radius: 2px;
  padding: 10px;
  font-size: 12px;
  color: #DFDFDF;
  margin-bottom: 10px;
  border:1px solid #DFDFDF;
  box-sizing: border-box;
 }
 .wuliu input.btn{
  border:1px solid #929292;
  color: #929292;
  background: #fff;
 }
 .wuliu input.active{
  background:#EE722E;
  color: #fff; 
  border:0;
 }
 .apply_box{
  padding:10px;
 }

</style>