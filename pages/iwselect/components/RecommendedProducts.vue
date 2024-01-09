<script setup></script>
<template>
  <div class="RelatedProject">
    <div class="grid grid-cols-12 gap-4 justify-center">
      <div class="col-span-4 text__title">
        <!-- <p class="text__title">RELATED OPINION</p> -->
        <p class="">推薦選品</p>
      </div>
      <div class="col-span-4"></div>
      <div class="col-span-4"></div>
      <div class="md:col-span-4 col-span-6 text">
        <img src="~/assets/images/select1.jpeg" alt="" class="image" />
        <p class="text__one">Tabouret Haut</p>
        <p class="text__two">高腳圓凳</p>
        <p class="text__three">售價 NT$300</p>
        <!-- <button class="more md:hidden">MORE+</button> -->
      </div>
      <div class="md:col-span-4 col-span-6 text">
        <img src="~/assets/images/select2.jpeg" alt="" class="image" />
        <p class="text__one">Tabouret Haut</p>
        <p class="text__two">高腳圓凳</p>
        <p class="text__three">售價 NT$300</p>
        <!-- <button class="more md:hidden">MORE+</button> -->
      </div>
      <div class="md:col-span-4 col-span-6 text">
        <img src="~/assets/images/select3.png" alt="" class="image" />
        <p class="text__one">Tabouret Haut</p>
        <p class="text__two">高腳圓凳</p>
        <p class="text__three">售價 NT$300</p>
        <!-- <div class="swiper-navigation__container md:flex hidden">
          <div class="swiper-navigation">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div> -->
      </div>
      <!-- 12/13暫時樣式 -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.RelatedProject {
  margin-bottom: 27.9073%;
  @include max-media(768) {
    display: none;
  }
}
.image {
  //   width: 100%;
  //   height: 100%;
  max-width: 309px;
  max-height: 436px;
  width: 17.882vw;
  height: 25.231vw;
  object-fit: cover;
  display: block;

  @include max-media(768) {
    width: 157px;
    height: 100px;
  }
}
.text {
  // width: 100%;
  //   height: 550px;
  text-align: center;
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
    font-size: 1.3125rem;
    margin-bottom: 3.5%;
    margin-top: 16.894%;
  }
  &__two {
    margin-bottom: 2%;
    font-size: 1.3125rem;
    margin-bottom: 9.7465%;
  }
  &__three {
    font-size: 1.25rem;
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
