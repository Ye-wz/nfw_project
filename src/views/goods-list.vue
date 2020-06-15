<template>
  <div>
    <list_screen_head />
    <goods_list_main />
  </div>
</template>

<script>
import list_screen_head from "@c/list-screen-head.vue";
import goods_list_main from "@c/goods-list-main";
export default {
  name: "goods-list",
  components: {
    list_screen_head,
    goods_list_main
  }
};
</script>
