<template>
  <section class="v-image-box">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"

export default defineComponent({

  name: 'ImageBox',

});
</script>

<style lang="scss">
@import "../style/main";

.v-image-box {
  padding: $gutter / 2;
  box-sizing: border-box;

  > img {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
