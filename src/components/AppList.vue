<script>

import cards from './cards.vue';
import AppLoader from './AppLoader.vue';
import {store} from '../data/store.js';

export default {
    name:'AppList',
    components:{
        cards,
        AppLoader,
    },
    data(){
        return{
            store
        }
    },
}
</script>

<template>
    <div class="container" v-if="store.isLoaded">

        <div class="bar-found d-flex ">
            <p class="px-4 fw-bold">Found {{store.characterList.length}} charaters</p>
        </div>

        <div class="row d-flex justify-content-center px-3">
            <cards v-for="charater in store.characterList" :key="charater.char_id" :objectCard="charater"/>
        </div>

    </div>

    <div class="loader" v-else>
        
        <AppLoader/>

    </div>
  
</template>



<style lang="scss" scoped>
@use './src/styles/partials/vars' as *;
.bar-found{
    background-color: $bg-secondary-color;
    height: 60px;
    p{
        line-height: 60px;
    }
}
</style>