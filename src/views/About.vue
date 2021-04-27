<template>
  <section class="v-view-about">

    <template v-if="isFr">
      <p>
        Basé à Genève, <i>HERVÉ</i> est un atelier de fabrication de pendentifs en verre qui fabrique chaque modèle à la main, ce qui donne à chaque pendentif un côté unique.
      </p>
      <p>
        Chaque modèle est vendu avec un anneau en argent sterling de 11mm.
      </p>
      <p>
        Actuellement disponible en envoi postal en Suisse, n’hésitez pas à m’écrire pour un autre pays à <a href="mailto:order@herve.cool" >order@herve.cool</a> 🙂 !
      </p>
    </template>

    <template v-else>
      <p>
        Based in Geneva, <i>HERVÉ</i> is a glass pendant design studio which craft every model by hand giving you unique feeling to wear.
      </p>
      <p>
        Each model is sold with an 11mm sterling silver ring.
      </p>
      <p>
        Currently available by mail in Switzerland, don't hesitate to write me for another country at <a href="mailto:order@herve.cool" >order@herve.cool</a> 🙂 !
      </p>
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
