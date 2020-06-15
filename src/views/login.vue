<template>
  <div class="loginX">
    <div class="login-head">
      <router-link to="/" class="login-head-home"></router-link>
      <router-link to="/register" class="login-head-register">
        注册
      </router-link>
      <img
        src="../../public/images/m_login_logo_0.png"
        alt=""
        class="login-head-img"
      />
    </div>
    <el-tabs style="width: 100%" value="first" lazy="true" stretch>
      <el-tab-pane name="first">
        <div slot="label" class="login-options">
          密码登录
        </div>
        <p class="login-input-username">
          <label for="userName">用户名:</label>
          <input
            type="text"
            id="userName"
            placeholder="手机/邮箱/用户名"
            v-model="userName"
          />
          <i
            class="input-reset iconfont icon-guanbi"
            v-show="userName"
            @click="reset('userName')"
          />
        </p>
        <p class="input-warning" v-show="false">请输入用户名</p>
        <p class="login-input-password">
          <label for="password">密码:</label>
          <input
            type="password"
            id="password"
            placeholder="密码"
            v-model="password"
          />
          <i
            class="input-reset iconfont icon-guanbi"
            v-show="password"
            @click="reset('password')"
          />
        </p>
        <p class="input-warning" v-show="false">请输入密码</p>
      </el-tab-pane>
      <el-tab-pane name="second" lazy>
        <div slot="label" class="login-options">
          动态密码登录
        </div>
        <p class="login-input-username">
          <label for="pel">手机号码:</label>
          <input
            type="text"
            id="pel"
            placeholder="已注册的手机号码"
            v-model="tel"
          />
          <i
            class="input-reset iconfont icon-guanbi"
            v-show="tel"
            @click="reset('tel')"
          />
        </p>
        <p class="input-warning" v-show="false">请输入手机号码</p>
        <p class="login-input-password d_pwd">
          <label for="d_pwd">动态密码:</label>
          <input
            type="password"
            id="d_pwd"
            placeholder="动态密码"
            v-model="d_pwd"
          />
          <i
            class="input-reset iconfont icon-guanbi"
            v-show="d_pwd"
            @click="reset('d_pwd')"
          />
          <el-button size="small" type="danger" class="input-reset-getd_pwd"
            >获取验证码</el-button
          >
        </p>
        <p class="input-warning" v-show="false">请输入动态密码</p>
      </el-tab-pane>
    </el-tabs>
    <div class="login-funX">
      <div class="login-fun">
        <cs-icon-checkbox />
        自动登录
      </div>
      <div class="login-fun">
        <router-link to=""
          ><i class="cs-iconfont cs-icon-lock" />找回密码</router-link
        >
      </div>
      <div class="login-fun">
        <router-link to="/register"
          ><i class="cs-iconfont cs-icon-phone" />快速注册</router-link
        >
      </div>
    </div>
    <div class="login-submit" @click="submit">登录</div>
    <div class="login-other">
      <div class="login-other-line">
        <span class="login-other-line-text">第三方登录</span>
      </div>
      <router-link to="" class="login-other-qqX">
        <img src="../../public/images/qq.png" alt="" class="login-other-qq" />
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      windowWidth: document.body.clientWidth,
      userName: "",
      password: "",
      tel: "",
      d_pwd: "",
      auto_login: true,
      login_fun_auto: ""
    };
  },
  created() {
    this.$store.commit("unShowNav");
  },
  destroyed() {
    this.$store.commit("showNav");
  },
  methods: {
    reset(val) {
      switch (val) {
        case "userName":
          this.userName = "";
          break;
        case "password":
          this.password = "";
          break;
        case "tel":
          this.tel = "";
          break;
        case "d_pwd":
          this.d_pwd = "";
      }
    },
    remember() {
      this.auto_login = !this.auto_login;
      this.login_fun_auto = this.auto_login ? "" : "current";
    },
    submit() {
      axios
        .post("api/user/login", {
          tel: this.userName,
          password: this.password
        })
        .then(res => {
          if (res.data.status === 200) {
            this.$store.commit("login", res.data.data[0].userName);
          }
        });
    }
  }
};
</script>

<style scoped lang="less">
@import "../../public/css/login.less";
.d_pwd {
  input {
    width: 30%;
  }
  .input-reset {
    right: 13rem;
  }
  .input-reset-getd_pwd {
    position: absolute;
    top: 1rem;
    right: 0;
  }
}
</style>
<style lang="less">
.cs-iconfont {
  vertical-align: top;
  line-height: 1.5;
  display: inline-block;
  height: 20px;
  width: 20px;
  background-size: 100%;
}
.cs-icon-lock {
  background: url("../../public/images/iconBg.png");
  background-size: 100%;
}
.cs-icon-phone {
  background: url("../../public/images/iconBg.png") 0 -20px;
  background-size: 100%;
}
.el-tabs__item.is-active {
  color: #f56456 !important;
}
.el-tabs__active-bar {
  background: #f56456 !important;
}
.el-tabs__header {
  margin: 0 !important;
}
.cs-icon-checkbox {
  background: #f56456;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  &:before {
    display: block;
    content: "";
    background: url("../../public/images/cart_icon_con.png");
    background-size: 250%;
    background-position: -23px 0;
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
