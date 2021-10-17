<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <p>Netflix Sans - Light - 11px</p>
    <p>Netflix Sans</p>
  </div>
  <router-view />
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
