<template>
  <div class="cs-head">
    <router-link to="/"
      ><i class="cs-head-left el-icon-arrow-left"
    /></router-link>
    <span><slot name="title"/></span>
    <div class="cs-head-right">
      <slot name="header-right">登录</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "cs-head"
};
</script>

<style scoped>
.cs-head.cs-head {
  background: white;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  padding: 0 1rem;
}
.cs-head-left {
  font-size: 25px;
  line-height: 50px !important;
}
.cs-head-right {
  font-size: 12px;
  color: gray;
}
</style>
