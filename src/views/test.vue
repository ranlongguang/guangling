<template>
	<div @click="changeNum">{{ str + str2 + num + double }}</div>
</template>

<script setup lang="ts">
	import { ref, computed, watch } from 'vue';
	let str = ref('语法学习');
	let str2 = '非响应式';
	let num = ref(0);
	const changeNum = () => {
		num.value++;
	}
	const double = computed(() => num.value * 2);
	watch(num, (newVal, oldVal) => {
		console.log(999, newVal)
	}, {
		immediate: true
	})
</script>

<style>
</style>