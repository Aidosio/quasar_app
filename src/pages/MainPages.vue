<template>
  <qSlider />
  <qNavbar />
  <qNextLesson />
  <qCard />
</template>

<script>
import { defineComponent } from 'vue'
import qNavbar from 'components/qNavbar'
import qSlider from 'components/qSlider'
import qNextLesson from 'components/qNextLesson'
import qCard from 'components/qCard'

export default defineComponent({
  name: 'MainPages',
  components: {
    qNavbar,
    qSlider,
    qNextLesson,
    qCard
  }
})
</script>

