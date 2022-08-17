<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
.desktop   {
  background: #302F3D;
  color: #fff;
  padding: 25px;
}
@import "css/normalize.scss";
</style>
