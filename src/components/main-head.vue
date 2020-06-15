<template>
  <div class="head-nav" :style="{ background: changecol }">
    <router-link to="/types" class="head-nav-gengduoiX">
      <div class="iconfont icon-gengduo"></div>
      <div>分类</div>
    </router-link>
    <router-link to="" class="head-nav-searchX">
      <div class="cs-wm head-nav-search iconfont icon-sousuo">
        搜索商品/店铺
      </div>
    </router-link>
    <router-link to="" class="head-nav-xiaoxiX">
      <div class="head-nav-xiaoxi-num">0</div>
      <div class="iconfont icon-xiaoxi"></div>
      <div>消息</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "main-head",
  props: ["changecol"]
};
</script>

<style scoped>
.head-nav {
  height: 50px;
  font-size: 12px;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  color: white;
  width: 100%;
  z-index: 5;
}
.head-nav-searchX {
  width: 75%;
}
.head-nav-search {
  height: 35px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.2);
  text-align: left;
  font-size: 14px;
  text-indent: 1em;
  line-height: 35px;
  color: white;
}
.head-nav-search:before {
  font-size: 20px;
  vertical-align: top;
}
.head-nav-gengduoiX,
.head-nav-xiaoxiX {
  color: white;
}
.head-nav-xiaoxi-num {
  height: 15px;
  width: 0.8rem;
  background: white;
  color: #f56456;
  position: absolute;
  z-index: 1;
  font-size: 12px;
  border-radius: 50%;
  margin-left: 15px;
}
</style>
