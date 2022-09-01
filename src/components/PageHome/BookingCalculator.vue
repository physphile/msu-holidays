<template>
  <div class="row">
    <div
        class="col-md-8 col-xs-12 column"
        style="padding-left: 0;"
    >
      <IrdomSelect
          v-model="order.hotel"
          :options="HOTELS"
          class="select"
          placeholder="Пансионат"
      />
    </div>

    <div
        class="col-md-5 column"
        style="padding-left: 0;"
    >
      <IrdomDatepicker
          :maxDate="maxDate"
          :minDate="new Date()"
          class="animate__animated animate__fadeInLeft"
          placeholder="Заезд – выезд"
          range
          style="animation-delay: .2s"
          @change="changeOrderDates($event)"
      />
    </div>
    <div class="col-md-3 column">
      <IrdomInputNumber
          v-model="order.guests"
          class="animate__animated animate__fadeInRight"
          style="animation-delay: .6s"
      >
        {{ guestsText }}
      </IrdomInputNumber>
    </div>

  </div>
  <div class="row">
    <IrdomButtonColor
        class="book-button animate__animated animate__fadeIn"
        style="animation-delay: 1s"
        @click="book()"
    >Забронировать
    </IrdomButtonColor>
  </div>
</template>

<script>
import IrdomDatepicker from "@/components/UI/Datepicker";
import IrdomSelect from "@/components/UI/Select";
import HOTELS from "@/data/constants";
import IrdomButtonColor from "@/components/UI/ButtonColor";
import IrdomInputNumber from "@/components/UI/InputNumber";
import useOrderStore from "@/stores/order";

export default {
  name: "PageHomeBookingCalculator",
  components: {IrdomInputNumber, IrdomButtonColor, IrdomSelect, IrdomDatepicker},
  data() {
    return {
      order: {
        arrivalDate: null,
        departureDate: null,
        hotel: undefined,
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
    },
    book() {
      let order = useOrderStore();
      order.set(this.order);
      this.$router.push({name: 'booking2'})
    }
  },
  computed: {
    guestsText() {
      return this.order.guests + ' ' + this.getGuestsCorrectCase(this.order.guests);
    },
    maxDate() {
      const date = new Date();
      date.setDate(date.getDate() + 14);
      return date;
    },
  }
};
</script>

<style scoped>
.row {
  row-gap: min(4vw, 30px);
  margin: 0;
}

.book-button {
  margin-top: min(6.4vW, 40px);
}

.select {
  animation: fadeInLeft;
  animation-duration: var(--animate-duration);
}

@media screen and (max-width: 767px) {
  .book-button {
    width: 100%;
    border-radius: 8px;
  }

  .column {
    padding: 0;
  }
}
</style>