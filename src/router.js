import Vue from "vue";
import Router from "vue-router";

import store from "@/store";

const routes = store.state.slides.map(slide => {
  const { name, path } = slide;
  const component = () => import(`@/slides/${slide.name}.vue`);

  return {
    name,
    path,
    component,
    props: true
  };
});

Vue.use(Router);

export default new Router({
  mode: "hash", // to use history mode, you need to read https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations the easiest here is to keep HASH for GitHub pages
  base: process.env.BASE_URL,
  routes
});
