<template>
  <div
      :class="{active: active}"
      class="item"
  >
    <img
        :src="icon"
        alt=""
        class="icon"
    >
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: "PageProfileSidebarItem",
  props: {
    icon: {
      type: String,
      default: 'https://icons.veryicon.com/png/o/miscellaneous/general-icon-collection-face-right-angle/arrow-right-40.png'
    },
    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.item {
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: var(--line-height);
  color: var(--text-color-primary);
  padding: 18px;
  column-gap: 14px;
  border-radius: 10px;
  transition: background-color var(--hover-transition-duration) var(--hover-transition-timing-function);
}

.item:hover {
  background: rgba(0, 0, 0, 0.1);
}

.icon {
  max-width: 28px;
  max-height: 28px;
  object-fit: contain;
}

.item:hover {
  cursor: pointer;
}

@media screen and (max-width: 1199px) {
  .item {
    border-radius: 0;
  }
}
</style>