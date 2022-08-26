<template>
  <IrdomPageTemplate>
    <template #heading>
      Регистрация
    </template>
    <template #subheading>
      Уже зарегестрированы?<br>
      <IrdomButtonText>Войти</IrdomButtonText>
    </template>

    <div class="col-xl-8 col-xs12">
      <PageRegistrationForm/>
    </div>


  </IrdomPageTemplate>
</template>

<script>
import PageRegistrationForm from "@/components/PageRegistrationForm";
import IrdomPageTemplate from "@/components/UI/IrdomPageTemplate";
import IrdomButtonText from "@/components/UI/IrdomButtonText";

export default {
  name: "PageRegistration",
  components: {IrdomButtonText, IrdomPageTemplate, PageRegistrationForm},
  data() {
    return {
      user: {
        first_name: '',

      }
    }
  },
};
</script>

<style scoped>
</style>