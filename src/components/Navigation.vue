<template>
  <section class="v-nav">
    <div
        class="v-nav__left"
    >
      <h1
          class="v-nav__title h-ui-button"
      >Hervé</h1>
    </div>

    <div
        v-if="isOpen"
        class="v-nav__navigation"
    >
      <ul class="v-nav__list" >
        <li>
          <router-link class="h-ui-button" to="/">Home</router-link>
        </li>

        <li>
          <router-link class="h-ui-button" to="/shop">Shop</router-link>
        </li>

        <li>
          <router-link class="h-ui-button" to="/about">About</router-link>
        </li>

        <li>
          <router-link class="h-ui-button" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>


    <div
        class="v-nav__right"
    >
      <div
          @click="toggleSiteLang"
          class="v-nav__item h-ui-button">Fr/En</div>
      <div
          @click="toggleTheme"
          class="v-nav__item h-ui-button">œuil</div>
      <div class="h-ui-button v-nav__toggle-icon"
          @click="toggleMenu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             x="0px"
             y="0px"
             viewBox="0 0 59.7 38.7"
             xml:space="preserve">
          <g>
	          <line class="st1" x1="59.7" y1="1.5" x2="0" y2="1.5"/>
            <line class="st1" x1="59.7" y1="19.3" x2="0" y2="19.3"/>
            <line class="st1" x1="59.7" y1="37.2" x2="0" y2="37.2"/>
          </g>
          </svg>

        <div class="v-nav__toggle-menu"></div>
      </div>
    </div>

  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"
import {useStore} from "vuex"

export default defineComponent({

  name: 'navigation',

  props: {
    data: {
      // type: Object as PropType<NavData>
    },
  },

  data() {
    return {
      isOpen: false,
      store: useStore(),
    }
  },

  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },

    toggleSiteLang() {
      this.store.commit("toggleSiteLang")
    },

    toggleTheme() {
      this.store.commit("toggleSiteTheme")
    },
  },

});
</script>

<style scoped lang="scss">
@import "../style/main";

.v-nav {
  @include container;
  user-select: none;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: solid 1px;
  z-index: 100;
}

.v-nav__left {
  padding: $gutter;
}

.v-nav__right {
  @include container;
  @include with-gutter;
  position: relative;
  z-index: 100;
}

.v-nav__title {
  margin: 0;
}

.v-nav__navigation {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  background: $color--negative;
  color: $color;
  border-left: solid 1px;
  border-bottom: solid 1px;
  width: 50%;
  box-sizing: border-box;
  padding-top: $top-nav-height;
}

.v-nav__list {
  margin: 0;
  padding: $gutter / 2;
  border-top: solid 1px;

  li {
    display: block;

    a {
      text-decoration: none;
      display: block;
      padding: $gutter / 2;
    }
  }
}

.v-nav__item {
  user-select: none;
  cursor: pointer;
  padding: $gutter $gutter / 2;
}

.is-black .v-nav {
  background: $color;
  color: $color--negative;
}

.is-black .v-nav__navigation {
  background: $color;
  color: $color--negative;
}

.v-nav__toggle-icon {
  @include with-gutter;
  display: flex;
  align-items: center;

  > svg {
    display: block;
    stroke-width:3;
    width: 25px;
    height: 25px;
    stroke: black;
  }

  .is-black & > svg {
    stroke: white;
  }
}
</style>
