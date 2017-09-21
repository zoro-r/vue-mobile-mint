<template>
  <div class="count-time">
    <div class="circle_process" v-if="!activeGapTime">
      <div class="wrapper right">
        <div class="circle rightcircle"></div>
      </div>
      <div class="wrapper left">
        <div class="circle leftcircle"></div>
      </div>
    </div>
    <span>{{activeGapTime}}</span>
  </div>
</template>

<script>
/**
 * @detail 倒计时组件 (距离今天0点的时间)
 * 到时回调：endCountTimes
 */
export default { 
  name: 'CountTimes',
  data(){
    return{ 
      activeGapTime: null,
      setInt: null,
    }
  },
  methods:{
    //倒计时
    getCountTimes(){
      //设置结束时间,默认的是当天凌晨时间
      let nowDate = new Date();
      let endTime = new Date(nowDate.getFullYear() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getDate() + ' 23:59:59').getTime();

      this.setInt = setInterval(function() {
        //计算时间戳 (注：如果传递过来的时间是格式化时间，需要转换为时间戳)
        let countTimestamp = (endTime  - (new Date()).getTime()) / 1000;
        if(countTimestamp > 0){
          this.activeGapTime = parseInt(countTimestamp / (60 * 60)) + "时" + parseInt(countTimestamp % (60 * 60) / 60) + "分" + parseInt(countTimestamp % 60) + '秒';
        }else{
          window.clearInterval(this.setInt);
          this.activeGapTime = 0 + '秒'
          //触发事件
          this.$emit('endCountTimes');
        }
      }.bind(this), 1000);
    }
  },
  mounted(){
    this.getCountTimes();
  },
  destroyed(){
    window.clearInterval(this.setInt);
  }
}
</script>

<style lang="scss" scoped >
@import 'src/assets/css/vars';
  $ctWidth: 15px;
  $ctHeight: $ctWidth;
  $ctBorder: 2px;
  $gapTime: 0.6s;


  .count-time{
    display: inline-block;
    color: $error-color;
  }

  .circle_process {
    position: relative;
    top: 4px;
		width: $ctWidth;
    height: $ctHeight;
    display: inline-block;
    margin: 0px 4px 0px 0px;
	}

	.circle_process .wrapper {
		width: $ctWidth / 2;
		height: $ctHeight;
		position: absolute;
		top: 0;
		overflow: hidden;
	}

	.circle_process .right {
		right: 0;
	}

	.circle_process .left {
		left: 0;
	}

	.circle_process .circle {
		width: $ctWidth;
		height: $ctHeight;
		border: $ctBorder solid transparent;
		border-radius: 50%;
		position: absolute;
		top: 0;
		transform: rotate(-135deg);
	}

	.circle_process .rightcircle {
		border-top: $ctBorder solid $error-color;
		border-right: $ctBorder solid $error-color;
		right: 0;
		-webkit-animation: circle_right $gapTime linear infinite;
	}

	.circle_process .leftcircle {
		border-bottom: $ctBorder solid $error-color;
		border-left: $ctBorder solid $error-color;
		left: 0;
		-webkit-animation: circle_left $gapTime linear infinite; 
	}

	@-webkit-keyframes circle_right {
		0% {
			-webkit-transform: rotate(-135deg);
		}
		50%,
		100% {
			-webkit-transform: rotate(45deg);
		}
	}

	@-webkit-keyframes circle_left {
		0% ,
		50% {
			-webkit-transform: rotate(-135deg);
		}
		100% {
			-webkit-transform: rotate(45deg);
		}
	}
</style>
