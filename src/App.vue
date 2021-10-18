<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "App",
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss">
@import "./assets/styles/index";
@import "./assets/styles/container";
@import "./assets/styles/mixins/mixins.scss";

#app {
  font-family: "Netflix", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
