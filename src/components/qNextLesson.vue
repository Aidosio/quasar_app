<template>
  <h3>Следующая пара:</h3>
  <router-link to="/main" class="card">
    <div class="card-block">
      <div class="card-block-name">
        Русский язык
      </div>
      <div class="card-block-time">
        12:40 - 14:00
      </div>
    </div>
    <img src="../assets/icon/right-arrow.svg" alt="right-arrow">
  </router-link>
</template>

<script>
export default {
  name: "qNextLesson"
}
</script>

<style lang="scss" scoped>
.card {
  background: #494D5A;
  border-radius: 16px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  line-height: 26px;
}

h3 {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}
</style>
