<template>
  <div class="my-tab-item">
    <router-link :to="{name: link}">
      <div class="my-tab-icon">
        <slot></slot>
      </div>
      <div class="my-tab-name">{{name}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'my-tab-item',
  data () {
    return {
      data: ''
    }
  },
  props: {
    name: String,
    link: String
  },
  watch: {
    '$route': function (a, b) {
      // console.log(a, b)
    }
  }
}
</script>

<style scoped>
  .my-tab-item {
    flex: 1 1 auto;
  }
  .my-tab-item .router-link-exact-active {
    background-color: #cc0c0c;
  }
  .my-tab-item .router-link-active {
    background-color: #cc0c0c;
  }
  .my-tab-item .active {
    background-color: #cc0c0c;
  }
  .my-tab-item a {
    display: block;
    padding: 7px 0;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-user-select: none;
    -moz-user-select: none;
  }
  .my-tab-item a:active,
  .my-tab-item a:focus {
    -webkit-tap-highlight-color: transparent;
    outline:none;
    text-decoration: none;
  }
  .my-tab-icon {
    width: 24px;
    height: 24px;
    margin: 0 auto 5px;
    font-size: 20px;
  }
  .my-tab-icon img {
    max-width: 100%;
  }
  .my-tab-name {
    font-size: 12px;
    line-height: 1;
    color: #2c3e50;
  }
</style>
