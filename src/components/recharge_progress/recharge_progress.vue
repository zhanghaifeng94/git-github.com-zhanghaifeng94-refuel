<template>
    <div class="recharge_progress">
		<headers></headers>
		
		<div class="box">
			<div class="top">
				<span class="icon_box"><i class="iconfont icon-zhifu money"></i></span>
				<div class="right">
					<h1 class="title">支付成功</h1>
					<p>该商品由M50站直充</p>
				</div>
			</div>
			<div class="min">
				<span class="icon">...</span>
				<div class="right min_right">
					<h1 class="title">努力充值中</h1>
					<p>预计24小时到账，请关注到账通知</p>
				</div>
			</div>
			<div class="bottom">
				<span class="icon">...</span>
				<div class="bottom_right">
					<h1 class="title">充值到账</h1>
				</div>
			</div>
		</div>


			<div class="activity">
		        <img src="../../common/image/03.png" alt="">
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
	.box{
		padding:46px 0 73px 16px;
		background:#fff;
	}
	.activity img{
		width:90%;
		display:block;
		margin:28px auto;
	}
	.money{
		font-size:40px;
		color:#508FEE;
		z-index:2
	}
	.icon_box{
		z-index: 2;
	    background: #fff;
	    width: 40px;
	    height: 40px;
	}
	.bottom,
	.min,
	.top{
		position: relative;
		display: flex;
	}
	.top{
		height: 75px;
	}
	.min:before,
	.top:before{
		content:"";
		position: absolute;
		border:1px solid #508FEE;
		z-index:1
	}
	.top:before{
		left: 20px;
		height: 75px;
	}
	.min:before{
		left: 10px;
		height: 35px;
	}
	.icon{
      float: left;
      width: 40px;
      height:40px;
      background: #508FEE;
      border-radius: 100%;
      color:#fff;
      text-align:center;
      line-height:11px;
	}
	.right{
		margin-left: 20px;
	}
	.title{
		font-size: 20px;
		color:#666;
		font-weight: normal;
		margin:0 0 3px 0;
	}
	.right p{
		margin:0;
	}
	.bottom,
	.min{
		margin-left: 10px;
		position: relative;
	}
	.min{
		height: 50px
	}
	.min span{
      float: left;
      width: 20px;
      height:20px;
      background: #508FEE;
      border-radius: 100%;			
	}
	.min_right{
		margin-left: 30px;
	    position: absolute;
	    top: -12px;
	    left: 20px;
	}
	.bottom:before{
		content: "";
	    border: 1px solid #bebebe;
	    position: absolute;
	    bottom: 15px;
	    left: 10px;
	    height: 25px;
	}
	.bottom span{
		background: #BEBEBE;
		float: left;
		width: 20px;
		height:20px;
		border-radius: 100%;	
	}
	.bottom_right{
		margin-left: 30px;
	}
	.right p{
		font-size: 12px;
		color:#bebebe;
	}
</style>