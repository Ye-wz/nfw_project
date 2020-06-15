<template>
  <div class="home">
    <mainhead :changecol="head_bg" />
    <index_swiper />
    <main_nav_sec />
    <div class="main-nav-thr-bg">
      <main_nav_thr ref="main_thr" />
    </div>
    <main_nav_merchants />
    <main_nav_five ref="main_goods" />
    <div class="main-nav-goodsX">
      <main_nav_goods />
      <main_nav_goods />
      <main_nav_goods />
      <main_nav_goods />
      <main_nav_goods />
    </div>
    <BackToTop
      transitionName="fade"
      :customStyle="myBackToTopStyle"
      :visibilityHeight="0"
      :backPosition="0"
    />
  </div>
</template>

<script>
import mainhead from "../components/main-head";
import index_swiper from "../components/index-swiper";
import main_nav_sec from "../components/main-nav-sec";
import main_nav_thr from "../components/main-nav-thr";
import main_nav_merchants from "../components/main-nav-merchants";
import main_nav_five from "../components/main-nav-five";
import main_nav_goods from "../components/main-nav-goods";
import BackToTop from "../components/BackToTop";

import bus from "../../public/js/bus";
export default {
  components: {
    mainhead,
    index_swiper,
    main_nav_sec,
    main_nav_thr,
    main_nav_merchants,
    main_nav_five,
    main_nav_goods,
    BackToTop
  },
  data() {
    return {
      head_bg: "",
      main_thr: 0,
      myBackToTopStyle: {
        right: "-100px",
        bottom: "100px",
        width: "60px",
        height: "60px",
        "border-radius": "40px",
        "line-height": "40px",
        background: "url(" + require("../../public/images/topup.png") + ")",
        "background-position": "center",
        "background-size": "60%",
        "background-repeat": "no-repeat",
        transition: "all 0.8s ease"
      },
      main_goods: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandle);
    // eslint-disable-next-line no-console
    this.main_thr = this.$refs.main_thr.$el.offsetTop;
    this.main_goods = this.$refs.main_goods.$el.offsetTop;
  },
  methods: {
    scrollHandle(e) {
      // eslint-disable-next-line no-console
      var top = e.srcElement.scrollingElement.scrollTop;
      if (top > 100) {
        this.head_bg = "#f56456";
      } else {
        this.head_bg = "";
      }
      if (top > this.main_thr) {
        bus.$emit("main_top_show");
      } else {
        bus.$emit("main_top_none");
      }
      if (top > this.main_goods) {
        this.myBackToTopStyle.right = 0;
      } else {
        this.myBackToTopStyle.right = "-100px";
      }
    },
    goTop() {}
  }
};
</script>

<style scoped>
.main-nav-thr-bg {
  background: #d8d8d8;
  padding: 5px 0;
}
.main-nav-goodsX {
  padding-top: 10px;
  border-top: 1px solid #eeeeee;
}
</style>
