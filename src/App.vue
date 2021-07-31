<template>
  <HelloWorld msg="Welcome" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Job from '@/types/Job';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      job: {
        title: 'job1',
        location: 'office1',
      } as Job,
      jobs: [] as Job[],
    }
  },
});
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
