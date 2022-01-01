<template>
	<div class="mine-page">
		<van-nav-bar
			title="个人中心"
			left-arrow
			@click-left="onClickLeft">
			<template #right>
				<van-popover v-model:show="showPopover" :actions="popActions" @select="onSelectPop"
							 placement="bottom-end">
					<template #reference>
						<van-icon name="ellipsis" size="18"/>
					</template>
				</van-popover>
			</template>
		</van-nav-bar>
		<div class="profile-wrapper">
			<div class="avatar">
				<van-image round width="60" height="60" :src="NoAvatar"/>
			</div>
			<div class="name-wrapper">
				<van-image width="33" height="16" :src="VipLogo"/>
				<div class="name">Admin</div>
			</div>
		</div>
		<van-grid :border="false">
			<van-grid-item icon="photo-o" text="邀请">
				<template #icon>
					<div class="number">0</div>
				</template>
			</van-grid-item>
			<van-grid-item icon="photo-o" text="月票">
				<template #icon>
					<div class="number">0</div>
				</template>
			</van-grid-item>
			<van-grid-item icon="photo-o" text="金币">
				<template #icon>
					<div class="number">0</div>
				</template>
			</van-grid-item>
			<van-grid-item icon="photo-o" text="去充值">
				<template #icon>
					<van-image width="28" height="28" :src="Recharge"/>
				</template>
			</van-grid-item>
			<van-cell is-link value="前往开通" @click="cellClick">
				<template #icon>
					<div class="left-icon">
						<van-image width="17" height="17" :src="Vip2"/>
					</div>
					<div class="left-icon">
						<van-image width="60" :src="SuperVip"/>
					</div>
				</template>
				<template #title></template>
			</van-cell>
		</van-grid>
		<Space/>
		<van-cell-group :border="false">
			<van-cell title="我的书架" :border="false" @click="cellClick">
				<template #icon>
					<div class="left-icon">
						<van-image width="17" height="17" :src="BookRack"/>
					</div>
				</template>
				<template #value>
					<span class="small">已收藏 0 本</span>
				</template>
			</van-cell>
			<van-cell title="我阅读过" :border="false" @click="cellClick">
				<template #icon>
					<div class="left-icon">
						<van-image width="17" height="17" :src="History"/>
					</div>
				</template>
				<template #value>
					<span class="small">历史阅读 0 本</span>
				</template>
			</van-cell>
			<van-cell title="我的书单" :border="false" @click="cellClick">
				<template #icon>
					<div class="left-icon">
						<van-image width="17" height="17" :src="MarkHover"/>
					</div>
				</template>
				<template #value>
					<span class="small">创建 0 / 收藏 0</span>
				</template>
			</van-cell>
		</van-cell-group>
		<Space/>
		<van-cell-group :border="false">
			<van-cell title="我的推荐" :border="false" @click="cellClick">
				<template #icon>
					<div class="left-icon">
						<van-image width="17" height="17" :src="Recommend"/>
					</div>
				</template>
				<template #value>
					<span class="small">推荐了 0 本好书</span>
				</template>
			</van-cell>
			<van-cell title="我评论过" :border="false" @click="cellClick">
				<template #icon>
					<div class="left-icon">
						<van-image width="17" height="17" :src="Comment"/>
					</div>
				</template>
				<template #value>
					<span class="small">共评论了 0 条</span>
				</template>
			</van-cell>
			<van-cell title="我的签到" :border="false" @click="cellClick">
				<template #icon>
					<div class="left-icon">
						<van-image width="17" height="17" :src="Sign"/>
					</div>
				</template>
				<template #value>
					<template v-if="true">
						<van-tag round type="danger">未签到</van-tag>
					</template>
					<template v-else>
						<span class="small">连续签到 0 次</span>
					</template>
				</template>
			</van-cell>
			<van-cell title="幸运抽奖" :border="false" is-link value="去抽奖" @click="cellClick">
				<template #icon>
					<div class="left-icon">
						<van-image width="17" height="17" :src="Invite"/>
					</div>
				</template>
			</van-cell>
			<van-cell title="我的评分" :border="false" @click="cellClick">
				<template #icon>
					<div class="left-icon">
						<van-image width="17" height="17" :src="RankCollect"/>
					</div>
				</template>
				<template #value>
					<span class="small">对 0 本书进行了评分</span>
				</template>
			</van-cell>
		</van-cell-group>
		<Space/>
		<van-cell-group :border="false">
			<van-cell title="关于我们" :border="false" @click="cellClick">
				<template #icon>
					<div class="left-icon">
						<van-image width="17" height="17" :src="AboutUs"/>
					</div>
				</template>
			</van-cell>
			<van-cell title="留言反馈" :border="false" @click="cellClick">
				<template #icon>
					<div class="left-icon">
						<van-image width="17" height="17" :src="MessageFeedback"/>
					</div>
				</template>
			</van-cell>
		</van-cell-group>
		<Space/>
		<div class="logout">
			<van-button type="danger" block @click="logout">退出登录</van-button>
		</div>
	</div>
</template>

<script setup>
	import { useRouter } from 'vue-router'
	import { ref } from 'vue'
	import VipLogo from '../assets/images/vip.png'
	import NoAvatar from '../assets/images/noavatar.gif'
	import Recharge from '../assets/images/recharge.png'
	import BookRack from '../assets/images/bookrack.png'
	import History from '../assets/images/history.png'
	import MarkHover from '../assets/images/mark_hover.png'
	import Recommend from '../assets/images/recomment.png'
	import Comment from '../assets/images/comment.png'
	import Sign from '../assets/images/sign.png'
	import Invite from '../assets/images/invite.png'
	import RankCollect from '../assets/images/rank_collect.png'
	import AboutUs from '../assets/images/about_us.png'
	import MessageFeedback from '../assets/images/message_feedback.png'
	import Vip2 from '../assets/images/vip2.png'
	import SuperVip from '../assets/images/super_vip.png'
	import Space from '../components/Space.vue'
	import { Toast } from 'vant'

	const router = useRouter()

	const showPopover = ref(false)
	const popActions = [
		{text: '前往首页', name: 'Home'},
		{text: '搜素小说', name: 'Search'},
	]

	const onClickLeft = () => {
		router.go(-1)
	}

	const onSelectPop = (action) => {
		console.log(action)
	}

	const cellClick = () => {
		Toast('开发中')
	}

	const logout = () => {
		console.log('logout event')
	}

</script>

<style lang="less" scoped>
.mine-page {
	.profile-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1.25rem 0;

		.name-wrapper {
			display: flex;
			margin-left: -2.5rem;
			padding: .625rem 0;

			.name {
				color: #323237;
				font-weight: 700;
				margin-left: .5rem;
			}
		}
	}

	.number {
		font-weight: 700;
		color: #323237;
		font-size: 1.3125rem;
		line-height: 1.97rem;
	}

	.small{
		font-size: .75rem;
	}

	.left-icon{
		display: flex;
		align-items: center;
		margin-right: .25rem;
	}

	.logout{
		margin: 2rem 1rem;
	}
}

</style>
