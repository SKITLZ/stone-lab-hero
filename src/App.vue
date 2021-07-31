<template>
  <HeroBlock v-bind="heroData" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeroBlock from './components/HeroBlock.vue';
import { THeroBlock } from '@/types/THeroBlock';
import { heroData as heroDataMock } from '@/mocks/heroData';

export default defineComponent({
  name: 'App',
  components: {
    HeroBlock,
  },
  data() {
    return {
      heroData: heroDataMock as THeroBlock,
    };
  },
});
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
