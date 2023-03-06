<template>
	<nav class="nav">
	  <input type="checkbox" class="nav__cb" id="menu-cb"/>
	  <div class="nav__content">
	    <div class="nav__items">
				<router-link :to="item.id" tag="li" class="nav__item" v-for="item in navList" :key="item.id">
					<span class="nav__item-text">{{ item.name }}</span>
				</router-link>
	    </div>
	  </div>
	  <label class="nav__btn" for="menu-cb"></label>
	</nav>
	<router-view></router-view>
</template>

<script lang="ts" setup>
	interface navItem {
		name: string,
		id: string
	}
	
	let navList: navItem[] = [
		{name: '首页', id: '/'},
		{name: '美女', id: '/glOne'},
		{name: '烟花', id: 'girlFriend1'},
		{name: '太古仙尊', id: 'girlFriend3'},
		{name: '贵州', id: 'girlFriend4'},
		{name: '重庆', id: 'girlFriend5'},
	]
</script>

<style scoped lang="less">
	.nav {
	  overflow: hidden;
	  position: absolute;
	  right: 30px;
	  top: 30px;
		z-index: 1;
	  width: auto;
	  height: 90px;
	  background: #fff;
	  border-radius: 45px;
	  box-shadow: 0 10px 35px rgba(0,0,0,0.2);
	
	  &__cb {
	    z-index: -1000;
	    position: absolute;
	    left: 0;
	    top: 0;
	    opacity: 0;
	    pointer-events: none;
	  }
	
	  &__content {
	    position: relative;
	    width: 90px;
	    height: 100%;
	    transition: width 1s cubic-bezier(0.49,-0.3,.68,1.23);
	
	    .nav__cb:checked ~ & {
	      transition: width 1s cubic-bezier(.48,.43,.29,1.3);
	      width: 558px;
	    }
	  }
	
	  &__items {
	    position: relative;
	    width: 558px;
	    height: 100%;
	    padding-left: 20px;
	    padding-right: 118px;
	    list-style-type: none;
	    font-size: 0;
	  }
	
	  &__item {
	    display: inline-block;
	    vertical-align: top;
	    width: 70px;
	    text-align: center;
	    color: #6C7784;
	    font-size: 14px;
	    line-height: 90px;
	    font-family: Helvetica, Arial, sans-serif;
	    font-weight: bold;
	    perspective: 1000px;
	    transition: color 0.3s;
	    cursor: pointer;
	
	    &:hover {
	      color: darken(#EAFBFF, 50%);
	    }
	
	    &-text {
	      display: block;
	      height: 100%;
	      transform: rotateY(-70deg);
	      opacity: 0;
	      transition: transform 0.7s cubic-bezier(.48,.43,.7,2.5), opacity 0.7s;
	
	      .nav__cb:checked ~ .nav__content & {
	        transform: rotateY(0);
	        opacity: 1;
	        transition: transform 0.7s cubic-bezier(.48,.43,.7,2.5), opacity 0.2s;
	      }
				
				.nav__item:nth-child(1) & {
				  transition-delay: 0.3s;
				}
					
				.nav__cb:checked ~ .nav__content .nav__item:nth-child(1) & {
				  transition-delay: 0s;
				}
				.nav__item:nth-child(2) & {
				  transition-delay: 0.2s;
				}
					
				.nav__cb:checked ~ .nav__content .nav__item:nth-child(2) & {
				  transition-delay: 0.2s;
				}
				.nav__item:nth-child(3) & {
				  transition-delay: 0.1s;
				}
					
				.nav__cb:checked ~ .nav__content .nav__item:nth-child(3) & {
				  transition-delay: 0.2s;
				}
				.nav__item:nth-child(4) & {
				  transition-delay: 0;
				}
					
				.nav__cb:checked ~ .nav__content .nav__item:nth-child(4) & {
				  transition-delay: 0.3s;
				}
	    }
	  }
	
	  &__btn {
	    position: absolute;
	    right: 0;
	    top: 0;
	    width: 90px;
	    height: 90px;
	    padding: 36px 31px;
	    cursor: pointer;
	
	    &:before,
	    &:after {
	      content: "";
	      display: block;
	      width: 28px;
	      height: 4px;
	      border-radius: 2px;
	      background: #096DD3;
	      transform-origin: 50% 50%;
	      transition: transform 1s cubic-bezier(.48,.43,.29,1.3), background-color 0.3s;
	    }
	
	    &:before {
	      margin-bottom: 10px;
	    }
	
	    &:hover {
	      &:before,
	      &:after {
	        background: darken(#EAFBFF, 50%);
	      }
	    }
	
	    .nav__cb:checked ~ & {
	
	      &:before {
	        transform: translateY(7px) rotate(-225deg);
	      }
	
	      &:after {
	        transform: translateY(-7px) rotate(225deg);
	      }
	    }
	  }
	}
</style>