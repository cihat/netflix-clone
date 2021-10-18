<template>
  <button>Hizmet Kodu</button>
</template>

<script>
export default {
  name: "FooterButton",
};
</script>

<style lang="scss" scoped>
button {
  padding: 10px 15px;
  border: 1px solid #808080;
  font-size: 13px;
  line-height: 16.6px;
  font-weight: 400;
  color: #808080;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background-color: #f5f5f5;
    text-decoration: underline;
  }
}
</style>