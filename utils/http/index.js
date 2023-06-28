// 引入拦截器配置
import { requestInterceptors, responseInterceptors } from './interceptors.js'
import env from '@/env/index.js'
import reqConfig from './config.js'
//  初始化请求配置
const initRequest = (vm) => {
	uni.$u.http.setConfig((defaultConfig) => {
		defaultConfig.baseURL = env.baseUrl
		defaultConfig.custom = {
			auth: reqConfig.auth,
			toast: reqConfig.toast,
			catch: reqConfig.catch
		};
		return defaultConfig
	})
	requestInterceptors()
	responseInterceptors()
}
export {
	initRequest
}