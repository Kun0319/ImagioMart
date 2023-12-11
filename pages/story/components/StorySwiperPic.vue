<script setup>
import "swiper/swiper-bundle.css";
import { Scrollbar, Navigation } from "swiper/modules";
</script>
<template>
  <div class="swiperpic">
    <Swiper
      :modules="[Scrollbar]"
      :scrollbar="{ hide: false, draggable: true }"
      :slidesPerView="1"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
    >
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
      <SwiperSlide>
        <div
          class="swiperpic__scrollbar grid grid-cols-12 gap-4"
          @click="handleScrollbarClick"
        >
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
.swiperpic {
  margin-top: 10%;
  margin-bottom: 2%;

  @include max-media(768) {
    margin-top: 19.435%;
  }

  &__icon {
    font-size: 18px;

    @include max-media(768) {
      font-size: 12px;
    }
  }

  &__scrollbar {
    margin-bottom: 6.3%;

    > img {
      background-size: contain;
    }
  }

  --swiper-scrollbar-drag-bg-color: black;
  --swiper-scrollbar-sides-offset: 0%;
}

.swiper-navigation {
  position: relative;
  // top: 3.94%;
  padding-top: 10%;
  width: 10%;
  text-align: center;
  margin-bottom: 2%;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  content: "";
  /* 移除默认内容 */
}

.swiper-button-prev,
.swiper-button-next {
  width: 20%;
  background-image: url("assets/icon/prev.svg");
  /* 设置自定义图标的路径 */
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.swiper-button-next {
  background-image: url("assets/icon/next.svg");
}
</style>
