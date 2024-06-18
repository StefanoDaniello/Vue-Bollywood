<template>
  <div class="container px-1">
    <div class="cellphone-container">
      <div class="movie overflow-hidden rounded-4">
        <div class="menu"><i class="material-icons"></i></div>
        <div class="movie-img">
          <img
            :src="getImage"
            @error="setDefaultImage"
            class="card-img-top"
            :alt="item.movie.title"
          />
        </div>
        <div class="text-movie-cont">
          <div class="mr-grid">
            <div>
              <h2 class="card-title my-3">{{ item.movie.title }}</h2>
              <ul class="movie-gen">
                <li>Release Date: {{ item.movie.release_date }}</li>
                <br />
                <li>Duration: {{ item.movie.duration }}</li>
                <br />
                <li>Language: {{ item.movie.language }}</li>
                <br />
              </ul>
            </div>
          </div>
          <div class="mr-grid summary-row">
            <div class="col2">
              <h5>Overview</h5>
            </div>
          </div>
          <div class="mr-grid">
            <div class="col1">
              <p class="movie-description">
                {{ item.movie.overview }}
              </p>
            </div>
          </div>
          <div class="mr-grid action-row">
            <div class="col2">
              <div class="watch-btn">
                <h3>{{ item.price_ticket }} €</h3>
              </div>
            </div>
            <div class="col6 action-btn">
              <RouterLink
                :to="{ name: 'single-movie', params: { id: item.id } }"
                ><i class="fas fa-eye fs-4">Details</i
              ></RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  name: "CardComponent1",
  props: ["item"],
  data() {
    return {
      store,
    };
  },
  computed: {
    getImage() {
      return this.item.movie.cover_image ? this.store.imgBasePath + this.item.movie.cover_image
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    },

  },
  mounted() {
    console.log(this.item.movie);
    console.log(this.item);
  },
  methods: {
    setDefaultImage(event) {
      event.target.src = this.store.defaultImg;
    },
  },

};
</script>

<style lang="scss" scoped>
$accent-color: #e7e7e7;
$brand-color: #fe4141;
$dark-color: #1e1b26;

.card-title {
    display: -webkit-box;
    -webkit-line-clamp: 1;     /* Numero massimo di righe */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 2em;    
}
.cellphone-container {
  width: 375px;
  height: 650px;
  margin: 60px auto 0 auto;
  border-radius: 4px;
}
.menu {
  position: absolute;
  right: 12px;
  top: 6px;
  z-index: 999;
  i {
    font-size: 40px;
    color: $brand-color;
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.5));
  }
}
.movie-img {
  width: 100%;
  height: 350px;
  //   background-image: url(https://i.ibb.co/FDGqCmM/papers-co-ag74-interstellar-wide-space-film-movie-art-33-iphone6-wallpaper.jpg);
  //   background-position: center;
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   z-index: 111 !important;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: relative;
  img {
    height: 100%;
    object-fit: cover;
  }
}

.movie {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+39,1e1b26+53&0+38,1+55 */
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 38%,
    rgba(255, 255, 255, 0.06) 39%,
    rgba(30, 27, 38, 0.88) 53%,
    rgba(30, 27, 38, 1) 55%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 38%,
    rgba(255, 255, 255, 0.06) 39%,
    rgba(30, 27, 38, 0.88) 53%,
    rgba(30, 27, 38, 1) 55%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 38%,
    rgba(255, 255, 255, 0.06) 39%,
    rgba(30, 27, 38, 0.88) 53%,
    rgba(30, 27, 38, 1) 55%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

  position: absolute;
  background-size: contain;
  background-size: cover;
  z-index: 1 !important;
  width: 375px;
  height: 660px;
  display: block;
  border-radius: 4px;
}

.text-movie-cont {
  padding: 0px 12px;
}

.action-btn {
  text-align: right;
  i {
    color: $brand-color;
    font-size: 28px;
    text-align: right;
  }
}

.watch-btn {
  h3 {
    i {
      font-size: 14px;
      //   margin-right: 2px;
      //   position: relative;
      float: left;
      line-height: 1;
    }
  }
  display: block;
  border: 1px solid $brand-color;
  border-radius: 5px;
  padding: 4px;
  width: 60px;
  text-align: center;
}

.action-row {
  margin-top: 24px;
}

.summary-row {
  margin-top: 12px;
}

/* TYPOGRAPHY STARTS */

/* Fonts */
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800,300italic,400italic,600italic,700italic,800italic);

$heading-font-family: "Montserrat", sans-serif;
$paragraph-font-family: "Open Sans", sans-serif;

$light: 300;
$regular: 400;
$semi-bold: 600;
$bold: 700;
$font-regular: 400;
$mont-bold: 700;

$text-movie-title: 36px;
$text-summary: 12px;
$text-action-btn: 14px;
$text-movie-description: 12px;

h1,
h2,
h3,
h4,
h5 {
  font-family: $heading-font-family;
  color: $accent-color;
  margin: 0px;
}

h1 {
  font-size: $text-movie-title;
  font-weight: $font-regular;
}

h3 {
  font-size: $text-action-btn;
  font-weight: $font-regular;
  color: $brand-color;
}

h5 {
  font-size: $text-summary;
  font-weight: $font-regular;
}

.movie-gen {
  margin: 0px;
  padding: 0px;
  li {
    font-family: $paragraph-font-family;
    font-size: $text-summary;
    color: darken($accent-color, 40%);
    width: auto;
    display: block;
    float: left;
    margin-right: 6px;
    font-weight: $semi-bold;
  }
}
.movie-description {
  font-family: $paragraph-font-family;
  font-size: $text-movie-description;
  font-weight: $regular;
  color: darken($accent-color, 30%);
  @extend .elements-distance;
  text-align: justify;
  line-height: 1.3;
}
.elements-distance {
  margin: 0px;
}
.mr-grid:before,
.mr-grid:after {
  content: "";
  display: table;
}
.mr-grid:after {
  clear: both;
}
.mr-grid {
  *zoom: 1;
}

.col1,
.col2,
.col3,
.col3rest,
.col4,
.col4rest,
.col5,
.col5rest,
.col6,
.col6rest {
  margin: 0% 0.5% 0.5% 0.5%;
  padding: 1%;
  float: left;
  display: block;
}

/* Columns match, minus margin sum. E.G. margin-left+margin-right=1%, col2=50%-1% - added padding:1%*/

.col1 {
  width: 98%;
}
.col2 {
  width: 47%;
}
.col3 {
  width: 30.3333333333%;
}
.col4 {
  width: 22%;
}
.col5 {
  width: 17%;
}
.col6 {
  width: 13.6666666667%;
}

/* Columns match with their individual number. E.G. col3+col3rest=full width row */

.col3rest {
  width: 63.6666666667%;
}
.col4rest {
  width: 72%;
}
.col5rest {
  width: 77%;
}
.col6rest {
  width: 80.3333333333%;
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
</style>
