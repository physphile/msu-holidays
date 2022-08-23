<template>
  <div class="wrapper">
    <div
         class="avatar animate__animated animate__rotateIn  "
         :style="style"
    >
      {{FI}}
    </div>
    <div class="caption">
      <span class="name">Константин Константинопольский</span>
      <span class="role">Сотрудник МГУ</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageProfilePhotoName",
  data() {
    return {
      // avatarUrl: require('@/assets/cardHotelSimplePhoto.png'),
      FI: 'КК'
    }
  },
  computed: {
    style () {
      this.changeFI();
      return this.avatarUrl ? `background: url(${this.avatarUrl})` : `background: var(--color-primary)`;
    }
  },
  methods: {
    changeFI() {
      this.avatarUrl ? this.FI = '' : this.FI = 'КК'
    }
  }
}
</script>

<style scoped>
.avatar {
  width: 80px;
  height: 80px;
  min-width: 80px;
  min-height: 80px;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color-primary-contrast);
  font-size: 28px;
  font-weight: 500;
}

.avatar::after, .avatar::before {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.avatar::before {
  content: url("@/assets/icons/pageProfilePhotoNameHover.svg");
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  position: absolute;
  z-index: 1;
  opacity: 0;
  transition: opacity var(--hover-transition-duration) var(--hover-transition-timing-function);
}

.avatar:hover::before {
  opacity: 1;
}

.wrapper {
  display: flex;
}

span {
  color: var(--text-color-primary)
}
.caption {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
}

.name {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}
.role {
  font-weight: 500;
  font-size: 16px;
  color: var(--text-color-secondary)
}
</style>