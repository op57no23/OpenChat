<template>
	<div class = "Channels">
	<b-row class = "m-3">
		<h4>Channels</h4>
		<div>
		<b-button variant = "outline-dark" v-b-modal.modal-1><b-icon icon="plus-square"></b-icon></b-button>

		<b-modal id="modal-1" title="New Channel" @hidden="resetModal" @ok = "handleOk">
		<b-form @submit.prevent>
      <b-form-group
        id="input-group-1"
        label="Channel Name"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.channel"
          type="text"
          required
          placeholder="Enter Channel Name"
        ></b-form-input>
      </b-form-group>
	</b-form>
	<div v-if="emptyForm" class="text-danger"> Please enter a channel name </div>

		</b-modal>
		</div>
	</b-row>
	<b-row class = "m-3">
		<b-list-group>
			<b-list-group-item button :class = "{ active: activeChannel === channel._id}" v-for="channel in channels" :key="channel._id" @click=get_channel :id = "channel._id"> 
				{{channel.name}}
			</b-list-group-item>
		</b-list-group>
			<ul v-if="errors">
			<li v-for="error of errors" :key="error">
			{{error.message}}
			</li>
		</ul>
	</b-row>


</div>
</template>

<script>

import axios from 'axios'

export default {
	name: 'Channels',
	data () {
		return {
			channels: [],
			errors: [],
			emptyForm: false,
			activeChannel: "",
			form: {
					channel: ''
					}
		}
	},
	beforeCreate () {
		if (!this.$store.state.user) {
			const local = JSON.parse(localStorage.user);
			this.$store.state.user = local.user._id;
			axios.defaults.headers.common['Authorization'] = 'Bearer ' + local.token;
		}
		axios.get('http://localhost:3000/all_channels')
		.then(response => {
			this.channels = response.data
		})
		.catch(e => {
			this.errors.push(e)
		})
	},
	methods: {
			validate() {
				if (this.form.channel) {
					return true;
				}
				return false;
			},
			resetModal() {
				this.form.channel = '';
				this.emptyForm = false;
      },
			handleOk(evt) {
						evt.preventDefault();
						if (this.validate()) {
							axios.post('http://localhost:3000/new_channel', {name: this.form.channel}).then(response => {
								this.channels.push(response.data);
								this.$socket.emit('save_channel', response.data);
								this.resetModal();
							})
					.catch(function (error) { this.errors.push(error)});
								this.$nextTick(() => {
									this.$bvModal.hide('modal-1');
								})
					}
						else {
							this.emptyForm = true;
						}
						
			},
			get_channel(evt) {
					const oldChannel = this.activeChannel;
					this.activeChannel = evt.srcElement.id;
					axios.get('http://localhost:3000/get_channel/' + evt.srcElement.id)
					.then(response => {
							this.$emit('change_channel', response.data);
							this.$socket.emit('join', evt.srcElement.id, oldChannel);
					})
					.catch(e => {
							this.errors.push(e);
					})
			}
			
						},
	sockets: {
		new_channel_created: function(data) {
			this.channels.push(data);
		}
	}
}
</script>

<style>

.text-danger {
	text-align: center;
}
</style>