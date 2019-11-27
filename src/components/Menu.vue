<template lang="pug">
#menu
    component(:is="currentMenu")
        router-link(v-for="slide in availableSlides" v-bind:to="slide.path" v-bind:key="slide.id")
            span {{slide.menuName}}
</template>

<script>
import {
  Slide,
  Bubble,
  Elastic,
  FallDown,
  Push,
  PushRotate,
  Reveal,
  ScaleDown,
  ScaleRotate,
  Stack
} from "vue-burger-menu";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Menus",
  components: {
    Slide,
    Bubble,
    Elastic,
    FallDown,
    Push,
    PushRotate,
    Reveal,
    ScaleDown,
    ScaleRotate,
    Stack
  },
  props: { type: { type: String, required: true, default: "Slide" } },
  computed: {
    ...mapState({
      availableSlides: "slides"
    }),
    currentMenu: function() {
      return this.$props.type;
    }
  },
  watch: {
    currentSlideIndex: "updateUrl",

    $route: "updateSlides"
  },

  methods: {
    ...mapMutations({
      setCurrentIndex: "setCurrent"
    }),

    updateUrl(step) {
      const { name } = this.availableSlides[step - 1];

      if (name) {
        this.$router.push({
          name
        });
      }
    },

    updateSlides(route) {
      const index =
        this.availableSlides.findIndex(slide => slide.name === route.name) + 1;

      this.setCurrentIndex(index);
      this.currentSlideIndex = index;
    }
  }
};
</script>

<style lang="scss">
#menu {
  position: absolute;
  z-index: 1;
}
</style>
