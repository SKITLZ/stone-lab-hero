<template>
  <!-- For better image scalability on mobile we need to extract a bigger original image from Figma -->
  <!--
    #141a26 is the 5px averge dark color extracted from the sample picture
    in case of slow picture download speed or the lack of the picture for any reason
  -->
  <!-- PixelPefect might show mismatch when proper fonts aren't installed -->
  <div
    class="font-senkron text-left text-white bg-[#141a26] bg-cover bg-center"
    :style="{ backgroundImage: `url(${imageURL})` }"
  >
    <div class="max-w-[1276px] w-full mx-auto pt-[138px] pb-8 px-[22px] sm:py-16 sm:px-8">
      <div class="sm:max-w-[432px]">
        <!--
          It's possible to add conditional render statements for each element,
          but these requirements weren't set in the technical requirements document
        -->
        <p class="text-[28px] uppercase tracking-[0.01em]">{{ leadText }}</p>
        <p class="text-[40px] leading-normal uppercase sm:text-[50px] sm:leading-[59px]">{{ titleText }}</p>
        <p class="sm:block hidden mt-5 text-lg leading-[24px] text-gray-200">{{ descriptionText }}</p>
        <p class="flex flex-wrap mt-5 sm:flex-nowrap  sm:mt-8">
          <AppButton class="w-full mr-0 sm:w-auto sm:mr-6" v-bind="buttonA"></AppButton>
          <AppButton class="w-full mt-[11px] border-white sm:w-auto sm:mt-0" v-bind="buttonB"></AppButton>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType  } from 'vue';
import { TAppButton } from '@/types/TAppButton';
import AppButton from '@/components/AppButton.vue';

  /**
   * @vue-prop {String} imageURL - URL address to the background image of the whole element
   * @vue-prop {String} leadText - Upper text
   * @vue-prop {String} titleText - Middle text
   * @vue-prop {String} descriptionText - Bottom text (but above buttons)
   * @vue-prop {Object} buttonA - Button element properties
   * @vue-prop {Object} buttonB - Button element properties
   */

export default defineComponent({
  name: 'HeroBlock',
  components: {
    AppButton,
  },
  props: {
    imageURL: String,
    leadText: String,
    titleText: String,
    descriptionText: String,
    buttonA: Object as PropType<TAppButton>,
    buttonB: Object as PropType<TAppButton>,
  },
});
</script>
