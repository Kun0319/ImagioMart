<script setup>
import { Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
// import "swiper/css/scrollbar";
const mySwiper = ref(null);
onMounted(() => {
  if (mySwiper.value) {
    mySwiper.value.setGrabCursor(true);
  }
});
</script>
<template>
  <div class="swiperpic">
    <Swiper
      :modules="[Scrollbar, Autoplay]"
      :scrollbar="{ hide: false, draggable: true }"
      :autoplay="{ delay: 2000, disableOnInteraction: false }"
      :slidesPerView="1"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
    >
      <SwiperSlide>
        <div class="swiperpic__scrollbar grid grid-cols-12 gap-4">
          <img
            src="~/assets/images/SwiperPic.svg"
            class="lg:col-span-8 col-span-12 w-full"
          />
          <div
            class="flex flex-col project__text justify-end lg:col-start-9 lg:col-span-4 col-span-12"
          >
            <p class="flex project__text__one">
              ANA Studio
              <span class="ml-auto"></span>
              <i class="pi pi-heart mx-3 swiperpic__icon"></i>
              <i class="pi pi-share-alt swiperpic__icon"></i>
            </p>
            <p class="project__text__two">Cooking and art</p>
            <p class="project__text__three">西澳大利亞珀斯 隱園</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiperpic__scrollbar grid grid-cols-12 gap-4">
          <img
            src="~/assets/images/SwiperPic.svg"
            class="lg:col-span-8 col-span-12 w-full"
          />
          <div
            class="flex flex-col project__text justify-end lg:col-start-9 lg:col-span-4 col-span-12"
          >
            <p class="flex project__text__one">
              ANA Studio
              <span class="ml-auto"></span>
              <i class="pi pi-heart mx-3 swiperpic__icon"></i>
              <i class="pi pi-share-alt swiperpic__icon"></i>
            </p>
            <p class="project__text__two">Cooking and art</p>
            <p class="project__text__three">西澳大利亞珀斯 隱園</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="swiperpic__scrollbar grid grid-cols-12 gap-4">
          <img
            src="~/assets/images/SwiperPic.svg"
            class="lg:col-span-8 col-span-12 w-full"
          />
          <div
            class="flex flex-col project__text justify-end lg:col-start-9 lg:col-span-4 col-span-12"
          >
            <p class="flex project__text__one">
              ANA Studio
              <span class="ml-auto"></span>
              <i class="pi pi-heart mx-3 swiperpic__icon"></i>
              <i class="pi pi-share-alt swiperpic__icon"></i>
            </p>
            <p class="project__text__two">Cooking and art</p>
            <p class="project__text__three">西澳大利亞珀斯 隱園</p>
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
.project__text__one {
  margin-bottom: 5.4466%;
}
</style>
