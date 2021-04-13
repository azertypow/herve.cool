<template>
  <section class="v-view-shop">

    <template v-if="isFr" >
      <p>Chopin arrive</p>
    </template>

    <template v-else>
      <p>Shop is Coming Soon</p>
    </template>

  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"
import {useStore} from "vuex"

export default defineComponent({

  name: 'viewShop',

  props: {
    data: {
      // type: Object as PropType<>
    },
  },

  computed: {
    isFr(): boolean {
      return useStore().state.isFr
    },
  },

});
</script>

<style scoped lang="scss">
@import "../style/main";

.v-view-shop {
  @include with-gutter;
}
</style>
