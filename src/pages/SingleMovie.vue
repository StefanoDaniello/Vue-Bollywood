<template>
    <div class="conatiner text-center" v-if="movie">
        <div class="container d-flex justify-content-start">
            <RouterLink :to="{ name: 'home'}" >
                <button class="back-button m-5">
                    <div class="back-button-box">
                    <span class="back-button-elem">
                        <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                        ></path>
                        </svg>
                    </span>
                    <span class="back-button-elem ">
                        <svg viewBox="0 0 46 40">
                        <path
                            d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                        ></path>
                        </svg>
                    </span>
                    </div>
                </button>
            </RouterLink>
        </div>
       
        <h1 class="card-title my-3">{{ movie?.title }}</h1>
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
        <h2 class="my-5">Recensioni</h2>
        <div class="row d-flex justify-content-center">
            <div class="col-3 mb-3" v-for="(review, index) in movie.reviews" :key="index">
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
      </article>
    </div>
  </section>
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
              return this.movie.cover_image ? this.store.imgBasePath + this.movie.cover_image :
              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';
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
    object-fit: cover;
    position: relative;
  }

  .postcard__img_link {
    display: contents;
  }

  .postcard__bar {
    width: 50px;
    height: 10px;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #424242;
    transition: width 0.2s ease;
  }

  .postcard__text {
    padding: 1.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .postcard__preview-txt {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
    height: 100%;
  }

  .postcard__tagbox {
    display: flex;
    flex-flow: row wrap;
    font-size: 14px;
    margin: 20px 0 0 0;
		padding: 0;
    justify-content: center;

    .tag__item {
      display: inline-block;
      background: rgba(83, 83, 83, 0.4);
      border-radius: 3px;
      padding: 2.5px 10px;
      margin: 0 5px 5px 0;
      cursor: default;
      user-select: none;
      transition: background-color 0.3s;

      &:hover {
        background: rgba(83, 83, 83, 0.8);
      }
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(-70deg, #424242, transparent 50%);
    opacity: 1;
    border-radius: 10px;
  }

  &:hover .postcard__bar {
    width: 100px;
  }
}

@media screen and (min-width: 769px) {
  .postcard {
    flex-wrap: inherit;

    .postcard__title {
      font-size: 2rem;
    }

    .postcard__tagbox {
      justify-content: start;
    }

    .postcard__img {
      max-width: 300px;
      max-height: 100%;
      transition: transform 0.3s ease;
    }

    .postcard__text {
      padding: 3rem;
      width: 100%;
    }

    .media.postcard__text:before {
      content: "";
      position: absolute;
      display: block;
      background: #18151f;
      top: -20%;
      height: 130%;
      width: 55px;
    }

    &:hover .postcard__img {
      transform: scale(1.1);
    }

    &:nth-child(2n+1) {
      flex-direction: row;
    }

    &:nth-child(2n+0) {
      flex-direction: row-reverse;
    }

    &:nth-child(2n+1) .postcard__text::before {
      left: -12px !important;
      transform: rotate(4deg);
    }

    &:nth-child(2n+0) .postcard__text::before {
      right: -12px !important;
      transform: rotate(-4deg);
    }
  }
}
@media screen and (min-width: 1024px){
		.postcard__text {
      padding: 2rem 3.5rem;
    }
		
		.postcard__text:before {
      content: "";
      position: absolute;
      display: block;
      
      top: -20%;
      height: 130%;
      width: 55px;
    }
	
  .postcard.dark {
		.postcard__text:before {
			background: #18151f;
		}
  }
	.postcard.light {
		.postcard__text:before {
			background: #e1e5ea;
		}
  }
}

/* COLORS */
.postcard .postcard__tagbox .green.play:hover {
	background: $main-green;
	color: black;
}
.green .postcard__title:hover {
	color: $main-green;
}
.green .postcard__bar {
	background-color: $main-green;
}
.green::before {
	background-image: linear-gradient(
		-30deg,
		$main-green-rgb-015,
		transparent 50%
	);
}
.green:nth-child(2n)::before {
	background-image: linear-gradient(30deg, $main-green-rgb-015, transparent 50%);
}

.postcard .postcard__tagbox .blue.play:hover {
	background: $main-blue;
}
.blue .postcard__title:hover {
	color: $main-blue;
}
.blue .postcard__bar {
	background-color: $main-blue;
}
.blue::before {
	background-image: linear-gradient(-30deg, $main-blue-rgb-015, transparent 50%);
}
.blue:nth-child(2n)::before {
	background-image: linear-gradient(30deg, $main-blue-rgb-015, transparent 50%);
}

.postcard .postcard__tagbox .red.play:hover {
	background: $main-red;
}
.red .postcard__title:hover {
	color: $main-red;
}
.red .postcard__bar {
	background-color: $main-red;
}
.red::before {
	background-image: linear-gradient(-30deg, $main-red-rgb-015, transparent 50%);
}
.red:nth-child(2n)::before {
	background-image: linear-gradient(30deg, $main-red-rgb-015, transparent 50%);
}

.postcard .postcard__tagbox .yellow.play:hover {
	background: $main-yellow;
	color: black;
}
.yellow .postcard__title:hover {
	color: $main-yellow;
}
.yellow .postcard__bar {
	background-color: $main-yellow;
}
.yellow::before {
	background-image: linear-gradient(
		-30deg,
		$main-yellow-rgb-015,
		transparent 50%
	);
}
.yellow:nth-child(2n)::before {
	background-image: linear-gradient(
		30deg,
		$main-yellow-rgb-015,
		transparent 50%
	);
}

@media screen and (min-width: 769px) {
	.green::before {
		background-image: linear-gradient(
			-80deg,
			$main-green-rgb-015,
			transparent 50%
		);
	}
	.green:nth-child(2n)::before {
		background-image: linear-gradient(
			80deg,
			$main-green-rgb-015,
			transparent 50%
		);
	}

	.blue::before {
		background-image: linear-gradient(
			-80deg,
			$main-blue-rgb-015,
			transparent 50%
		);
	}
	.blue:nth-child(2n)::before {
		background-image: linear-gradient(80deg, $main-blue-rgb-015, transparent 50%);
	}

	.red::before {
		background-image: linear-gradient(-80deg, $main-red-rgb-015, transparent 50%);
	}
	.red:nth-child(2n)::before {
		background-image: linear-gradient(80deg, $main-red-rgb-015, transparent 50%);
	}
	
	.yellow::before {
		background-image: linear-gradient(
			-80deg,
			$main-yellow-rgb-015,
			transparent 50%
		);
	}
	.yellow:nth-child(2n)::before {
		background-image: linear-gradient(
			80deg,
			$main-yellow-rgb-015,
			transparent 50%
		);
	}
}
</style>