<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "IrdomButtonText"
}
</script>

<style scoped>
button {
  color: var(--color-primary);
  font-weight: 600;
  background: none;
  border: none;
  font-size: 16px;
  transition: color var(--hover-transition-duration) var(--hover-transition-timing-function);
  cursor: pointer;
  padding: 0;
}

button:hover {
  color: var(--color-primary-dark);
}
</style>