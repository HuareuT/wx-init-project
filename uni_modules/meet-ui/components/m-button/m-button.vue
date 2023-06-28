<template>
	<button
		class="m-button m-reset-button m-primary-button"
		:style="[buttonStyle]"
		hover-class="m-button-hover"
		:loading="loading"
		:disabled="disabled"
		:form-type="formType"
		:open-type="openType"
		@getuserinfo="handleGetUserInfo"
		@getphonenumber="handleGetPhoneNumber"
		@contact="handleContact"
		@error="handleError"
		@tap="handleClick"
	>
		按钮
	</button>
</template>
<script setup>
import { computed } from 'vue';
const props = defineProps({
	// 按钮索引，用于区分多个按钮
	index: {
		type: [Number, String],
		default: 0
	},
	// 按钮形状 default 默认 round 圆角 icon 图标按钮
	shape: {
		type: String,
		default: 'default'
	},
	// 是否加阴影
	shadow: {
		type: Boolean,
		default: false
	},
	// 宽度 rpx或%
	width: {
		type: String,
		default: 'auto'
	},
	// 高度 rpx或%
	height: {
		type: String,
		default: ''
	},
	// 按钮的尺寸 sm lg
	size: {
		type: String,
		default: ''
	},
	// 字体是否加粗
	fontBold: {
		type: Boolean,
		default: false
	},
	padding: {
		type: String,
		default: '0 30rpx'
	},
	// 外边距 与css的margin参数用法相同
	margin: {
		type: String,
		default: ''
	},
	// 是否镂空
	plain: {
		type: Boolean,
		default: false
	},
	// 当plain=true时，是否显示边框
	border: {
		type: Boolean,
		default: true
	},
	// 当plain=true时，是否加粗显示边框
	borderBold: {
		type: Boolean,
		default: false
	},
	// 是否禁用
	disabled: {
		type: Boolean,
		default: false
	},
	// 是否显示加载图标
	loading: {
		type: Boolean,
		default: false
	},
	// 触发form表单的事件类型
	formType: {
		type: String,
		default: ''
	},
	// 开放能力
	openType: {
		type: String,
		default: ''
	},
	// 是否阻止重复点击(默认间隔是200ms)
	blockRepeatClick: {
		type: Boolean,
		default: false
	},
	// 背景颜色
	backgroundColor: {
		type: String,
		default: ''
	},
	// 字体颜色
	fontColor: {
		type: String,
		default: ''
	},
	// 字体大小
	fontSize: {
		type: Number,
		default: 0
	},
	// 字体大小单位
	fontUnit: {
		type: String,
		default: 'rpx'
	}
});

const emit = defineEmits(['getuserinfo', 'getphonenumber', 'contact', 'error', 'tap', 'click']);

// 按钮class
const buttonClass = computed(() => {
	return {};
});
// 按钮style
const buttonStyle = computed(() => {
	const style = {};
	if (props.width) style.width = props.width;
	if (props.height) style.height = props.height;
	if (props.backgroundColor) style.backgroundColor = props.backgroundColor;
	if (props.fontColor) style.color = props.fontColor;
	if (props.fontSize) style.fontSize = `${props.fontSize}${props.fontUnit}`;
	return style;
});

const handleClick = () => {
	if (props.disabled) {
		return;
	}
	emit('click', {
		index: Number(props.index)
	});
	emit('tap', {
		index: Number(props.index)
	});
};

const handleGetUserInfo = ({ detail = {} } = {}) => {
	emit('getuserinfo', detail);
};

const handleContact = ({ detail = {} } = {}) => {
	emit('contact', detail);
};
const handleGetPhoneNumber = ({ detail = {} } = {}) => {
	emit('getphonenumber', detail);
};
const handleError = ({ detail = {} } = {}) => {
	emit('error', detail);
};
</script>
<style lang="scss" scoped>
.m-button {
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	line-height: 1;
	text-align: center;
	text-decoration: none;
	overflow: visible;
	transform: translate(0rpx, 0rpx);
	// background-color: $tn-mai
	border-radius: 12rpx;
	// color: $tn-font-color;
	margin: 0;
}

// 去除button的所有默认样式，让其表现跟普通的view、text元素一样
.m-reset-button {
	padding: 0;
	background-color: transparent;
	/* #ifndef APP-PLUS */
	font-size: inherit;
	line-height: inherit;
	color: inherit;
	/* #endif */
	/* #ifdef APP-NVUE */
	border-width: 0;
	/* #endif */
}

/* #ifndef APP-NVUE */
.m-reset-button::after {
	border: none;
}

/* #endif */
.m-button-hover {
	// background-color: red;
	// opacity: 0.5;
	background-color: darkblue !important;
}

.m-primary-button {
	background-color: green;
}
</style>
