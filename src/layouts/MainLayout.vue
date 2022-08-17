<template>
  <header>
    <img src="../assets/icon/menu_white.svg" alt="menu">
    <router-link to="/main">
      <img src="../assets/icon/student_life.svg" alt="logo">
    </router-link>
    <router-link to="/alert">
      <img src="../assets/icon/alarm.svg" alt="alarm">
    </router-link>
  </header>
  <menu>
  </menu>
  <router-view/>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<style lang="scss" scoped>
  header {
    display: flex;
    width: 100%;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
    }
  }

  menu {
    background: #000;
    width: 100%;
    height: 100vh;
    z-index: 10;
    top: -13px;
    left: 0;
    position: fixed;
    opacity: 0.2;
    //border-radius: 0px 45px 45px 0px;
  }
</style>
