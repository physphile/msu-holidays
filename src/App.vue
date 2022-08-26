<template>
  <TheHeader/>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component"/>
    </transition>
  </router-view>

</template>

<script>
import TheHeader from "@/components/TheHeader";

export default {
  components: {
    TheHeader
  },
  mounted() {
    this.updateBg(window.matchMedia('(prefers-color-scheme: dark)').matches);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',  e => {
      this.updateBg(e.matches);
    })
  },
  methods: {
    updateBg(isDark) {
      document.querySelector('body').style.backgroundImage = isDark ?
          `url(${require('@/assets/pageHomeBgLight.svg')})` :
          `url(${require('@/assets/pageHomeBg.svg')}`
    }
  }
};
</script>

<style>
@import "./components/UI/variables.css";

* {
  margin: 0;
  box-sizing: border-box;
  font-family: Inter, sans-serif;
}

body {
  background: url('@/assets/pageHomeBg.svg') top no-repeat var(--bg-color);
}

h1, h2, h1 > span, h2 > span {
  font-family: Montserrat, sans-serif;
  color: var(--text-color-primary);
}

h1, h2, h3, h4, h5, h6, span {
  cursor: default;
}

h1, h2 {
  font-weight: 700;
  line-height: 118%;
}

h1, h2 {
  font-size: 54px;
}

h3 {
  font-size: 24px;
}


.han-blue {
  color: var(--color-primary);
}

.block {
  padding-top: min(6.3vw, 75px);
}

.rounded-container {
  background: var(--rounded-container-bg-color);
  border-radius: min(4.2vw, 50px) min(4.2vw, 50px) 0 0;
  position: relative;
  padding: min(5vw, 60px) 0;
}

section header {
  margin-bottom: min(60px, 5vw);
}

@media screen and (max-width: 767px) {
  h1, h2 {
    font-size: 32px;
  }

  h1 {
    text-align: center;
  }
}
@media screen and (max-width: 1199px) {
  .rounded-container {
    background: none;
  }
}
</style>
