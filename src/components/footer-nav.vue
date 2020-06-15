<template>
  <div class="footer-navX" v-show="$store.getters.getShowBottom">
    <div class="footer-nav">
      <router-link to="/" class="footer-nav-X" v-if="index_style">
        <i
          class="iconfonts"
          :style="'background-image: url(' + nav.shouye + ')'"
        />首页</router-link
      >
      <div
        @click="gotop"
        class="footer-nav-X footer-nav-index"
        :class="index_top"
        v-else
      >
        <div></div>
      </div>
      <router-link to="/types" class="footer-nav-X">
        <i
          class="iconfonts"
          :style="'background-image: url(' + nav.fenglei + ')'"
        />分类</router-link
      >
      <router-link to="/street" class="footer-nav-X">
        <i
          class="iconfonts"
          :style="'background-image: url(' + nav.dianpu + ')'"
        />店铺街</router-link
      >
      <router-link to="/car" class="footer-nav-X footer-nav-carX">
        <i
          class="iconfonts"
          :style="'background-image: url(' + nav.car + ')'"/>购物车
        <span class="car-num" v-text="car_num"
      /></router-link>
      <router-link to="/login" class="footer-nav-X">
        <i
          class="iconfonts"
          :style="'background-image: url(' + nav.wode + ')'"
        />我的</router-link
      >
    </div>
  </div>
</template>

<script>
import bus from "../../public/js/bus";
export default {
  name: "footer-nav",
  data() {
    return {
      index_top: "",
      interval: null,
      index_style: true,
      nav: {
        shouye: require("#/images/tab_home_normal.png"),
        fenglei: require("#/images/tab_category_normal.png"),
        dianpu: require("#/images/tab_bought_list_normal.png"),
        car: require("#/images/tab_cart_normal.png"),
        wode: require("#/images/tab_user_normal.png")
      },
      car_num: 0
    };
  },
  mounted() {
    bus.$on("main_top_show", () => {
      this.index_top = "footer-nav-index-gotop";
    });
    bus.$on("main_top_none", () => {
      this.index_top = "";
    });
  },
  methods: {
    gotop() {
      bus.$emit("backTop");
    }
  },
  watch: {
    $route: {
      handler(now) {
        this.index_style = now.path !== "/";
        this.nav = {
          shouye: require("#/images/tab_home_normal.png"),
          fenglei: require("#/images/tab_category_normal.png"),
          dianpu: require("#/images/tab_bought_list_normal.png"),
          car: require("#/images/tab_cart_normal.png"),
          wode: require("#/images/tab_user_normal.png")
        };
        if (now.path === "/types")
          this.nav.fenglei = require("#/images/tab_category_selected.png");
        if (now.path === "/street")
          this.nav.dianpu = require("#/images/tab_bought_list_selected.png");
        if (now.path === "/car")
          this.nav.car = require("#/images/tab_cart_selected.png");
        if (now.path === "/user")
          this.nav.wode = require("#/images/tab_user_selected.png");
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
.footer-navX {
  height: 50px;
}
.footer-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: white;
  z-index: 99;
  display: flex;
}
.footer-nav-X {
  cursor: pointer;
  flex: 1;
  text-align: center;
  color: #999;
}
.footer-nav-X > .iconfont {
  display: block;
  color: #666666;
  font-size: 23px;
}
.footer-nav-index {
  background: url("../../public/images/tab_index_bg.png") no-repeat center;
  background-size: 50px 50px;
}
.footer-nav-index > div {
  width: 40px;
  height: 40px;
  background: #f56456;
  border-radius: 50%;
  margin: 3px auto;
  position: relative;
  z-index: -1;
  overflow: hidden;
}
.footer-nav-index > div:before {
  content: "";
  display: block;
  width: 40px;
  height: 40px;
  background: url("../../public/images/tab_index_icon.png");
  background-size: contain;
  transition: all 0.3s;
}
.footer-nav-index > div:after {
  content: "";
  display: block;
  width: 40px;
  height: 40px;
  background: url("../../public/images/tab_gotop_icon.png");
  background-size: contain;
  transition: all 0.3s;
}
.footer-nav-index.footer-nav-index-gotop > div:after,
.footer-nav-index.footer-nav-index-gotop > div:before {
  transform: translate3d(0, -40px, 0);
}
.router-link-exact-active {
  color: #f56456;
}
.iconfonts {
  display: block;
  height: 25px;
  width: 25px;
  margin: 5px auto;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.footer-nav-carX {
  position: relative;
}
.car-num {
  position: absolute;
  top: 5px;
  right: 23px;
  display: block;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: #f56456;
  font-size: 8px;
  color: white;
}
</style>
