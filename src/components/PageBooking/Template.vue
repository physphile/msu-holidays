<template>
<div class="row">
  <div class="col-xl-9 col-xs-12">
    <slot></slot>
  </div>
  <div class="col-xl-3 hidden-xs">
    <slot name="sidebar"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "PageBookingTemplate"
}
</script>

<style scoped>

</style>