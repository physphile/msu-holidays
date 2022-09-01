<template>
  <form @submit.prevent>
    <div class="col-xl-6 col-xs-12" style="margin-bottom: 20px;">
      <IrdomDatepicker
          :initialRange="initialRange"
          :maxDate="maxDate"
          :minDate="new Date()"
          class="animate__animated animate__fadeInDown"
          placeholder="Заезд – выезд"
          range
          style="animation-delay: .8s"
          @change="changeOrderDates($event)"
      />
    </div>
    <div class="col-xl-3 col-xs-12" style="margin-bottom: 20px;">
      <IrdomInputNumber v-model="order.guests" class="animate__animated animate__fadeInDown"
                        style="animation-delay: .4s">
        {{ guestsText }}
      </IrdomInputNumber>
    </div>
    <div class="col-xl-3 col-xs-12" style="margin-bottom: 30px;">
      <IrdomButtonColor
          class="book-button animate__animated animate__fadeIn"
          style="animation-delay: 0s"
          @click="book()"
      >Найти номера
      </IrdomButtonColor>
    </div>
  </form>
</template>

<script>
import IrdomDatepicker from "@/components/UI/Datepicker";
import IrdomInputNumber from "@/components/UI/InputNumber";
import IrdomButtonColor from "@/components/UI/ButtonColor";
import useOrderStore from "@/stores/order";

export default {
  name: "PageBooking2FrameForm",
  components: {IrdomInputNumber, IrdomDatepicker, IrdomButtonColor},
  data() {
    return {
      order: {
        guests: 1,
        arrivalDate: null,
        departureDate: null,
        hotel: null
      }
    }
  },
  mounted() {
    let order = useOrderStore();
    Object.assign(this.order, order.get);
  },
  methods: {
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
    changeOrderDates(dates) {
      this.order.arrivalDate = dates[0];
      this.order.departureDate = dates[1];
    },
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
    initialRange() {
      return [this.order.arrivalDate, this.order.departureDate];
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
}

@media screen and (max-width: 1199px) {
  .book-button {
    width: 100%;
    border-radius: 8px;
  }

  form {
    flex-direction: column;
  }
}
</style>