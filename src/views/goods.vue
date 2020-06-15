<template>
  <div class="goodsX">
    <div class="goods-head-fixedX">
      <div class="goods-head-fixed">
        <span class="goods-head-fixed-left" @click="goback"
          ><i class="iconfont icon-fanhui1"
        /></span>
        <span class="goods-head-fixed-text choose">商品</span>
        <span class="goods-head-fixed-text">详情</span>
        <span class="goods-head-fixed-text">评论</span>
        <span class="goods-head-fixed-but"
          ><i class="iconfont icon-3"/><i class="iconfont icon-gengduo1"
        /></span>
      </div>
    </div>
    <div class="goods-head">
      <div class="goods-head-top">
        <span class="goods-head-top-left" @click="goback"
          ><i class="iconfont icon-fanhui1"
        /></span>
        <span class="goods-head-top-right"
          ><i class="iconfont icon-gengduo1"
        /></span>
      </div>
      <div class="goods-head-swiper swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in info.goods_imgs"
            :key="index"
          >
            <img
              :src="require('../../public/images/shops_img/' + item)"
              alt=""
              class="goods-head-swiper-img"
            />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="goods-head-info">
        <div class="goods-head-info-nameX">
          <span class="goods-head-info-name">{{ info.goods_name }}</span>
          <span class="goods-head-info-share"
            ><i class="cs-iconfont icon-fenxiang" />分享</span
          >
        </div>
        <div class="goods-head-info-commentnum">用户评论:<span>0</span></div>
        <div class="goods-head-info-mininum">≥1袋 起批</div>
        <div class="goods-head-info-price">
          ￥{{ info.goods_price.toFixed(2) }}
        </div>
      </div>
    </div>
    <div class="goods-business">
      <div class="goods-business-info">
        <div class="goods-business-info-img">
          <img
            :src="require('../../public/images/user_img/' + info.merchants.img)"
            alt=""
          />
        </div>
        <div class="goods-business-info-nameX">
          <div class="goods-business-info-name">
            {{ info.merchants.name }}
          </div>
          <div class="goods-business-info-scoreX">
            综合评分:<span class="goods-business-info-score">5.00</span>
          </div>
        </div>
      </div>
      <div class="goods-business-data">
        <div class="goods-business-data-left">
          <div class="goods-business-data-left-num">
            {{ info.merchants.goods_num }}
          </div>
          <div class="goods-business-data-left-text">全部宝贝</div>
        </div>
        <div class="goods-business-data-right">
          <div>
            描述相符<span class="goods-business-data-right-score">5.00</span>
          </div>
          <div>
            描述相符<span class="goods-business-data-right-score">5.00</span>
          </div>
          <div>
            描述相符<span class="goods-business-data-right-score">5.00</span>
          </div>
        </div>
      </div>
      <div class="goods-business-butX">
        <div class="goods-business-but">
          <i class="cs-iconfont icon-shouchang" />收藏本店
        </div>
        <div class="goods-business-but">
          <i class="cs-iconfont icon-dianpu" />进入店铺
        </div>
      </div>
    </div>
    <div class="goods-details">
      <ul class="goods-details-tab">
        <li :class="{ choose: tab }" @click="changeTab(true)">商品详情</li>
        <li :class="{ choose: !tab }" @click="changeTab(false)">规格参数</li>
      </ul>
      <ul class="goods-details-pts" v-show="tab">
        <li><img src="" alt="" /></li>
        <li><img src="" alt="" /></li>
      </ul>
      <div class="goods-datails-tableX" v-show="!tab">
        <table class="goods-datails-table">
          <tr>
            <td>商品名称</td>
            <td>{{ info.goods_name }}</td>
          </tr>
          <tr>
            <td>商品编号</td>
            <td>{{ info.goods_id }}</td>
          </tr>
          <tr>
            <td>店铺</td>
            <td>{{ info.merchants.name }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="goods-footerX">
      <div class="goods-footer">
        <span class="goods-footer-left">
          <span><i class="cs-iconfont icon-dianpu" />店铺</span>
          <span><i class="cs-iconfont icon-shouchang" />收藏</span>
          <span><i class="cs-iconfont icon-kefu" />客服</span>
        </span>
        <span class="goods-footer-right">
          <span class="goods-footer-right-but">
            <span class="goods-footer-right-but-left" @click="addCar"
              >加入购物车</span
            >
            <span class="goods-footer-right-but-right">立刻购买</span>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swiper from "swiper";
export default {
  name: "goods",
  data() {
    return {
      tab: true,
      info: {
        goods_id: "",
        goods_imgs: "",
        goods_name: "",
        goods_price: "",
        merchants: {},
        types_id: ""
      }
    };
  },
  created() {
    this.$store.commit("unShowNav");
    // eslint-disable-next-line no-console
    let goods_id = this.$route.query.id;
    // eslint-disable-next-line no-console
    axios.get("api/goods/" + goods_id).then(res => {
      this.info = res.data.data;
    });
  },
  mounted() {
    setTimeout(() => {
      new swiper(".goods-head-swiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        }
      });
    }, 50);
  },
  destroyed() {
    this.$store.commit("showNav");
  },
  methods: {
    changeTab(val) {
      this.tab = val;
    },
    goback() {
      this.$router.go(-1);
    },
    addCar() {
      // eslint-disable-next-line no-console
      console.log(this.info);
      this.$store.commit("addCar", {
        goods_info: this.info,
        goods_num: 1
      });
      // eslint-disable-next-line no-console
      console.log(this.$store.getters.getCar);
    }
  }
};
</script>

<style>
.icon-fenxiang {
  background: url("../../public/images/main-nav/share_icon.png");
  background-size: 100%;
}
.icon-shouchang {
  background: url("../../public/images/main-nav/score-detail-bg.png");
  background-size: 100%;
}
.icon-dianpu {
  background: url("../../public/images/main-nav/score-detail-bg.png") 0 20px;
  background-size: 100%;
}
.icon-kefu {
  background: url("../../public/images/main-nav/tab_shop_contact.png");
  background-size: 100%;
}
</style>
<style scoped>
@import "../../public/css/goods.css";
</style>
