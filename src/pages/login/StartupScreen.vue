<template>
	<div>
		  <!-- swiper -->
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper_base first">
					<img class="one ani" src="./../../assets/img/screen/1.png" swiper-animate-effect="fadeInDownBig" swiper-animate-duration="1s" swiper-animate-delay="0.3s">
					<img class="two ani" src="./../../assets/img/screen/2.png"  swiper-animate-effect="fadeInUpBig" swiper-animate-duration="1s" swiper-animate-delay="0.3s">
					<!-- <img class="three" src="./../../assets/img/screen/3.png" alt=""> -->
				</swiper-slide>
        <swiper-slide class="swiper_base">Slide 2</swiper-slide>
        <swiper-slide class="swiper_base">Slide 3</swiper-slide>
      </swiper>
	</div>
</template>

<script>
// import "@/assets/lib/swiper/swiper.animate1.0.2.min.js"
export default {
  name: "startscreen",
  data() {
    return {
      swiperOption: {
        direction: "horizontal",
        effect: "fade",
				height: 500,
				on:{
					init(){
						swiperAnimateCache(this); //隐藏动画元素 
						swiperAnimate(this); //初始化完成开始动画
					}, 
					slideChangeTransitionEnd(){ 
						swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
					} 
				}
      }
    };
  },
  methods: {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/assets/css/vars";
.swiper_base {
  height: 100vh;
	font-size: 1.5rem;
	&.first{
		box-sizing: border-box;
		// display: flex;
		text-align: center;
		// justify-content: center;
		background: -webkit-gradient(linear, left top,left bottom, from(rgb(65, 112, 227)), to(rgb(255,255,255)));
		.one{
			height: 55%;
			margin: 5% 10px;
		}
		.two{
			height: 40%;
			width: 100%;
		}
	}
}
</style>
