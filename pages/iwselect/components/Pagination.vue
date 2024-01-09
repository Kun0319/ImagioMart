<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useGlobalStore } from "@/stores/global.js";

const globalStore = useGlobalStore();
const isChinese = computed(() => globalStore.language === "CN");
defineProps({
  slidesData: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div class="container">
    <div class="title">
      <slot name="title">
        <p v-if="isChinese" class="md:block hidden text__title">延伸閱讀</p>
        <p v-else class="md:block hidden text__title">RELATED PROJECT</p>
      </slot>
    </div>
    <swiper
      ref="mySwiper"
      :slides-per-view="1"
      :pagination="{ clickable: true }"
      :modules="[Pagination]"
      class="myswiper"
    >
      <swiper-slide v-for="(slide, index) in slidesData" :key="index">
        <div class="flex items-center justify-between">
          <div class="LittleAdvertise flex flex-col justify-center">
            <img :src="slide.imageUrl" alt="" class="photo" />
            <p class="text__one">{{ slide.company }}</p>
            <p class="text__two">{{ slide.projectName }}</p>
            <p class="text__three">{{ slide.projectLocation }}</p>
          </div>
          <div class="LittleAdvertise flex flex-col justify-center">
            <img :src="slide.imageUrl" alt="" class="photo" />
            <p class="text__one">{{ slide.company }}</p>
            <p class="text__two">{{ slide.projectName }}</p>
            <p class="text__three">{{ slide.projectLocation }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: none;
  @include max-media(768) {
    display: block;
  }
}
.LittleAdvertise {
  margin-bottom: 50px;
  // align-items: flex-start;
  align-items: center;
  // text-align: left;

  &__icon {
    // background-color: black;
    position: absolute;
    top: 40%;
  }
}

.PaginationAdvertise {
  margin-bottom: 1%;
}

.title {
  font-family: $font-Noto;
  font-size: 1rem;
  margin-left: 15%;
  margin-top: 4.5%;
  margin-bottom: 4.5%;

  @include max-media(575) {
    margin-left: 10%;
  }

  @include max-media(480) {
    margin-left: 0;
  }
}

.photo {
  display: block;
  // width: 100%;
  //   height: auto;
  // max-height: 175px;
  // max-width: 301px;
  width: 39.186vw;
  height: 58.779vw;
  max-width: 154px;
  max-height: 231px;
}

.myswiper {
  --swiper-navigation-color: black;
  --swiper-navigation-size: 10px;
  --swiper-navigation-top-offset: 30%;

  @include max-media(768) {
    --swiper-navigation-sides-offset: 15%;
  }

  @include max-media(575) {
    --swiper-navigation-sides-offset: 10%;
  }

  @include max-media(480) {
    --swiper-navigation-sides-offset: 0px;
  }
}

.text {
  color: $text-color3;
  font-size: 1rem;

  &__one {
    font-size: 0.625rem;
    margin-bottom: 3.5%;
    font-family: $font-Noto;
  }

  &__two {
    // margin-bottom: 2%;
  }

  &__three {
  }
}
</style>
