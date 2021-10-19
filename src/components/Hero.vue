<script>
import Icon from "./Icon";

export default {
  name: "Hero",
  components: {
    Icon,
  },
};
</script>

<template>
  <div class="hero_wrapper">
    <h1>Unlimited movies, TV shows and more.</h1>
    <p>Watch anywhere. Cancel anytime.</p>
    <p class="search_title">
      Ready to watch? Enter your email to create or restart your membership.
    </p>
    <div class="search_input">
      <input type="text" placeholder="Email address" />
      <button>
        <p>Get Started</p>
        <icon icon="ArrowRight" :size="20" color="#FFFFFF" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../../public/img/Netflix/hero_bg.png");
  background-color: rgba(#000, 0.4);
  padding: 140px 0px;

  h1 {
    max-width: 680px;
    font-size: 64px;
    line-height: 70px;
    font-weight: 700;
    margin-bottom: 16px;
    color: #fff;
    text-align: center;
  }

  p {
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 26px;
    line-height: 33px;
    color: #fff;
    text-align: center;
    max-width: 680px;
  }

  p.search_title {
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 26px;
    line-height: 33px;
    color: #fff;
    text-align: center;
    max-width: 680px;
  }

  .search_input {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    input {
      width: 500px;
      background-color: #fff;
      padding: 24px 0px;
      padding-left: 8px;
    }

    button {
      width: 250px;
      padding: 16px 31px;
      background-color: #e50914;
      display: flex;
      align-content: center;
      justify-content: space-between;
      outline: none;
      border: none;
      max-height: 67px;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      p {
        font-weight: 400;
        line-height: 38px;
        // font-size: 30px;
        letter-spacing: 0.1px;
        margin-right: 15px;
        margin-bottom: 0px;
      }
    }
  }
}
</style>