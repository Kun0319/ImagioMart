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
        <img
          src="https://s3-alpha-sig.figma.com/img/52cc/17b4/7c42a94884c97b6cd85a6a8a10d18a94?Expires=1705276800&Signature=FyP5HUN6UCQzThJWDmKjZZEqytnE55eaAkRJXi6RwYtKPMlyeSjYeWXGGNjdjJBXrg-NjZjQasa53qGfzOV~3810PFVRg-F2ImhGzHdbBXeVUp9Mf5HJK5WStw1yFq8PvYVrOBd65eFv0NrJb~br3Bnkl2HYBcV5Enx2m5P9CguhBFYqeebR4fAuOeZQzlnjKIZ8oL4T~z~9foxhLTPas1T8mfJcAGbz~O-19xfxpXzrl20q7Snyponl8Q8jEW4aBstMi48lhgkzUC83l2zkZtbZGkfEeVs-ovA42pN~-IVsK6xpqnZzZ15mBvk8rFNx86GykZbUSwVVNYNowB-0Ig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
          class="image"
        />
        <p class="text__one">industrial designer | 工業設計師</p>
        <p class="text__two">Oskar Zieta</p>
        <p class="text__three">奧斯卡．齊塔</p>
        <!-- <button class="more md:hidden">MORE+</button> -->
      </div>
      <div class="md:col-span-4 col-span-6 text">
        <img
          src="https://s3-alpha-sig.figma.com/img/7925/cbfe/6546d4a97adb89c599ab10e0dc442252?Expires=1705276800&Signature=jICKFzQYkfMZTS2hmfffqKSS7ZwFqEW57yMoxSbg03az0qyhC0PXWkmxXG2xcM6hxiYmgf2KsNwko0aL2o~PYwjsSIJ74qn~5SI4QfktiaiLGfnnihqSdL5XknYvwF2HBM0tIQnkDbj1NzuSYiR~uvfCtyYcoN9yqDbX2nHcwqhzrYsGKu531MJuYywZGKW6diVWLfCVXztKK0InNPbkAXgKsQgmXWd00RbZPcvrEjn8kIbXMWnUFZBd94A9H4b4J~BnCvmCFnhmcPCp0HkgvWBDc1KI1nTqZn0MVqS0vmEW7r6ikXa7swrLg3rF4gt2GBQWgsFS5dXJ9r1FVSLN7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
          class="image"
        />
        <p class="text__one">industrial designer | 工業設計師</p>
        <p class="text__two">Sebastian Herkner</p>
        <p class="text__three">賽巴斯汀．赫克納</p>
        <!-- <button class="more md:hidden">MORE+</button> -->
      </div>
      <div class="md:col-span-4 col-span-6 text">
        <img
          src="https://s3-alpha-sig.figma.com/img/68d0/2994/e74193bec00974ae150c6082132429b6?Expires=1705276800&Signature=ZaQC4ei6iJegYgZHpCaL53sSeKGsZF8LdCtoCcBHm4kU6AZ5pJASBuSE3ehjqjn6gTarMPsixW6Gh~4-RMRjMs6xoDfUoYnyxM-8slxL5AQmWrpEZ57DxShAkWN75HNoX7zLeBTAL1G3JeOE39O41-F4RvkZfM4UUtA-DwgLJLlnKYA3PPwHSWupPHhwgGfYJXUU9Hb9enk-zp4uS~nHYiZa1P3QnqdHDaA4G66y~GFXGGU3fuRMFjusa2JoEplox5~zpXaZMusb6Q711AaF4mOAUh-s8C12~DTy4LL4S-td08GXi-Sa4GGxkiCJANsvu8uWwS8DzXy70urqIIcgog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
          class="image"
        />
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
