<template>
  <div class="swiper-container main-nav-sec">
    <ul class="swiper-wrapper main-nav-sec-ul">
      <li class="swiper-slide main-nav-sec-li">
        <router-link to="">
          <img
            src="../../public/images/main-nav/15446687583451.png"
            alt=""
            class="main-nav-sec-slide-img"
          />
          <p class="main-nav-sec-li-p">行业资讯</p>
        </router-link>
      </li>
      <li class="swiper-slide main-nav-sec-li">
        <router-link to="">
          <img
            src="../../public/images/main-nav/15446685052187.png"
            class="main-nav-sec-slide-img"
            alt=""
          />
          <p class="main-nav-sec-li-p">好货推荐</p>
        </router-link>
      </li>
      <li class="swiper-slide main-nav-sec-li">
        <router-link to="">
          <img
            src="../../public/images/main-nav/15528139544494.png"
            class="main-nav-sec-slide-img"
            alt=""
          />
          <p class="main-nav-sec-li-p">积分商城</p>
        </router-link>
      </li>
      <li class="swiper-slide main-nav-sec-li">
        <router-link to="">
          <img
            src="../../public/images/main-nav/15551356395800.png"
            class="main-nav-sec-slide-img"
            alt=""
          />
          <p class="main-nav-sec-li-p">便民消息</p>
        </router-link>
      </li>
      <li class="swiper-slide main-nav-sec-li">
        <router-link to="">
          <img
            src="../../public/images/main-nav/15528137264845.png"
            class="main-nav-sec-slide-img"
            alt=""
          />
          <p class="main-nav-sec-li-p">物流叫车</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "mian-nav-sec",
  mounted() {
    new Swiper({
      el: ".main-nav-sec",
      slidesPerView: 5
    });
  }
};
</script>

<style scoped>
@import "~swiper/css/swiper.min.css";
.main-nav-sec {
  padding: 10px 0;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
}
.main-nav-sec-ul {
  text-align: center;
}
.main-nav-sec-li {
  width: 20%;
  font-size: 12px;
}
.main-nav-sec-slide-img {
  width: 50%;
}
.main-nav-sec-li-p {
  color: gray;
}
</style>
