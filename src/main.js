import Vue from "vue";
import App from "./App";

import Eagle, { Options, CodeBlock } from "eagle.js";
import "animate.css";
import hljs from "highlight.js";

import router from "@/router";
import store from "@/store";

import "@/theme.css";

Vue.use(Eagle);
Eagle.use(CodeBlock);
Vue.config.productionTip = false;
Options.hljs = hljs;

new Vue({
  router,
  store,
  el: "#app",
  components: { App },
  render: h => h("App")
});
