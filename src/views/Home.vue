<template>
  <div class="v-home">

    <div
        class="v-home__icon--mobile"
        :style="style"
    >
        home icon
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"

export default defineComponent({

  name: 'Home',

  props: {
    data: {
      // type: Object as PropType<>
    },
  },

  data() {
    return {
      rotationValue: 0
    }
  },

  computed: {
    style(): Object {
      return {
        transform: `translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, ${this.rotationValue}deg)`,
      }
    }
  },

  mounted() {
    window.addEventListener("mousewheel", (e) => {
      //@ts-ignore
      this.rotationValue += e.deltaY
    })

    window.addEventListener("touchmove", (e: TouchEvent) => {
      this.rotationValue += ( e.changedTouches[0].clientY / 50 )
    })
  }

});
</script>

<style lang="scss" scoped>
@import "../style/main";

[class*="v-home__icon"] {
  position: fixed;
  top: calc( 50% + #{$top-nav-height / 2});
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
</style>
