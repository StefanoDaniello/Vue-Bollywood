<template>
  <HeaderComponent/>
  <div class="container mt-5">
  <router-view ></router-view>
  </div>
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