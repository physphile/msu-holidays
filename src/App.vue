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
* {
  margin: 0;
  box-sizing: border-box;
  font-family: Inter, sans-serif;
}

h1, h2, h3, h4, h5, h6, h1 > span, h2 > span {
  font-family: Montserrat, sans-serif;
}

h1, h2, span {
  cursor: default;
}

h1, h2 {
  font-weight: 700;
  line-height: 118%;
}

h1 {
  font-size: 32px;
}

h2 {
  font-size: 24px;
}
</style>
