<template>
  <div class="container">
    <div class="block">
      <h1 class="heading">Забронируй отдых<br>в <span class="han-blue">пансионатах МГУ</span><br>онлайн</h1>
      <BookingCalculator/>
    </div>
  </div>
  <div class="body">
    <div class="container">
      <div class="block">
        <h1>Пансионаты</h1>
        <ListHotelSimple/>
      </div>

    </div>

  </div>
</template>

<script>
import ListHotelSimple from "@/components/ListHotelSimple";
import BookingCalculator from "@/components/BookingCalculator";

export default {
  name: "PageHome",
  components: {BookingCalculator, ListHotelSimple},
};
</script>

<style scoped>
.body {
  background: #F9F9F9;
  border-radius: 4vw 4vw 0 0;
  padding: 6vw 0;
}

.block > h1 {
  font-size: 54px;
  margin-bottom: 4vw;
}

.han-blue {
  color: #3D62BB;
}

.heading {
  margin-top: 6vw;
}

@media screen and (max-width: 767px) {
  .block > h1, .heading {
    font-size: 32px;
    text-align: center;
  }
}
</style>