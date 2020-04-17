<template>
<div class="Chat">
<b-container class = 'mt-4'>
<ChatItem v-for="message in channelMessages" :key=message._id :messageUser="message.user" :user = "user" :messageText="message.text" :messageDate = "message.date" :messageUserName="message.userName"></ChatItem>

 </b-container>  
<ChatBar @new_message = "new_message"  :channel="channel" :user="user" :userName="userName"></ChatBar>

</div>
</template>

<script>

import ChatItem from './ChatItem.vue'
import ChatBar from './ChatBar.vue'

export default {
		components: {
				ChatItem, ChatBar
		},
		props: ['channelMessages', 'channel', 'user', 'userName'],
		methods: {
			new_message: function(message) {
				this.$emit('new_message', message);
			}
		},
		updated: function () {
					this.$nextTick(() => {
							var container = this.$el.querySelector('.container');
							container.scrollTop = container.scrollHeight;      
			})
		}
}

</script>

<style>

.Chat .container {
	height: 90%;
	overflow-y: scroll;
	overflow-x: hidden;
}

.ChatBar {
	height: 10%;
	display: flex;
	justify-content: center;
}

.Chat {
	height: 100%;
}

.ChatBar form {
	width: 100%;
}
</style>
