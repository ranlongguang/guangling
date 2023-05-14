<template>
	<gl-nav></gl-nav>
	<router-view></router-view>
</template>
<script setup lang='ts'>
	import glNav from './components/glNav.vue';
	
</script>

<style>
	body,html {
		background-color: #000;
	}
</style>