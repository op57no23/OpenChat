<template>
<div class="Layout">
<b-container>
<b-row>
 <b-navbar toggleable="lg" type="dark" variant="info">
      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
  </b-navbar>
  </b-row>
 <b-row>
<b-col cols = "3"><Channels @change_channel="update_channel"></Channels></b-col>
<b-col cols = "9"><Chat></Chat></b-col>

</b-row>
 </b-container>  
</div>
</template>

<script>

import Channels from './Channels.vue';
import Chat from './Chat.vue';

export default {
		data () {
				return {
						user: '',
						current_channel: {}
				}
		},
		components: {Channels, Chat},
		methods: {
				update_channel: function(response) {
						console.log('updated channel')
					this.current_channel = response;
				}
		}
}

</script>
