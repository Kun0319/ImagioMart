<script setup></script>
<template>
  <div class="RelatedProject">
    <div class="grid grid-cols-12 gap-4 justify-center">
      <div class="col-span-4 text__title">
        <!-- <p class="text__title">RELATED OPINION</p> -->
        <p class="">延伸閱讀</p>
      </div>
      <div class="col-span-4"></div>
      <div class="col-span-4"></div>
      <div class="md:col-span-4 col-span-6 text">
        <img src="~/assets/images/opinion2.webp" alt="" class="image" />
        <p class="text__one">industrial designer | 工業設計師</p>
        <p class="text__two">Oskar Zieta</p>
        <p class="text__three">奧斯卡．齊塔</p>
        <!-- <button class="more md:hidden">MORE+</button> -->
      </div>
      <div class="md:col-span-4 col-span-6 text">
        <img src="@/assets/images/opinion5.jpeg" alt="" class="image" />
        <p class="text__one">industrial designer | 工業設計師</p>
        <p class="text__two">Sebastian Herkner</p>
        <p class="text__three">賽巴斯汀．赫克納</p>
        <!-- <button class="more md:hidden">MORE+</button> -->
      </div>
      <div class="md:col-span-4 col-span-6 text">
        <img src="~/assets/images/opinion4.webp" alt="" class="image" />
        <p class="text__one">Architect | 建築師</p>
        <p class="text__two">Florian Meuser</p>
        <p class="text__three">弗洛里安．默瑟</p>
        <div class="swiper-navigation__container md:flex hidden">
          <div class="swiper-navigation">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
      <!-- 12/13暫時樣式 -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.RelatedProject {
  margin-bottom: 13.57%;
}
.image {
  width: 100%;
  height: 100%;
  max-width: 309px;
  max-height: 436px;
  object-fit: cover;
  display: block;

  @include max-media(768) {
    width: 157px;
    height: 100px;
  }
}
.text {
  // width: 100%;
  height: 550px;

  justify-self: center;
  color: $text-color3;
  font-size: 1rem;
  &__title {
    width: 100%;
    max-width: 309px;
    font-size: 1rem;
    line-height: 30.18px;
    margin-bottom: 20.9694%;
    margin-top: 13.0718%;
    justify-self: center;

    @include max-media(768) {
      margin-bottom: 12.2473%;
    }
  }
  &__one {
    font-size: 0.625rem;
    margin-bottom: 3.5%;
    margin-top: 6.5359%;
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
  height: auto;
  width: 100%;
  position: relative;

  // margin-top: 48%;
  --swiper-navigation-sides-offset: 0px;
  &__container {
    width: 50%;
    height: 10%;
    align-items: flex-end;
    justify-self: flex-end;
    margin-left: auto;
    @include max-media(768) {
      width: 157px;
      height: 100px;
    }
  }
}
.swiper-button-prev::after,
.swiper-button-next::after {
  content: "";
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
