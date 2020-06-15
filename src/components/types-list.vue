<template>
  <div>
    <div class="types-list-headX">
      <img
        :src="require('../../public/images/main-nav/' + title_img)"
        alt=""
        class="types-list-head-img"
      />
      <router-link :to="'/goods_list?id=' + title">
        <el-button type="danger" style="width: 100%;font-size: 12px"
          >进入{{ title }}频道</el-button
        >
      </router-link>
    </div>
    <ul>
      <li class="types-list-li" v-for="item in list" :key="item.types_id">
        <router-link :to="'/goods_list?id='+item.types_name" class="types-list-li-head">
          {{item.types_name}} <i class="el-icon-arrow-right f_R"
        /></router-link>
        <div class="types-list-li-mainX">
          <ul class="types-list-li-main">
            <li
              class="types-list-li-main-li"
              v-for="second_list in item.types_data"
              :key="second_list.types_id"
            >
              <router-link :to="'/goods_list?id='+second_list.types_name">
                <img
                  :src="require('../../public/images/main-nav/'+(second_list.types_img?second_list.types_img:'no_image.png')) "
                  alt=""
                  class="types-list-li-main-li-img"
                />
                <p>{{ second_list.types_name }}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "types-list",
  data() {
    return {
      list: [],
      title_img: "15434748594390.jpg",
      title: ""
    };
  },
  props: ["type"],
  watch: {
    type: {
      handler(now) {
        axios.get("/api/goods/type").then(res => {
          let datas = res.data;
          for (let i = 0; i < datas.length; i++) {
            if (now === datas[i].types_name) {
              this.title = datas[i].types_name;
              this.title_img = datas[i].types_img;
              this.list = datas[i].types_data;
              return;
            }
          }
        });
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
.types-list-head-img {
  width: 100%;
  margin-bottom: 5px;
}
.types-list-li {
  margin-top: 15px;
}
.types-list-li-head {
  font-size: 14px;
  font-weight: 600;
  padding: 5px 0 5px 5px;
}
.types-list-li-head .el-icon-arrow-right {
  font-size: 16px;
  color: #999999;
}
.types-list-li-mainX {
  width: 100%;
}
.types-list-li-main {
  background: white;
  padding: 0 5%;
  border-radius: 10px;
}
.types-list-li-main-li {
  width: 33.3%;
  text-align: center;
  display: inline-block;
}
.types-list-li-main-li p {
  padding: 8px 0;
  color: #666;
}
.types-list-li-main-li-img {
  width: 65%;
}
</style>
