<template>
  <div>
    <ul class="goods-list" v-show="show_cow">
      <li class="goods-list-item" v-for="(item, index) in list" :key="index">
        <router-link to="">
          <div class="goods-list-itemX">
            <div class="goods-list-item-imgX">
              <img
                :src="
                  require('../../public/images/shops_img/' + item.goods_imgs[0])
                "
                alt=""
              />
            </div>
            <div class="goods-list-item-right">
              <h2 class="goods-list-item-title">{{ item.goods_name }}</h2>
              <p class="goods-list-item-priceX">
                <span class="goods-list-item-price">{{ item.goods_price }}</span
                ><i class="goods-list-item-add" />
              </p>
              <p class="goods-list-item-merchants iconfont">
                {{ item.merchants.name }}
              </p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <ul class="goods-list-block" v-show="!show_cow">
      <li
        class="goods-list-block-item "
        v-for="(item, index) in list"
        :key="index"
      >
        <router-link :to="'/goods?id=' + item.goods_id">
          <div class="goods-list-itemX goods-block">
            <div class="goods-list-block-item-imgX">
              <img
                :src="
                  require('../../public/images/shops_img/' + item.goods_imgs[0])
                "
                alt=""
              />
            </div>
            <div class="goods-list-item-right">
              <h2 class="goods-list-item-title">{{ item.goods_name }}</h2>
              <p class="goods-list-item-priceX goods-block">
                <span class="goods-list-item-price">{{ item.goods_price }}</span
                ><i class="goods-list-item-add" />
              </p>
              <p class="goods-list-item-merchants iconfont goods-block">
                {{ item.merchants.name }}
              </p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "goods-list-main",
  data() {
    return {
      show_cow: false,
      list: []
    };
  },
  created() {
    let rou = this.$route.query.id;
    axios.get("api/goods/type/" + rou).then(res => {
      this.list = res.data.data;
    });
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
h2 {
  font-weight: 400;
}
.goods-list-item {
  background: white;
  padding: 10px;
}
.goods-list-itemX {
  position: relative;
}
.goods-list-item-imgX {
  width: 11rem;
  height: 11rem;
  border-radius: 5px;
  overflow: hidden;
  display: inline-block;
}
.goods-list-item-title {
  font-size: 14px;
  height: 2em;
}
.goods-list-item-right {
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
}
.goods-list-item-priceX {
  margin: 5rem 0 0.2rem 0;
}
.goods-list-item-price {
  color: #f56456;
  font-size: 16px;
}
.goods-list-item-price:before {
  content: "￥";
}
.goods-list-item-add {
  position: absolute;
  right: 0;
  height: 2.5rem;
  width: 2.5rem;
  background: #f56456;
  border-radius: 50%;
  position: absolute;
  right: 0;
  z-index: 1;
  text-align: center;
  cursor: pointer;
}
.goods-list-item-add:before {
  content: "";
  display: inline-block;
  height: 2rem;
  width: 2rem;
  background: url("../../public/images/pub_goods.png") no-repeat;
  background-size: 100%;
  background-position: -1px -3.8rem;
}
.goods-list-item-merchants {
  color: gray;
  font-size: 12px;
}
.goods-list-item-merchants:after {
  content: "进店\e636";
  color: black;
  margin-left: 5px;
}
.goods-list-block-item {
  border-radius: 5px;
  width: 47%;
  margin: 1.5%;
  display: inline-block;
  overflow: hidden;
  background: white;
}
.goods-list-block-item-imgX {
  width: 100%;
}
.goods-list-item-priceX.goods-block {
  margin-top: 2rem;
}
.goods-list-item-merchants.goods-block:after {
  content: "\e636";
}
</style>
