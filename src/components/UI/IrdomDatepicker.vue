<template>
  <div class="body">
    <Datepicker
        v-model="value"
        range
        format="dd.MM.yyyy"
        hideInputIcon
        :enableTimePicker="false"
        locale="ru"
        selectText="Выбрать"
        :autoApply="true"
        :clearable="false"
        placeholder="Заезд - выезд"
        :minDate="new Date()"
        :maxDate="maxDate"
    />
    <img
        src="../../assets/icons/irdomDatepicker.svg"
        alt="иконка календаря"
        class="calendar-icon"
    >
  </div>
</template>

<script>
import '@/styles/datepicker.css';
import Datepicker from '@vuepic/vue-datepicker';
import {ru} from 'date-fns/locale';

export default {
  name: "IrdomDatepicker",
  components: {
    Datepicker
  },
  props: {
    initialRange: {
      type: Array,
      validator(val) {
        return val.length === 2;
      }
    }
  },
  computed: {
    maxDate() {
      const date = new Date();
      date.setDate(date.getDate() + 14);
      return date;
    }
  },
  data() {
    return {
      value: this.initialRange[0] ? this.initialRange : '',
      ru
    };
  },
  watch: {
    value(newVal) {
      console.log(newVal)
      this.$emit('change', newVal)
    }
  }
};
</script>

<style scoped>
.calendar-icon {
  position: absolute;
  top: calc(50% - 10px);
  width: 20px;
  height: 20px;
  object-fit: contain;
  right: 18px;
  pointer-events: none;
}

.body {
  position: relative;
  height: 50px;
}
</style>