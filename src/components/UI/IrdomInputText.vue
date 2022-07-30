<template>
  <input :type="type" class="input">
</template>

<script>
export default {
  name: "IrdomInputText",
  props: {
    type: {
      type: String,
      default: 'text'
    }
  }
};
</script>

<style scoped>
.input {
  border: 1px solid #e3e3e3;
  background: white;
  border-radius: 8px;
  padding: 0 18px;
  height: 50px;
  transition: border-color .2s cubic-bezier(0.645, 0.045, 0.355, 1);
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 141%;
  width: 100%;
}
.input:hover, .input:focus {
  border-color: #3D62BB;
}
</style>