<script setup>
import { Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css/scrollbar";
const props = defineProps({
  images: Array, // 假設 images 是一個包含圖片資訊的陣列
});
const mySwiper = ref(null);

// onMounted(() => {
//   if (mySwiper.value) {
//     mySwiper.value = !mySwiper.value;
//   }
// });
// onBeforeUnmount(() => {
//   if (mySwiper.value) {
//     mySwiper.value.destroy(); // 销毁 Swiper 实例
//   }
// });
</script>
<template>
  <div class="swiperpic">
    <client-only>
      <Swiper
        :modules="[Scrollbar, Autoplay]"
        :scrollbar="{ hide: false, draggable: true }"
        :autoplay="{ delay: 2000, disableOnInteraction: false }"
        :slidesPerView="1"
        ref="mySwiper"
      >
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <!-- 這裡假設每個 image 對象有 url、title 和 description 三個屬性 -->
          <div class="swiperpic__scrollbar grid grid-cols-12 gap-4">
            <img :src="image.url" class="lg:col-span-8 col-span-12 photo" />
            <div
              class="flex flex-col project__text justify-end lg:col-start-9 lg:col-span-4 col-span-12"
            >
              <p class="flex project__text__one">
                {{ image.title }}
                <span class="ml-auto"></span>
                <i class="pi pi-heart mx-3 swiperpic__icon"></i>
                <i class="pi pi-share-alt swiperpic__icon"></i>
              </p>

              <p class="project__text__two">{{ image.description }}</p>
              <p class="project__text__three">{{ image.descriptionZh }}</p>
              <p class="project__text__four">{{ image.deadline }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </client-only>
  </div>
</template>

<style lang="scss" scoped>
.project__text__one {
  margin-bottom: 5.4466%;
}

.photo {
  width: 100%;
  max-width: 740px;
  aspect-ratio: 3/2;
  // max-height: 440px;
}
</style>
