<template>
<div class="radio-buttons">
  <slot id="slot">

  </slot>
</div>
</template>
<script>
export default {
  name: "IrdomRadioButtons",
  mounted() {
    const btns = document.querySelectorAll('.radio-buttons button');
    btns[0].style.borderRadius = '8px 0 0 8px';
    btns[btns.length - 1].style.borderRadius = '0 8px 8px 0';
  }
}
</script>
<style scoped>
.radio-buttons {
  display: flex;
  align-items: stretch;
  height: 50px;
}
</style>