<template>
	<div id="container">
		<!-- <h1>{{ user }} {{ token }}</h1> -->
		<!-- <h1>{{ title }}</h1> -->
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: 'HelloWorld',
		computed : {
			...mapState(['title','forLoop','token','user'])
		},
		mounted(){

		}
	}
</script>

<style>
#container{
	width:100%;
}
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
