<template>
  <button class="button" :class="{disabled: disabled}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "IrdomButtonColor",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.button {
  padding: 16px 32px;
  background: var(--color-primary);
  color: var(--text-color-primary-contrast);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background-color var(--hover-transition-duration) var(--hover-transition-timing-function);
}

.button:hover, button:active {
  background: var(--color-primary-dark);
}

.disabled, .disabled:hover, .disabled:active {
  background: var(--color-disabled);
  color: var(--text-color-primary);
  cursor: default;
}

</style>