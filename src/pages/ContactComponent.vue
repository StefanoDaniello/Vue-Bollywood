<template>
  <div class="container d-flex justify-content-start">
      <RouterLink :to="{ name: 'home'}" >
        <button class="back-button my-5">
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
  <div class="container px-5 py-2">
    <h1>Contact Us</h1>
    <form @submit.prevent="sendForm()" class="col-12 text-start">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          name="name"
          type="text"
          class="form-control border-0 border-bottom"
          id="name"
          placeholder="Enter your name"
          v-model="name"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          name="email"
          type="text"
          class="form-control border-0 border-bottom"
          id="email"
          placeholder="Enter your email"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Write your message</label>
        <textarea
          name="message"
          class="form-control border-0 border-bottom"
          id="message"
          placeholder="Enter your text"
          cols="30"
          rows="10"
          v-model="message"
        >
        </textarea>
        <button type="submit" class="btn btn-lg btn-primary text-white my-3">
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { store } from "../store";
import axios from "axios";
export default {
  name: "ContactComponent",
  data() {
    return {
      store,
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendForm() {
      console.log("sendForm");
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      // console.log(data);
      axios
        .post(`${this.store.apiBaseUrl}/contacts`, data)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
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


</style>
