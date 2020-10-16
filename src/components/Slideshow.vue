<template lang="pug">
  .eg-theme-agrume
    .eg-slideshow
      slide(v-for="slide in availableSlides"
        :enter="getTransition(slide, 'enter')"
        :leave="getTransition(slide, 'leave')"
        :enterNext="getTransition(slide, 'enterNext')"
        :enterPrev="getTransition(slide, 'enterPrev')"
        :leaveNext="getTransition(slide, 'leaveNext')"
        :leavePrev="getTransition(slide, 'leavePrev')"
        :steps="((slide.steps == undefined )? 1 : slide.steps)"
        :class='`slide-${slide.name}`'
        v-bind:key="slide.id"
      )
        router-view(v-bind:step="step")
</template>

<script>
import { Slideshow } from "eagle.js";
import { mapState, mapMutations } from "vuex";

export default {
  mixins: [Slideshow],

  computed: {
    ...mapState({
      availableSlides: "slides",
    }),
  },

  watch: {
    currentSlideIndex: "updateUrl",

    $route: "updateSlides",
  },

  methods: {
    getTransition: function (slide, type) {
      const defaultTransitions = {
        enter: "fadeIn",
        leave: "fadeOut",
        enterPrev: "fadeInLeft",
        enterNext: "fadeInRight",
        leavePrev: "fadeOutRight",
        leaveNext: "fadeOutLeft",
      };

      switch (type) {
        case "enter":
        case "leave":
          return slide[type] === undefined
            ? defaultTransitions[type]
            : slide[type] === null
            ? null
            : slide[type];
          break;

        default:
          if (slide.enter === undefined && slide.leave === undefined) {
            return slide[type] === undefined
              ? defaultTransitions[type]
              : slide[type] === null
              ? null
              : slide[type];
          } else {
            return null;
          }
          break;
      }
    },
    ...mapMutations({
      setCurrentIndex: "setCurrent",
    }),

    updateUrl(step) {
      const { name } = this.availableSlides[step - 1];

      if (name) {
        this.$router.push({
          name,
        });
      }
    },

    updateSlides(route) {
      const index =
        this.availableSlides.findIndex((slide) => slide.name === route.name) +
        1;

      this.setCurrentIndex(index);
      this.currentSlideIndex = index;
    },
  },
};
</script>
