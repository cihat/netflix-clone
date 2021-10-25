<script>
export default {
  name: "ChildComponent",
  props: {
    test_prop: {
      type: [Number, String],
      default: "Hellooo",
    },
  },
};
</script>

<template>
  <div>
    <h1>{{ this.test_prop }}</h1>
  </div>
</template>

<style>
</style>