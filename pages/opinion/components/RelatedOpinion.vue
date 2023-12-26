<script setup></script>
<template>
  <div class="RelatedProject">
    <div class="grid grid-cols-12 gap-4 justify-center">
      <div class="col-span-4 text__title">
        <!-- <p class="text__title">RELATED OPINION</p> -->
        <p class="">相關人物</p>
      </div>
      <div class="col-span-4"></div>
      <div class="col-span-4"></div>
      <div class="md:col-span-4 col-span-6 text">
        <img
          src="https://s3-alpha-sig.figma.com/img/52cc/17b4/7c42a94884c97b6cd85a6a8a10d18a94?Expires=1704067200&Signature=JrwRlZKAOSX4iAtHtxy4PrhBevuFuT-0j2V-lIHvVghtkUDHKYVpOODw-VkC-BW0pOblaai4R5-ZJTiinQ2xYqNR3sEJzhK3avH~d-Jg-C-6xcnpv213MOvXKYlL~CtoUQoCCHI~p2WZhgL0cAM6ANOXk8hHhag4I8eKy8NvYsttutabLsSEx8JBMpA-Cyudm3Rc9euHUWZZJzcSMAJWcBpXWhNfaTkgqD5EHpGv36qqGd95WYFYdkvrm4zxo8ml5DZi~O90tqk5gUNx-LnEpUWTJ1sCQ18~Wz4fXw1o7E0dlzmGhyZ4QaNQ0HYWk1VtztHkl7IHL4md0KEgIp53Lg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
          src="https://s3-alpha-sig.figma.com/img/7925/cbfe/6546d4a97adb89c599ab10e0dc442252?Expires=1704067200&Signature=TWUe6tFON-fsZZ4oGE3XQrzqlpHxUDF1STo45a0N0TjsVFfRSfOU8HPagHGfTq1IBCmWfouol47UzsmNaCVeAzgChxMh4gWavVy9lG6-TU6rPKhuGT8y5vE8n2kmf0u4VDIEYMyr4eAMzizMtE3z1Ys1tzoszLhJEQRwd~4t4kVMtycWjg7CSFLpjk6gocytzgdFJyXZJvCXgGYQX6sGiDvOHznb1ePx0IWuEhwPPI2gVlvc6xwh1Pqmvhh~6p8W3eIezGsYcFmoEOSPZLls4ONWbdDE9aXQHCSxG~gt-9OGJon6blBJTG4ItRTaDrMZUaoy1~y8~OuPsNOOn0r8Qw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
          src="https://s3-alpha-sig.figma.com/img/68d0/2994/e74193bec00974ae150c6082132429b6?Expires=1704067200&Signature=pzwMyntqHuLWcuk2j9-6mMrURNVM~JByoM2py2Cy2pQeSNEBre-uquv67Me~ZrtUNksVpTWX3niag0KeFp6nq3fWjpFohtFj4ycP~H1fYodF0D0A-CRYK0FKDSM7Rg1AbA267UP0nwLPTvmkvL7QYP1sx5Zw12MN~pqGVCYC2nEx8t7X9VdX8qGZa7twtaXzgykv4PsQW4FKr61hJ84hnr67KI-UEnzqoJ2n2Vo8V7uedKkPdljUM0fK5XGxqPxDE6zhgE8PRW8LWp9KXXTUAZw1UfiKvuU9MvUW1CUwAbU3Iz2yW3-nflu-z7g2FECPr7mu7be60cpRRLeZabL9RA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
