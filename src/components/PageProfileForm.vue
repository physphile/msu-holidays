<template>
  <form>
    <IrdomInputLabelWrapper>
      <template #label>
        Статус в МГУ
      </template>
      <template #input>
        <IrdomRadioButtons>
          <IrdomRadioButtonsItem>Студент</IrdomRadioButtonsItem>
          <IrdomRadioButtonsItem>Сотрудник</IrdomRadioButtonsItem>
          <IrdomRadioButtonsItem>Другой</IrdomRadioButtonsItem>
        </IrdomRadioButtons>
      </template>
    </IrdomInputLabelWrapper>
  </form>
</template>

<script>
import IrdomInputLabelWrapper from "@/components/UI/IrdomInputLabelWrapper";
import IrdomRadioButtons from "@/components/UI/IrdomRadioButtns";
import IrdomRadioButtonsItem from "@/components/UI/IrdomRadioButtonsItem";
export default {
  name: "PageProfileForm",
  components: {IrdomRadioButtonsItem, IrdomRadioButtons, IrdomInputLabelWrapper}
}
</script>

<style scoped>

</style>