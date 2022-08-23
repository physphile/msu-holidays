<template>
<div class="row">
  <div class="col-xs-12 col-xl-3">
    <label :for="id">
      <slot name="label" ></slot>
    </label>
  </div>
  <div class="col-xs-12 col-xl-9">
    <slot name="input"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "IrdomInputLabelWrapper",
  props: {
    id: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
label {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: var(--line-height);
  /* or 22px */
  color: var(--text-color-primary);
}
div {
  align-items: center;
}
.row {
  row-gap: min(2.4vw, 10px);
}
</style>