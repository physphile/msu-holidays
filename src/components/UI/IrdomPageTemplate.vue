<template>
  <section class="block">
    <header class="container animate__animated animate__fadeIn">
      <h2>
        <slot name="heading"></slot>
      </h2>

      <h4 class="subheading">
        <slot name="subheading"></slot>
      </h4>
    </header>
    <div class="rounded-container">
      <main class="container">
        <slot>

        </slot>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  name: "IrdomPageTemplate"
}
</script>

<style scoped>
header {
  display: flex;
  column-gap: min(40px, 3.3%);
  align-items: center;
}

.subheading {
  color: var(--text-color-secondary);
  font-weight: 500;
  max-width: 353px;
  line-height: var(--line-height);
}

@media screen and (max-width: 575px) {
  .container {
    padding-left: 4.8%;
    padding-right: 4.8%;
  }
}
</style>