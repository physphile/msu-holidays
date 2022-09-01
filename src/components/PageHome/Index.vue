<template>
  <main>
    <section class="container block mainblock">
      <header class="header">
        <h1 class="animate__animated animate__fadeIn">Забронируй отдых<br>в <span
            class="han-blue">пансионатах МГУ</span><br>онлайн</h1>
      </header>
      <PageHomeBookingCalculator/>
    </section>
    <div class="rounded-container">
      <section class="container">
        <header class="header">
          <h2 class="animate__animated animate__fadeIn">Пансионаты</h2>
        </header>
        <ListHotelSimple/>
      </section>
    </div>
  </main>
  <div class="background hidden-sm hidden-xs"></div>

</template>

<script>
import ListHotelSimple from "@/components/PageHome/HotelList";
import PageHomeBookingCalculator from "@/components/PageHome/BookingCalculator";

export default {
  name: "PageHome",
  components: {PageHomeBookingCalculator, ListHotelSimple},
};
</script>

<style scoped>
.mainblock {
  padding-bottom: min(8.3vw, 100px);
}

@media screen and (max-width: 575px) {
  .container {
    padding-left: 4.8%;
    padding-right: 4.8%;
  }
}
</style>