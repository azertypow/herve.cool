<template>
  <section class="v-view-contact">

    <template v-if="isFr" >
      <p>Contact moi!
        <a
            href="mailto:order@herve.cool"
        >order@herve.cool</a>
      </p>
    </template>

    <template v-else>
      <p>Feel free to contact for any order,
        return or any will at
        <a
            href="mailto:order@herve.cool"
        >order@herve.cool</a>
      </p>
    </template>

  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"
import {useStore} from "vuex"

export default defineComponent({

  name: 'viewContact',

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

.v-view-contact {
  @include with-gutter;
}

</style>
