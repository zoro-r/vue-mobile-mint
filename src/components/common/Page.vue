<template>
	<div>
		<!-- 顶部导航bar -->
		<div ref="header">
			<slot name="header"></slot>
		</div>

		<!-- 内容区域  style="height:100vh;" -->
		<div ref="scroll_content" style="height:100vh;" @scroll="scroll" v-bind:style="{'overflow-y':!$store.state.common.noScroll? 'scroll':'hidden'}" v-bind:class="[$store.state.common.hasFooter?'has—footer':'']" class="scroll_content">
			<slot name="content"></slot>
		</div>

		<!-- 其他的内容 -->
		<slot name="other"></slot>

		<!-- 底部bar -->
		<div ref="footer">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Page",
		data() {
			return {
				scrollheight: this.screenHeight
			};
		},
		methods: {
			/** 
			 * 页面滚动时候触发
			 */
			scroll(e) {
				let scrollTop = this.$refs.scroll_content.scrollTop;
				this.$emit("scroll", this.$refs.scroll_content, {
					top: scrollTop
				});
			}
		},
		mounted() {
			/** 
			 * 优化底部bar显示
			 */
			setTimeout(() => {
				this.$refs.footer.style.position = "fixed";
			}, 400);
		}
	};
</script>

<style scoped>
	.has—footer {
		padding-bottom: 55px;
	}
</style>
