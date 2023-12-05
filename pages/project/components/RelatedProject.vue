<script setup></script>
<template>
  <div class="RelatedProject">
    <div>
      <p class="text__title">RELATED PROJECT</p>
    </div>
    <div class="grid grid-cols-12 gap-4 justify-center">
      <div class="col-span-4 text">
        <img src="~/assets/images/RelatedProject1.png" alt="" class="image" />
        <p class="text__one">天沐設計事業有限公司</p>
        <p class="text__two">Huang's House, Taichung</p>
        <p class="text__three">台中黃宅</p>
      </div>
      <div class="col-span-4 text">
        <img src="~/assets/images/RelatedProject2.png" alt="" class="image" />
        <p class="text__one">天沐設計事業有限公司</p>
        <p class="text__two">Huang's House, Shenzhen, China</p>
        <p class="text__three">中國深圳黃宅</p>
      </div>
      <div class="col-span-4 text">
        <img src="~/assets/images/RelatedProject3.png" alt="" class="image" />
        <p class="text__one">天沐設計事業有限公司</p>
        <p class="text__two">Blue Whale's Villa, New Taipei</p>
        <p class="text__three">藍鯨 Villa</p>
      </div>
      <div class="swiper-navigation md:block hidden col-span-11">
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.RelatedProject {
  margin-bottom: 13.57%;
}
.image {
  width: 310px;
  height: 210px;
}
.text {
  color: $text-color3;
  font-size: 1rem;
  &__title {
    font-size: 1.3125rem;
    line-height: 30.18px;
    margin-bottom: 3.7694%;
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
.swiper-navigation {
  position: relative;
  padding-top: 5%;
  margin-left: auto;
  width: 12.5%;
  text-align: center;
}
ß .swiper-button-prev::after,
.swiper-button-next::after {
  content: "";
}

.swiper-button-prev,
.swiper-button-next {
  width: 25%;
  background-image: url("assets/icon/prev.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.swiper-button-next {
  background-image: url("assets/icon/next.svg");
}
</style>
