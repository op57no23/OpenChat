<template>
<div class="ChatItem">
	<b-row v-if="messageUser === user">
		<b-col cols = "6"></b-col>
		<b-col cols = "6">
			<small> Me </small>
			<p> {{messageText}} </p>
			<small> {{messageDate}} </small>
		</b-col>
	</b-row>
	<b-row v-else>
		<b-col cols = "6">
			<small> {{messageUser}} </small>
			<p> {{messageText}} </p>
			<small> {{messageDate}} </small>
		</b-col>
		<b-col cols = "6"></b-col>
	</b-row>
</div>

</template>

<script>
	
	export default {
			props: ['messageText', 'user', 'messageUser', 'messageDate']
	}

</script>

<style>

.col {
	min-width: 50%;
}

</style>
