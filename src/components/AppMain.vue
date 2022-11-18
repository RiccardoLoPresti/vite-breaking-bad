<script>

import AppList from './AppList.vue'
import AppSearch from './AppSearch.vue'

export default {
    name:'AppMain',
    components:{
        AppList,
        AppSearch
    }
}
</script>

<template>

  <div class="d-flex container rl justify-content-end">
    <AppSearch/>
  </div>

  <div class="container my-4 p-3">
    <AppList/>
  </div>

</template>


<style lang="scss" scoped>
@use './src/styles/partials/vars' as *;
.container.rl{
    background-color:rgba(255, 255, 255, 0);
}
.container{
    background-color: #ffff;
}
</style>