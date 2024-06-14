<template>
  <div class="container">
    <div class="debug">
      Questo è il MovieList.vue

      <div>

      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';

export default {
  name: 'MovieList',
  data() {
    return {
      store,
      movies: [],
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
.debug {
  border: 1px solid red;
}
</style>