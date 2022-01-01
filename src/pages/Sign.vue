<template>
	<div class="sign-page">
		<van-nav-bar
			title="我的签到"
			left-arrow
			@click-left="onClickLeft">
		</van-nav-bar>
		<div class="tab-header">
			<span class="tab-title">每日签到</span>
			<div class="rules">
				<van-icon name="question-o" size="16" @click="ruleIconClick" />
				签到规则
			</div>
			<van-popup v-model:show="showRule" closeable round>内容</van-popup>
		</div>
		<div class="signin-content">
			<div class="content-left">
				<div class="figures">
					<div class="figure-card">
						<div class="figure active">0</div>
						<div class="attention">连续签到天数</div>
					</div>
					<div class="figure-card">
						<div class="figure">0</div>
						<div class="attention">当前金币数</div>
					</div>
				</div>
			</div>
			<div class="content-right">
				<van-button type="primary" block>立即签到</van-button>
			</div>
		</div>
		<div class="signin-calendar">
			<div class="first-line">
				<div class="info">
					<van-image width="21" height="24" :src="ReSignInCard" style="margin-right: 6px" />
					补签卡:  <span class="count">0</span> 张
				</div>
			</div>
			<van-config-provider :theme-vars="themeVars">
				<van-calendar
					:show-title="false"
					:show-subtitle="false"
					:poppable="false"
					:show-confirm="false"
					:min-date="minDate"
					:max-date="maxDate"
					readonly
					:formatter="formatter"
					:style="{ height: '500px' }"
				/>
			</van-config-provider>
		</div>

	</div>
</template>

<script setup>
	import { useRouter } from 'vue-router'
	import { ref } from 'vue'
	import ReSignInCard from '../assets/images/re-sign-card.png'

	const now = new Date()
	const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
	const minDate = new Date(now.setDate(1))
	const maxDate = new Date(now.setDate(endOfMonth))
	const themeVars = {
		calendarHeaderBoxShadow: 'none',
		calendarSelectedDayBackgroundColor: '#e8f3ff',
		calendarSelectedDayColor: '#86909c'
	}
	const router = useRouter()
	const showRule = ref(false)

	const onClickLeft = () => {
		router.go(-1)
	}

	const ruleIconClick = () => {
		showRule.value = true
	}

	const formatter = (day) => {
		const today = new Date().getDate()
		if (day.date.getDate() === today) {
			day.bottomInfo = '今日'
			day.className = 'today'
		} else {
			day.bottomInfo = '+150'
			day.className = 'other-day'
		}

		return day
	}
</script>

<style lang="less" scoped>
	.sign-page{
		.tab-header{
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 20px 20px 16px;
			border-bottom: 1px solid #e5e6eb;
			.tab-title{
				font-size: 18px;
				font-weight: 500;
				color: #1d2129;
			}
			.rules{
				display: flex;
				align-items: center;
				font-size: 14px;
				font-weight: 400;
				color: #4e5969;
				cursor: pointer;
			}
		}

		.signin-content{
			display: flex;
			flex-direction: column;
			padding: 0 12px;

			.content-left{
				.figures{
					display: flex;
					flex-shrink: 0;
					justify-content: space-between;
					background-color: #f7f8fa;
					border-radius: 2px;
					padding: 24px;
					margin-top: 20px;

					.figure-card{
						display: flex;
						align-items: flex-end;
						justify-content: space-between;

						.figure{
							font-weight: 700;
							font-size: 36px;
							color: #1d2129;
							line-height: 36px;
							font-family: DIN Alternate;
							white-space: nowrap;
							margin-right: 12px;
							position: relative;
							top: 1px;

							&.active{
								color: #1e80ff;
							}
						}

						.attention{
							color: #86909c;
							font-weight: 400;
							font-size: 14px;
							white-space: nowrap;
						}
					}
				}
			}

			.content-right{
				padding-top: 14px
			}
		}

		.signin-calendar{
			margin-top: 24px;
			padding: 0 12px 14px;

			.first-line{
				display: flex;
				margin-bottom: 24px;

				.info{
					display: flex;
					font-size: 16px;
					line-height: 24px;
					font-weight: 400;
					color: #86909c;
					white-space: nowrap;
					margin-left: auto;

					.count{
						font-weight: 500;
						color: #ff7d00;
						margin: 0 0.2em
					}
				}
			}
		}

		.other-day {
			color: #86909c;
		}
	}
</style>
