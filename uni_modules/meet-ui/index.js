import Request from './libs/luch-request'

const $u = {
	http: new Request(),
}
uni.$u = $u
const install = (Vue) => {
	// 同时挂载到uni和Vue.prototype中
	// #ifndef APP-NVUE
	// 只有vue，挂载到Vue.prototype才有意义，因为nvue中全局Vue.prototype和Vue.mixin是无效的
	Vue.config.globalProperties.$u = $u
	// #endif
}

export default {
	install
}