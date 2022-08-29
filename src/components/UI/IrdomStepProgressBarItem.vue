<template>
  <div ref="item" :class="{inactive: !active && !done, active: active, done: done}" class="item">
    <div class="icon">
      <slot name="icon">
      </slot>
    </div>
    <div v-show="active || done" class="step">
      <slot name="step"></slot>
    </div>

    <div v-show="active || done" class="name">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "IrdomStepProgressBarItem",
  props: {
    active: {
      type: Boolean,
      default: false
    },
    done: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.icon {
  grid-area: icon;
  width: 53px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}


.item {
  transition: background-color var(--hover-transition-duration) var(--hover-transition-timing-function);
  border-radius: 50px;
  padding: 10px;
}

.item:hover {
  cursor: pointer;
}

.step {
  grid-area: step;
  font-weight: 500;
  font-size: 16px;
  color: var(--color-primary);
}

.name {
  grid-area: name;
  font-weight: 500;
  font-size: 16px;
  margin-right: .5em;
  color: var(--text-color-secondary)
}

.icon, .step, .name {
  display: flex;
  align-items: center;
}

.active, .done {
  display: grid;
  grid-template: "icon step"
                  "icon name";
  grid-column-gap: 20px;
}

.active {
  stroke: var(--text-color-primary-contrast);
  fill: var(--text-color-primary-contrast);
}

.item {
  --color-primary-light-opacity: #E5EDFF;
}
.active:hover {
  background-color: var(--color-primary-light-opacity);
}

@media screen and (prefers-color-scheme: dark) {
  .item {
    --color-primary-light-opacity: rgb(59, 67, 85);
  }
}

.active .name {
  color: var(--text-color-primary);
}

.active .icon {
  background-color: var(--color-primary);
  border-radius: 50%;
}

.done .icon {
  background-color: var(--color-primary-light-opacity);
}

.done .step:after {
  content: '✔';
  margin-left: .5em;
}

.done {
  stroke: var(--color-primary);
  fill: var(--color-primary);
}

.inactive {
  display: flex;
  justify-content: center;
  stroke: var(--text-color-primary);
  fill: var(--text-color-primary);
}

.inactive:hover, .done:hover {
  background-color: var(--color-disabled);
}

@media screen and (max-width: 1199px) {
  .name, .step {
    display: none;
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}


</style>