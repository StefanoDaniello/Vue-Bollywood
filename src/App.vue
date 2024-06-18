<template>
  <HeaderComponent/>
  <div class="container mt-5">
    <router-view ></router-view>
  <FooterComponent/>
    </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import { store } from './store';
import axios from 'axios';

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      FooterComponent,
    },
    data() {
    return {
      store
    }
  },
  methods: {
    getData() {
      axios.get(this.store.apiBaseUrl + '/movies').then((res) => {
        //console.log(res.data);
        this.store.data = res.data.results;
      });
    }
  },
  mounted() {
    this.getData();
  }
}
</script>

<style lang="scss" scoped>
</style>