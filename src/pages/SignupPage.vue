<template>
  <div class="sing-up">
    <div class="sing-up-background">
      <img src="../assets/bg/galaxybackground.png" alt="">
    </div>
    <div class="sing-up-header">
      <div class="sing-up-header-place">
        <q-title-component title="Регистрация" />
        <div class="sing-up-header-place-input">
          <q-input standout v-model="text" label="ФИО" class="qInput" placeholder="Введите своё фио"/>
          <q-input standout v-model="text" label="Телефон" class="qInput" placeholder="Введите свой номер телефона"/>
          <q-input standout v-model="text" label="Пароль" class="qInput" placeholder="Введите свой пароль" type="password"/>
          <q-select standout v-model="model" :options="options" class="qInput" label="Выберите свой колледж" />
        </div>
        <q-btn class="button-send" text-color="white" label="Далее" />
      </div>
    </div>
  </div>
</template>

<script>
import qTitleComponent from '../components/qTitleComponent'
export default {
  name: 'SignupPage',
  components: {
    qTitleComponent
  },
  data () {
    return {
      text: '',
      model: '',
      options: [
        'колледж1',
        'колледж2'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sing-up {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;

  &-background {
    position: absolute;
    z-index: -1;
    width: 100%;
    img {
      width: 100%;
      height: 90vh;
      object-fit: cover;
    }
  }

  &-header {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column-reverse;

    &-place {
      width: 100%;
      height: 70vh;
      background: #fff;

      border-radius: 45px 45px 0px 0px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      &-input {
        margin-top: 25px;
        width: calc(100% - 100px);

        .qInput {
          margin-top: 20px;
        }
      }
      .button-send {
        background: #302F3D !important;
        width: calc(100% - 100px);
        margin-top: 35px;
        text-transform: none;
        padding: 15px 0px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 100px;
      }
    }
  }
}
</style>
