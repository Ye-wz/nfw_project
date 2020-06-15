<template>
  <div id="app">
    <router-view />
    <footer_nav />
  </div>
</template>

<script>
import footer_nav from "./components/footer-nav";
export default {
  components: {
    footer_nav
  }
};
</script>

<style>
@import "../public/font/iconfont.css";
div,
input,
span,
body,
ul,
li,
a,
p,
h2,
h1 {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
a {
  color: black;
}
body {
  line-height: 1.43;
  background: #f8f8f8;
}
.f_R {
  float: right;
}
.f_L {
  float: left;
}
.pos_a {
  position: absolute;
}
.cs-wm {
  width: 100%;
}
a {
  text-decoration: none;
  display: block;
}
.cs-flex {
  display: flex;
}
</style>
