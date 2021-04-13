<template>
  <section class="v-view-about">

    <template v-if="isFr">
      <p class="h-text-italic">Basé à Genève, HERVÉ blabla fr</p>
    </template>

    <template v-else>
      <p class="h-text-italic">Based in Geneva, HERVÉ is an
        independant glass-earring studio
        which craft every model by hand
        giving you unique feeling to wear.</p>

      <p class="h-text-italic">You can either choose to buy
        the glass design by its own or
        combine with sterling silver 925,
        stainless steel, titanium, gold or
        silver coated regarding your will or
        budget.</p>
    </template>

  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"
import {useStore} from "vuex"

export default defineComponent({

  name: 'viewAbout',

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

.v-view-about {
  @include with-gutter;
}
</style>
