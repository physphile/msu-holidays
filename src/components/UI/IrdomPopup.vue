<template>
  <transition name="fade">
    <div
        v-show="show"
        class="blackout"
        @click="closePopup"
    >
      <transition
          name="slide"
      >
        <div
            v-show="show"
            class="popup"
            v-bind="$attrs"
            @click.stop
        >
          <slot></slot>
        </div>
      </transition>

    </div>
  </transition>


</template>

<script>
export default {
  name: "IrdomPopup",
  methods: {
    closePopup() {
      this.$emit('close');
    }
  },
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
};
</script>

<style scoped>
.blackout {
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 200vh;
  z-index: 3;
}

.popup {
  position: fixed;
  max-width: 374px;
  width: 90%;
  height: fit-content;
  z-index: 4;
  background: var(--bg-color);
  border-radius: 16px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.16);
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slide-enter-from, .slide-leave-to {
  transform: translateY(500px);
}

.slide-enter-active, .slide-leave-active {
  transition: transform .5s ease;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>