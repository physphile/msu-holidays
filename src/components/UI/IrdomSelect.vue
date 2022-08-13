<template>
  <v-select
      class="select"
      :clearable="false"
  />
</template>

<script>
import vSelect from 'vue-select';
import './select.css';


export default {
  name: "IrdomSelect",
  components: {
    vSelect
  },
};
</script>

<style scoped>
</style>