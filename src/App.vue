<template>
  <h1 class="text-center">Hello</h1>
  <i class="fa-solid fa-house"></i>
  <router-view></router-view>
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
  }

}
</script>

<style lang="scss" scoped>

</style>