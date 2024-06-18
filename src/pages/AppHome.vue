<template>
  <div class="container herocontainer ">
    <div id="hero" class="container"></div>
  </div>
  <div class="container">

    <div class="d-flex justify-content-between align-items-center">
      <h1>Proiezioni</h1>
      <select name="movies" id="movies" class="form-select w-25" 
        @change="setParams()" v-model="data">
        <option value="" selected>Tutte le categorie</option>
        <option :value="item.date" v-for="item in store.data" :key="data.id">{{ item.date }}
        </option>
      </select>
  </div>


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
      data: '',
      params: {},
    };
  },
  methods: {
    setParams() {
        if(this.data){
          this.params.data = this.data
        }
        this.getmovies();
    },
    getmovies() {
      axios.get(this.store.apiBaseUrl + "/movies", {
        params: this.params
      })
    .then((response) => {
        // console.log(response.data.results);
        this.movies = response.data.results;
        // console.log(this.movies);
        this.params={};
    })
    .catch((error) => {
        console.error("Errore nella richiesta:", error);
    });
    }
  },
  mounted() {
    this.getmovies();
  },
  computed: {
    selectedCategory() {
      const proiezioni = this.store.data.find(movies => movies.id == this.data);
      return proiezioni ? movies.date : 'category not found';
    },
    // selectedCategory() {
    //   const category = this.store.categories.find(category => category.id == this.category);
    //   return category ? category.name : 'category not found';
    // }
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