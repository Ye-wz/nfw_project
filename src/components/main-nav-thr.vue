<template>
  <div class="main-nav-thr">
    <div class="main-nav-thr-swiper swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide main-nav-thr-swiper-bigX"
          v-for="(item, index) in lists"
          :key="index"
        >
          <router-link
            to=""
            class="main-nav-thr-swiper-smallX"
            v-for="(val, key) in item"
            :key="key"
          >
            <img
              :src="require('../../public/images/main-nav/nav-thr/' + val)"
              alt=""
              class="main-nav-thr-swiper-smallX-img"
            />
            <p>{{ key }}</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="main-nav-thr-newX">
      <img
        src="../../public/images/main-nav/nav-thr/sc-news-tit.png"
        alt=""
        class="main-nav-thr-new-img"
      />
      <div class="main-nav-thr-news swiper-container swiper-no-swiping">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            农副网客服电话：15109719630（微信同步）
          </li>
          <li class="swiper-slide">
            新用户注册即可领取188元红包！
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "main-nav-thr",
  data() {
    return {
      lists: [
        {
          水果: "15447815582409.png",
          食品: "15447802684534.png"
        },
        {
          蔬菜: "15447766257256.png",
          调料: "15447795007158.jpg"
        },
        {
          米面: "15447806069108.png",
          干果: "15447777450858.png"
        },
        {
          粮油: "15447770869205.png",
          生活用品: "15447792161545.png"
        },
        {
          水产: "15447807662195.png",
          全部商品: "15447804665426.png"
        }
      ]
    };
  },
  mounted() {
    new Swiper({
      el: ".main-nav-thr-swiper",
      slidesPerView: 5
    });
    new Swiper({
      el: ".main-nav-thr-news",
      loop: true,
      autoplay: true,
      direction: "vertical",
      preventInteractionOnTransition: false
    });
  }
};
</script>

<style scoped>
.main-nav-thr {
  padding: 10px 0 0 0;
  background: white;
}
.main-nav-thr-swiper-smallX {
  text-align: center;
  font-size: 12px;
  color: gray;
  padding-bottom: 15px;
}
.main-nav-thr-swiper-smallX-img {
  width: 35px;
  height: 35px;
}
.main-nav-thr-newX {
  height: 40px;
  box-sizing: border-box;
  padding: 12px;
  overflow: hidden;
  white-space: nowrap;
}
.main-nav-thr-news {
  color: gray;
  font-size: 12px;
  line-height: 16px;
  display: inline-block;
  margin-left: 1%;
}
.main-nav-thr-new-img {
  float: left;
  height: 100%;
  display: inline-block;
}
</style>
