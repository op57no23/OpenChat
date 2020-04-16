<template>
<div class="Chat">
<b-container>
<ChatItem v-for="message in channelMessages" :key=message._id :messageUser="message.user" :user = "user" :messageText="message.text" :messageDate = "message.date"></ChatItem>
<ChatBar @new_message = "new_message" :channel="channel" :user="user"></ChatBar>
 </b-container>  
</div>
</template>

<script>

import ChatItem from './ChatItem.vue'
import ChatBar from './ChatBar.vue'

export default {
		components: {
				ChatItem, ChatBar
		},
		props: ['channelMessages', 'channel', 'user'],
		methods: {
			new_message: function(message) {
				this.$emit('new_message', message);
			}
		}
}

</script>

<style>

.container {
	max-height: 100vh;
}

.Chat {
	min-height: 80%;
	overflow-y: scroll;
}

.ChatBar {

}
</style>
