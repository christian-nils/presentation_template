<template lang="pug">
#app
    Menu(type="Slide")
    Slideshow(
      :on-end-exit='onEndExit'
      :mouse-navigation='false'
      :back-by-slide='true'
    )
</template>

<script>
import Menu from "./components/Menu.vue";
import Slideshow from "@/components/Slideshow.vue";

export default {
  components: {
    Slideshow,
    Menu
  },
  methods: {
    onEndExit() {}
  }
};
</script>

<style lang="scss">
body {
  width: 100%;
  margin: 0 0;
}
html {
  height: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}
</style>
