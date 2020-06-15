<template>
  <i class="cs-icon-checkbox" :class="current" @click="click" />
</template>
<!--check事件 参数一位点击后是否选择-->
<script>
export default {
  name: "cs-icon-checkbox",
  data() {
    return {
      current: ""
    };
  },
  methods: {
    click() {
      if (this.current) {
        this.current = "";
        this.$emit("check", false);
      } else {
        this.current = "current";
        this.$emit("check", true);
      }
    }
  }
};
</script>

<style scoped lang="less">
.cs-icon-checkbox {
  vertical-align: middle;
  display: inline-block;
  background: #f56456;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  vertical-align: middle;
  &:before {
    display: block;
    content: "";
    background: url("../../public/images/cart_icon_con.png") -25px 0;
    background-size: 270%;
    height: 20px;
    width: 20px;
  }
  &.current {
    background: transparent;
    &:before {
      background-position: 0 0;
    }
  }
}
</style>
