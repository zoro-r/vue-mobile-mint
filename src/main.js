if (!Array.prototype.findIndex) {
	Object.defineProperty(Array.prototype, 'findIndex', {
		value: function (predicate) {
			// 1. Let O be ? ToObject(this value).
			if (this == null) {
				throw new TypeError('"this" is null or not defined');
			}

			var o = Object(this);

			// 2. Let len be ? ToLength(? Get(O, "length")).
			var len = o.length >>> 0;

			// 3. If IsCallable(predicate) is false, throw a TypeError exception.
			if (typeof predicate !== 'function') {
				throw new TypeError('predicate must be a function');
			}

			// 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
			var thisArg = arguments[1];

			// 5. Let k be 0.
			var k = 0;

			// 6. Repeat, while k < len
			while (k < len) {
				// a. Let Pk be ! ToString(k).
				// b. Let kValue be ? Get(O, Pk).
				// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
				// d. If testResult is true, return k.
				var kValue = o[k];
				if (predicate.call(thisArg, kValue, k, o)) {
					return k;
				}
				// e. Increase k by 1.
				k++;
			}

			// 7. Return -1.
			return -1;
		}
	});
}
// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
	Object.defineProperty(Array.prototype, 'find', {
		value: function (predicate) {
			// 1. Let O be ? ToObject(this value).
			if (this == null) {
				throw new TypeError('"this" is null or not defined');
			}

			var o = Object(this);

			// 2. Let len be ? ToLength(? Get(O, "length")).
			var len = o.length >>> 0;

			// 3. If IsCallable(predicate) is false, throw a TypeError exception.
			if (typeof predicate !== 'function') {
				throw new TypeError('predicate must be a function');
			}

			// 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
			var thisArg = arguments[1];

			// 5. Let k be 0.
			var k = 0;

			// 6. Repeat, while k < len
			while (k < len) {
				// a. Let Pk be ! ToString(k).
				// b. Let kValue be ? Get(O, Pk).
				// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
				// d. If testResult is true, return kValue.
				var kValue = o[k];
				if (predicate.call(thisArg, kValue, k, o)) {
					return kValue;
				}
				// e. Increase k by 1.
				k++;
			}

			// 7. Return undefined.
			return undefined;
		}
	});
}
window.globalConfig = {
	rootUrl: "",
	isDebug: true, //是否开启接口debug模式
	plat: 'NATIVE', //WEB、NATIVE
	timeout: 1000 * 180 //默认是3000毫秒
}

alert(Array.prototype.find,Array.prototype.findIndex)
//***************************引入框架***************************** */
import Vue from 'vue'
import App from './components/common/App'
import store from './vuex/store'
import router from './routers'

//引入手机ui框架 mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import '@/assets/css/main.scss'
import "@/assets/lib/swiper/swiper.animate1.0.2.min.js"
require('swiper-css/swiper.css')//引入swiper滑动组件
import '@/filters/globalFilter.js'
import '@/assets/lib/finger/alloy_finger.js'
import '@/assets/lib/finger/alloy_finger.vue.js'
import Navigation from 'vue-navigation'
import vueScrollBehavior from './components/common/scrolleBhavior/src/vue-scroll-behavior'
import VueLazyImage from "vue-lazy-images";
import VueAwesomeSwiper from 'vue-awesome-swiper'

/*********************************自定义组件 ****************** */
import utils from './utils'
import Page from './components/common/Page.vue'
import Tabs from './components/common/Tabs'
//引入点击
import FastClick from 'fastclick'
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function () {
		FastClick.attach(document.body);
	}, false);
}

/*********************************给vue增加扩展方法start ****************** */
Vue.prototype.utils = utils;
/*********************************给vue增加扩展方法end ****************** */

Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyImage)
Vue.use(MintUI)
Vue.component('page', Page)
Vue.component('tabs', Tabs)
//设置打印模式
Vue.config.productionTip = false
//依赖组件
Vue.use(vueScrollBehavior, {
	router: router
})
Vue.use(Navigation, {
	router,
	store,
	moduleName: 'policy',
	keyName: 'RH',
	id: "scroll-content"
})
Vue.mixin({
	data() {
		return {
			screenWidth: document.documentElement.clientWidth || 0,
			screenHeight: document.documentElement.clientHeight,
			loaddingImg: "static/img/common/loading1.gif",
			isMobile: window.navigator.platform == 'iPhone'
		}
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
		back(url) {
			this.$router.back()
		},
		//返回首页
		toHome() {
			router.goBack("/baseHome")
		}
	}
})

/*********************************移动app插件 ****************** */
if (window.navigator.platform == 'iPhone' && false) {
	console.log("app模式启动")
	document.addEventListener('deviceready', function () {
		new Vue({
			el: '#app',
			router,
			store,
			template: '<App/>',
			components: {
				App
			}
		})
		window.navigator.splashscreen.hide();
		StatusBar.styleDefault();
		window.addEventListener('native.keyboardshow', keyboardShowHandler);

		function keyboardShowHandler(e) {
			console.log('Keyboard height is: ' + e.keyboardHeight);
		}
		cordova.plugins.Keyboard.disableScroll(true);
		if (navigator.appVersion.indexOf('11') < 0) {
			//ios11 以下判断
		}
	}, false);
} else {
	new Vue({
		el: '#app',
		router,
		store,
		template: '<App/>',
		components: {
			App
		}
	})
}


if (window.navigator.platform == 'iPhone'){
	//监听点击顶部bar的方法
	window.addEventListener('statusTap', function () {
		// scroll-up with document.body.scrollTop = 0; or do whatever you want
		document.getElementsByClassName("child-view")[0].body.scrollTop = 0;
	});
}
/*********************************移动端组件end ****************** */
