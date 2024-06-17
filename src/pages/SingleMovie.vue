<template>
    <div class="conatiner text-center" v-if="movie">
        <h1 class="card-title my-4">{{ movie?.title }}</h1>
        <div class="text-center container">
            <div class="card-container"  >
                <div class="card">
                    <div class="front-content">
                        <img  :src="getImage" @error="setDefaultImage"  class="card-img-top" :alt="movie.title">
                    </div>
                    <div class="content">
                        <h5 class="card-title">{{ movie.title }}</h5>
                        <p class="card-text"> Release Date: {{ movie.release_date }}</p>
                        <p class="card-text"> Duration: {{ movie.duration }} min</p>
                        <p class="card-text">Language: {{ movie.language }}</p>
                        <p class="card-text">{{ movie.overview }}</p>
                    </div>
                </div>
            </div>
        </div>
        <h2>Recensioni</h2>


        <div class="row d-flex justify-content-center">
            <div class="col-2 mb-3" v-for="(review, index) in movie.reviews" :key="index">
                <div class="card" id="reviews" >
                    <div class="d-flex">
                        <img 
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
                        class="rounded-circle m-3" 
                        alt="Author image" 
                        width="80" 
                        height="80"
                        />
                        <h5 class="card-title title">{{ review.author }}</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">{{ review.content }}</p>
                    </div>
                    <p>
                        <small class="text-muted">
                        <span v-for="star in 5" :key="star" class="fa fa-star" :class="{'checked': star <= review.rating}"></span>
                        </small>
                    </p>
                    <div class="card-footer">Created at: {{ formatDate(review.created_at) }}</div>
                </div>
            </div>
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
                    	console.log(res.data.results.movie);
                }).catch((err) => {
                    console.log(err);
                    // console.log(err.response.data);
                    // Il push corrisponde al redirect  
                    // this.$router.push({ name: 'not-found' });
                }).finally(() => {
                    // console.log('finally');
                })
            },
            setDefaultImage(event) {
            event.target.src = this.store.defaultImg
            },
            formatDate(dateString) {
                return dateString.substring(0, 10);
            }
        },
        mounted() {
        this.getMovie();
        },
        computed: {
            getImage() {
                return this.movie?.cover_image ? this.store.imgBasePath + this.movie.cover_image : this.store.defaultImg;
            }
        }

    }
</script>

<style lang="scss" scoped>
    // .postcard {
    // border: 1px solid #ccc;
    // margin-bottom: 10px;
    // padding: 10px;
    // }
    // .postcard__img {
    // width: 100%;
    // height: auto;
    // }
    .fa-star {
    color: #ddd;
    }
    .fa-star.checked {
    color: #ffc107;
    }
    #reviews {
        min-height: 400px;
        width: 300px;
        border-radius: 20px;
    }
    .title {
        margin: 45px 0 0 20px;
    }

    
.container{
    padding: 20px; 
    display: flex;
    justify-content: center;
}

.card-container {
    width: 700px;
    height: 700px;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
}

.card {
    width: 100%;
    height: 100%;
    border-radius: inherit;
}

.card .front-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1)
}

.card .front-content p {
    font-size: 32px;
    font-weight: 700;
    opacity: 1;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1)
}

.card .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
    color: #e8e8e8;
    padding: 20px;
    line-height: 1.5;
    border-radius: 5px;
    pointer-events: none;
    transform: translateX(-96%);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.card .content .heading {
    font-size: 32px;
    font-weight: 700;
}

.card:hover .content {
    transform: translateY(0);
}

.card:hover .front-content {
    transform: translateX(-30%);
}

.card:hover .front-content p {
    opacity: 0;
}


</style>