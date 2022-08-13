import {defineStore} from "pinia";

export const useOrderStore = defineStore('order', {
    state: () => {
        return {
            hotel: undefined,
            arrivalDate: null,
            departureDate: null,
            guests: 1
        };
    },

    actions: {}
});