<template>
  <div class="card-title">
    <span v-text="title"></span>
    <i>&gt;</i>
  </div>
</template>

<script>
export default {
  name: 'card-title',
  data () {
    return {
    }
  },
  props: {
    title: String
  }
}
</script>

<style scoped>
  .card-title {
    padding: 5px 0 15px;
    color: #000;
    font-size: 15px;
  }
 .card-title span {
   padding: 0 3px 0 20px;
   border-left: 2px solid #cc0c0c;
 }
 .card-title i {
   font: 600 14px '宋体', '黑体', 'serif', '楷体';
   font-style: normal;
   color: #aaa;
 }
</style>
