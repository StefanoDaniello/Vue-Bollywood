<template>
     <div v-if="movie" class="card">
            <img :src="store.imgBasePath + movie.cover_image" class="card-img-top" :alt="movie.title">
            <div class="card-body">
                <h5 class="card-title">{{ movie.title }}</h5>
                <p class="card-text">{{ movie.overview }}</p>
                <div v-for="item in movie.reviews">{{ item.author }}</div>
            </div>
        </div>
</template>

<script>
    import {store} from "../store";
    import axios from "axios";
    export default {
        name: "SingleMovie",
        data() {
            return {
                store,
                movie: null,
                hall: null,
                time_slot: null,
            }
        },
        methods: {
            getMovie() {
                // console.log(this.$route);
                axios.get(`${this.store.apiBaseUrl}/movies/${this.$route.params.id}`).then((res) => {
                    this.movie = res.data.results.movie;
                    console.log(res.data.results);
                    this.hall = res.data.results.hall;
                    this.time_slot = res.data.results.time_slot;
                    // console.log(res.data.results.movie);
                }).catch((err) => {
                    console.log(err);
                    // console.log(err.response.data);
                    // Il push corrisponde al redirect  
                    // this.$router.push({ name: 'not-found' });
                }).finally(() => {
                    // console.log('finally');
                })
            }
        },
        mounted() {
        this.getMovie();
        },

    }
</script>

<style lang="scss" scoped>

</style>