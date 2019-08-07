<template>
  <div class="refresh"></div>
</template>

<script>
export default {
  name: 'refresh',
  data () {
    return {
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$router.replace(from.path)
    })
  }
}
</script>

<style scoped>

</style>
