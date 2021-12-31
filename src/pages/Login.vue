<template>
	<div class="login-page">
		<van-config-provider>
			<van-nav-bar
				title="账号登录"
				left-arrow
				@click-left="onClickLeft"
			/>
		</van-config-provider>
		<div class="login-form" v-if="isLogin">
			<van-form @submit="onSubmitLogin">
				<van-cell-group inset>
					<van-field
						v-model="username"
						name="username"
						placeholder="请输入你的账号"
						:rules="[{ required: true, message: '请填写用户名' }]"
					/>
					<van-field
						v-model="password"
						type="password"
						name="password"
						placeholder="请输入你的密码"
						:rules="[{ required: true, message: '请填写密码' }]"
					/>
				</van-cell-group>
				<div style="margin: 16px;">
					<van-button block type="danger" native-type="submit">登录</van-button>
					<div class="no-account" @click="changeMode">还没有账号?</div>
				</div>
			</van-form>
		</div>
		<div class="register-form" v-else>
			<van-form @submit="onSubmitRegister">
				<van-cell-group inset>
					<van-field
						v-model="username"
						name="username"
						placeholder="请输入你的账号"
						:rules="[{ required: true, message: '请填写用户名' }]"
					/>
					<van-field
						v-model="email"
						name="email"
						placeholder="请输入你的邮箱"
						:rules="[{ required: true, message: '请填写邮箱' }]"
					/>
					<van-field
						v-model="password"
						type="password"
						name="password"
						placeholder="请输入你的密码"
						:rules="[{ required: true, message: '请填写密码' }]"
					/>
					<van-field
						v-model="repeatPassword"
						type="password"
						name="repeatPassword"
						placeholder="请重复一次你的密码"
						:rules="[
							{ required: true, message: '请填写密码' },
							{ validator: validatorPassword, message: '两次密码不一致' },
						]"
					/>
				</van-cell-group>
				<div style="margin: 16px;">
					<van-button block type="danger" native-type="submit">注册</van-button>
					<div class="no-account" @click="changeMode">已有账号!</div>
				</div>
			</van-form>
		</div>
	</div>
</template>

<script setup>
	import { useRouter } from 'vue-router'
	import { ref } from 'vue'

	const router = useRouter()
	const isLogin = ref(true)
	const username = ref('')
	const password = ref('')
	const email = ref('')
	const repeatPassword = ref('')

	const onClickLeft = () => {
		router.go(-1)
	}

	const changeMode = () => {
		isLogin.value = !isLogin.value
	}

	const validatorPassword = val => {
		return val === password.value
	}

	const onSubmitLogin = (values) => {
		console.log('submit', values);
	}

	const onSubmitRegister = (values) => {
		console.log('submit', values);
	}
</script>

<style lang="less" scoped>
	.login-page{
		.no-account{
			font-size: .875rem;
			color: #f55;
			margin-top: 10px;
			text-align: right;
		}
	}
</style>
