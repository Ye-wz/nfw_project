<template>
  <div class="header-searchX">
    <el-row type="flex" align="middle" style="background: white" v-if="flag">
      <el-col :span="3">
        <div class="header-search-back " @click="goback">
          <i class="el-icon-arrow-left" />
        </div>
      </el-col>
      <el-col :span="18">
        <div class="header-search-inputX">
          <input
            type="text"
            :placeholder="placeholder"
            class="header-search-input"
          />
          <i class="el-icon-search header-search-button" />
        </div>
      </el-col>
      <el-col :span="3" style="text-align: center">
        <span class="cs-icon cs-icon-line" />
      </el-col>
    </el-row>
    <el-row class="list-screen">
      <el-col :span="6" class="list-screen-comp">综合</el-col>
      <el-col :span="6">销量</el-col>
      <el-col :span="6" class="list-screen-price">价格<i class="list-screen-price-choose"></i></el-col>
      <el-col :span="6" class="list-screen-screen">筛选<i class="iconfont icon-shaixuan"></i></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "list-screen-head",
  data() {
    return {
      flag: true,
      placeholder: "搜索该分类下的商品"
    };
  },
  watch: {
    $route: {
      handler(now) {
        this.show = now.path !== "/";
      },
      immediate: true
    }
  },
  methods: {
    goback() {
      // eslint-disable-next-line no-console
      console.log(12);
      this.$router.go(-1);
    }
  }
};
</script>
<style>
.el-popper .popper__arrow:after {
  border-width: 0 !important;
}
</style>
<style scoped>
.iconfont {
  font-size: 12px;
}
.header-searchX {
  height: 80px;
  width: 100%;
}
.header-search {
  position: fixed;
  top: 0;
  background: white;
  z-index: 20;
}
.header-search-back {
  text-align: center;
  font-size: 28px;
}
.header-search-inputX {
  white-space: nowrap;
}
.header-search-input {
  border-radius: 100px;
  width: 95%;
  background: #f5f5f5;
  border-color: transparent;
  display: inline-block;
  font-size: 14px;
  padding: 3px 0 3px 15px;
}
.header-search-button {
  font-size: 15px;
  margin-left: -30px;
  color: #999;
  font-weight: 600;
}
.el-icon-more {
  font-size: 20px;
  color: #666;
  cursor: pointer;
}
.header-moveX {
  text-align: center;
}
.el-dropdown-menu {
  background: rgba(255, 255, 255, 0.1);
  padding: 0;
  border: 0;
  margin-bottom: -1px;
  border-radius: 5px;
  overflow: hidden;
}
.cs-icon {
  content: "";
  display: inline-block;
  height: 25px;
  width: 25px;
  line-height: 1.43;
  background: url("../../public/images/top-new.png");
  background-size: 100%;
  cursor: pointer;
}
.cs-icon-line {
  background-position: 0 -115px;
}
.el-icon-menu-li {
  display: block;
  background: rgba(0, 0, 0, 0.8);
  margin-bottom: 1px;
  width: 10rem;
  padding: 1rem 2.5rem;
  font-size: 14px;
}
.el-icon-menu-li a {
  color: white;
  display: flex;
  line-height: 25px;
}
.el-icon-menu-li i {
  margin-right: 3px;
}
.list-screen {
  text-align: center;
  min-height: 40px;
  background: white;
  font-size: 12px;
}
.list-screen div {
  line-height: 40px;
  display: inline-block;
}
.list-screen-comp:after {
  content: "";
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
  border: 4px solid transparent;
  border-top-color: #ccc;
}
.list-screen-price-choose {
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
}
.list-screen-price-choose:before,
.list-screen-price-choose:after {
  content: "";
  border: 4px solid transparent;
  display: block;
  margin: 2px 0 3px;
}
.list-screen-price-choose:before {
  border-bottom-color: #cccccc;
}
.list-screen-price-choose:after {
  border-top-color: #cccccc;
}
</style>
