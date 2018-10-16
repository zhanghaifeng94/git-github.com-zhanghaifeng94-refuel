<template>
    <div class="quick_pay">
    	<Headers></Headers>     
      <div class="top">
        <p class="top_shop">商户</p>
        <p>{{station}}</p>
      </div>
      <div class="min_box">
        <h1>M50e</h1>
        <card></card>
        <input type="number" name="" placeholder="输入金额" v-model="val" class="min_input">
      </div>
      <input type="submit" name="" value="确认" class="pay_btn" @click="onTrue()">

      <!--支付弹窗-->
      <div class="tip_box" v-if="tip_status">
        <i class="iconfont icon-roundclose cancle" @click="onCancle()"></i>
        <div class="box tip">
          <h1>M50e会员</h1>
          <card v-if="show"></card>
          <div v-if="pay_status">
            <div class="tip_msg">
              <p>商户：{{station}}</p>
              <p>支付：-{{val}}元</p>
            </div>
            <!-- 密码输入框 -->
            <van-password-input
              :value="value"
              info="密码为 6 位数字"
              @focus="onFocus"
            />
            <!-- 数字键盘 -->
            <van-number-keyboard
              :show="showKeyboard"
              @input="onInput"
              @delete="onDelete"
              @blur="onBlur"
            />
          </div>
          <div class="pay_box" v-if="!pay_status">
            <span>已支付：</span>
            <h2>-{{val}}元</h2>
            <input type="submit" name="" value="完成" @click="onSubmit()">
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import Headers from 'base/header/header'
  import Card from 'base/card/card'
  import { Toast } from 'vant';
  export default {
  	name:"quick_pay",
    components: {
      Headers,
      Card
    },    
    data () {
        return {
          title: '支付',
          rightText: '更改站点',
          rightIcon:'/refuel/change_station', 
          station:"光谷鲁巷加油站",
          val:"",
          value:"",
          showKeyboard: false,
          show:true,
          pay_status:true,
          tip_status:false 
        }
      },
      methods:{
        onTrue(){
          if(this.val==""){
            Toast('请输入金额');
          }else{
            this.tip_status=true
          }
        },
        onFocus(){
          this.showKeyboard=true;
          this.show=false;
        },
        onBlur(){
          this.showKeyboard=false;
          this.show=true;
        },
        onInput(key) {
          //console.log(this.value + key)
          var length=this.value + key
          console.log(length.length)
            this.value = (this.value + key).slice(0, 6);
            if(length.length==6){
              this.pay_status=false;
              this.show=true;
            }
        },
        onDelete() {
          this.value = this.value.slice(0, this.value.length - 1);
        },
        onSubmit(){

        },
        onCancle(){
          this.$dialog.confirm({
            title: '加油订单',
            message: 'M50e会员您确定要放弃支付么？'
          }).then(() => {
            // on confirm
            this.tip_status=false
            this.$router.push({name:'index'})
          }).catch(() => {
            // on cancel
          });
        }
      },
      created() {
        Headers.props.title.default = this.title
        Headers.props.rightText.default = this.rightText
        Headers.props.rightIcon.default = this.rightIcon
      }
  }
</script>

<style scoped>
 .quick_pay >>> .title .right{
  color: #666;
 }
 .top{
  position: relative;
  top:0;
  left: 4%;
  width: 92%;
  background:url(../../common/image/card_bg.png) no-repeat;
  background-size:100%;
  min-height: 130px;
 }
 .top p{
  font-size: 14px;
  color: #fff;
  width: 100%;
  text-align: center;
 }
 .top_shop{
  padding:20px 0 28px 0;
 }
 .min_box{
  width: 92%;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
 }
 .min_box h1{
  font-size: 14px;
  color: #666;
  padding-bottom: 10px;
  border-bottom: 1px solid #DFDFDF;
  width: 100px;
  text-align: center;
  margin:0 auto 20px auto;
 }
 .min_input{
  border:1px solid rgba(34,158,197,1);
  border-radius:20px;
  width: 100%;
  padding:13px 14px;
  color: #BEBEBE;
  font-size: 14px;
  box-sizing: border-box;
  margin-top: 10px;
 }
 .pay_btn{
  background:rgba(238,114,46,1);
  box-shadow:0px 2px 6px rgba(88,0,0,0.16);
  border-radius: 4px;
  color: #fff;
  padding:10px 0;
  font-size: 20px;
  width: 92%;
  display: block;
  margin:50px auto;
 }

 /*支付弹窗*/
  .box{
    background:#fff;
    width:90%;
    margin:72px auto 116px auto;
    padding:10px 0 50px;
  }
  .box h1{
    font-size:14px;
    padding:10px;
    border-bottom:1px solid #ccc;
    width:100px;
    margin:0 auto;
    text-align:center;
    color:#666;
  }
  .tip_box{
    position:fixed;
    top:0;
    left:0;
    background:rgba(0,0,0,0.5);
    width:100%;
    height:100%;
  }
  .cancle{
    color:#fff;
    float:right;
    margin:16px 16px 0 0
  }
  .tip{
    margin:84px auto 0 auto;
    border-radius:4px;
    padding:20px;
    box-sizing:border-box;
  }
  .tip h1{
    margin-bottom:10px;
  }
  .tip_msg{
    margin:20px 0 32px 0;
  }
  .tip_msg p{
    font-size:14px;
    color:#666;
    text-align:left;
    margin-top:10px;
  }
  .pay_box{
    margin-top:20px;
  }
  .pay_box span{
    font-size:14px;
    color:#666;
  }
  .pay_box h2{
    font-size:20px;
    color:#666;
    margin:0 0 36px 0;
    width:100%;
    text-align:center;
    font-weight:nomal;
  }
  .pay_box input{
    background:#EE722E;
    border-radius:20px;
    padding:10px 0;
    font-size:20px;
    color:#fff;
    width:100%;
  }
 /*手机适配*/ 
  @media (max-width:375px) {
    .top{
      min-height:115px;
    }
  }
  @media (max-width:320px) {
    .top{
      min-height:100px;
    }
  }

</style>
