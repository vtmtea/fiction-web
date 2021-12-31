<template>
	<div class="home-page">
		<router-view></router-view>
		<van-tabbar route active-color="#f55">
			<van-tabbar-item :to="{name: 'Shelf'}" icon="newspaper-o">书架</van-tabbar-item>
			<van-tabbar-item :to="{name: 'Books'}" icon="wap-home-o">书城</van-tabbar-item>
			<van-tabbar-item to="/mine" icon="user-o">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script setup>

</script>

<style scoped>

</style>
