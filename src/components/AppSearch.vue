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

    <div class="d-flex container rl justify-content-end">
        <select @change="$emit('search')" v-model="store.searchValue" class="form-select">
            <option value="" selected>Select Category</option>
            <option value="breaking bad">Breaking Bad</option>
            <option value="better call saul">Better Call Saul</option>
        </select>
    </div>

</template>

<style lang="scss" scoped>
.container.rl{
    background-color:rgba(255, 255, 255, 0);
}
select{
    width: 200px;
}
</style>