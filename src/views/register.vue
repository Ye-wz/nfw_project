<template>
  <div class="register">
    <div class="register-head">
      <router-link to="/"><i class="el-icon-arrow-left"/></router-link>
      <span class="register-head-title">手机快速注册</span>
      <router-link to="/login" class="register-head-gologin">
        登录
      </router-link>
    </div>
    <div class="register-tel" v-show="!next_step">
      <p class="register-prompt">手机号即为登录账号,我们将发送验证短信到号码</p>
      <div class="register-inputX">
        <label for="tel" class="register-label">手机号:</label>
        <div class="register-input-sx">
          <input
            type="text"
            id="tel"
            placeholder="请输入手机号码"
            v-model="tel"
          />
          <i
            class="register-input-reset iconfont icon-guanbi"
            v-show="tel"
            @click="reset('tel')"
          />
          <div class="register-input-warning" v-show="!tel">
            请输入手机号
          </div>
        </div>
      </div>
      <div class="register-agreement">
        <cs-icon-checkbox />我已阅读并同意《用户注册协议》
      </div>
    </div>
    <div class="register-sms" v-show="next_step">
      <p class="register-prompt">请输入<span v-text="tel" />的密码</p>
      <div class="register-inputX">
        <label for="password" class="register-label">密码:</label>
        <div class="register-input-sx">
          <input
            type="password"
            id="password"
            placeholder="请输入密码"
            v-model="password"
          />
          <i
            class="register-input-reset iconfont icon-guanbi"
            v-show="password"
            @click="reset('password')"
          />
          <div class="register-input-warning">
            请输入密码
          </div>
        </div>
      </div>
    </div>
    <div
      class="register-submit"
      :class="{ 'register-submit-ok': sub }"
      @click="next"
    >
      下一步
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "register",
  data() {
    return {
      tel: "",
      password: "",
      next_step: false,
      sub: ""
    };
  },
  methods: {
    reset(val) {
      switch (val) {
        case "tel":
          this.tel = "";
          break;
        case "password":
          this.password = "";
      }
    },
    created() {
      this.$store.commit("unShowNav");
    },
    destroyed() {
      this.$store.commit("showNav");
    },
    next() {
      if (!this.next_step) {
        this.next_step = true;
        this.sub = "";
      } else {
        axios
          .post("/api/user/registered", {
            tel: parseInt(this.tel),
            password: this.password
          })
          .then(data => {
            if (data.data.status === 200) {
              this.$router.push("/login");
            }
          });
      }
    }
  },
  watch: {
    tel() {
      if (!this.next_step) {
        this.sub = this.tel;
      }
    },
    password() {
      if (this.next_step) {
        this.sub = this.password;
      }
    }
  }
};
</script>

<style scoped lang="less">
@import "../../public/css/register.css";
</style>
