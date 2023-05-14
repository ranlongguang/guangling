<template>
	<nav class="nav">
	  <ul :class="['nav-list', {'nav-show': show}]">
			<li :class="['nav-item', {active: currNav.id === item.id}]" @click="changeNav(item)" v-for="item in navList" :key="item.id">{{ item.name }}</li>
		</ul>
		<div class="nav-swith" @click="navSwitch">{{ switchText }}</div>
	</nav>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';
	let show = ref<boolean>(false);
	let router = useRouter();
	let switchText = ref<string>('展开');
	
	// 处理点击事件函数
	const navSwitch = () => {
		show.value = !show.value;
		if(show.value) {
			switchText.value = '收起';
		}else {
			switchText.value = '展开';
		}
	}
	
	const changeNav = data => {
		currNav.value = data;
		router.push(data.id);
	}
	
	interface navItem {
		name: string,
		id: string
	}
	
	let navList: navItem[] = [
		{name: '首页', id: '/'},
		{name: '美女', id: '/glOne'},
		{name: '烟花', id: '/glTwo'},
		{name: '太古仙尊', id: '/glThree'},
		{name: '贵州', id: 'girlFriend4'},
		{name: '重庆', id: 'girlFriend5'},
	]
	let currNav = ref<navItem>(navList[0]);
</script>

<style scoped lang="less">
	.nav {
		height: 100%;
		position: fixed;
		left: 0px;
		top: 0px;
		z-index: 999;
		
		
		.nav-list {
			height: 100%;
			width: 0;
			white-space: nowrap;
			border-radius: 0 10px 10px 0;
			background-color: #fff;
			transition: all .2s;
			overflow: hidden;
			
			&.nav-show {
				width: 150px;
			}
			
			.nav-item {
				padding: 10px 0 10px 30px;
				cursor: pointer;
				transition: all .3s;
				
				&:hover, &.active {
					color: #ef463c;
					background-color: #f0f0f0;
				}
			}
		}
		
		.nav-swith {
			position: absolute;
			right: -50px;
			top: 50%;
			transform: translateY(-50%);
			z-index: 1;
			width: 100px;
			height: 100px;
			line-height: 100px;
			text-align: right;
			padding-right: 10px;
			background-color: #fff;
			border-radius: 50%;
			cursor: pointer;
			transition: all .3s;
			
			&:hover {
				color: #ef463c;
			}
		}
	}
</style>