<template>
	<test :title="grilFriend" @sendData="getChild"></test>
</template>
<script setup lang='ts'>
	import { ref } from 'vue';
	import test from './components/test.vue';
	const getChild = (data: string):void => {
		console.log(data);
		grilFriend.value = data;
	}
	let grilFriend = ref<string>('rxl');
</script>

<style scoped>
</style>