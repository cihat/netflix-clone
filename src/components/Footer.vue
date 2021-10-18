<script>
import Icon from "./Icon";
import FooterButton from "./Buttons/FooterButton.vue";

export default {
  name: "footer",
  components: {
    Icon,
    FooterButton,
  },
};
</script>

<template>
  <div class="grid grid-center footer_container">
    <div class="footer_wrapper col col-sm-12 col-md-10">
      <div class="social_media_wrapper">
        <ul>
          <li>
            <a href="https://www.facebook.com/">
              <icon icon="facebook" :size="24" color="#808080" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <icon icon="instagram" :size="24" color="#808080" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <icon icon="twitter" :size="24" color="#808080" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/">
              <icon icon="youtube" :size="24" color="#808080" />
            </a>
          </li>
        </ul>
      </div>
      <div class="link_wrapper">
        <ul>
          <li>
            <router-link to="/">Seslendirme ve Alt Yazı</router-link>
          </li>
          <li>
            <router-link to="/series">Medya Merkezi</router-link>
          </li>
          <li>
            <router-link to="/movies">Gizlilik</router-link>
          </li>
          <li>
            <router-link to="/new-popular">Bize Ulaşın</router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to="/">Seslendirme ve Alt Yazı</router-link>
          </li>
          <li>
            <router-link to="/series">Medya Merkezi</router-link>
          </li>
          <li>
            <router-link to="/movies">Gizlilik</router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to="/">Seslendirme ve Alt Yazı</router-link>
          </li>
          <li>
            <router-link to="/series">Medya Merkezi</router-link>
          </li>
          <li>
            <router-link to="/movies">Gizlilik</router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to="/">Seslendirme ve Alt Yazı</router-link>
          </li>
          <li>
            <router-link to="/series">Medya Merkezi</router-link>
          </li>
          <li>
            <router-link to="/movies">Gizlilik</router-link>
          </li>
        </ul>
      </div>
      <div class="button_wrapper">
        <FooterButton />
      </div>
      <div class="sub_text">
        <p>© 1997-2021 Netflix, Inc. {i-062d573a0ee099242}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
.footer_container {
  background-color: $black;
}
.footer_wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .social_media_wrapper {
    ul {
      display: flex;
      margin-top: 20px;
      margin-bottom: 20px;

      li {
        &:not(last-child) {
          margin-right: 20px;
        }
        a {
          font-weight: 400;
          line-height: 16.6px;
          font-size: 13px;
          color: $gray;
        }
      }
    }
  }

  .link_wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;

    ul {
      display: flex;
      flex-direction: column;

      li {
        &:not(last-child) {
          margin-bottom: 15px;
        }

        a {
          font-size: 13px;
          line-height: 16.6px;
          color: $gray;
          font-weight: 400;
          text-decoration: none;
          transition: all 300ms;

          &:hover {
            text-decoration: underline;
            font-weight: 500;
          }
        }
      }
    }
  }

  .button_wrapper {
    margin-bottom: 20px;
  }
  .sub_text {
    margin-bottom: 20px;
    p {
      font-size: 11px;
      line-height: 14px;
      font-weight: 300;
      color: $gray;
    }
  }
}
</style>