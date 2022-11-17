<script>

import AppList from './AppList.vue'

export default {
    name:'AppMain',
    components:{
        AppList
    }
}
</script>

<template>

  <div class="d-flex container rl justify-content-end">
    <select class="form-select" aria-label="Default select example">
        <option selected disabled hidden>Select Category</option>
        <option value="1">Breaking Bad</option>
        <option value="2">Better Call Soul</option>
    </select>
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
select{
    width: 200px;
}
</style>