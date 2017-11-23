<template>
	<page class="main_page">
		<mt-header style="-webkit-transform: translateZ(0)" slot="header" class="primary_bg" title="登陆" :fixed="true">
			<mt-button @click="back" slot="left">
				<img src="static/img/icon/close.png" style="width:17px" alt="">
			</mt-button>
			<mt-button slot="right" @click="isPwd = !isPwd">
				{{isPwd?'密码登陆':'账号登陆'}}
			</mt-button>
		</mt-header>

		
		<div slot="content">
			<!-- 密码登陆 -->
			<div v-if="isPwd">
				<div class="has-header login_content">
					<div style="position:relative">
						<mt-field placeholder="手机号码" v-model="modal.userName"></mt-field>
						<mt-button class="btn_yzm" :disabled="time !=60" @click="sendCode" type="primary" size="small">{{text}}</mt-button>
					</div>
					<mt-field placeholder="验证码" v-model="modal.yzm"></mt-field>
					<p class="waring fn-12">温馨提示，未注册饿了么账号的手机号，登录时将自动注册，且表示您已同意《用户协议》</p>
				</div>
			</div>

			<!-- 验证码登陆 -->
			<div v-else>
				<div class="has-header login_content">
						<mt-field placeholder="手机号码" v-model="modal.userName"></mt-field>
					<mt-field placeholder="密码"  type="password" v-model="modal.pwd"></mt-field>
					<p class="waring fn-12">温馨提示，未注册饿了么账号的手机号，登录时将自动注册，且表示您已同意《用户协议》</p>
				</div>
			</div>
			<mt-button style="margin:0 3%;width:94%" type="primary" size="large" @click.native="login">登陆</mt-button>
		</div>
	</page>
</template>

<script>
	export default {
		name: "login",
		data() {
			return {
				modal: {
					userName: "",
					yzm: "",
					pwd:""
				},
				text: "获取验证码",
				time: 60,
				isPwd:true
			};
		},
		methods: {
			/**
			 * 发送验证码
			 * 优化 @计算时间差
			 */
			sendCode() {
				setInterval(e => {
					this.time--;
					this.text = this.time + "s";
				}, 1000);
			},
			/**
			 * login
			 */
			login() {
				this.back();
			}
		}
	};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	@import "src/assets/css/vars";
	.btn_yzm {
		position: absolute;
		top: 7px;
		right: 8px;
		width: 100px;
	}
	
	.waring {
		padding: 0px $pd-sm;
		color: $description-color;
	}
</style>
