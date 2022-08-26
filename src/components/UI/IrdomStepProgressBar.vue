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
}
</style>