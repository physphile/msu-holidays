<template>
  <form
      ref="form"
      class="form"
      @submit="submit()"
      @submit.prevent
  >
    <IrdomInputLabelWrapper id="name">
      <template #label>Имя</template>
      <template #input>
        <IrdomInputText
            id="name"
            v-focus
            name="name"
            placeholder="Введите имя"
            type="text"
        />
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper id="email">
      <template #label>Почта</template>
      <template #input>
        <IrdomInputText
            id="email"
            name="email"
            placeholder="Введите свой e-mail"
            type="email"
        />
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper id="tel">
      <template #label>
        Телефон
      </template>
      <template #input>
        <IrdomInputText
            id="tel"
            name="tel"
            type="tel"
        />
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper id="new-password">
      <template #label>
        Пароль
      </template>
      <template #input>
        <IrdomInputText
            id="new-password"
            name="new-password"
            placeholder="Придумайте пароль"
            type="password"
        />
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper id="new-password">
      <template #input>
        <IrdomInputText
            id="new-password"
            name="new-password"
            placeholder="Введите пароль повторно"
            type="password"
        />
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper>
      <template #input>
        <IrdomButtonColor
            class="submit-btn"
            disabled
            type="submit"
        >Зарегестрироваться
        </IrdomButtonColor>
      </template>
    </IrdomInputLabelWrapper>

  </form>
</template>

<script>
import IrdomInputLabelWrapper from "@/components/UI/InputLabelWrapper";
import IrdomButtonColor from "@/components/UI/ButtonColor";
import IrdomInputText from "@/components/UI/InputText";
import focus from "@/directives/focus";

export default {
  name: "PageRegistrationForm",
  components: {IrdomInputLabelWrapper, IrdomButtonColor, IrdomInputText},
  directives: {focus},
  methods: {
    submit() {
      console.log('submit');
    }
  },
  mounted() {
    this.$refs.form.querySelectorAll('.col-xs-12.col-xl-9').forEach((el, i) => {
      if (el.children[0].localName === 'input') {
        el.classList.add('animate__animated', 'animate__fadeInLeft');
      } else {
        el.classList.add('animate__animated', 'animate__fadeIn');
      }

      el.style.animationDelay = `${i / 10}s`;
    });
    this.$refs.form.querySelectorAll('form .col-xl-3.col-xs-12').forEach((label, i) => {
      label.style.animationDelay = `${i / 10 + 0.5}s`
    });
  },
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

}

button {
  margin-top: min(3.6vw, 40px);
  width: fit-content;
  animation-delay: 1s;
}

@media screen and (max-width: 767px) {
  button {
    border-radius: 8px;
    width: 100%;
  }
}
</style>