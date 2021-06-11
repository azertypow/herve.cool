<template>
  <section class="v-view-shop">

    <div class="h-text-content h-has-gutter">
      <template v-if="isFr" >
        <p>Shop is Coming Soon</p>
      </template>

      <template v-else>
        <p>Shop is Coming Soon</p>
      </template>
    </div>

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
