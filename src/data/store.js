import {reactive} from 'vue';

export const store = reactive({
    apiUrl: 'https://www.breakingbadapi.com/api/characters',
    characterList:[],
    isLoaded: false,
    searchValue:''
})