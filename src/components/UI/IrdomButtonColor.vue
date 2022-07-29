<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "IrdomButtonColor"
};
</script>

<style scoped>
.button {
  padding: 16px 32px;
  background: #3D62BB;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background-color .3s;
}
.button:hover, button:active {
  background: #445273;
}

</style>