<template>
  <nav>
    <router-link to="/profile" class="icon-text">
      <img src="../assets/icon/Person.svg" alt="Person">
      <p>Профиль</p>
    </router-link>
    <router-link to="/profile" class="icon-text">
      <img src="../assets/icon/Notes.svg" alt="Notes">
      <p>Расписание</p>
    </router-link>
    <router-link to="/profile" class="icon-text">
      <img src="../assets/icon/shock.svg" alt="shock">
      <p>Успеваемость</p>
    </router-link>
    <router-link to="/profile" class="icon-text">
      <img src="../assets/icon/Star.svg" alt="Star">
      <p>Достижения</p>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'qNavbar'
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  .icon-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    p {
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;

      text-align: center;
      color: #EEEEEE;
    }
  }
}
</style>
