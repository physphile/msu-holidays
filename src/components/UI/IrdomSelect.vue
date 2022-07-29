<template>
  <v-select
      class="select"
      :clearable="false"
      :searchable="false"

  />
</template>

<script>
import vSelect from 'vue-select';
import '@/styles/select.css';

export default {
  name: "IrdomSelect",
  components: {
    vSelect
  },
};
</script>

<style scoped>
.select {
  min-width: 256px;

}
</style>