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
      axios.get('https://www.breakingbadapi.com/api/characters')
      .then(result => {
        store.characterList = result.data
        console.log(store.characterList);
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