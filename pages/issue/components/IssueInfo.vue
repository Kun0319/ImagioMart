<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import { useWindowSize } from "@vueuse/core";
import imgSrc from "@/assets/images/153-1.jpg";
import hoverSrc from "@/assets/images/153-2.jpg";

const mySwiper = ref(null);
// 圖片
const pic = ref(imgSrc);
const { width } = useWindowSize();
const intervalId = ref(null);
const isHovered = ref(false);
// Hover改變圖片
const handleMouseOver = () => {
  if (width.value > 768) {
    pic.value = hoverSrc;
    isHovered.value = true;
  }
};

const handleMouseOut = () => {
  if (width.value > 768) {
    pic.value = imgSrc;
    isHovered.value = false;
  }
};

// 5秒換一次圖片
const startImageSwitch = () => {
  stopImageSwitch();
  intervalId.value = setInterval(() => {
    pic.value = isHovered.value ? imgSrc : hoverSrc;
    isHovered.value = !isHovered.value;
  }, 5000);
};
const stopImageSwitch = () => {
  if (intervalId.value) {
    clearInterval(intervalId.value);
    intervalId.value = null;
  }
};

// 如果當前螢幕寬度大於768，則啟動切換
onMounted(() => {
  if (width.value > 768) {
    startImageSwitch();
  }
});
onUnmounted(() => {
  stopImageSwitch();
});
watch(width, (newWidth) => {
  if (newWidth > 768 && !intervalId.value) {
    startImageSwitch();
  } else if (newWidth <= 768 && intervalId.value) {
    stopImageSwitch();
    handleMouseOut();
  }
});
</script>

<template>
  <div class="issue grid grid-cols-10 gap-4">
    <!-- Magazine Info -->
    <article
      class="flex info md:col-span-5 lg:col-span-6 col-span-full md:order-none order-1 md:text-start text-center md:justify-self-center"
    >
      <div class="flex flex-col md:items-start items-center">
        <p class="info__new">Jun.27 / 2023 出刊消息</p>
        <div class="flex flex-col md:max-w-full lg:w-auto w-9/12"></div>
        <p class="info__month">IW傢飾 11月號 / 2023 第153期</p>
        <p class="info__content">
          本期雙封面精選<br />
          墨西哥米卻肯．拉彼達之家<br />
          義大利．2023 威尼斯建築雙年展：一個循環的故事
        </p>
        <p class="info__price">NT$300</p>
        <a href="/" class="info__shopcart">ADD TO CART</a>
      </div>
    </article>

    <!-- 大圖 -->
    <article
      class="pic flex md:col-span-3 col-span-10 md:order-1 order-none md:justify-start justify-center my-swiper-container"
    >
      <!-- <img src="~/assets/images/Rectangle.svg" alt="IW傢飾" /> -->
      <img
        :src="pic"
        @mouseover="handleMouseOver"
        @mouseout="handleMouseOut"
        alt="IW傢飾"
        class="pic__hover"
      />
      <client-only>
        <Swiper
          ref="mySwiper"
          :slides-per-view="1"
          :pagination="{ clickable: true }"
          :modules="[SwiperPagination]"
          :class="'pic__swpier '"
        >
          <SwiperSlide><img :src="imgSrc" alt="" /></SwiperSlide>
          <SwiperSlide> <img :src="hoverSrc" alt="" /></SwiperSlide>
        </Swiper>
      </client-only>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.issue {
  margin-top: 7.75%;
  margin-bottom: 9.72%;
}

.info {
  white-space: nowrap;
  &__new {
    line-height: 2rem;
  }

  &__month {
    padding: 0;
  }

  &__content {
  }
  &__price {
  }

  &__shopcart {
    @include max-media(769) {
      margin-bottom: 16.28%;
    }
  }
}

.pic {
  display: flex;
  align-items: center;
  &__hover {
    width: 290px;
    object-fit: cover;
    box-shadow: -5px 5px 10px 5px rgba(0, 0, 0, 0.1);
    @include max-media(767) {
      display: none;
      margin-top: 15%;
      margin-bottom: 7%;
    }
  }
  &__swpier {
    width: 100%;
    @include max-media(768) {
      padding-bottom: 10%;
    }
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      > img {
        width: 290px;
        height: 100%;
        object-fit: cover;
        box-shadow: -5px 5px 10px 5px rgba(0, 0, 0, 0.1);
        margin-top: 15%;
        margin-bottom: 7%;
      }
    }
    @include min-media(768) {
      display: none;
    }
  }
}
</style>
