<template>
  <div class="sidebar">
    <PageProfileSidebarItem
        :active="active === 1"
        :icon="personalDataIcon"
        class="item animate__animated animate__flipInX"
        @click="active = 1"
    >
      Личные данные
    </PageProfileSidebarItem>

    <PageProfileSidebarItem
        :active="active===2"
        :icon="docsIcon"
        class="item animate__animated animate__flipInX"
        @click="active = 2"
    >
      Мои документы
    </PageProfileSidebarItem>

    <PageProfileSidebarItem
        :active="active===3"
        :icon="bookingStatusIcon"
        class="item animate__animated animate__flipInX"
        @click="active = 3"
    >
      Статус бронирования
    </PageProfileSidebarItem>
    <div :style="{top: `${(active - 1) * 64}px`}" class="active-background"></div>
  </div>

</template>

<script>
import PageProfileSidebarItem from "@/components/PageProfileSidebarItem";

export default {
  name: "PageProfileSidebar",
  components: {
    PageProfileSidebarItem
  },
  mounted() {
    document.querySelectorAll('.item').forEach((item, i) => {
      item.style.animationDelay = `${i / 10}s`
    })

    this.changeIcons(window.matchMedia('(prefers-color-scheme: dark)').matches);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      this.changeIcons(event.matches);
    });
  },
  methods: {
    changeIcons(isDark) {
      this.docsIcon = isDark ?
          require('@/assets/icons/light/pageProfileDocs.svg') :
          require('@/assets/icons/pageProfileDocs.svg');
      this.bookingStatusIcon = isDark ?
          require('@/assets/icons/light/pageProfileBookingStatus.svg') :
          require('@/assets/icons/pageProfileBookingStatus.svg');
      this.personalDataIcon = isDark ?
          require('@/assets/icons/light/pageProfilePersonalData.svg') :
          require('@/assets/icons/pageProfilePersonalData.svg');
    }
  },
  data() {
    return {
      active: 1,
      docsIcon: '',
      bookingStatusIcon: '',
      personalDataIcon: ''
    };
  }
};
</script>

<style scoped>
.sidebar {
  position: relative;
  z-index: 1;
  border-radius: 10px;
  overflow: hidden;
}

.active-background {
  position: absolute;
  transition: top .1s ease;
  left: 0;
  z-index: -1;
  border-radius: 10px;
  width: 100%;
  opacity: 0.3;
  height: 64px;
  background: var(--color-primary-light);
  animation: flipInX, fade;
  animation-duration: .8s;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.3;
  }
}


@media screen and (max-width: 1199px) {
  .active-background {
    border-radius: 0;
  }
  .sidebar {
    border: 1px solid var(--color-disabled);
  }
}
</style>