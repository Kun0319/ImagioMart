<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
</script>
<template>
  <swiper
    ref="mySwiper"
    :slides-per-view="1"
    :pagination="{ clickable: true }"
    :modules="[SwiperPagination]"
    class="PaginationAdvertise"
  >
    <swiper-slide>
      <div class="LittleAdvertise flex justify-center">
        <img src="../assets/images/LittleAdvertise.svg" alt="" class="photo" />
        <img
          src="../assets/icon/play.svg"
          alt=""
          class="LittleAdvertise__icon"
        /></div
    ></swiper-slide>
    <swiper-slide>
      <div class="LittleAdvertise flex justify-center">
        <img src="../assets/images/LittleAdvertise.svg" alt="" class="photo" />
        <img
          src="../assets/icon/play.svg"
          alt=""
          class="LittleAdvertise__icon"
        /></div
    ></swiper-slide>
    <swiper-slide>
      <div class="LittleAdvertise flex justify-center">
        <img src="../assets/images/LittleAdvertise.svg" alt="" class="photo" />
        <img
          src="../assets/icon/play.svg"
          alt=""
          class="LittleAdvertise__icon"
        /></div
    ></swiper-slide>
    <swiper-slide>
      <div class="LittleAdvertise flex justify-center">
        <img src="../assets/images/LittleAdvertise.svg" alt="" class="photo" />
        <img
          src="../assets/icon/play.svg"
          alt=""
          class="LittleAdvertise__icon"
        /></div
    ></swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.LittleAdvertise {
  margin-bottom: 50px;
  position: relative;

  &__icon {
    // background-color: black;
    position: absolute;
    top: 40%;
  }
}
.PaginationAdvertise {
  margin-bottom: 1%;
}
</style>
