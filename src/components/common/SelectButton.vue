<template>
	<div>
		<button class="button-sm" v-for="(selectItem,index) in selectList" :key="index" @click="checkedItem(selectItem)" :class="{'button-sm-active':selectItem.code == selectModel,'button-sm-disabled':selectItem.disabled}">
			{{selectItem.desc}}
		</button>
	</div>
</template>
<script>
export default {
		name: 'selectButton',
		props: ['selectList','selectModel'],  
		data(){
			return{
				
			}
		},
		methods:{
			//选择一个item
			checkedItem(selectItem){
				//如果item里面disabled属性等于true,不能选择
				if(!selectItem.disabled){
          this.$emit('update:selectModel', selectItem.code)
          this.$emit('clickItem')
				}
			}
		},
		created(){
		}
}
</script>
<style lang="scss" scoped>
</style>

