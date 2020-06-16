<template>
  <div id="app">
    <navbar :brand="'My Store'"/>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar,
  },
}
</script>


<style lang="scss">
</style>
