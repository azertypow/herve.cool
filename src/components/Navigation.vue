<template>
  <section class="v-nav">
    <div
        class="v-nav__left"
    >
      <h1
          class="v-nav__title h-ui-button"
      >
        <router-link to="/">Hervé</router-link>
      </h1>
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
          class="v-nav__item h-ui-button v-nav__site-color">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.48 60.48">
          <path
                d="M32.4,54.42c-.12-1.8-.9-3.3-2.28-3.42a3.2,3.2,0,0,0-2,.66L18.72,58a.75.75,0,0,1-.9.12.67.67,0,0,1-.12-.9L20,52c1.08-2.46.72-4.62-2.28-4.44l-11.58.78a.65.65,0,0,1-.54-.24c-.18-.48,0-.72.18-.84L10.44,44c2.34-1.5,2.88-3.6.18-4.92L.36,34A.73.73,0,0,1,0,33.36c0-.36.18-.48.36-.48l5.7-.42c2.52-.24,4.68-1.8,3-4.32L2.64,18.78c-.24-.42-.36-.72-.24-.9a.55.55,0,0,1,.84-.12L8.46,20c2.46,1.08,4.62.78,4.44-2.16L12.12,6.42a.86.86,0,0,1,.3-.78c.42-.12.66,0,.78.24l3.24,4.62c1.62,2.4,3.84,2.82,5,.18L26.22.54a1.06,1.06,0,0,1,.9-.54.47.47,0,0,1,.48.48L28,6.12c.12,1.74.9,3.24,2.1,3.42a3.89,3.89,0,0,0,2.22-.66l9.36-6.3c.48-.24.72-.24.9-.12s.42.66.18.9l-2.34,5c-1.14,2.46-.66,4.74,2.22,4.5l11.58-.78a.64.64,0,0,1,.54.36.6.6,0,0,1-.18.78L50,16.44c-2.28,1.62-2.88,3.6-.18,5l10.26,5c.3.12.42.3.42.72a.45.45,0,0,1-.42.42l-5.7.48c-2.52.18-4.5,1.68-2.88,4.32l6.36,9.36c.24.42.3.66.18.9a.74.74,0,0,1-.9.18L52,40.44c-2.4-1.14-4.68-.6-4.44,2.22l.72,11.4a.94.94,0,0,1-.24.78.57.57,0,0,1-.84-.18L44,50c-1.68-2.46-3.84-2.82-5.1-.18L34.2,60a1.06,1.06,0,0,1-.9.48c-.3,0-.42-.18-.42-.36ZM42.6,29.76a15.44,15.44,0,0,0-12.36-6.18,15.08,15.08,0,0,0-12.3,6.24V30.9a15.1,15.1,0,0,0,12.3,6.18A15.31,15.31,0,0,0,42.6,30.9ZM20,30.36a13.32,13.32,0,0,1,10.2-4.74A13.48,13.48,0,0,1,40.5,30.3,13.6,13.6,0,0,1,30.24,35,13.2,13.2,0,0,1,20,30.36Zm6.06-.06a4.14,4.14,0,1,0,4.14-4.08A4.15,4.15,0,0,0,26.1,30.3Zm2.82.06a1.35,1.35,0,1,1,1.32,1.32A1.33,1.33,0,0,1,28.92,30.36Z"/>
        </svg>
      </div>
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
  @include container;
  @include with-gutter;
  align-items: center;
}

.v-nav__right {
  @include container;
  //@include with-gutter;
  position: relative;
  z-index: 100;
  align-items: center;
}

.v-nav__title {
  margin: 0;
  font-size: $font-size--l;
  line-height: 1ex;

  a {
    text-decoration: none;
  }
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

.v-nav__site-color {
  width: 30px;
  height: 30px;
  padding-top: 0;
  padding-bottom: 0;

  svg {
    fill: black;
  }
}

.is-black {
  .v-nav__site-color {
    svg {
      fill: white;
    }
  }
}
</style>
