<template>
  <div class="main-nav-five">
    <div class="main-nav-five-swiperX swiper-container">
      <div class="swiper-wrapper">
        <router-link
          to=""
          class="swiper-slide main-nav-five-swiper-imgX"
          v-for="index in 16"
          :key="index"
        >
          <img
            :src="require('../../public/images/' + shops[index - 1].imageURL)"
            alt=""
            class="main-nav-five-swiper-img"
            v-if="shops.length > index - 1"
          />
          <img
            src="../../public/images/shop_img_90_45.jpg"
            alt=""
            class="main-nav-five-swiper-img"
            v-else
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "main-nav-five",
  data() {
    return {
      shops: [
        {
          imageURL: "15564244287186.png"
        },
        {
          imageURL: "15564232532774.png"
        },
        {
          imageURL: "15564235584716.png"
        },
        {
          imageURL: "15564233357848.png"
        },
        {
          imageURL: "15564242685541.png"
        },
        {
          imageURL: "default_shop_logo_0.gif"
        },
        {
          imageURL: "15564238588104.png"
        },
        {
          imageURL: "15471091576348.jpg"
        },
        {
          imageURL: "15565175124343.jpg"
        },
        {
          imageURL: "default_shop_logo_0.gif"
        } //shop_img_90_45.jpg
      ]
    };
  },
  mounted() {
    new Swiper({
      el: ".main-nav-five-swiperX",
      slidesPerView: 3.4,
      slidesPerColumn: 2,
      updateOnImagesReady: true,
      freeMode: true,
      freeModeMomentumBounce: false
    });
  }
};
</script>

<style scoped>
@import "~swiper/css/swiper.min.css";
.swiper-container {
  height: 17rem;
}
.main-nav-five-swiper-imgX {
  width: 15%;
  height: 6rem;
  padding: 1rem;
  border: 1px solid #f8f8f8;
  text-align: center;
}
.main-nav-five-swiper-img {
  width: 80%;
  height: 100%;
}
</style>
