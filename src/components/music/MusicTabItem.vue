<template>
  <div class="music-tab-item">
    <router-link :to="{name: link, query: query}">
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
    link: String,
    query: Object
  }
}
</script>

<style scoped>
  .music-tab-item {
    flex: 1 1 auto;
  }
  .music-tab-item a {
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
    width: 42px;
    height: 42px;
    line-height: 42px;
    margin: 0 auto 8px;
    font-size: 30px;
    text-align: center;
    border: 1px solid #cc0c0c;
    border-radius: 50%;
  }
  .my-tab-icon img {
    max-width: 100%;
  }
  .my-tab-name {
    font-size: 12px;
    line-height: 1;
    color: #2c3e50;
    text-align: center;
  }
</style>
