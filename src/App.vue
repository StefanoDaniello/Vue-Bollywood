<template>
  <HeaderComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import { store } from './store';
import axios from 'axios';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
    },
    data() {
    return {
      store
    }
  },
  methods: {
    getAll() {
      axios.get(this.store.apiBaseUrl + '/movies').then((response) => {
        console.log(response.data);
      })
    }
  },
  mounted() {
    this.getAll();
  },


  }


</script>

<style lang="scss" scoped>

</style>