import {defineStore} from "pinia";

const useOrderStore = defineStore('order', {
    state: () => ({
        hotel: undefined,
        arrivalDate: null,
        departureDate: null,
        guests: 1
    }),
    actions: {
        set(order) {
            this.hotel = order.hotel;
            this.arrivalDate = order.arrivalDate;
            this.departureDate = order.departureDate;
            this.guests = order.guests;
        }
    },
    getters: {
        get(state) {
            return {
                hotel: state.hotel,
                arrivalDate: state.arrivalDate,
                departureDate: state.departureDate,
                guests: state.guests
            }
        }
    }
});

export default useOrderStore;