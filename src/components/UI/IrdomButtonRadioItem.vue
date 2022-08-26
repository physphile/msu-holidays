<template>
  <button type="button" @click="click()">
    <slot>

    </slot>
  </button>
</template>
<script>
export default {
  name: "IrdomButtonRadioItem",
  methods: {
    click() {
      console.log('click')
    }
  }
}
</script>
<style scoped>
button {
  color: var(--text-color-primary);
  border: none;
  background: none;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: var(--line-height);
  transition: background-color var(--hover-transition-duration) var(--hover-transition-timing-function);
  cursor: pointer;
  width: 100px;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>