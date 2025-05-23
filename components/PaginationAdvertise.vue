<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

const slides = Array.from({ length: 4 });

import "swiper/css";
import "swiper/css/pagination";
</script>
<template>
  <client-only>
    <swiper
      ref="mySwiper"
      :slides-per-view="1"
      :pagination="{ clickable: true }"
      :modules="[Pagination]"
      class="PaginationAdvertise"
    >
      <swiper-slide v-for="(_, index) in slides" :key="index">
        <div class="LittleAdvertise flex justify-center">
          <img src="~/assets/images/LittleAdvertise.svg" alt="" class="photo" loading="lazy" />
          <img
            src="~/assets/icon/play.svg"
            alt=""
            class="LittleAdvertise__icon"
            loading="lazy"
          />
        </div>
      </swiper-slide>
    </swiper>
  </client-only>
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
  margin-bottom: 39.804%;
}
.photo {
  max-width: 210px;
  max-height: 142px;
}
</style>
