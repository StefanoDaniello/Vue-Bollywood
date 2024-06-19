<template>
  <div class="container herocontainer">
    <div id="hero" class="container"></div>
  </div>
  <div class="container">
    <div class="flex-direction-column align-content-end align-items-center">
      <h1>Seleziona la data</h1>
      <select
        name="movies"
        id="movies"
        class="form-select w-25"
        @change="setParams()"
        v-model="data"
      >
        <option value="" selected>Tutti le proiezioni</option>
        <option :value="currentDate">Oggi</option>
        <option v-for="date in filteredDates" :key="date" :value="date">
          {{ date }}
        </option>
      </select>
    </div>

    <div class="text-center"><h1>Proiezioni in corso</h1></div>
    <div class="row">
      <div
      v-for="(item, index) in movies"
      :key="index"
      class="col-12 col-xl-4 col-lg-6"
      >
      <CardComponent1 :item="item" />
    </div>
  </div>
  </div>
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
      data: "",
      params: {},
      currentDate: this.getCurrentDate(),
    };
  },
  methods: {
    getCurrentDate() {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Mesi da 0 a 11
      const day = String(date.getDate()).padStart(2, "0"); // Giorni da 1 a 31
      return `${year}-${month}-${day}`; // Formato YYYY-MM-DD
    },
    setParams() {
      if (this.data) {
        this.params.data = this.data;
      }
      this.getMovies();
    },
    getMovies() {
      axios
        .get(this.store.apiBaseUrl + "/movies", { params: this.params })
        .then((response) => {
          this.movies = response.data.results;
          this.params = {};
          console.log(response.data.results);
        })
        .catch((error) => {
          console.error("Errore nella richiesta:", error);
        });
    },
  },
  computed: {
    uniqueDates() {
      return new Set(this.store.data.map((item) => item.date));
    },
    filteredDates() {
      const datesArray = Array.from(this.uniqueDates);
      // Filtra le date di oggi
      return datesArray.filter((date) => date !== this.currentDate);
    },
  },
  mounted() {
    this.getMovies();
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
    background-image: url("../img/heroImgtr-def.png");
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0 auto;
  }
}
</style>
