<template>
  <section class="demo ">
    <div id="canvasBox" class="canvasBox">
      <canvas style="transform:scale(.5)" height="180px" :width="screenWidth" ref="canvas" ></canvas>
    </div>
    <!-- <div ref="scroll" class="container primary_bg">
      <div class="item">
      </div>
    </div> -->
  </section>
</template>

<script type="text/babel">
import BScroll from "better-scroll";
export default {
  name: "demo",
  components: {},
  data() {
    return {};
  },
  methods: {
    _initHtml() {
      let canvas = this.$refs.canvas;
      let ctx = canvas.getContext("2d");
      ctx.fillStyle = "#b1b1b1";
      ctx.strokeStyle = "rgb(118,113,108)";
      // 为了让效果更好 设置上角的一点点高光
      ctx.shadowColor = "#ccc";
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 1;
      // 画笔宽度为1
      ctx.lineWidth = 1;
      let circle = {
        x: this.screenWidth / 2, //圆心的x轴坐标值
        y: 24, //圆心的y轴坐标值
        r: 40 //圆的半径
      };
      ctx.fillStyle = "#b1b1b1";
      ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI, true);
      ctx.arc(circle.x, circle.y*2, circle.r/2, 0, Math.PI, false);
      ctx.stroke();
      ctx.fill();
    }
  },
  mounted() {
    this.$nextTick(() => {
      // this.meunScrollMain = new BScroll(this.$refs.scroll, {
      //   click: true,
      //   tab: true,
      //   probeType: 3,
      //   bounce: true
      // });
      this._initHtml();
    });
  }
};
</script>

<style lang="scss">
@import "src/assets/css/vars";
$height: 80px;
.demo {
  .container {
    height: 500px;
    // overflow: scroll;
    .item {
      height: 1000px;
      background: green;
      width: 80%;
      margin: auto;
    }
  }
}
</style>

