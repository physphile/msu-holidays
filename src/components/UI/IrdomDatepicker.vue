<template>
  <div class="body">
    <Datepicker
        v-model="value"
        :autoApply="true"
        :clearable="false"
        :enableTimePicker="false"
        :maxDate="maxDate"
        :minDate="new Date()"
        class="datepicker"
        format="dd.MM.yyyy"
        hideInputIcon
        locale="ru"
        placeholder="Заезд - выезд"
        range
        selectText="Выбрать"
    />
    <img
        alt="иконка календаря"
        class="calendar-icon"
        src="../../assets/icons/irdomDatepicker.svg"
    >
  </div>
</template>

<script>

import Datepicker from '@vuepic/vue-datepicker';
import './datepicker.css'
import {ru} from 'date-fns/locale';

export default {
  name: "IrdomDatepicker",
  components: {
    Datepicker
  },
  mounted() {
    this.switchDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      this.switchDark(event.matches);
    });
  },
  props: {
    initialRange: {
      type: Array,
      validator(val) {
        return val.length === 2;
      }
    }
  },
  methods: {
    switchDark(isDark) {
      this.dark = isDark;
    }
  },
  computed: {
    maxDate() {
      const date = new Date();
      date.setDate(date.getDate() + 14);
      return date;
    },
  },
  data() {
    return {
      value: this.initialRange[0] ? this.initialRange : '',
      ru,
      dark: false
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
  top: calc(50% - 16px);
  width: 20px;
  height: 20px;
  object-fit: contain;
  right: 18px;
  pointer-events: none;
}
</style>