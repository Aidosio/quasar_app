<template>
  <h1 class="title">{{title}}</h1>
</template>

<script>
export default {
  name: 'qTitleComponent',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.title {
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;

  color: #302F3D;
  margin: 70px 0px 0px 0px;
}
</style>
