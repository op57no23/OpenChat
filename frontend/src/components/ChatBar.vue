<template><div class="ChatBar">
<b-form @submit="submitMessage">

<b-form-input v-model="form.chatMessage" placeholder="Type your message" ></b-form-input>
<b-button type="submit">Submit</b-button>
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
				submitMessage: function(evt) {
						evt.preventDefault();
						axios.post('http://localhost:3000/new_message', {text: this.form.chatMessage, channel: this.channel, user: this.user}).then((data) => console.log(data));
				}
		},
		props: ['channel', 'user']
		
}

</script>
