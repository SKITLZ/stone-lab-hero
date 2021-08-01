<template>
  <button
    v-show="isVisible"
    class="py-3 px-[30px] font-nunitos leading-snug uppercase tracking-[0.5px] border border-transparent rounded"
    :style="{ backgroundColor: bgColour, color: textColour }"
    type="button"
    @click="handleOnClick"
  >
    {{text}}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

  /**
   * @vue-prop {Boolean} isVisible - Is element visible to the user
   * @vue-prop {String} bgColour - Background color of the element
   * @vue-prop {String} text - Text inside the button
   * @vue-prop {String} textColour - Text color
   * @vue-prop {Function} onClick - The function to be executed when the button is clicked
   */

export default defineComponent({
  name: 'AppButton',
  props: {
    isVisible: {
      type: Boolean,
      required: false,
      default: true,
    },
    bgColour: {
      type: String,
      required: false,
      default: '#0EA5E9',
    },
    text: {
      type: String,
      required: false,
      default: '',
    },
    textColour: {
      type: String,
      required: false,
      default: '#FFFFFF',
    },
    onClick: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
  methods: {
    /**
     * Emit's "onClick" event to the parent and executes onClick handler
     */
    handleOnClick() {
      console.log(`onClick event from "${this.text}" button has been sent`)
      this.$emit('onClick', this.text)
      //   Task requirements said that Button components take onClick property,
      // which is conentional name for event handlers (functions).
      //   Since it's a property we can assume, that we might also want
      // the ability to pass the handler and execute it;
      this.onClick()
    },
  },
});
</script>
