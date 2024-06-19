<template>
  <div class="text-center" v-if="movie">
    <div class="container d-flex justify-content-start">
      <RouterLink :to="{ name: 'home' }">
        <button class="back-button m-5">
          <div class="back-button-box">
            <span class="back-button-elem">
              <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                ></path>
              </svg>
            </span>
            <span class="back-button-elem">
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

    <!-- <h1 class="card-title my-3">{{ movie?.title }}</h1> -->
    <section class="mt-5">
      <div class="container py-4" v-if="movie">
        <article class="postcard dark red">
          <a class="postcard__img_link" href="#">
            <img
              class="postcard__img"
              :src="getImage"
              @error="setDefaultImage"
              alt="Image Title"
            />
          </a>
          <div class="postcard__text">
            <h1 class="postcard__title red">
              <a href="#">{{ movie.title }}</a>
            </h1>
            <div class="postcard__subtitle small">
              <time datetime="2020-05-25 12:00:00">
                <!-- <i class="fas fa-calendar-alt mr-2"></i> Durata: {{ movie.duration }} -->
              </time>
            </div>
            <div class="postcard__bar"></div>
            <div class="postcard__preview-txt">{{ movie.overview }}</div>
            <ul class="postcard__tagbox">
              
              <li class="tag__item">
                <i class="fas fa-clock mr-2"></i> {{ movie.duration }}
              </li>
              <li class="tag__item play red">
                <a href="#"><i class="fas fa-money-bill-alt mx-2"></i>10 €</a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
    <h2 class="my-5">Recensioni</h2>
    <div class="row d-flex justify-content-center">
      <div
        class="col-3 mb-3"
        v-for="(review, index) in movie.reviews"
        :key="index"
      >
        <div class="card" id="reviews">
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
              <span
                v-for="star in 5"
                :key="star"
                class="fa fa-star"
                :class="{ checked: star <= review.rating }"
              ></span>
            </small>
          </p>
          <div class="card-footer">
            Created at: {{ formatDate(review.created_at) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";
export default {
  name: "SingleMovie",
  data() {
    return {
      store,
      movie: null,
      hall: null,
      time_slot: null,
    };
  },
  methods: {
    getMovie() {
      // console.log(this.$route);
      axios
        .get(`${this.store.apiBaseUrl}/movies/${this.$route.params.id}`)
        .then((res) => {
          this.movie = res.data.results.movie;
          // console.log(res.data.results);
          this.hall = res.data.results.hall;
          this.time_slot = res.data.results.time_slot;
          // console.log(res.data.results.movie);
        })
        .catch((err) => {
          console.log(err);
          // console.log(err.response.data);
          // Il push corrisponde al redirect
          // this.$router.push({ name: 'not-found' });
        })
        .finally(() => {
          // console.log('finally');
        });
    },
    setDefaultImage(event) {
      event.target.src = this.store.defaultImg;
    },
    formatDate(dateString) {
      return dateString.substring(0, 10);
    },
  },
  mounted() {
    this.getMovie();
  },
  computed: {
    getImage() {
      return this.movie.cover_image
        ? this.store.imgBasePath + this.movie.cover_image
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    },
  },
};
</script>

<style lang="scss" scoped>
//back-button
.back-button {
  display: block;
  position: relative;
  width: 56px;
  height: 56px;
  margin: 0;
  overflow: hidden;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  border: 0;
}

.back-button:before,
.back-button:after {
  content: "";
  position: absolute;
  border-radius: 50%;
  inset: 7px;
}

.back-button:before {
  border: 4px solid #f0eeef;
  transition: opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1) 80ms,
    transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 80ms;
}

.back-button:after {
  border: 4px solid #eb9898;
  transform: scale(1.3);
  transition: opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
    transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0;
}

.back-button:hover:before,
.back-button:focus:before {
  opacity: 0;
  transform: scale(0.7);
  transition: opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
    transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.back-button:hover:after,
.back-button:focus:after {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1) 80ms,
    transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 80ms;
}

.back-button-box {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
}

.back-button-elem {
  display: block;
  width: 20px;
  height: 20px;
  margin: 21px 18px 0 18px;
  transform: rotate(180deg);
  fill: #f0eeef;
}

.back-button:hover .back-button-box,
.back-button:focus .back-button-box {
  transition: 0.4s;
  transform: translateX(-56px);
}

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

.container {
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
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card .front-content p {
  font-size: 32px;
  font-weight: 700;
  opacity: 1;
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
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
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
  color: #e8e8e8;
  padding: 20px;
  line-height: 1.5;
  border-radius: 5px;
  pointer-events: none;
  transform: translateX(-96%);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
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

/** CardComponent RULES */
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");
$main-green: #79dd09 !default;
$main-green-rgb-015: rgba(121, 221, 9, 0.1) !default;
$main-yellow: #bdbb49 !default;
$main-yellow-rgb-015: rgba(189, 187, 73, 0.1) !default;
$main-red: #bd150b !default;
$main-red-rgb-015: rgba(189, 21, 11, 0.1) !default;
$main-blue: #0076bd !default;
$main-blue-rgb-015: rgba(0, 118, 189, 0.1) !default;

/* This pen */
body {
  font-family: "Baloo 2", cursive;
  font-size: 16px;
  color: #ffffff;
  text-rendering: optimizeLegibility;
  font-weight: initial;
}

.dark {
  background: #110f16;
}

.light {
  background: #f3f5f7;
}

a,
a:hover {
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

#pageHeaderTitle {
  margin: 2rem 0;
  text-transform: uppercase;
  text-align: center;
  font-size: 2.5rem;
}

/* Cards */
.postcard {
  flex-wrap: wrap;
  display: flex;

  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
  border-radius: 10px;
  margin: 0 0 2rem 0;
  overflow: hidden;
  position: relative;
  color: #ffffff;

  &.dark {
    background-color: #18151f;
  }
  &.light {
    background-color: #e1e5ea;
  }

  .t-dark {
    color: #18151f;
  }

  a {
    color: inherit;
  }

  h1,
  .h1 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  .small {
    font-size: 80%;
  }

  .postcard__title {
    font-size: 1.75rem;
  }

  .postcard__img {
    max-height: 180px;
    width: 100%;
    object-fit: cover;
    position: relative;
  }

  .postcard__img_link {
    display: contents;
  }

  .postcard__bar {
    width: 100px;
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
    width: 100%;
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

    &:nth-child(2n + 1) {
      flex-direction: row;
    }

    &:nth-child(2n + 0) {
      flex-direction: row-reverse;
    }

    &:nth-child(2n + 1) .postcard__text::before {
      left: -12px !important;
      transform: rotate(4deg);
    }

    &:nth-child(2n + 0) .postcard__text::before {
      right: -12px !important;
      transform: rotate(-4deg);
    }
  }
}
@media screen and (min-width: 1024px) {
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
  background-image: linear-gradient(
    30deg,
    $main-green-rgb-015,
    transparent 50%
  );
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
  background-image: linear-gradient(
    -30deg,
    $main-blue-rgb-015,
    transparent 50%
  );
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
    background-image: linear-gradient(
      80deg,
      $main-blue-rgb-015,
      transparent 50%
    );
  }

  .red::before {
    background-image: linear-gradient(
      -80deg,
      $main-red-rgb-015,
      transparent 50%
    );
  }
  .red:nth-child(2n)::before {
    background-image: linear-gradient(
      80deg,
      $main-red-rgb-015,
      transparent 50%
    );
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
