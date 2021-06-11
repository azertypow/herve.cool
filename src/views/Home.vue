<template>
  <div class="v-home">

    <div
        class="v-home__icon"
        :style="style"
    >
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.48 60.48">
        <path
              d="M60.06,26.46l-10.26-5c-2.7-1.38-2.1-3.36.18-5l4.62-3.18a.6.6,0,0,0,.18-.78.64.64,0,0,0-.54-.36l-11.58.78c-2.88.24-3.36-2-2.22-4.5l2.34-5c.24-.24.06-.72-.18-.9s-.42-.12-.9.12l-9.36,6.3a3.88,3.88,0,0,1-2.22.66c-1.2-.18-2-1.68-2.1-3.42L27.6.48A.47.47,0,0,0,27.12,0a1.06,1.06,0,0,0-.9.54L21.48,10.68c-1.2,2.64-3.42,2.22-5-.18L13.2,5.88c-.12-.24-.36-.36-.78-.24a.86.86,0,0,0-.3.78l.78,11.46c.18,2.94-2,3.24-4.44,2.16L3.24,17.76a.55.55,0,0,0-.84.12c-.12.18,0,.48.24.9l6.42,9.36c1.68,2.52-.48,4.08-3,4.32l-5.7.42c-.18,0-.36.12-.36.48A.73.73,0,0,0,.36,34l10.26,5.1c2.7,1.32,2.16,3.42-.18,4.92L5.82,47.28c-.18.12-.36.36-.18.84a.65.65,0,0,0,.54.24l11.58-.78c3-.18,3.36,2,2.28,4.44L17.7,57.18a.67.67,0,0,0,.12.9.75.75,0,0,0,.9-.12l9.36-6.3a3.21,3.21,0,0,1,2-.66c1.38.12,2.16,1.62,2.28,3.42l.48,5.7c0,.18.12.36.42.36a1.06,1.06,0,0,0,.9-.48l4.74-10.14c1.26-2.64,3.42-2.28,5.1.18l3.18,4.62a.57.57,0,0,0,.84.18.94.94,0,0,0,.24-.78l-.72-11.4c-.24-2.82,2-3.36,4.44-2.22l5.1,2.4a.74.74,0,0,0,.9-.18c.12-.24.06-.48-.18-.9L51.48,32.4c-1.62-2.64.36-4.14,2.88-4.32l5.7-.48a.45.45,0,0,0,.42-.42C60.48,26.76,60.36,26.58,60.06,26.46Z"/>
      </svg>
    </div>

    <div
        ref="gallery"
        class="v-home__img-loop"
    >
      <img src="../assets/imgs/1.jpg" alt="">
      <img src="../assets/imgs/2.jpg" alt="">
      <img src="../assets/imgs/3.jpg" alt="">
      <img src="../assets/imgs/4.jpg" alt="">
      <img src="../assets/imgs/5.jpg" alt="">
      <img src="../assets/imgs/6.jpg" alt="">
      <img src="../assets/imgs/7.jpg" alt="">
      <img src="../assets/imgs/8.jpg" alt="">
      <img src="../assets/imgs/9.jpg" alt="">
      <img src="../assets/imgs/10.jpg" alt="">
      <img src="../assets/imgs/11.jpg" alt="">
      <img src="../assets/imgs/12.jpg" alt="">
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

.v-home__icon {
  position: fixed;
  top: calc( 50% + #{$top-nav-height / 2});
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 100%;
  height: 100%;
  padding: $gutter * 3;
  box-sizing: border-box;
  max-width: 300px;

  > svg {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    fill: black;
  }
}

.is-black {
  .v-home__icon {
    svg {
      fill: white;
    }
  }
}

.v-home__img-loop {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 10000;
  mix-blend-mode: difference;
  padding-top: 100vh;
  pointer-events: none;
  object-fit: contain;
  object-position: center;
  max-width: 750px;
  margin: auto;
  //overflow: scroll;

  > img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
