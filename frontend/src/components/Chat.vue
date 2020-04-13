<template>
<div class="Chat">
<b-container>
<b-row>
<ChatItem v-for="message in messages" :key=message._id :message="message.text" :user="message.user" :time="message.time"></ChatItem>
</b-row>
<b-row><ChatBar/></b-row>
 </b-container>  
</div>
</template>

<script>

import ChatItem from './ChatItem.vue'
import ChatBar from './ChatBar.vue'

export default {
		data () {
				return {
						messages: []
				}
		},
		components: {
				ChatItem, ChatBar
		},
		props: ['channel']
}

</script>
