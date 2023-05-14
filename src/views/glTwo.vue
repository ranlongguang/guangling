<template>
	<div class="img-box">
		<img :src="item.src" alt="" @click="dds" v-for="item in imgList" :key="item.src">
	</div>
	<div class="video-box">
		<video class="page-bg" muted loop autoplay src="/public/video/video1.mp4" v-for="item in 3" :key="item"></video>
	</div>
</template>

<script lang="ts" setup>
	interface objItem {
		src: string,
		desc: string
	}
	
	let imgList: objItem[] = [
		{src: '/image/4-1-1.jpg', desc: '她貌美如花，宛如雪莲，一支情歌，铄石溶金。性格单纯而朴野，举止文雅而秀逸。她的出场，一袭春意缱绻，犹如林中彩凤，顿引百鸟回翔。'},
		{src: '/image/4-1-2.jpg', desc: '优雅，就仿佛看到一个宛若芝兰的女子，优雅款款而来，却由内到外漫溢。从古至今，优雅的女子，如彤彤黎明。'},
		{src: '/image/4-1-3.jpg', desc: '脸若银盘，眼似水杏，唇不点而红，眉不画而翠。'},
		{src: '/image/4-1-4.jpg', desc: '一绺靓丽的秀发微微飞舞，细长的柳眉，一双眼睛流盼妩媚，秀挺的瑶鼻，玉腮微微泛红，娇艳欲滴的唇，洁白如雪的娇靥晶莹如玉，如玉脂般的雪肌肤色奇美，身材娇小，温柔绰约'},
		{src: '/image/4-1-5.jpg', desc: '林下风气，眉目如画，眉清目秀，美如冠玉，靡颜腻理'},
		{src: '/image/4-1-6.jpg', desc: '皎皎兮似轻云之蔽月，飘飘兮若回风之流雪。 只见一个身穿藕色纱衫的女郎，脸朝着花树，身形苗条，长发披向背心，用一根银色丝带轻轻挽住。'},
		{src: '/image/4-1-7.jpg', desc: '出淡淡光晕，映得她更是粉装玉琢一般'},
		{src: '/image/4-1-8.jpg', desc: '美人如花隔云端！上有青冥之长天，下有渌水之波澜。'},
		{src: '/image/4-1-9.jpg', desc: '优雅的女生具有闲观庭前花，静赏云卷舒的静默；她们不善张扬，更不会孤芳自赏，淡淡的如同一泓清水，幽雅的女生虽没有牡丹的娇艳，也不会有茉莉的芬芳'},
		{src: '/image/4-1-10.jpg', desc: '绝代有佳人，幽居在空谷。 回眸一笑百媚生，六宫粉黛无颜色。'},
		{src: '/image/4-1-11.jpg', desc: '挑眉淡扫如远山，凤眉明眸，顾盼流离间皆是勾魂摄魄，玲珑腻鼻，肤若白雪，朱唇一点更似雪中一点红梅孤傲妖冶，简直活脱脱一个从锦画中走出的人间仙子'},
		{src: '/image/4-1-12.jpg', desc: '她秀雅绝俗，自有一股轻灵之气，肌肤娇嫩、神态悠闲、美目流盼、桃腮带笑、含辞未吐、气若幽兰，说不尽的温柔可人。'},
		{src: '/image/4-1-13.jpg', desc: '落落晨星，斜雨竹林，皆不如先生眉眼动人。'},
		{src: '/image/4-1-14.jpg', desc: '落落晨星，斜雨竹林，皆不如先生眉眼动人。'},
		{src: '/image/4-1-15.jpg', desc: '落落晨星，斜雨竹林，皆不如先生眉眼动人。'},
	];
</script>
<style>
	mark {
		color: #ef463c;
	}
</style>
<style lang="less" scoped>
	.img-box {
		padding: 20px 0px;
		display: flex;
		flex-wrap: wrap;
		position: relative;
		z-index: 1;
	}
	
	.img-box img {
		display: block;
		width: 45%;
		margin: 0 auto;
		border-radius: 10px;
		margin-top: 50px;
		opacity: .3;
		transition: all .3s;
		
		&:hover {
			opacity: 1;
		}
	}
	
	.video-box {
		display: flex;
		justify-content: space-around;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
	}
	.page-bg {
		width: auto;
		height: 100%;
	}
</style>