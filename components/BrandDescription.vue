<script setup></script>
<template lang="">
  <div class="introduce__wrap">
    <div class="introduce">
      <!-- <p class="introduce__one">Brand</p> -->
      <p class="introduce__two">Villeroy & Boch</p>
      <p class="introduce__three">
        1748
        年創立於德國，距今已有近三百年歷史，是當今歐洲最具規模且歷史最悠久的專業瓷具廠商，品牌產業橫跨餐具與衛浴陶瓷設備等領域。第四代經營者
        Anna Boch 與 Eugène Boch 姊弟開啟了 Villeroy & Boch
        藝術的視野，不僅在當時的藝術領域中表現極為出色，對於藝術家的贊助更是不遺餘力，包括高更、馬諦斯、畢卡索跟梵谷，都受過其家族的資助，也揭示了
        Villeroy & Boch 提倡藝術在生活中的重要性。
      </p>
      <div class="grid grid-cols-12">
        <div class="md:col-span-3 col-span-12 flex gap-3">
          <p class="introduce__four">+ 楠弘集團</p>
          <img src="@/assets/icon/fb.svg" alt="Facebook" class="" />
          <img src="@/assets/icon/ig.svg" alt="Instagram" class="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.introduce {
  //   padding-top: 6.36622%;
  padding-bottom: 6.36622%;
  color: $text-color3;
  font-family: $font-Noto;
  margin-bottom: 21.9476%;

  @include max-media(768) {
    padding-top: 15.1%;
    // padding-bottom: 15.6%;
    padding-bottom: 0%;
    margin-bottom: 67.7%;
  }

  &__one {
    margin-bottom: 1.6%;
    letter-spacing: 0.36px;
    font-weight: 400;

    @include max-media(768) {
      margin-bottom: 4.899%;
    }
  }

  &__two {
    font-size: 1rem;
    margin-bottom: 3.099%;
    line-height: 20.94px;
    font-weight: 700;
    color: black;

    @include max-media(768) {
      margin-bottom: 11.25%;
      font-size: 0.75rem;
    }
  }

  &__three {
    font-size: 0.8125rem;
    letter-spacing: 0.51px;
    line-height: 24.96px;
    margin-bottom: 4.1045%;

    @include max-media(768) {
      margin-bottom: 14.61%;
      font-size: 0.75rem;
    }
  }

  &__four {
    font-size: 0.8125rem;
    padding-right: 5%;
    @include max-media(768) {
      font-size: 0.625rem;
    }
  }

  &__wrap {
    padding-left: 12.2298%;
    padding-right: 12.2298%;
  }
}
</style>
