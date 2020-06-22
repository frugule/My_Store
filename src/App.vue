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
import {mapState} from 'vuex'


export default {
  components: {
    Navbar,
  },
  computed:{
    ...mapState(['overlay'])
  },
}
</script>


<style lang="scss">
</style>
