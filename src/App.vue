<template>
  <TheHeader/>
  <router-view>
  </router-view>

</template>

<script>
import TheHeader from "@/components/TheHeader";

export default {
  components: {
    TheHeader
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

:root {
  background: url("./assets/pageHomeBG.svg") top no-repeat var(--bg-color);
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
  padding: min(6.3vw, 75px) 0;
}

.rounded-container {
  background: var(--rounded-container-bg-color);
  border-radius: min(4.2vw, 50px) min(4.2vw, 50px) 0 0;
}

.block > .header {
  margin-bottom: min(4.2vw, 50px);
}

@media screen and (max-width: 767px) {
  h1, h2 {
    font-size: 32px;
  }

  h1 {
    text-align: center;
  }
}
</style>
