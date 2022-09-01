<template>
  <input :type="type" class="input">
</template>

<script>
export default {
  name: "IrdomInputText",
  props: {
    type: {
      type: String,
      default: 'text'
    }
  }
};
</script>

<style scoped>
.input {
  border: 1px solid var(--color-disabled);
  background: var(--card-bg-color);
  color: var(--text-color-primary);
  border-radius: 8px;
  padding: 0 18px;
  height: 50px;
  transition: border-color var(--hover-transition-duration) var(--hover-transition-timing-function);
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: var(--line-height);
  width: 100%;
}

.input:hover {
  border-color: var(--color-primary);
}
</style>