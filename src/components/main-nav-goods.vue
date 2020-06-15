<template>
  <div class="main-nav-goods">
    <div class="main-nav-goods-imgX">
      <img
        src="../../public/images/shops_img/15550486083728.jpg"
        alt=""
        class="main-nav-goods-img"
      />
    </div>
    <div class="main-nav-goods-name">
      四川精品白萝卜约40斤/件
    </div>
    <div class="main-nav-goods-priceX">
      <span class="main-nav-goods-price">50.00</span>
      <router-link to="" class="main-nav-goods-add f_R"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-nav-goods"
};
</script>

<style scoped>
.main-nav-goods {
  width: 50%;
  box-sizing: border-box;
  padding: 0.8%;
  display: inline-block;
}
.main-nav-goods-img {
  width: 100%;
}
.main-nav-goods-price:before {
  content: "￥";
}
.main-nav-goods-name {
  font-size: 14px;
  height: 3em;
}
.main-nav-goods-priceX {
  margin: 0 5px 5px 5px;
}
.main-nav-goods-price {
  color: #f56456;
  font-size: 16px;
}
.main-nav-goods-add {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #f56456;
  content: url("../../public/images/good-cart-icon.png");
}
</style>
