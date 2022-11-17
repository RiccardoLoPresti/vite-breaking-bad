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
  <div class="container my-5 p-3">
    
    <AppList/>
  </div>
</template>


<style lang="scss" scoped>
.container{
    background-color: #ffff;
    min-height: 500px;
}
</style>