<template>
  <IrdomPageTemplate>
    <template #heading>Бронирование</template>
    <template #subheading>Точная стоимость заявки будет рассчитана после внесения данных гостей и зависит от их статуса
      в МГУ
    </template>
    <IrdomStepProgressBar>

    </IrdomStepProgressBar>

    <PageBookingTemplate>
      <router-view/>
      <template #sidebar>
        <router-view name="sidebar"/>
      </template>
    </PageBookingTemplate>
  </IrdomPageTemplate>

</template>

<script>
import IrdomPageTemplate from "@/components/UI/IrdomPageTemplate";
import IrdomStepProgressBar from "@/components/UI/IrdomStepProgressBar";
import PageBookingTemplate from "@/components/PageBookingTemplate";

export default {
  name: "PageBooking",
  components: {PageBookingTemplate, IrdomStepProgressBar, IrdomPageTemplate}
}
</script>

<style scoped>

</style>