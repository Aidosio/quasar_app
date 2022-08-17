<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="10"
    :centeredSlides="false"
    class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide><swiper-slide>Slide 2</swiper-slide
  ><swiper-slide>Slide 3</swiper-slide><swiper-slide>Slide 4</swiper-slide
  ><swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide
  ><swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide
  ><swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/pagination"
import "../css/style.css"

export default {
  components: {
    Swiper,
    SwiperSlide,
  }
};
</script>
