<script>

import {store} from '../data/store.js';


export default {
    name: 'AppSearch',
    data(){
        return{
            store
        }
    }
}
</script>

<template>
  <select v-model="store.searchValue" class="form-select">
        <option value="" selected>Select Category</option>
        <option value="breaking bad">Breaking Bad</option>
        <option value="better call soul">Better Call Soul</option>
    </select>
</template>

<style lang="scss" scoped>
select{
    width: 200px;
}
</style>