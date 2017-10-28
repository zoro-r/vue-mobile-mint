//例子父路由
const login = r => require.ensure([], () => r(require('../pages/login/Login.vue')), 'Login');

// 例子首页
export default [{
	name: 'login',
	path: 'login',
	component: login,
	children: []
}]
