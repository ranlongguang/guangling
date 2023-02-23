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
		'../assets/image/xiaolinger1.jpg','../assets/image/xiaolinger2.jpg','../assets/image/xiaolinger3.jpg','../assets/image/xiaolinger4.jpg',
		'../assets/image/xiaolinger5.jpg','../assets/image/xiaolinger6.jpg','../assets/image/xiaolinger7.jpg','../assets/image/xiaolinger8.jpg',
		'../assets/image/xiaolinger9.jpg','../assets/image/xiaolinger10.jpg','../assets/image/xiaolinger11.jpg','../assets/image/xiaolinger12.jpg',
		'../assets/image/xiaolinger13.jpg','../assets/image/xiaolinger14.jpg','../assets/image/xiaolinger15.jpg',
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