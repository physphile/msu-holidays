<template>
  <div class="container">
    <div
        class="row header
            start-xs
            middle-xs"
    >
      <div
          class="col-xl-2
              col-xs-6"
      >
        <img
            src="../assets/logo.png"
            alt='логотип "Каникулы МГУ"'
            class="logo"
        >
      </div>

      <div
          class="col-xl-6
              col-xs-12
              last-xs
              initial-order-xl"
          style="padding: 0"
      >
        <TheHeaderMenu/>
      </div>

      <div
          class="col-xl-4
                col-xs-6
                end-xs"
      >
        <TheHeaderMenuItem class="hidden-xs hidden-sm register-button">Зарегестрироваться</TheHeaderMenuItem>
        <IrdomButtonColor>Войти</IrdomButtonColor>
      </div>
    </div>
  </div>

</template>

<script>
import TheHeaderMenu from "@/components/TheHeaderMenu";
import IrdomButtonColor from "@/components/UI/IrdomButtonColor";
import TheHeaderMenuItem from "@/components/TheHeaderMenuItem";

export default {
  name: "TheHeader",
  components: {TheHeaderMenuItem, IrdomButtonColor, TheHeaderMenu}
};
</script>

<style scoped>
.logo {
  height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.container {
  margin-top: min(5vw, 50px);
}

.register-button {
  margin-right: 40px;
}

@media screen and (max-width: 575px) {
  .header {
    row-gap: 5vw;
  }
}
</style>