<template>  
  <div class="container text-center">
    <h1 class="card-title my-4">{{ item.movie.title }}</h1>
    <div class="text-center container">
      <div class="card-container">
        <div class="card">
          <div class="front-content">
            <img
              :src="getImage"
              @error="setDefaultImage"
              class="card-img-top"
              :alt="item.movie.title"
            />
          </div>
          <div class="content">
            <h5 class="card-title">{{ item.movie.title }}</h5>
            <p class="card-text">Release Date: {{ item.movie.release_date }}</p>
            <p class="card-text">Duration: {{ item.movie.duration }} min</p>
            <p class="card-text">Language: {{ item.movie.language }}</p>
            <p class="card-text">{{ item.movie.overview }}</p>
            <RouterLink :to="{ name: 'single-movie', params: { 'id': item.id } }">
               show
             </RouterLink>
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
  name: "CardComponent",
  props: ["item"],
  data() {
    return {
      store,
    };
  },
  computed: {
    getImage() {
      return this.item.movie.cover_image
        ? this.store.imgBasePath + this.item.movie.cover_image
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
    },
  },
  methods: {
    setDefaultImage(event) {
      event.target.src = this.store.defaultImg;
    },
  },
  mounted() {
    console.log(this.item);
    // console.log(this.items.hall.name);
  },
};
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
    .card-title {
    display: -webkit-box;
    -webkit-line-clamp: 1;     /* Numero massimo di righe */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 2em;    
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
