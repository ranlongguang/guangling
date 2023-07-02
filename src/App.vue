<template>
	<gl-nav v-if="search"></gl-nav>
	<router-view></router-view>
</template>
<script setup lang='ts'>
	import glNav from './components/glNav.vue';
	let search = location.search.split('=')[1];
	
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}
	body,html {
		background-color: #000;
	}
</style>