<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
</script>
<template>
  <div class="RelatedProject">
    <div>
      <p class="md:block hidden text__title">RELATED PROJECT</p>
      <p class="md:hidden text-center text__title">RELATED</p>
    </div>

    <div class="grid grid-cols-12 gap-4 justify-center">
      <div class="col-span-6 text">
        <img src="~/assets/images/RelatedProject1.png" alt="" class="image" />
        <p class="text__one">天沐設計事業有限公司</p>
        <p class="text__two">Huang's House, Taichung</p>
        <p class="text__three">台中黃宅</p>
        <button class="more md:hidden">MORE+</button>
      </div>
      <div class="col-span-6 text">
        <img src="~/assets/images/RelatedProject2.png" alt="" class="image" />
        <p class="text__one">天沐設計事業有限公司</p>
        <p class="text__two">Huang's House, Shenzhen, China</p>
        <p class="text__three">中國深圳黃宅</p>
        <button class="more md:hidden">MORE+</button>
      </div>
      <div class="text">
        <img src="~/assets/images/RelatedProject3.png" alt="" class="image" />
        <p class="text__one">天沐設計事業有限公司</p>
        <p class="text__two">Blue Whale's Villa, New Taipei</p>
        <p class="text__three">藍鯨 Villa</p>
      </div>
      <!-- 12/13暫時樣式 -->
      <div
        class="swiper-navigation md:flex hidden col-span-2 2xl:col-end-12 col-end-13"
      >
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.RelatedProject {
  margin-bottom: 24.65%;
}
.image {
  width: 100%;
  height: 100%;
  max-width: 310px;
  max-height: 210px;
  @include max-media(768) {
    width: 157px;
    height: 100px;
  }
}
.text {
  color: $text-color3;
  font-size: 1rem;
  @apply md:block hidden md:col-span-4 col-span-6;
  &__title {
    font-size: 1.3125rem;
    line-height: 30.18px;
    margin-bottom: 3.7694%;
    // font-family: $font-Noto;
    @include max-media(768) {
      margin-bottom: 12.2473%;
    }
  }
  &__one {
    font-size: 0.625rem;
    margin-bottom: 3.5%;
    font-family: $font-Noto;
  }
  &__two {
    margin-bottom: 2%;
  }
  &__three {
  }
}
// 12/13箭頭暫時樣式
.swiper-navigation {
  width: 50%;
  justify-self: flex-end;
  position: relative;
  padding-top: 10%;
  text-align: center;
  // margin-bottom: 2%;
  --swiper-navigation-sides-offset: 0px;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  content: "";
}

.swiper-button-prev,
.swiper-button-next {
  width: 30%;
  background-image: url("assets/icon/prev.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.swiper-button-next {
  background-image: url("assets/icon/next.svg");
}
</style>
