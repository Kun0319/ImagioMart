<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import hoverSrc from "@/assets/images/MagazineBack.svg";
import imgSrc from "@/assets/images/Rectangle.svg";
// 輪播
const modules = ref([Navigation]);
// 圖片
const pic = ref(imgSrc);
// Hover改變圖片
const handleMouseOver = () => {
  pic.value = hoverSrc;
};
const handleMouseOut = () => {
  pic.value = imgSrc;
};
const isHovered = ref(false);

// 5秒換一次圖片
setInterval(() => {
  if (isHovered.value) {
    pic.value = imgSrc;
  } else {
    pic.value = hoverSrc;
  }
  // 更新狀態
  isHovered.value = !isHovered.value;
}, 5000);
</script>

<template>
  <div class="grid grid-cols-10 md:pt-12 pb-28">
    <!-- Magazine Info -->
    <article
      class="info md:col-start-3 md:col-span-3 col-span-10 md:order-none order-1 md:text-left text-center gap-5"
    >
      <div class="grid gap-1">
        <p class="info__new">Jun.27 / 2023 出刊消息</p>
        <p class="info__month">&laquo;IW傢飾&raquo;11月號 / 2023 第153期</p>
      </div>
      <p class="info__content pt-3">
        本期雙封面精選 <br />
        墨西哥米卻肯．拉彼達之家<br />
        義大利．2023 威尼斯建築雙年展：一個循環的故事
      </p>
      <p class="info__content py-5">文字．影像 ｜ 提供：IW傢飾</p>
      <div>
        <p class="info__price mb-10">NT$300</p>

        <a href="/" class="info__shopcart">ADD TO CART</a>
      </div>
    </article>

    <!-- 大圖 -->
    <article
      class="md:col-start-7 md:col-span-2 col-span-10 md:order-1 order-none justify-center"
    >
      <!-- <img src="~/assets/images/Rectangle.svg" alt="IW傢飾" /> -->
      <img
        :src="pic"
        @mouseover="handleMouseOver"
        @mouseout="handleMouseOut"
        alt="IW傢飾"
        class="w-full max-w-xl sm:max-w-xl md:max-w-4xl lg:max-w-3xl"
      />
    </article>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 32rem;
}

.info {
  @include min-media(1025) {
    margin-left: 10%;
  }

  @include max-media(1024) {
    padding-left: 0;
  }
}
</style>
