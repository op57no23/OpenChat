<template>
<div class = "Login">
    <b-container class = "mt-5">
    <h2> Chatroom </h2>
   <b-form @submit.prevent="login">
      <b-form-group
        id="input-group-1"
        label="Login"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter Username"
        ></b-form-input>
  
        <b-form-input
          id="input-2"
          v-model="form.password"
          required
          type = "password"
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <p>{{error}}</p>
  </b-container>

</div>

</template>


<script>
export default {
      data () {
        return {
          form: {
            name: '',
            password: ''
          },
          error: null
        }
      },
      methods: {
        login () {
          this.$store.dispatch('login', {
            name: this.form.name,
            password: this.form.password
          })
          .then(() => {
            this.$router.push({name: 'chat'})
          })
          .catch(err => {
            this.error = err.response.data.error;
          })
        }
      }
  }
</script>