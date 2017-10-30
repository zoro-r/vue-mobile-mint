<template>
	<div>
		<div ref="header">
			<slot name="header"></slot>
		</div>
		<!--  style="height:100vh;" -->
		<div ref="scroll_content" style="height:100vh;" @scroll="scroll" v-bind:style="{'overflow-y':!$store.state.common.noScroll? 'scroll':'hidden'}" v-bind:class="[$store.state.common.hasFooter?'has—footer':'']" class="scroll_content">
			<slot name="content"></slot>
		</div>
		<slot name="other"></slot>
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
			scroll(e) {
				let scrollTop = this.$refs.scroll_content.scrollTop;
				this.$emit("scroll", this.$refs.scroll_content, {
					top: scrollTop
				});
			}
		},
		mounted() {
			// console.log(this.$refs.header.clientHeight);
			// console.log("footer", this.$refs.footer.clientHeight);
			// console.log(this.screenHeight)
			// this.scrollheight =
			//   this.screenHeight -
			//   this.$refs.header.clientHeight - this.$refs.footer.clientHeight;
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
