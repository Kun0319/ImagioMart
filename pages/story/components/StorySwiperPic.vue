<script setup>
import "swiper/swiper-bundle.css";
import { Scrollbar, Autoplay } from "swiper/modules";
</script>
<template>
  <div class="swiperpic">
    <Swiper
      :modules="[Scrollbar, Autoplay]"
      :scrollbar="{ hide: false, draggable: true }"
      :autoplay="{ delay: 2000, disableOnInteraction: false }"
      :slidesPerView="1"
    >
      <SwiperSlide>
        <div class="swiperpic__scrollbar grid grid-cols-12 gap-4">
          <img
            src="~/assets/images/storyswiper.png"
            class="lg:col-span-8 col-span-12 w-full"
          />
          <!-- 文字區塊 -->
          <div
            class="flex flex-col project__text justify-end lg:col-start-9 lg:col-span-4 col-span-12"
          >
            <p class="flex project__text__one">
              Industrial ｜ADEVA
              <span class="ml-auto"></span>
              <i class="pi pi-heart mx-3 swiperpic__icon"></i>
              <i class="pi pi-share-alt swiperpic__icon"></i>
            </p>
            <p class="project__text__two">Get some more sleep</p>
            <p class="project__text__three">多睡一會</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiperpic__scrollbar grid grid-cols-12 gap-4">
          <img
            src="~/assets/images/storyswiper.png"
            class="lg:col-span-8 col-span-12 w-full"
          />
          <div
            class="flex flex-col project__text justify-end lg:col-start-9 lg:col-span-4 col-span-12"
          >
            <p class="flex project__text__one">
              Industrial ｜ADEVA
              <span class="ml-auto"></span>
              <i class="pi pi-heart mx-3 swiperpic__icon"></i>
              <i class="pi pi-share-alt swiperpic__icon"></i>
            </p>
            <p class="project__text__two">Get some more sleep</p>
            <p class="project__text__three">多睡一會</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiperpic__scrollbar grid grid-cols-12 gap-4">
          <img
            src="~/assets/images/storyswiper.png"
            class="lg:col-span-8 col-span-12 w-full"
          />
          <div
            class="flex flex-col project__text justify-end lg:col-start-9 lg:col-span-4 col-span-12"
          >
            <p class="flex project__text__one">
              Industrial ｜ADEVA
              <span class="ml-auto"></span>
              <i class="pi pi-heart mx-3 swiperpic__icon"></i>
              <i class="pi pi-share-alt swiperpic__icon"></i>
            </p>
            <p class="project__text__two">Get some more sleep</p>
            <p class="project__text__three">多睡一會</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- 向左向右按鈕 -->
    <!-- <div class="swiper-navigation md:block hidden">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div> -->
  </div>
</template>
<style lang="scss" scoped>
.project__text {
  @include min-media(1024) {
    margin-left: 10%;
  }
  &__one {
    margin-bottom: 6.066%;
  }
  &__two {
  }
  &__three {
  }
}
</style>
