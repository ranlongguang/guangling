<template>
    <div class="partic">
      <Particles
        id="tsparticles"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        :options="options"
      />
    </div>
		
		<div class="img-wrap">
			<ul class="img-box">
				<li class="img-item" v-for="(item, index) in imgList" :key="index">
					<img :src="item.src" alt="">
					<div class="des">
						<h3>冉灵儿</h3>
						<div class="div1"></div>
						<p>{{ item.desc }}</p>
					</div>
				</li>
			</ul>
		</div>
</template>
<script setup lang='ts'>
import { reactive, onMounted, ref } from 'vue'
import { loadFull } from "tsparticles"
import type { Engine } from 'tsparticles-engine'

interface objItem {
	src: string,
	desc: string
}

let imgList: objItem[] = [
	{src: '/image/xiaolinger1.jpg', desc: '她貌美如花，宛如雪莲，一支情歌，铄石溶金。性格单纯而朴野，举止文雅而秀逸。她的出场，一袭春意缱绻，犹如林中彩凤，顿引百鸟回翔。'},
	{src: '/image/xiaolinger3.jpg', desc: '优雅，就仿佛看到一个宛若芝兰的女子，优雅款款而来，却由内到外漫溢。从古至今，优雅的女子，如彤彤黎明。'},
	{src: '/image/xiaolinger5.jpg', desc: '脸若银盘，眼似水杏，唇不点而红，眉不画而翠。'},
	{src: '/image/xiaolinger6.jpg', desc: '一绺靓丽的秀发微微飞舞，细长的柳眉，一双眼睛流盼妩媚，秀挺的瑶鼻，玉腮微微泛红，娇艳欲滴的唇，洁白如雪的娇靥晶莹如玉，如玉脂般的雪肌肤色奇美，身材娇小，温柔绰约'},
	{src: '/image/xiaolinger7.jpg', desc: '林下风气，眉目如画，眉清目秀，美如冠玉，靡颜腻理'},
	{src: '/image/xiaolinger8.jpg', desc: '皎皎兮似轻云之蔽月，飘飘兮若回风之流雪。 只见一个身穿藕色纱衫的女郎，脸朝着花树，身形苗条，长发披向背心，用一根银色丝带轻轻挽住。'},
	{src: '/image/xiaolinger9.jpg', desc: '出淡淡光晕，映得她更是粉装玉琢一般'},
	{src: '/image/xiaolinger10.jpg', desc: '美人如花隔云端！上有青冥之长天，下有渌水之波澜。'},
	{src: '/image/xiaolinger11.jpg', desc: '优雅的女生具有闲观庭前花，静赏云卷舒的静默；她们不善张扬，更不会孤芳自赏，淡淡的如同一泓清水，幽雅的女生虽没有牡丹的娇艳，也不会有茉莉的芬芳'},
	{src: '/image/xiaolinger12.jpg', desc: '绝代有佳人，幽居在空谷。 回眸一笑百媚生，六宫粉黛无颜色。'},
	{src: '/image/xiaolinger13.jpg', desc: '挑眉淡扫如远山，凤眉明眸，顾盼流离间皆是勾魂摄魄，玲珑腻鼻，肤若白雪，朱唇一点更似雪中一点红梅孤傲妖冶，简直活脱脱一个从锦画中走出的人间仙子'},
	{src: '/image/xiaolinger14.jpg', desc: '她秀雅绝俗，自有一股轻灵之气，肌肤娇嫩、神态悠闲、美目流盼、桃腮带笑、含辞未吐、气若幽兰，说不尽的温柔可人。'},
	{src: '/image/xiaolinger15.jpg', desc: '落落晨星，斜雨竹林，皆不如先生眉眼动人。'},
];

const particlesInit = async (engine:Engine) => {
	await loadFull(engine)
}

const particlesLoaded = async (container:any) => {
	// console.log('Particles container loaded', container)
}
const options = reactive({
      background: {
        color: {
          value: '#000' // 粒子颜色
        }
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push' // 可用的click模式有: "push", "remove", "repulse", "bubble"。
          },
          onHover: {
            enable: true,
            mode: 'grab' // 可用的hover模式有: "grab", "repulse", "bubble"。
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#ffffff'
        },
        links: {
          color: '#ffffff', // '#dedede'。线条颜色。
          distance: 150, // 线条长度
          enable: true, // 是否有线条
          opacity: 0.5, // 线条透明度。
          width: 1 // 线条宽度。
        },
        collisions: {
          enable: false
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: false,
          speed: 4, // 粒子运动速度。
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 80 // 粒子数量。
        },
        opacity: {
          value: 0.5 // 粒子透明度。
        },
        shape: {
          type: 'circle' // 可用的粒子外观类型有："circle","edge","triangle", "polygon","star"
        },
        size: {
          random: true,
          value: 5
        }
      },
      detectRetina: true
    })

</script>

<style scoped lang="less">
	#tsparticles {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	
	.img-wrap {
		padding: 20px;
	}
	
	.img-box {
		display: flex;
		flex-wrap: wrap;
		// margin-right: -40px;
		padding-bottom: 40px;
		max-width: 1000px;
		margin: 0 auto;
		
		.img-item {
			margin-top: 20px;
			width: calc((100% - 40px) / 3);
			overflow: hidden;
			border: 3px solid #fff;
			border-radius: 10px;
			opacity: .5;
			position: relative;
			transition: all .3s;
			
			.des {
				position: absolute;
				padding: 20px 0;
				bottom: 0;
				left: 0;
				color: #fff;
				transition: all .5s;
				background-color: rgba(0, 0, 0, .8);
				transform: translateY(100%);
				
				.div1 {
					width: 0;
					height: 1px;
					background-color: #fff;
					margin: 12px 0;
					transition: all .5s;
					transform-origin: center;
					transition-delay: .5s;
				}
				
				p, h3 {
					padding: 0 20px;
				}
			}
			
			&:hover {
				opacity: 1;
				
				.des {
					transform: translateY(0%);
					
					.div1 {
						width: 100%;
					}
				}
				
				img {
					transform: scale(1.3);
				}
			}
			
			&:not(:nth-child(3n - 2)) {
				margin-left: 20px;
			}
			
			img {
				display: block;
				width: 100%;
				transition: all .5s;
			}
		}
	}
</style>