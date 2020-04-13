<template>
	<div class = "Channels">
	<b-row>
		<h3>Channels</h3>
	</b-row>
	<b-row>
		<div>
		<b-button v-b-modal.modal-1>New Channel</b-button>

		<b-modal id="modal-1" title="New Channel" @hidden="resetModal" @ok = "handleOk">
		<b-form>
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

		</b-modal>
		</div>
	</b-row>
	<b-row>
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
			activeChannel: "",
			form: {
					channel: ''
					}
		}
	},
	beforeCreate () {
		console.log('got here');
		axios.get('http://localhost:3000/all_channels')
		.then(response => {
			this.channels = response.data
		})
		.catch(e => {
			this.errors.push(e)
		})
	},
	methods: {
			resetModal() {
        this.form.channel = ''
      },
			handleOk() {
						axios.post('http://localhost:3000/new_channel', {name: this.form.channel}).then(response => {
								this.channels.push(response.data);
						})
					.catch(function (error) { console.log(error)});

			},
			get_channel(evt) {
					this.activeChannel = evt.srcElement.id;
					axios.get('http://localhost:3000/get_channel/' + evt.srcElement.id)
					.then(response => {
							this.$emit('change_channel', response.data);
					})
					.catch(e => {
							this.errors.push(e);
					})
			}
			
						}
}
</script>
