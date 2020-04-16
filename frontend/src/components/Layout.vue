<template>
<div class="Layout">
<b-container>
<b-row id = "nav">
 <b-navbar toggleable="lg" type="dark" variant="info">
      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>{{userName}}</em>
          </template>
          <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
  </b-navbar>
  </b-row>
 <b-row id = "chatView">
<b-col cols = "3"><Channels @change_channel="handler"></Channels></b-col>
<b-col cols = "9"><Chat @new_message="new_message" :channelMessages = "messages" :channel = "current_channel._id" :user = "user"></Chat></b-col>

</b-row>
 </b-container>  
</div>
</template>

<script>

import Channels from './Channels.vue';
import Chat from './Chat.vue';
import axios from 'axios';

export default {
		data () {
				return {
						user: JSON.parse(localStorage.user).user._id,
						userName: JSON.parse(localStorage.user).user.name,
						current_channel: {},
						messages: []
				}
		},
		components: {Channels, Chat},
		methods: {
			handler : function(response) {
				this.update_channel(response);
				this.get_messages(response);
			},

			get_messages: function(response) {
					axios.get('http://localhost:3000/get_messages/' + response._id).
					then((result) => this.messages = result.data); 
				},

			update_channel: function(response) {
					this.current_channel = response;
				},

			logout: function() {
				this.$store.dispatch('logout');
				this.$router.push('register');
			},

			new_message: function(message) {
				this.$socket.emit('save_message', {channel: this.current_channel, message: message});
			}
		},
		sockets: {
			new_message_created: function(message) {
				this.messages.push(message);
			}
		}
}

</script>
	
<style>

#nav {
	height: 10vh;
}

#chatView {
	max-height: 90vh;
}

.Channels {
	max-height: 90vh;
	overflow-y: scroll;
}

.Chat {
	max-height:90vh;
}


</style>