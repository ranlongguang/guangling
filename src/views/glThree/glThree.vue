<template>
	<div class="container">
		<div id="container"></div>
		<div id="menu">
			<button id="table">表格</button>
			<button id="sphere">球形</button>
			<button id="helix">螺旋</button>
			<button id="grid">网格</button>
		</div>
		<div id="popup"></div>
		<audio id="music" src="/public/video/Love.mp3" loop=""></audio>
	</div>
</template>

<script setup>
	import './js/three.js';
	import './js/tween.min.js';
	import './js/TrackballControls.js';
	import './js/OrbitControls.js';
	import './js/CSS3DRenderer.js';
	
	import pageInit from './js/pageInit.js';
	import { onMounted } from 'vue';
	
	onMounted(() => {
		pageInit();
	})
</script>

<style>
html, body {
	height: 100%;
}

body {
	background-color: #000000;
	margin: 0;
	font-family: Helvetica, sans-serif;;
	overflow: hidden;
}

a {
	color: #ffffff;
}

#popup {
	transition: all .5s;
	transform: scale(0);
}

#info {
	position: absolute;
	width: 100%;
	color: #ffffff;
	padding: 5px;
	font-family: Monospace;
	font-size: 13px;
	font-weight: bold;
	text-align: center;
	z-index: 1;
}

#menu {
	position: fixed;
	bottom: 20px;
	width: 100%;
	text-align: center;
}

#popup{
	
}

.element {
	width: 120px;
	height: 160px;
	box-shadow: 0px 0px 12px rgba(0,255,255,0.5);
	border: 1px solid rgba(127,255,255,0.25);
	text-align: center;
	cursor: default;
}

.element:hover {
	box-shadow: 0px 0px 12px rgba(0,255,255,0.75);
	border: 1px solid rgba(127,255,255,0.75);
}

	.element .number {
		position: absolute;
		top: 20px;
		right: 20px;
		font-size: 12px;
		color: rgba(127,255,255,0.75);
	}

	.element .symbol {
		position: absolute;
		top: 40px;
		left: 0px;
		right: 0px;
		font-size: 60px;
		font-weight: bold;
		color: rgba(255,255,255,0.75);
		text-shadow: 0 0 10px rgba(0,255,255,0.95);
	}

	.element .details {
		position: absolute;
		bottom: 15px;
		left: 0px;
		right: 0px;
		font-size: 12px;
		color: rgba(127,255,255,0.75);
	}

button {
	color: rgba(127,255,255,0.75);
	background: transparent;
	outline: 1px solid rgba(127,255,255,0.75);
	border: 0px;
	padding: 5px 10px;
	cursor: pointer;
}
button:hover {
	background-color: rgba(0,255,255,0.5);
}
button:active {
	color: #000000;
	background-color: rgba(0,255,255,0.75);
}
</style>