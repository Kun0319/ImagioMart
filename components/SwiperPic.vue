<script setup>
import { Scrollbar, Navigation } from "swiper/modules";

// import "swiper/css/scrollbar";
const mySwiper = ref(null);
onMounted(() => {
  if (mySwiper.value) {
    // 使用 mySwiper.value 進行操作
    // 例如：mySwiper.value.setGrabCursor(true);
    mySwiper.value.setGrabCursor(true);
  }
});
</script>
<template>
  <div class="swiperpic">
    <Swiper
      :modules="[Navigation, Scrollbar]"
      :scrollbar="{ hide: false, draggable: true }"
      :ref="mySwiper"
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
.swiperpic {
  margin-bottom: 2%;
  // cursor: pointer;
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
// cursor: pointer;
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
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.swiper-button-next {
  background-image: url("assets/icon/next.svg");
}
</style>
