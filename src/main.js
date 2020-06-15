import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "../public/js/rem";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import less from "less";

import footer_nav from "./components/footer-nav";
import cs_icon_checkbox from "./components/cs-icon-checkbox";
import store from './store'
Vue.use(ElementUI);
Vue.use(less);
Vue.config.productionTip = false;
Vue.component("cs-icon-checkbox", cs_icon_checkbox);

new Vue({
  router,
  components: {
    footer_nav
  },
  store,
  render: h => h(App)
}).$mount("#app");
