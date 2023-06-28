<!--
 * @Author: hutong huareu980@163.com
 * @Date: 2023-06-20 17:05:13
 * @LastEditors: hutong huareu980@163.com
 * @LastEditTime: 2023-06-25 15:52:50
 * @FilePath: /yjgzl-app/pages/home/home.vue
 * @Description: 
-->
<template>
	<view class="pages">
		首页
		<button @click="goLogin">登录</button>
		<button @click="goLogin2">判断权限</button>
	</view>
</template>

<script setup>
import { useLogin } from '@/composables/useLogin.js';
import { useUserApi } from '@/api/user/index.js';
const { checkLoginAndSkip } = useLogin();
const goLogin = () => {
	uni.navigateTo({
		url: '/pages/login/login',
		success: (res) => {},
		fail: () => {},
		complete: () => {}
	});
};

const goLogin2 = () => {
	checkLoginAndSkip(async (valid) => {
		if (valid) {
			try {
				await useUserApi().testApi();
			} catch (e) {
				console.log(e);
			}
		}
	});
};
</script>
<style scoped lang="scss"></style>
