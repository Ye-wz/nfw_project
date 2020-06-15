import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  showBottomNav: true,
  userName: "",
  userId: "",
  car: {}
};
const getters = {
  getShowBottom(state) {
    return state.showBottomNav;
  },
  getUserName(state) {
    return state.userName;
  },
  getCar(state) {
    return state.car;
  }
};
const mutations = {
  unShowNav(state) {
    state.showBottomNav = false;
  },
  showNav(state) {
    state.showBottomNav = true;
  },
  login(state, userName) {
    state.userName = userName;
  },
  addCar(state, { goods_info, goods_num, flog }) {
    //@flog是否重新赋值
    let merchants_name = goods_info.merchants.name;
    if (state.car[merchants_name]) {
      let merchants = state.car[merchants_name];
      for (let i = 0; i < merchants.length; i++) {
        if (merchants[i].goods_id === goods_info.goods_id) {
          if (flog) {
            state.car[merchants_name][i].num = parseInt(goods_num);
          } else {
            if(goods_num) state.car[merchants_name][i].num += parseInt(goods_num);
            else state.car[merchants_name][i].num += 1;
          }
          var nowCar=state.car;
          state.car = nowCar;
          return;
        }
      }
      let info = goods_info;
      info.num = parseInt(goods_num);
      state.car[merchants_name].push(info);
    } else {
      let info = goods_info;
      info.num = parseInt(goods_num) || 1;
      state.car[merchants_name] = [info];
    }
  }
};
export default new Vuex.Store({
  state,
  getters,
  mutations
});
