<template>
	<div>
			<!-- <div v-show="!imgLoaded">
				加载中...
			</div> -->
		  <!-- swiper -->
      <div>
				<swiper :options="swiperOption" ref="mySwiper">
					<swiper-slide class="swiper_base first">
						<img class="one ani" src="./../../assets/img/screen/1.png" swiper-animate-effect="bounceInDown" swiper-animate-duration="1s" swiper-animate-delay="0s">
						<img class="two ani" src="./../../assets/img/screen/2.png"  swiper-animate-effect="fadeInUpBig" swiper-animate-duration=".5s" swiper-animate-delay="0s">
						<!-- <img class="three" src="./../../assets/img/screen/3.png" alt=""> -->
					</swiper-slide>
					<swiper-slide class="swiper_base secend"> 
						<img src="./../../assets/img/screen/two.png" alt="">
					</swiper-slide>
					<swiper-slide class="swiper_base third">
						<img src="./../../assets/img/screen/third.jpeg" alt="">
						<mt-button class="btn_open" @click="toMain" plain>立即体验</mt-button>
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
	</div>
</template>

<script>
// import "@/assets/lib/swiper/swiper.animate1.0.2.min.js"
export default {
  name: "startscreen",
  data() {
    return {
			imgLoaded:false,
      swiperOption: {
        //设置加载图片完成
        preloadImages: true,
        updateOnImagesReady: true,
        direction: "horizontal",
        effect: "fade",
        height: window.height,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        on: {
          init() {
            swiperAnimateCache(this); //隐藏动画元素
             //初始化完成开始动画
          },
          slideChangeTransitionEnd() {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          },
          imagesReady() {
						swiperAnimate(this);
            // alert("图片加载完成了");
          }
        }
      }
    };
  },
  methods: {
    /**
		 * 跳转至首页
		 */
    toMain() {
      this.$router.push({ name: "baseHome" });
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 100, false);
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/assets/css/vars";
.swiper_base {
  height: 100vh;
  font-size: 1.5rem;
  &.first {
    box-sizing: border-box;
    // display: flex;
    text-align: center;
    // justify-content: center;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgb(65, 112, 227)),
      to(rgb(255, 255, 255))
    );
    .one {
      height: 55%;
      margin: 5% 10px;
    }
    .two {
      height: 40%;
      width: 100%;
    }
  }
  &.secend {
    img {
      width: 100%;
      height: 100%;
    }
  }
  &.third {
    // text-align: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .btn_open {
    position: absolute;
    width: 100px;
    bottom: 60px;
    left: calc(50% - 50px);
  }
}
</style>
