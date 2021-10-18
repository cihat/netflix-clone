<script>
import Icon from "./Icon";
export default {
  name: "navbar",
  data() {
    return {
      key: "value",
    };
  },
  components: {
    Icon,
  },
  methods: {
    handleClick(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<template>
  <div class="navbar_container">
    <div class="left">
      <router-link to="/">
        <img src="img/Netflix/NetflixLogoSvg.png" alt="Netflix Logo" />
      </router-link>
      <div class="navigation_wrapper">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/series">Series</router-link>
          </li>
          <li>
            <router-link to="/movies">Movies</router-link>
          </li>
          <li>
            <router-link to="/new-popular">News and Popular</router-link>
          </li>
          <li>
            <router-link to="/my-list">My List</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div class="search_wrapper">
        <icon icon="Search" size="20" color="#fff " />
        <p>ÇOCUK</p>
      </div>
      <div class="gift_icon">
        <icon icon="GiftBox" size="20" color="#fff  " />
      </div>
      <div class="notification">
        <icon icon="NotificationBell" size="20" color="#fff " />
      </div>
      <div class="user_wrapper">
        <icon icon="show-detail-popup" size="16" color="#fff  " />
      </div>
      <div class="dropdown">
        <icon icon="DownArrow" size="14" color="#fff  " />
      </div>
    </div>
  </div>
  <router-view />
</template>

<style lang="scss" scoped>
@import "../assets/styles/_variables.scss";
@import "../assets/styles/mixins/_mixins.scss";

.navbar_container {
  display: flex;
  background-color: $black;
  padding: 20px;
  flex-direction: column;
  justify-content: center;

  @include respond-above(md) {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 20px 60px;
    background-color: $black;
  }

  .left {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0;

    @include respond-above(md) {
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
    }

    img {
      width: 111px;
      height: auto;
      margin-right: 0;
      margin-bottom: 20px;
      @include respond-above(md) {
        margin-right: 50px;
        margin-bottom: 0px;
      }
    }

    .navigation_wrapper {
      ul {
        display: flex;
        align-items: center;
        justify-content: center;

        @include respond-above(md) {
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
        }

        li {
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }

          :not(last-child) {
            margin-right: 1rem;

            @include respond-above(md) {
              margin-right: 20px;
            }
          }

          a {
            line-height: 17.8px;
            font-weight: 500;
            font-size: 14px;
            color: $smoke_white;
            text-decoration: none;
            &.active {
              line-height: 17.8px;
              font-weight: 900;
              font-size: 14px;
              color: $white;
            }
          }
        }
      }
    }
  }

  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    @include respond-above(md) {
      align-items: center;
      justify-content: flex-start;
      margin-top: 0px;
    }

    :not(las-child) {
      margin-right: 20px;
    }

    .search_wrapper {
      display: flex;
      align-items: center;

      svg {
        margin-right: 20px;
      }
      p {
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color: $white;
      }
    }

    div {
      svg {
        margin-right: 0px;
      }
    }
  }
}
</style>