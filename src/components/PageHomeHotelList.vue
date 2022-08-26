<template>
  <div class="row">
    <div v-for="i in [0,1,2,3,4,5,6]" :key="i" class="col-xl-3 col-lg-4 col-md-6 col-xs-12 cell">
      <PageHomeHotelListCard/>
    </div>
  </div>
</template>

<script>
import PageHomeHotelListCard from "@/components/PageHomeHotelListCard";

export default {
  name: "PageHomeHotelList",
  components: {PageHomeHotelListCard}
};
</script>

<style scoped>
.row {
  row-gap: 30px;
}

.cell {
  display: flex;
  justify-content: center;
}
</style>