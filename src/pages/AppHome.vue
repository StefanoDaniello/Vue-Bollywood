<template>
  <div class="container herocontainer">
    <div id="hero" class="container"></div>
  </div>
  <div class="container">
    <CardComponent :item="movies" />
  </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";
import CardComponent from '../components/CardComponent.vue'


export default {
  name: "AppHome",
  components: {
        CardComponent
    },
  data() {
    return {
      store,
      movies: [],
    };
  },
  methods: {
    getAll() {
      axios.get(this.store.apiBaseUrl + "/movies").then((response) => {
        console.log(response.data);
      });
    },
  },
  mounted() {
    this.getAll();
  },
};
</script>

<style lang="scss" scoped>
.debug {
  border: 1px solid red;
}
.herocontainer{
  width: 800px;
  height: 500px;
  #hero{
    background-image: url('../img/heroImgtr.png');
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0 auto;
  }
}
</style>
