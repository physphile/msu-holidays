<template>
  <div class="progressbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "IrdomStepProgressBar"
}
</script>

<style scoped>
.progressbar {
  border: 1px solid var(--color-disabled);
  border-radius: 25px;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  padding: 9px 20px;
}
</style>