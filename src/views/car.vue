<template>
  <div>
    <div class="car-title">
      <head_title>
        <div slot="title" class="car-title-text">
          购物车
        </div>
        <router-link to="" slot="header-right">
          <span class="car-title-right" @click="switc_operate">管理</span>
        </router-link>
      </head_title>
    </div>
    <div class="car-merchants" v-for="(val, key) in car" :key="key">
      <h2 class="car-merchants-title">
        <span class="car-merchants-check">
          <cs-icon-checkbox />
        </span>
        <i class="car-merchants-iconX"
          ><img
            src="../../public/images/icon_shop.png"
            alt=""
            class="car-merchants-icon"
        /></i>
        <router-link to="" class="car-merchants-name iconfont">{{
          key
        }}</router-link>
      </h2>
      <div
        class="car-merchants-goodsX"
        v-for="goods in val"
        :key="goods.goods_id"
      >
        <div class="car-merchants-check">
          <cs-icon-checkbox />
        </div>
        <div class="car-merchants-goods">
          <div class="car-merchants-goods-showX">
            <router-link to="" class="car-merchants-goods-info-img">
              <img
                :src="
                  require('../../public/images/shops_img/' + goods.goods_imgs)
                "
                alt=""
              />
            </router-link>
            <div class="car-merchants-goods-infoX">
              <router-link to="" class="car-merchants-goods-info">
                <i class="car-merchants-goods-tag cs-tag">批发</i>
                {{ goods.goods_name }}
              </router-link>
              <div class="car-merchants-goods-minimun">
                1
              </div>
              <div class="car-merchants-goods-priceX">
                <span class="car-merchants-goods-price">{{
                  goods.goods_price.toFixed(2)
                }}</span>
                <div class="car-merchants-goods-operationX">
                  <div class="car-merchants-goods-operation">
                    <span class="iconfont icon-jian" />
                    <span>{{ goods.num }}</span>
                    <span
                      class="iconfont icon-jia-tianchong"
                      @click="add_num(goods)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="car-merchants-total-priceX">
          <span class="car-merchants-total-num">{{ goods.num }}</span>
          <span class="car-merchants-total-price">{{
            (goods.num * goods.goods_price).toFixed(2)
          }}</span>
        </div>
      </div>
    </div>
    <div class="car-operateX">
      <div class="car-operate">
        <span class="car-operate-catch-all">
          <cs-icon-checkbox />
          全选
        </span>
        <span class="car-operate-right" v-show="!car_operate_model">
          <span class="car-operate-priceX">
            合计:
            <span class="car-operate-price">58</span>
          </span>
          <span class="car-operate-but">去结算</span>
        </span>
        <span class="car-operate-right" v-show="car_operate_model">
          <span class="car-operate-clean">
            清除
          </span>
          <span class="car-operate-but-1">移入收藏夹</span>
          <span class="car-operate-but-2">删除</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import head_title from "../components/cs-head";
export default {
  name: "car",
  data() {
    return {
      car_operate_model: false
    };
  },
  components: {
    head_title
  },
  activated() {
    this.car();
  },
  created() {},
  methods: {
    switc_operate() {
      this.car_operate_model = !this.car_operate_model;
    },
    add_num(goods) {
      this.$store.commit("addCar", {
        goods_info: goods
      });
      console.log(this.car);
    }
  },
  computed: {
    car() {
      return this.$store.getters.getCar;
    }
  }
};
</script>
<style>
i.cs-tag {
  font-style: normal;
  border-radius: 3px;
  padding: 0 2px;
  background: #009dfe;
  color: white;
}
</style>
<style scoped lang="less">
@import "../../public/css/car";
.car-title-right {
  color: #999;
}
.car-title-text {
  font-size: 18px;
}
</style>
