<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "TheHeaderMenuItem"
};
</script>

<style scoped>
.button {
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: color var(--hover-transition-duration) var(--hover-transition-timing-function);
  border: none;
  background: none;
  padding: 0;
  color: var(--text-color-primary);
}

.button:hover, .button:active {
  color: var(--color-primary);
}
</style>