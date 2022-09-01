<template>
  <div class="body">
    <Datepicker
        v-model="value"
        :autoApply="true"
        :clearable="false"
        :enableTimePicker="false"
        class="datepicker"

        format="dd.MM.yyyy"
        hideInputIcon
        locale="ru"
        selectText="Выбрать"
        v-bind="$attrs"
    />
    <img
        alt="иконка календаря"
        class="calendar-icon animate__animated animate__fadeIn"
        src="../../assets/icons/irdomDatepicker.svg"
        style="animation-delay: 1s"
    >
  </div>
</template>

<script>

import Datepicker from '@vuepic/vue-datepicker';
import './styles/datepicker.css'
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
    this.$nextTick(() => {
      if (this.initialRange && this.initialRange[0]) {
        this.value = this.initialRange;
      }
    })

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

  data() {
    return {
      value: null,
      ru,
      dark: false
    };
  },
  watch: {
    value(newVal) {
      this.$emit('change', newVal)
    }
  }
};
</script>

<style scoped>
.body {
  position: relative;
}

.calendar-icon {
  position: absolute;
  top: calc(50% - 10px);
  width: 20px;
  height: 20px;
  object-fit: contain;
  right: 18px;
  pointer-events: none;
}
</style>