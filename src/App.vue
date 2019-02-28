<template>
  <div id="app">
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>
<script>

export default {
  name: 'App'
}

</script>
<style lang="scss">
@import '../src/assets/style/base.scss';

html,
body {
  min-height: 100%;
  height: 100px;
  background: #fff;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
