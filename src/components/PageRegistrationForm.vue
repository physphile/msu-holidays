<template>
  <form
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
            class="animate__animated animate__fadeInLeft"
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
            class="animate__animated animate__fadeInLeft"
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
            class="animate__animated animate__fadeInLeft"
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
            class="animate__animated animate__fadeInLeft"
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
            class="animate__animated animate__fadeInLeft"
            name="new-password"
            placeholder="Введите пароль повторно"
            type="password"
        />
      </template>
    </IrdomInputLabelWrapper>

    <IrdomInputLabelWrapper>
      <template #input>
        <IrdomButtonColor
            class="submit-btn animate__animated animate__fadeIn"
            disabled
            type="submit"
        >Зарегестрироваться
        </IrdomButtonColor>
      </template>
    </IrdomInputLabelWrapper>

  </form>
</template>

<script>
import IrdomInputLabelWrapper from "@/components/UI/IrdomInputLabelWrapper";
import IrdomButtonColor from "@/components/UI/IrdomButtonColor";
import IrdomInputText from "@/components/UI/IrdomInputText";
import focus from "@/directives/focus";

export default {
  name: "PageRegistrationForm",
  components: {IrdomInputLabelWrapper, IrdomButtonColor, IrdomInputText},
  directives: {focus},
  methods: {
    submit() {
      console.log('submit');
    }
  }
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