<script>
import axios from 'axios';
import {store} from '../src/data/store'

import AppHeader from '../src/components/AppHeader.vue'
import AppMain from '../src/components/AppMain.vue'

export default {
  name:'App',
  components:{
    AppHeader,
    AppMain
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    getApi(){
      store.isLoaded = false;
      axios.get(store.apiUrl)
      .then(result => {
        store.characterList = result.data
        store.isLoaded = true;
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  mounted(){
    this.getApi(); 
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