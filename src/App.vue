<template>
  <div
      class="v-app"
      :class="{
        'is-black': isBlack,
        'is-fr': isFr,
        'is-en': isEn,
      }"
  >
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Navigation from './components/Navigation.vue';
import {defineComponent} from "vue"
import {useStore} from "vuex"

export default defineComponent({
  components: {
    Navigation,
  },
  data() {
    return {
      store: useStore()
    }
  },

  computed: {
    isBlack(): boolean {
      return this.store.state.isBlack
    },

    isFr(): boolean {
      return this.store.state.isFr
    },

    isEn(): boolean {
      return !this.isFr
    },
  }
})
</script>

<style lang="scss">
@import "style/main";

.v-app {
  box-sizing: border-box;
  padding-top: $top-nav-height;
  min-height: 100vh;
  background: $color--negative;
  color: $color;
  position: relative;

  &.is-black {
    background: $color;
    color: $color--negative;
  }
}

</style>
