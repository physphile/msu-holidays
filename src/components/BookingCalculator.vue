<template>
  <div class="row">
    <div class="col-md-8 col-xs-12 column" style="padding-left: 0;">
      <IrdomSelect
          :options="HOTELS"
          placeholder="Пансионат"
      />
    </div>

    <div class="col-md-5 column" style="padding-left: 0;">
      <IrdomDatepicker
          :initial-range="[order.arrivalDate, order.departureDate]"
          @change="changeOrderDates($event)"
      />
    </div>
    <div class="col-md-3 column">
      <IrdomInputNumber v-model="order.guests">
        {{ guestsText }}
      </IrdomInputNumber>
    </div>

  </div>
  <div class="row">
    <IrdomButtonColor class="book-button">Забронировать</IrdomButtonColor>
  </div>
</template>

<script>
import IrdomDatepicker from "@/components/UI/IrdomDatepicker";
import IrdomSelect from "@/components/UI/IrdomSelect";
import HOTELS from "@/data/constants";
import IrdomButtonColor from "@/components/UI/IrdomButtonColor";
import IrdomInputNumber from "@/components/UI/IrdomInputNumber";

export default {
  name: "BookingCalculator",
  components: {IrdomInputNumber, IrdomButtonColor, IrdomSelect, IrdomDatepicker},
  data() {
    return {
      order: {
        arrivalDate: null,
        departureDate: null,
        hotel: null,
        guests: 1
      },
      HOTELS
    };
  },
  methods: {
    changeOrderDates(dates) {
      this.order.arrivalDate = dates[0];
      this.order.departureDate = dates[1];
    },
    getGuestsCorrectCase(n) {
      switch (n) {
        case 1:
          return 'гость';
        case 2:
        case 3:
        case 4:
          return 'гостя';
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
          return 'гостей';
      }
    }
  },
  computed: {
    guestsText() {
      return this.order.guests + ' ' + this.getGuestsCorrectCase(this.order.guests);
    }
  }
};
</script>

<style scoped>
.row {
  row-gap: min(2.5vw, 30px);
  margin: 0;
}

.book-button {
  margin-top: min(3.3vW, 40px);
}

@media screen and (max-width: 767px){
  .book-button {
    width: 100%;
    border-radius: 8px;
  }
  .column {
    padding: 0;
  }
}
</style>