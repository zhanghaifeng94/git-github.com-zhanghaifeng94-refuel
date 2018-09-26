<template>
    <div class="recharge_progress">
		<headers></headers>
		
		<div class="box">
			<van-steps direction="vertical" :active="1" active-color="#f60">
			  <van-step>
			    <h3>支付成功</h3>
			    <p>该商品由M50站直充</p>
			  </van-step>
			  <van-step>
			    <h3>努力充值中</h3>
			    <p>预计24小时到账，请关注到账通知</p>
			  </van-step>
			  <van-step>
			    <h3>充值到账</h3>
			  </van-step>
			</van-steps>

			<div class="activity">
		        <img src="../../common/image/03.png" alt="">
		    </div>	
		</div>
    </div>
</template>

<script>
  import Headers from 'base/header/header'
export default {
    name:"recharge_progress",
    components: {
      Headers
    },    
    data () {
        return {
          title: '会员充值',
          rightText: '完成',
          rightIcon:'',
          rightPath:'/index/rechange'
        }
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
	.activity img{
		width:90%;
		display:block;
		margin:28px auto;
	}
</style>