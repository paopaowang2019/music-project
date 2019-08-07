<template>
  <div id="app">
    <!--<transition name="app" mode="out-in">-->
      <router-view/>
    <!--</transition>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>

<style>
  .app-enter-active, .app-leave-active {
    transition: all .3s;
  }
  .app-enter {
    /*opacity: 0;*/
    transform: translate3d(100%, 0, 0);
  }
  .app-leave-to {
    /*opacity: 0;*/
    transform: translate3d(100%, 0, 0);
  }
  .app-enter-to, .app-leave {
    opacity: 1;
    /*transform: translate3d(0, 0, 0);*/
  }
  html, body {
    margin: 0;
    padding: 0;
    width: 100vw;
    overflow-x: hidden;
  }
  img {
    max-width: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  [v-cloak] {
    display: none;
  }
  .clearfix {
    zoom: 1;
  }
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  a:active {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .clearfix:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
  }
  .mb80 {
    margin-bottom: 80px;
  }
  .mt40 {
    margin-top: 40px;
  }
</style>

<style scoped>

</style>
