<script>

import AppHeader from '../src/components/AppHeader.vue'
import AppMain from '../src/components/AppMain.vue'

export default {
  name:'App',
  components:{
    AppHeader,
    AppMain
  }
}
</script>

<template>

  <AppHeader/>
  <AppMain/>

</template>



<style lang="scss">

@use './src/styles/general';

</style>