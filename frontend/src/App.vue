<template>
  <div id="app">
  <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-height: 100vh;
}

html {
	height: 100vh;
}
body {
	height: 100vh;
}
.Layout {
	max-height: 100vh;
}
</style>
