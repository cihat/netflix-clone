<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  components: {
    Navbar,
  },
};
</script>

<template>
  <div id="app">
    <navbar />
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
  text-align: center;
  color: #2c3e50;
  // background-color: $black;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  p {
    font-weight: 700;
    line-height: 61px;
    font-size: 48px;
    color: $red;
  }
}
</style>
