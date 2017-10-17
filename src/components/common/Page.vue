<template>
  <div>
    <slot name="header"></slot>
    <div ref="scroll_content" @scroll="scroll" v-bind:style="{'overflow-y':!$store.state.common.noScroll? 'auto':'hidden'}" v-bind:class="[$store.state.common.hasFooter?'has—footer':'']" class="scroll_content" style="height:100vh;">
      <slot name="content"></slot>
    </div>
    <slot name="footer"></slot>
    <slot name="other"></slot>
  </div>
</template>

<script>
export default {
  name: 'Page',
  methods: {
    scroll(e) {
      let scrollTop = this.$refs.scroll_content.scrollTop;
      this.$emit("scroll", this.$refs.scroll_content, { top: scrollTop })
    }
  }
}
</script>

<style scoped>
.has—footer {
  padding-bottom: 55px;
}
</style>
