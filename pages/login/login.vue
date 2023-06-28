<template>
	<view class="pages">
		<input type="text" v-model="form.username" />
		<input type="text" v-model="form.password" />
		<button @click="handleLogin">执行登录</button>
	</view>
</template>

<script setup>
import { getCurrentInstance, reactive } from 'vue';
import { useUserStore } from '@/stores/user';
import { useUserApi } from '@/api/user/index.js';
const instance = getCurrentInstance().proxy;
const eventChannel = instance.getOpenerEventChannel();
const user = useUserStore();
const form = reactive({
	username: 'admin',
	password: 'admin'
});
const handleLogin = async () => {
	uni.showLoading({
		title: '加载中',
		mask: true
	});
	const res = await useUserApi().loginByPassword(form);
	user.setToken('Bearer ' + res.data);
	const timer = setTimeout(() => {
		eventChannel?.emit?.('loginSuccess', {
			code: 0,
			data: {},
			message: '登录成功'
		});
		uni.hideLoading();
		uni.showToast({
			title: '登录成功'
		});
		uni.navigateBack({ delta: 1 });
		clearTimeout(timer);
	}, 800);
};
</script>
<style scoped lang="scss"></style>
