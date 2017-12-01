//例子父路由
const login = r => require.ensure([], () => r(require('../pages/login/Login.vue')), 'Login');
const startscreen =  r => require.ensure([], () => r(require('../pages/login/StartupScreen.vue')), 'StartupScreen');

// 例子首页
export default [{
	name: 'login',
	path: 'login',
	component: login,
	children: []
},{
	name: 'startscreen',
	path: '/startscreen',
	component: startscreen,
	children: []
}]
