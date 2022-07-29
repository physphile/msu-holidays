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
  transition: color .2s;
  border: none;
  background: none;
}
.button:hover, .button:active {
  color: #3D62BB;
}
</style>