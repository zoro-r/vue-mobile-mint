<template>
  <span class="star">
    <span v-for="(itemClass,index) in itemClasses" :class="itemClass" :key="index" class="star-item"></span>
  </span>
</template>

<script>
const LENGTH = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'
export default {
  props: {
    score: {
      type: Number
    }
  },
  computed: {
    itemClasses() {
      let result = []
      let score = Math.floor(this.score) / 2
      let starOn = Math.floor(score)
      let starHalf = (score - starOn) === 0 ? 0 : 1
      for (let i = 0; i < starOn; i++) {
        result.push(CLS_ON)
      }
      if (starHalf === 1) {
        result.push(CLS_HALF)
      }
      while (result.length < LENGTH) {
        result.push(CLS_OFF)
      }
      return result
    }
  }
}
</script>

<style>
.star-item {
  display: inline-block;
  height: .8rem;
  width: .8rem;
  background-size: 100%;
}

.on {
  background-image: url(star36_on@2x.png);
  background-repeat: no-repeat;
}

.half {
  background-image: url(star36_half@2x.png);
  background-repeat: no-repeat;
}

.off {
  background-image: url(star36_off@2x.png);
  background-repeat: no-repeat;
}
</style>
