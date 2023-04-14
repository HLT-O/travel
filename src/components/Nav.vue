<template>
  <div class="container">
    <div class="navBar">
      <img class="logo" alt="logo" src="../assets/nav/logo.png" />
      <p v-if="cellphone" class="pageTitle">{{ $route.name }}</p>
      <img
        v-if="cellphone"
        class="menu"
        alt="logo"
        src="../assets/nav/menuIcon.png"
      />
      <div class="navs">
        <div class="nav" v-for="(item, index) in navList" :key="index">
          <router-link :to="item.path">{{ item.title }}</router-link>
          <div
            class="BLine"
            :class="[$route.path == item.path ? 'BLineB' : '']"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  data() {
    return {
      cellphone: store.getters.cellphone,
      navList: [
        {
          title: "首页",
          path: "/",
        },
        {
          title: "定制旅行",
          path: "/customization",
        },
        {
          title: "目的地",
          path: "/destination",
        },
        {
          title: "新闻中心",
          path: "/news",
        },
        {
          title: "关于我们",
          path: "/about",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  z-index: 999999;
}
.navBar {
  position: relative;
  width: 1000px;
  margin: 0 auto;
}
.navBar .logo {
  width: 170px;
  position: absolute;
  top: 0;
  left: 0;
}

.navs {
  display: flex;
  justify-content: space-evenly;
  height: 70px;
  line-height: 70px;
  margin-left: 120px;
}
.nav a {
  font-size: 22px;
  color: #333333;
  transition: all 0.3s;
}
.nav a:hover {
  color: #00cfbb;
}
.nav a.router-link-exact-active {
  color: #00cfbb;
}
.nav .BLine {
  width: 20px;
  height: 2px;
  margin: 0 auto;
  margin-top: -10px;
  transition: all 0.3s;
}
.BLineB {
  background: #00cfbb;
}
.nav a:hover + .BLine {
  background: #00cfbb;
}
@media screen and (max-width: 420px) {
  .container {
    width: 100%;
    height: 40px;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    z-index: 999999;
  }
  .navBar {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .navBar .logo {
    width: 100px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .navBar .pageTitle {
    font-size: 18px;
    text-align: center;
    color: #00cfbb;
    height: 40px;
    line-height: 40px;
  }
  .navBar .menu {
    width: 25px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
  }
  .navs {
    height: 400px;
    width: 150px;
    position: absolute;
    top: 40px;
    right: -150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: rgb(244, 244, 244);
    transition: all 0.3s;
  }
 .navBar .menu:hover+.navs{
  right: 0;
 }
  .nav a {
    font-size: 18px;
    color: #333333;
    transition: all 0.3s;
  }
  .nav a.router-link-exact-active {
    color: #00cfbb;
  }
}
</style>
