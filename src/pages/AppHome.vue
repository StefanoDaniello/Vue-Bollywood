<template>
  <div class="container herocontainer ">
    <div id="hero" class="container"></div>
  </div>
  <div class="container">
    <div class="text-center"><h1>Proiezioni in corso</h1></div>
    <div v-for="(item, index) in movies" :key="index">
      <CardComponent :item="item" />
    </div> 
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
    getmovies() {
      axios.get(this.store.apiBaseUrl + "/movies")
    .then((response) => {
        // console.log(response.data.results);
        this.movies = response.data.results;
        // console.log(this.movies);
    })
    .catch((error) => {
        console.error("Errore nella richiesta:", error);
    });
    }
  },
  mounted() {
    this.getmovies();
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
