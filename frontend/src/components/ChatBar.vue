<template><div class="ChatBar">
<b-form inline @submit.prevent="submitMessage">
<b-form-input class = "flex-fill" v-model="form.chatMessage" placeholder="Type your message" ></b-form-input>
<b-button variant="primary" type="submit">Submit</b-button>
</b-form>

</div></template>

<script>

		import axios from 'axios'
export default {

		data () {
				return {
						form: {
							chatMessage: ''
						}
				}
		},
		methods: {
				submitMessage: function() {
						axios.post('http://localhost:3000/new_message', {text: this.form.chatMessage, channel: this.channel, user: this.user, userName: this.userName})
							.then((data) => 
								axios.put('http://localhost:3000/add_to_channel', data))
							.then((data) => 
								this.$emit('new_message', JSON.parse(data.config.data).data))
						this.form.chatMessage = '';
				}
			},
		props: ['channel', 'user', 'userName']
}

</script>

