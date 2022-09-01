<template>
  <div ref="radio" class="radio-buttons animate__animated animate__fadeIn">
    <slot id="slot">

    </slot>
  </div>
  <div class="active-background">

  </div>
</template>
<script>
export default {
  name: "IrdomButtonRadio",
}
</script>
<style scoped>
.radio-buttons {
  display: flex;
  align-items: stretch;
  height: 50px;
  background: var(--rounded-container-bg-color);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  border: 1px solid var(--color-disabled);
  transition: border-color var(--hover-transition-duration) var(--hover-transition-timing-function);
}
.active-background {
  position: absolute;
  height: 100%;
  width: 180px;
  pointer-events: none;

}

.radio-buttons:hover {
  border-color: var(--color-primary);
}

@media screen and (max-width: 1199px) {
  .radio-buttons {
    background: var(--bg-color);
  }
}
</style>