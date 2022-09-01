<template>
  <v-select
      :clearable="false"
      class="select"
  />
</template>

<script>
import vSelect from 'vue-select';
import './styles/select.css';


export default {
  name: "IrdomSelect",
  components: {
    vSelect
  },
};
</script>

<style scoped>
</style>