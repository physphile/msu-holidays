<template>
  <IrdomPopup
      :show='show'
      class="login-popup"
      style="padding: 0 10px"
      @close="close()"
  >
    <h2>Вход в кабинет</h2>

    <form
        @submit.prevent
    >
      <!-- TODO: пришлось выключить автокомплит для почты, иначе, когда программно ставится фокус на инпут с почтой, список с вариантами автодополнения вылезает снизу -->
      <IrdomInputText
          id="email"
          v-model="email"
          autocomplete="off"
          name="email"
          placeholder="Электронная почта"
          style="margin-bottom: min(20px, 6.7%); max-width: 300px"
          type="email"
      />

      <IrdomInputText
          id="current-password"
          v-model="password"
          name="current-password"
          placeholder="Пароль"
          style="margin-bottom: min(20px, 6.7%); max-width: 300px"
          type="password"
      />

      <IrdomButtonColor
          :disabled="(email === '') || (password === '')"
          style="margin-bottom: min(30px, 10%); max-width: 300px;"
          type="submit"
      >
        Войти
      </IrdomButtonColor>
    </form>

    <IrdomButtonText class="forgot">Не помню пароль</IrdomButtonText>

    <div class="line"></div>

    <span style="color: var(--text-color-secondary); margin-bottom: 2px; ">Нет аккаунта?</span>

    <IrdomButtonText style="margin-bottom: min(60px, 20%);" @click="$router.push('/registration'); $emit('close')">
      Зарегестрироваться
    </IrdomButtonText>
  </IrdomPopup>
</template>

<script>
import IrdomInputText from '@/components/UI/InputText'
import IrdomPopup from "@/components/UI/Popup";
import IrdomButtonText from "@/components/UI/ButtonText";
import IrdomButtonColor from "@/components/UI/ButtonColor";

export default {
  name: "TheHeaderPopupLogin",
  components: {
    IrdomInputText, IrdomPopup, IrdomButtonText, IrdomButtonColor
  },
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  updated() {
    if (this.show) {
      document.querySelector('.login-popup').querySelector('#email').focus();
    }
  }
};
</script>

<style scoped>
h2 {
  font-size: 24px;
  margin: min(60px, 20%) 0 min(40px, 13.3%) 0;
  text-align: center;
}

.forgot {
  margin-bottom: min(30px, 10%);
}

form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.line {
  max-width: 310px;
  width: 100%;
  border: 1px solid var(--color-disabled);
  height: 0;
  margin-bottom: min(30px, 10%);
}
</style>