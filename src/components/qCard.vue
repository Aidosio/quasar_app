<template>
  <h3>Вас могут заинтересовать</h3>
  <div class="card">
    <router-link to="/" class="card-block">
      <h2>МЕРОПРИЯТИЯ</h2>
      <img src="../assets/bg/number.png" alt="events">
    </router-link>
    <router-link to="/" class="card-block">
      <h2>МЕРОПРИЯТИЯ</h2>
      <img src="../assets/bg/number.png" alt="events">
    </router-link>
    <router-link to="/" class="card-block">
      <h2>МЕРОПРИЯТИЯ</h2>
      <img src="../assets/bg/number.png" alt="events">
    </router-link>
    <router-link to="/" class="card-block">
      <h2>МЕРОПРИЯТИЯ</h2>
      <img src="../assets/bg/number.png" alt="events">
    </router-link>
  </div>
</template>

<script>
export default {
  name: "qCard"
}
</script>

<style lang="scss" scoped>
h3 {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin-top: 30px;
}
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px;
    object-fit: cover;
    grid-gap: 20px;

    &-block {
      position: relative;
      display: flex;
      width: 100%;
      height: 100px;
      align-items: center;
      justify-content: center;
      h2 {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-decoration: none;
        color: #ffffff;
        z-index: 1;
        margin: 0px;
      }
      img {
        position: absolute;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
      }
    }
  }
</style>
