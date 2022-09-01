<template>
  <header class="container">
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
            alt='логотип "Каникулы МГУ"'
            class="logo"
            src="../../assets/logo.svg"
            @click="$router.push('/')"
        >
      </div>

      <div
          class="col-xl-6
              col-xs-12
              last-xs
              initial-order-xl"
      >
        <TheHeaderMenu/>
      </div>

      <div
          class="col-xl-4
                col-xs-6
                end-xs"
      >
        <TheHeaderMenuItem class="hidden-xs hidden-sm register-button" @click="$router.push('/registration')">
          Зарегестрироваться
        </TheHeaderMenuItem>
        <IrdomButtonColor @click="openLoginPopup()">Войти</IrdomButtonColor>
      </div>
    </div>
  </header>

  <TheHeaderPopupLogin :show="show" @close="show=false"/>

</template>

<script>
import TheHeaderMenu from "@/components/TheHeader/Menu";
import IrdomButtonColor from "@/components/UI/ButtonColor";
import TheHeaderMenuItem from "@/components/TheHeader/MenuItem";
import TheHeaderPopupLogin from "@/components/TheHeader/PopupLogin";

export default {
  name: "TheHeader",
  components: {TheHeaderPopupLogin, TheHeaderMenuItem, IrdomButtonColor, TheHeaderMenu},
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.changeLogo(window.matchMedia('(prefers-color-scheme: dark)').matches);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      this.changeLogo(event.matches);
    });
  },
  methods: {
    changeLogo(isDark) {
      if (isDark) {
        document.querySelector('.logo').src = require('../../assets/logoLight.svg');
      } else {
        document.querySelector('.logo').src = require('../../assets/logo.svg');
      }
    },
    openLoginPopup() {
      this.show = true;
    }
  }
};
</script>

<style scoped>
.logo {
  height: 100%;
  max-width: 100%;
  object-fit: contain;
  cursor: pointer;
}

.container {
  padding-top: min(4.5vw, 54px);
}

.register-button {
  margin-right: 40px;
}

@media screen and (max-width: 1199px) {
  .header {
    row-gap: min(1.7vw, 20px);
  }
}

@media screen and (max-width: 575px) {
  .container {
    padding-left: 4.8%;
    padding-right: 4.8%;
  }
}
</style>