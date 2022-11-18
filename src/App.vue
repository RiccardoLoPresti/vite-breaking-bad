<script>
import axios from 'axios';
import {store} from '../src/data/store'

import AppHeader from '../src/components/AppHeader.vue'
import AppSearch from '../src/components/AppSearch.vue'
import AppMain from '../src/components/AppMain.vue'

export default {
  name:'App',
  components:{
    AppHeader,
    AppMain,
    AppSearch
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    getApi(){
      store.isLoaded = false;
      axios.get(store.apiUrl, {
        params:{
          category: store.searchValue
        }
      })
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
  <AppSearch @search="this.getApi()"/>
  <AppMain/>

</template>



<style lang="scss">

@use './src/styles/general';

</style>