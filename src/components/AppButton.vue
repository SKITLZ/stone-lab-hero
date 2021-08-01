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
 * Reusable button component
 */

export default defineComponent({
  name: 'AppButton',
  props: {
    /**
     * Is element visible to the user
     */
    isVisible: {
      type: Boolean,
      required: false,
      default: true,
    },
    /**
     * Background color of the element
     */
    bgColour: {
      type: String,
      required: false,
      default: '#0EA5E9',
    },
    /**
     * Text inside the button
     */
    text: {
      type: String,
      required: false,
      default: '',
    },
    /**
     * Text color
     */
    textColour: {
      type: String,
      required: false,
      default: '#FFFFFF',
    },
    /**
     * The function to be executed when the button is clicked
     */
    onClick: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
  methods: {
    /**
     * Emits "onClick" event to the parent and executes onClick handler
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
