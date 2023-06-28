import { useUserStore } from '@/stores/user.js'
import reqConfig from './config.js'
const requestInterceptors = (vm) => {
	const user = useUserStore()
	uni.$u.http.interceptors.request.use((config) => {
		config.header = {
			...config.header,
		};
		if (config.custom.auth) {
			config.header[reqConfig.tokenName] = user.token;
		}
		return config
	}, (config) => Promise.reject(config))
}
const responseInterceptors = (vm) => {
	uni.$u.http.interceptors.response.use((response) => {
		const data = response.data
		const custom = response.config?.custom
		if (data[reqConfig.codeName] !== reqConfig.successCode) {
			if (custom.toast !== false) {
				uni.showToast({
					title: data[reqConfig.errorMessageName],
					icon: 'none'
				});
			}
			// 如果需要catch返回，则进行reject
			if (custom?.catch) {
				return Promise.reject(data)
			} else {
				// 否则返回一个pending中的promise
				return new Promise(() => {})
			}
		}
		return data || {}
	}, (response) => {
		/*  对响应错误做点什么 （statusCode !== 200）*/
		return Promise.reject(response)
	})
}


export {
	requestInterceptors,
	responseInterceptors
}