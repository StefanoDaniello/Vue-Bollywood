<template>
  <h1 class="text-center">Hello</h1>
  <i class="fa-solid fa-house"></i>
</template>

<script>
import { store } from './store';
import axios from 'axios';
  export default {
    name: 'App',
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