<template>
  <section class="v-view-about">

    <div class="h-text-content h-has-gutter">
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
    </div>

    <div class="v-view-about--img">
      <image-box>
        <img src="../assets/img_contact/model.jpg" alt="">
      </image-box>

      <image-box>
        <img src="../assets/img_contact/model.jpg" alt="">
      </image-box>

      <image-box>
        <img src="../assets/img_contact/model.jpg" alt="">
      </image-box>
    </div>


  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue"
import {useStore} from "vuex"
import ImageBox from "@/components/ImageBox.vue"

export default defineComponent({

  name: 'viewAbout',
  components: {ImageBox},
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

.v-view-about--img {
  display: flex;
  flex-wrap: wrap;
  margin-top: -$gutter / 2;
  margin-bottom: -$gutter / 2;

  > * {
    width: 100%;

    @media all and (min-width: $break-point-small) {
      width: 50%;
    }

    @media all and (min-width: $break-point-reg) {
      width: calc(100% / 3);
    }
  }
}

</style>
