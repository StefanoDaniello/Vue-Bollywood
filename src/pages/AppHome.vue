<template>
  <div class="container herocontainer">
    <div id="hero"></div>
  </div>
  <div class="container">
    <div class="text-center"><h1>Proiezioni in corso</h1></div>
    <div class="row ">
      <div v-for="(item, index) in movies" :key="index" class="col-12 col-xl-4 col-lg-6 ">
          <CardComponent1 :item="item" />
      </div>
    </div>
  </div>
  <div></div>
</template>

<script>
import { store } from "../store";
import axios from "axios";
import CardComponent1 from "../components/CardComponent1.vue";

export default {
  name: "AppHome",
  components: {
    CardComponent1,
  },
  data() {
    return {
      store,
      movies: [],
    };
  },
  methods: {
    getmovies() {
      axios
        .get(this.store.apiBaseUrl + "/movies")
        .then((response) => {
          // console.log(response.data.results);
          this.movies = response.data.results;
          // console.log(this.movies);
        })
        .catch((error) => {
          console.error("Errore nella richiesta:", error);
        });
    },
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
.herocontainer {
  width: 800px;
  height: 500px;
  #hero {
    background-image: url("../img/heroImgtr.png");
    // width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 65px auto;
  }
}
</style>
