<template>
  <div class="body">
    <button class="btn decrement" @click="decrement()">
      <img
          src="../../assets/icons/irdomInputNumberMinus.svg"
          alt="значок минуса"
      >
    </button>
    <div class="slot">
      <slot></slot>
    </div>

    <button class="btn increment" @click="increment()">
      <img
          src="../../assets/icons/irdomInputNumberPlus.svg"
          alt="значок плюса"
      >
    </button>
  </div>
</template>

<script>
export default {
  name: "IrdomInputNumber",
  data() {
    return {
      value: this.modelValue,
    }
  },
  props: {
    modelValue: {
      type: Number,
      validator(val) {
        return val === Math.trunc(val);
      }
    }
  },
  methods: {
    increment () {
      this.modelValue < 6 ? this.$emit('update:modelValue', this.modelValue + 1) : {};
    },
    decrement() {
      this.modelValue > 1 ? this.$emit('update:modelValue', this.modelValue - 1) : {};
    }
  }
};
</script>

<style scoped>
.body {
  border: 1px solid var(--color-disabled);
  height: 50px;
  border-radius: 8px;
  background: var(--card-bg-color);
  display: flex;
  padding: 12px 18px;
  transition: border-color var(--hover-transition-duration) var(--hover-transition-timing-function);
}

.body:hover {
  border-color: var(--color-primary);
}

.btn {
  height: 24px;
  width: 24px;
  object-fit: contain;
  border: none;
  cursor: pointer;
  background: none;
}
.slot {
  flex-grow: 1;
  justify-content: center;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: var(--text-color-primary);
}
</style>