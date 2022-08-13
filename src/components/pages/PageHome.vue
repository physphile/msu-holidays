<template>
  <main>
    <section class="container block mainblock">
      <header class="header">
        <h1>Забронируй отдых<br>в <span class="han-blue">пансионатах МГУ</span><br>онлайн</h1>
      </header>
      <BookingCalculator/>
    </section>
    <div class="rounded-container">
      <div class="container">
        <section class="block">
          <header class="header">
            <h2>Пансионаты</h2>
          </header>
          <ListHotelSimple/>
        </section>
      </div>
    </div>
  </main>
  <div class="background hidden-sm hidden-xs"></div>

</template>

<script>
import ListHotelSimple from "@/components/PageHomeHotelList";
import BookingCalculator from "@/components/BookingCalculator";

export default {
  name: "PageHome",
  components: {BookingCalculator, ListHotelSimple},
};
</script>

<style scoped>
.mainblock {
  padding-bottom: min(8.3vw, 100px);
}

/*.background {*/
/*  position: absolute;*/
/*  left: 0;*/
/*  top: 0;*/
/*  width: 100vw;*/
/*  height: 100vh;*/
/*  z-index: -1;*/
/*  background: url("../../assets/pageHomeBG.svg") center no-repeat;*/
/*}*/
</style>