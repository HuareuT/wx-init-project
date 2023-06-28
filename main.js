/*
 * @Author: hutong huareu980@163.com
 * @Date: 2023-04-07 15:12:06
 * @LastEditors: hutong huareu980@163.com
 * @LastEditTime: 2023-06-21 11:41:08
 * @FilePath: /yjgzl-app/main.js
 * @Description:
 */
import App from "./App";

import { createSSRApp } from "vue";
import MeetUI from './uni_modules/meet-ui/index.js'
import { initRequest } from './utils/http/index.js'
import * as Pinia from "pinia";
import { createUnistorage } from "./uni_modules/pinia-plugin-unistorage";
export function createApp() {
	const app = createSSRApp(App);
	const store = Pinia.createPinia();
	store.use(createUnistorage());
	app.use(store).use(MeetUI);
	initRequest()
	return {
		app,
		Pinia,
	};
}