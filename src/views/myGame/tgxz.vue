<template>
	<div class="tgxz">
		<h1>太古仙尊排行榜</h1>
		<div class="table">
			<div class="table-header">
				<div class="header-cel" v-for="(item, index) in headerList" :key="index">
					<span>{{ item.name }}</span>
					<div class="order" v-if="item.order" @click="changeOrder(item)">
						<span :class="['order-up', {active: item.order === 2}]"></span>
						<span :class="['order-down', {active: item.order === 3}]"></span>
					</div>
				</div>
			</div>
			<div class="table-body">
				<div class="table-row" v-for="(item, index) in list" :key="index">
					<div class="table-cel">{{ item.name }}</div>
					<div class="table-cel">{{ item.area }}</div>
					<div class="table-cel">{{ realmText[item.realm] }}</div>
					<div class="table-cel">{{ item.position }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { reactive } from 'vue';
	import dataList from './dataList.js';
	import realmText from './realmText.js';
	document.title = '太古仙尊排行榜';
	let list = reactive(dataList);
	const headerList = [
		{name: '角色名', id: 'name'},
		{name: '区服', id: 'area'},
		{name: '境界', id: 'realm', order: 1},
		{name: '论剑战力', id: 'position', order: 1},
	];
	
	const changeOrder = (data) => {
		headerList.forEach(item => {
			if(item.order && item.id !== data.id) item.order = 1;
		});
		let order = data.order === 3 ? 2 : 3;
		data.order = order;
		list.sort((a, b) => {
			if(order === 3) return b[data.id] - a[data.id];
			return a[data.id] - b[data.id];
		});
	}
</script>

<style scoped lang="less">
	.tgxz {
		padding: 10px;
		background-color: #fff;
		margin: 20px auto;
		width: calc(100vw - 30px);
		height: calc(100vh - 40px);
		max-width: 600px;
		overflow: auto;
		border-radius: 5px;
		font-size: 12px;
		
		h1 {
			text-align: center;
			padding-bottom: 10px;
		}
		
		.table {
			border: 1px solid #e6e6e6;
		}
		
		.table-header {
			display: flex;
			
			.header-cel {
				font-weight: bold;
				line-height: 36px;
				font-size: 14px;
				padding: 0 7px;
				position: relative;
				flex: 1;
				
				.order {
					position: absolute;
					top: 11px;
					right: 7px;
					
					span {
						display: block;
						width: 0;
						height: 0;
						border: 3px solid transparent;
						transform: rotate(45deg);
						cursor: pointer;
						
						&.order-up {
							border-top-color: #000;
							border-left-color: #000;
							position: relative;
							top: 3px;
							
							&.active {
								border-top-color: #ef463c;
								border-left-color: #ef463c;
							}
						}
						
						&.order-down {
							border-bottom-color: #000;
							border-right-color: #000;
							
							&.active {
								border-bottom-color: #ef463c;
								border-right-color: #ef463c;
							}
						}
					}
				}
				
				&:not(:last-child) {
					border-right: 1px solid #e6e6e6;
				}
			}
		}
		
		.table-row {
			display: flex;
			
			.table-cel {
				flex: 1;
				line-height: 36px;
				border-top: 1px solid #e6e6e6;
				padding: 0 7px;
				
				&.name {
					color: #ef463c;
				}
				
				&:not(:last-child) {
					border-right: 1px solid #e6e6e6;
				}
			}
		}
	}
</style>