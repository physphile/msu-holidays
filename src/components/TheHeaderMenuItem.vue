<template>
<button class="button"><slot></slot></button>
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
  transition: color .2s cubic-bezier(0.645, 0.045, 0.355, 1);;
  border: none;
  background: none;
  padding: 0;
}
.button:hover, .button:active {
  color: #3D62BB;
}
</style>