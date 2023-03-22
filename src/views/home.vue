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
				<li class="img-item" v-for="item in imgList" :key="item">
					<img :src="item" alt="">
					<div class="des">
						<h3>冉灵儿</h3>
						<div class="div1"></div>
						<p>她貌美如花，宛如雪莲，一支情歌，铄石溶金。性格单纯而朴野，举止文雅而秀逸。她的出场，一袭春意缱绻，犹如林中彩凤，顿引百鸟回翔。</p>
					</div>
				</li>
			</ul>
		</div>
</template>
<script setup lang='ts'>
import { reactive, onMounted, ref } from 'vue'
import { loadFull } from "tsparticles"
import type { Engine } from 'tsparticles-engine'

let imgList: string[] = [
	'/image/xiaolinger1.jpg','/image/xiaolinger2.jpg','/image/xiaolinger3.jpg',
	'/image/xiaolinger5.jpg','/image/xiaolinger6.jpg','/image/xiaolinger7.jpg','/image/xiaolinger8.jpg',
	'/image/xiaolinger9.jpg','/image/xiaolinger10.jpg','/image/xiaolinger11.jpg','/image/xiaolinger12.jpg',
	'/image/xiaolinger13.jpg','/image/xiaolinger14.jpg','/image/xiaolinger15.jpg',
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