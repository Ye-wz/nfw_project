<template>
  <div class="swiperX">
    <div class="swiper-container index-head-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/index/index-lunbo1.jpg" class="cs-wm" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/index/index-lunbo2.png" class="cs-wm" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/index/index-lunbo3.jpg" class="cs-wm" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/index/index-lunbo4.jpg" class="cs-wm" />
        </div>
      </div>
      <div class="swiper-pagination head-swiper"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "index-swiper",
  mounted() {
    new Swiper({
      el: ".index-head-swiper",
      loop: true,
      autoplay: {
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        color: "white",
        bulletElement: "li"
      }
    });
  }
};
</script>
<style>
.swiper-pagination > .swiper-pagination-bullet.swiper-pagination-bullet-active {
  width: 1.5rem;
  border-radius: 5px;
}
.swiper-pagination-bullet {
  width: 7px;
  height: 7px;
}
</style>
<style scoped>
@import "~swiper/css/swiper.css";
.swiper-container {
  --swiper-pagination-color: #f56456;
}
.head-swiper {
  background: unset;
}
</style>
