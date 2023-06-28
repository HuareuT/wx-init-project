/*
 * @Author: hutong huareu980@163.com
 * @Date: 2023-06-25 09:25:50
 * @LastEditors: hutong huareu980@163.com
 * @LastEditTime: 2023-06-25 09:31:24
 * @FilePath: /yjgzl-app/env/index.js
 * @Description:
 */
import pathConfig from "./path.js";
let path;
try {
	path =
		process.env.ENV_PATH === undefined ?
		pathConfig.dev :
		pathConfig[process.env.ENV_PATH];
} catch (e) {
	path = pathConfig.dev;
}
export default path;