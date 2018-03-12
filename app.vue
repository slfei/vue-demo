<template>
	<div>
		{{name}}
	    <img src="/assets/logo.png" height="200" width="200" />
	
	</div>
	
</template>

<script>
	export default {
		data(){
			return {
				'name':"vue hello "
			}
		}
	}
</script>

<style scoped="scoped">
	div{
		color:blue;
	}
	
</style>