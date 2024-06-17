<template>
  <header class="container ">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <div id="logo">
            <img :src="img" alt="Bollywood Logo" />
          </div>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="show = !show"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
        <div
          class="collapse navbar-collapse"
          :class="{ show: show }"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item" v-for="(link, index) in links" :key="index">
              <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
              <router-link
                :to="{ name: link.routeName }"
                class="nav-link"
                active-class="active"
              >
                {{ link.label }}
              </router-link>
            </li>
          </ul>
          <div class="ms-auto">
            <a href="http://localhost:8000" class="nav-link">
              <i class="fa-solid fa-user"></i><span> Area Riservata</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      img: "../src/img/bollywood.png",
      show: false,
      links: [
        {
          label: "Home",
          routeName: "home",
        },
        {
          label: "Contattaci",
          routeName: "contact",
        },
        {
          label: "Chi Siamo",
          routeName: "about",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  nav{
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 1285px;
    margin: 0 auto;
    border-radius: 5px;
    a{
        color: white !important;
        &:hover{
          color: #0076BD !important;
        }
      }
    #logo{
        width: 150px;
        img{
            width: 100%;
        }
    }
}
</style>
