<script>

import AppList from './AppList.vue'


export default {
    name:'AppMain',
    components:{
        AppList,
    }
}
</script>

<template>

  <div class="container my-4 p-3">
    <AppList/>
  </div>

</template>


<style lang="scss" scoped>
@use './src/styles/partials/vars' as *;

.container{
    background-color: rgb(218, 207, 207);
}
</style>