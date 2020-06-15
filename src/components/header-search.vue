<template>
  <div class="header-searchX" v-if="show">
    <el-row
      type="flex"
      align="middle"
      style="background: white;width: 100%;position: fixed;"
    >
      <el-col :span="3">
        <div class="header-search-back " @click="goback">
          <i class="el-icon-arrow-left" />
        </div>
      </el-col>
      <el-col :span="18">
        <div class="header-search-inputX">
          <input
            type="text"
            placeholder="请输入商品名称"
            class="header-search-input"
          />
          <i class="el-icon-search header-search-button" />
        </div>
      </el-col>
      <el-col :span="3">
        <div class="header-moveX">
          <el-dropdown trigger="click" style="padding: 0">
            <i class="el-icon-more el-dropdown-link" />
            <el-dropdown-menu slot="dropdown" divided="true">
              <li class="el-icon-menu-li">
                <router-link to=""
                  ><i class="cs-icon cs-icon-home" />商城首页</router-link
                >
              </li>
              <li class="el-icon-menu-li">
                <router-link to=""
                  ><i class="cs-icon cs-icon-fenglei" />分类</router-link
                >
              </li>
              <li class="el-icon-menu-li">
                <router-link to=""
                  ><i class="cs-icon cs-icon-car" />购物车</router-link
                >
              </li>
              <li class="el-icon-menu-li">
                <router-link to=""
                  ><i class="cs-icon cs-icon-wode" />我的</router-link
                >
              </li>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "header-search",
  data() {
    return {
      show: true
    };
  },
  watch: {
    $route: {
      handler(now) {
        this.show = now.path === "/types";
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
.header-searchX {
  height: 50px;
  width: 100%;
  background: white;
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
  background: #f8f8f8;
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
}
.cs-icon-home {
  background: url("../../public/images/pub_goods.png");
  background-position: 0 0;
  background-size: 100%;
}
.cs-icon-fenglei {
  background: url("../../public/images/pub_goods.png");
  background-position: 0 200px;
  background-size: 100%;
}
.cs-icon-car {
  background: url("../../public/images/pub_goods.png");
  background-position: 0 175px;
  background-size: 100%;
}
.cs-icon-wode {
  background: url("../../public/images/pub_goods.png");
  background-position: 0 150px;
  background-size: 100%;
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
</style>
