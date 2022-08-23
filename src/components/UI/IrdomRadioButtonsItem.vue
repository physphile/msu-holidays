<template>
  <button @click="click()">
    <slot>

    </slot>
  </button>
</template>
<script>
export default {
  name: "IrdomRadioButtonsItem",
  methods: {
    click() {
      this.$emit('')
    }
  }
}
</script>
<style scoped>
button {
  background: var(--card-bg-color);
  color: var(--text-color-primary);
  border: 1px solid var(--color-disabled);
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: var(--line-height);
  padding: 0 24px;
}
</style>