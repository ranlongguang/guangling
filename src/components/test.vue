<template>
	<div class="shop-list">
		<div class="shop-item" :style="{left: (index * 320 + 20) + 'px'}" v-for="(item, index) in imgList" :key="item">
			<img :src="getImgSrc(item)" alt="">
		</div>
	</div>
</template>

<script setup lang="ts">
	import { onBeforeMount, onMounted } from 'vue';
	let imgList: string[] = [
		'/image/xiaolinger1.jpg','/image/xiaolinger2.jpg','/image/xiaolinger3.jpg','/image/xiaolinger4.jpg',
		'/image/xiaolinger5.jpg','/image/xiaolinger6.jpg','/image/xiaolinger7.jpg','/image/xiaolinger8.jpg',
		'/image/xiaolinger9.jpg','/image/xiaolinger10.jpg','/image/xiaolinger11.jpg','/image/xiaolinger12.jpg',
		'/image/xiaolinger13.jpg','/image/xiaolinger14.jpg','/image/xiaolinger15.jpg',
	];
	
	const getImgSrc = (name: string): string => {
		return new URL(name, import.meta.url).href;
	}
	
	onMounted(() => {
		console.log('mounted')
	})
	onBeforeMount(() => {
		console.log('beforeMount')
	})
	console.log('setup');
</script>

<style scoped lang="less">
	.shop-list {
		min-height: 100vh;
		min-width: 100vw;
		background-color: #000;
		position: relative;
		display: flex;
		flex-wrap: wrap;
		
		.shop-item {
			width: 320px;
			// position: absolute;
			margin-right: 30px;
			
			img {
				display: block;
				width: 100%;
			}
		}
	}
</style>