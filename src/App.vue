<template>
  <h1 class="text-center">Hello</h1>
  <i class="fa-solid fa-house"></i>
  <router-view></router-view>
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
  }

}
</script>

<style lang="scss" scoped>

</style>