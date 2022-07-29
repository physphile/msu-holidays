<template>
  <div class="menu">
    <IrdomButtonText class="menu-item">Главная</IrdomButtonText>
    <IrdomButtonText class="menu-item">Пансионаты</IrdomButtonText>
    <IrdomButtonText class="menu-item">Горячие путёвки</IrdomButtonText>
    <IrdomButtonText class="menu-item">О проекте</IrdomButtonText>
  </div>

</template>

<script>
import IrdomButtonText from "@/components/TheHeaderMenuItem";

export default {
  name: "TheHeaderMenu",
  components: {IrdomButtonText}
};
</script>

<style scoped>
.menu {
  height: 50px;
  display: flex;
  overflow-x: auto;
  column-gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
}

.menu::-webkit-scrollbar {
  display: none;
}

.menu-item {
  white-space: nowrap;
}

@media screen and (max-width: 1199px) {
  .menu {
    background: #F5F6FA;
    border-top: 1px solid #E3E3E3;
    border-bottom: 1px solid #E3E3E3;
  }
}
@media screen and (max-width: 575px) {
  .menu {
    justify-content: start;
  }
}
</style>