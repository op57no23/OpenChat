<template>
<div class="ChatItem mt-2">
	<b-row v-if="messageUser === user" id = "right">
		<b-col cols = "6"></b-col>
		<b-col cols = "6" @mouseover="hover=true" @mouseleave= "hover=false">
			<small v-if="hover" class = "font-weight-bolder"> Me </small><br>
			<small v-if="hover"> {{formatDate(messageDate)}}</small>
			<p> {{messageText}} </p>
			
		</b-col>
	</b-row>
	<b-row v-else id = "left">
		<b-col cols = "6" @mouseover="hover=true" @mouseleave= "hover=false"	>
			<small class = "font-weight-bolder"> {{messageUserName}} </small><br>
			<small v-if="hover"> {{formatDate(messageDate)}} </small>
			<p> {{messageText}} </p>
		</b-col>
		<b-col cols = "6"></b-col>
	</b-row>
</div>

</template>

<script>
	
	export default {
			data () {
				return {
					hover: false,
				}
			},
			methods: {
				formatDate: function(date) {
					const dateString = new Date(date).toString().substring(4);
					return /.*(?=:)/.exec(dateString).toString();
				}
			},
			props: ['messageText', 'user', 'messageUser', 'messageDate', 'messageUserName']
	}

</script>

<style>

.col {
	min-width: 50%;
}

#right {
	text-align: right;
}

#left {
	text-align: left;
}

</style>
