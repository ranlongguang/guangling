<template>
	<div class="shop-list">
		<!-- <div class="shop-item" v-for="(item, index) in imgList" :key="item">
			<img :src="getImgSrc(item)" alt="">
		</div> -->
		<div id="banner1">
			<div class="banner-view"></div>
			<div class="banner-btn"></div>
			<div class="banner-number"></div>
			<div class="banner-progres"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { onBeforeMount, onMounted } from 'vue';
	import FragmentBanner from '../assets/js/banner.js';
	let imgList: string[] = [
		'/image/xiaolinger1.jpg','/image/xiaolinger2.jpg','/image/xiaolinger3.jpg',
		'/image/xiaolinger5.jpg','/image/xiaolinger6.jpg','/image/xiaolinger7.jpg','/image/xiaolinger8.jpg',
		'/image/xiaolinger9.jpg','/image/xiaolinger10.jpg','/image/xiaolinger11.jpg','/image/xiaolinger12.jpg',
		'/image/xiaolinger13.jpg','/image/xiaolinger14.jpg','/image/xiaolinger15.jpg',
	];
	
	const getImgSrc = (name: string): string => {
		return new URL(name, import.meta.url).href;
	}
	
	onMounted(() => {
		console.log('mounted')
		let width: number = Math.min(document.documentElement.clientWidth, 600);
		var banner = new FragmentBanner({
			container : "#banner1",//选择容器 必选
			imgs : imgList,//图片集合 必选
			size : {
				width,
				height : width * 1.5,
			},//容器的大小 可选
			//行数与列数 可选
			grid : {
				line : 12,
				list : 14
			},
			index: 0,//图片集合的索引位置 可选
			type : 2,//切换类型 1 ， 2 可选
			boxTime : 5000,//小方块来回运动的时长 可选
			fnTime : 10000//banner切换的时长 可选
		});
	})
	onBeforeMount(() => {
		console.log('beforeMount')
	})
	console.log('setup');
</script>
<style>
	.banner-view i {
		position: relative;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		float: left;
		background-repeat: no-repeat;
	}
	.banner-view i span {
		font-size: 20px;
		font-weight: bold;
		animation: shadow 1s ease-in-out infinite alternate;
	}
	
	@keyframes shadow {
	  to{
	    color: #ff0266;
	    text-shadow: 20px 0 70px #ff0266;
	  }
	}
</style>
<style scoped lang="less">
	#banner1 {
		margin: 0 auto;
	}
	.shop-list {
		overflow: hidden;
		min-height: 100vh;
		min-width: 100vw;
		background-color: #000;
		position: relative;
		display: flex;
		flex-wrap: wrap;
		
		.shop-item {
			width: 5vw;
			
			img {
				display: block;
				width: 100%;
			}
		}
	}
</style>