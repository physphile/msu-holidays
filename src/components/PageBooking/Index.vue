<template>
  <IrdomPageTemplate>
    <template #heading>Бронирование</template>
    <template #subheading>Точная стоимость заявки будет рассчитана после внесения данных гостей и зависит от их статуса
      в МГУ
    </template>
    <BookingProgressBar style="margin-bottom: 30px;"/>

    <PageBookingTemplate>
      <router-view/>
      <template #sidebar>
        <router-view name="sidebar"/>
      </template>
    </PageBookingTemplate>
  </IrdomPageTemplate>

</template>

<script>
import IrdomPageTemplate from "@/components/UI/PageTemplate";
import PageBookingTemplate from "@/components/PageBooking/Template";
import BookingProgressBar from "@/components/PageBooking/ProgressBar";

export default {
  name: "PageBooking",
  components: {BookingProgressBar, PageBookingTemplate, IrdomPageTemplate},
  mounted() {
    let pressed = new Set();
    window.addEventListener('keydown', (e) => {
      pressed.add(e.key);

      for (let n of ['1', '2', '3', '4']) {
        if (pressed.has(n) && pressed.has('Control')) {
          this.$router.push({name: `booking${n}`});
        }
      }
    })
    window.addEventListener('keyup', (e) => {
      pressed.delete(e.key);
    })
  }
}
</script>

<style scoped>

</style>