<script setup></script>
<template>
  <div class="RelatedProject">
    <div>
      <p class="text__title">RELATED OPINION</p>
    </div>
    <div class="grid grid-cols-12 gap-4 justify-center">
      <div class="md:col-span-4 col-span-6 text">
        <img
          src="https://s3-alpha-sig.figma.com/img/d784/1682/c9760b6dffcbca25943d09ff67224e19?Expires=1704067200&Signature=V2ClWzzXhqwuBaWr6yqF~uwN-4HaZIso4OBVvnfNmLdlNUb3k1Wud504TkCdVvGuf5kPkb7gU-aPGST6J9sn7U7V3IZnd2BIOUIwkQ9e4iE6EiKXq50-cCkcBMDpUbMMkM3czG1Z7kWy8nCq3KjbfYjJ4EnrgbmlxJlp~DB6PdIPf-WXpsCWGWCKdHw1uGNlhHR1Ty48V~RD4Dt~aDpogHShJK7wrHqWnF29YhhjjGzdrxGrDEDDsD8SM9df~0ztWHdp2LmdSZOA~W~fG0C19qaTXGnhB2DWjJpXm0r4Q~gX3hWqRNWRQVan0KLUZGHuo34CPP0k3zK7KglszHE-1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
          src="https://s3-alpha-sig.figma.com/img/9777/1ae9/8ca225f7ab6d641e78fa949a97f25e84?Expires=1704067200&Signature=TknZlLiHWCwC0I5jw7i98YVwFS9-0rNthU-UHSbN8wwYfsTlJvTVbwOiKCkuijlMhQpNkl8kN91INVSGuC5Jb6z5TwcJ2Mc1qo1sxR~oxbqGdPKhOOFVBN8Q-nM~uqS0f-uycXAc~Vy26ZRmEpgIMJfLEX~DXnK0j~cOToIVOoajg6q0WlIZOQMwdSRrN6YM7fYdTXJKBhaROEkO3SoBDayRn7K5hCzLThQPJbVRvpSFwFy~aK4PBeuwNHYtnzumfve04psophhxOEnMArnuM9H~aTUctleIUIJU1tkYJDGsQNbta7nsQ44xVdV3uB7sjawFMTfbNGGbqHbgz-LXlQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
          class="image"
        />
        <p class="text__one">industrial designer | 工業設計師</p>
        <p class="text__two">Sebastian Herkner</p>
        <p class="text__three">賽巴斯汀．赫克納</p>
        <!-- <button class="more md:hidden">MORE+</button> -->
      </div>
      <div class="md:col-span-4 md:block hidden text">
        <img
          src="https://s3-alpha-sig.figma.com/img/68d0/2994/e74193bec00974ae150c6082132429b6?Expires=1704067200&Signature=pzwMyntqHuLWcuk2j9-6mMrURNVM~JByoM2py2Cy2pQeSNEBre-uquv67Me~ZrtUNksVpTWX3niag0KeFp6nq3fWjpFohtFj4ycP~H1fYodF0D0A-CRYK0FKDSM7Rg1AbA267UP0nwLPTvmkvL7QYP1sx5Zw12MN~pqGVCYC2nEx8t7X9VdX8qGZa7twtaXzgykv4PsQW4FKr61hJ84hnr67KI-UEnzqoJ2n2Vo8V7uedKkPdljUM0fK5XGxqPxDE6zhgE8PRW8LWp9KXXTUAZw1UfiKvuU9MvUW1CUwAbU3Iz2yW3-nflu-z7g2FECPr7mu7be60cpRRLeZabL9RA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
          class="image"
        />
        <p class="text__one">Architect | 建築師</p>
        <p class="text__two">Florian Meuser</p>
        <p class="text__three">弗洛里安．默瑟</p>
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
  margin-bottom: 13.57%;
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
  width: 60%;
  justify-self: flex-end;
  position: relative;
  margin-top: 48%;
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
