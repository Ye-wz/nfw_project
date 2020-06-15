<template>
  <div class="typesX">
    <header_search />
    <el-container>
      <el-aside width="22%">
        <div
          style="width:22%; position: fixed; height: 100%;background: white;"
        >
          <ul class="types-leftX">
            <li
              class="types-left-tab"
              :class="{ Selected: index === clickIndex }"
              v-for="(item, index) in first_list"
              @click="changeIndex(index, item)"
              :key="index"
            >
              <router-link to="">{{ item }}</router-link>
            </li>
          </ul>
        </div>
      </el-aside>
      <el-main style="padding: 1rem;">
        <types_list :type="type" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import types_list from "@c/types-list";
import header_search from "@c/header-search";
export default {
  name: "types",
  data() {
    return {
      first_list: ["生鲜水果", "新鲜蔬菜"],
      clickIndex: 0,
      type: "生鲜水果"
    };
  },
  components: {
    types_list,
    header_search
  },
  methods: {
    changeIndex(val, item) {
      this.clickIndex = val;
      this.type = item;
    }
  }
};
</script>

<style scoped>
.types-leftX {
  background: white;
  width: 100%;
  text-align: center;
}
.types-left-tab {
  padding: 1.5rem 0;
  border: 1px solid #dddddd;
  border-left: 0;
  font-size: 14px;
  cursor: pointer;
}
.types-left-tab.Selected {
  background: #f8f8f8;
  border: 1px solid transparent;
  cursor: unset;
}
.types-left-tab.Selected a {
  color: #f56456;
}
</style>
