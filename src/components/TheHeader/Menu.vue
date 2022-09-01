<template>
  <nav class="nav">
    <IrdomButtonText class="menu-item">Главная</IrdomButtonText>
    <IrdomButtonText class="menu-item">Пансионаты</IrdomButtonText>
    <IrdomButtonText class="menu-item">Горячие путёвки</IrdomButtonText>
    <IrdomButtonText class="menu-item">О проекте</IrdomButtonText>
  </nav>

</template>

<script>
import IrdomButtonText from "@/components/TheHeader/MenuItem";

export default {
  name: "TheHeaderMenu",
  components: {IrdomButtonText}
};
</script>

<style scoped>
.nav {
  height: 50px;
  display: flex;
  overflow-x: auto;
  column-gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 0 4.8%;
}

.nav::-webkit-scrollbar {
  display: none;
}

.menu-item {
  white-space: nowrap;
}

@media screen and (max-width: 1199px) {
  .nav {
    background: var(--rounded-container-bg-color);
    border-top: 1px solid var(--color-disabled);
    border-bottom: 1px solid var(--color-disabled);
  }
}

@media screen and (max-width: 575px) {
  .nav {
    justify-content: start;
    margin: 0 -4.8%;
  }
}
</style>