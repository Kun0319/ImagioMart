<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
</script>
// PhotoGallery
<template>
  <div class="">
    <p class="title">PHOTO GALLERY</p>
    <Swiper
      direction="'vertical'"
      :modules="[Scrollbar]"
      :scrollbar="{ hide: false }"
      :slidesPerView="1"
      :class="'swiper'"
    >
      <SwiperSlide>
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-3">
            <img src="~/assets/images/PhotoGallery1.png" alt="" class="photo" />
          </div>
          <div class="col-span-3">
            <img src="~/assets/images/PhotoGallery2.png" alt="" class="photo" />
          </div>
          <div class="col-span-3">
            <img src="~/assets/images/PhotoGallery3.png" alt="" class="photo" />
          </div>
          <div class="col-span-3">
            <img src="~/assets/images/PhotoGallery4.png" alt="" class="photo" />
          </div>
          <div class="col-span-3">
            <img src="~/assets/images/PhotoGallery5.png" alt="" class="photo" />
          </div>
          <div class="col-span-3">
            <img src="~/assets/images/PhotoGallery6.png" alt="" class="photo" />
          </div>
          <div class="col-span-3">
            <img src="~/assets/images/PhotoGallery7.png" alt="" class="photo" />
          </div>
          <div class="col-span-3">
            <img src="~/assets/images/PhotoGallery8.png" alt="" class="photo" />
          </div>
        </div>
        <!-- <div class="grid grid-cols-12 gap-4">
          <div class="col-span-3">
            <img src="~/assets/images/PhotoGallery1.png" alt="" class="photo" />
          </div>
          <div class="col-span-3">
            <img src="~/assets/images/PhotoGallery2.png" alt="" class="photo" />
          </div>
          <div class="col-span-3">
            <img src="~/assets/images/PhotoGallery3.png" alt="" class="photo" />
          </div>
          <div class="col-span-3">
            <img src="~/assets/images/PhotoGallery4.png" alt="" class="photo" />
          </div>
          <div class="col-span-3">
            <img src="~/assets/images/PhotoGallery5.png" alt="" class="photo" />
          </div>
          <div class="col-span-3">
            <img src="~/assets/images/PhotoGallery6.png" alt="" class="photo" />
          </div>
          <div class="col-span-3">
            <img src="~/assets/images/PhotoGallery7.png" alt="" class="photo" />
          </div>
          <div class="col-span-3">
            <img src="~/assets/images/PhotoGallery8.png" alt="" class="photo" />
          </div>
        </div> -->
      </SwiperSlide>
      <SwiperSlide> </SwiperSlide>
    </Swiper>
    <!-- load more 按鈕 -->
    <div class="load">
      <button class="load__btn md:hidden">LOAD MORE</button>
    </div>
    <div class="text__wrap">
      <div class="text text__cn">
        <p>主要建築師：阿瑟．卡薩斯</p>
        <p>共同設計：雅莉珊德拉．瑪爾 維多莉亞．查韋斯 薩布麗娜．阿隆</p>
        <p>結構工程：IACL Interiores</p>
        <p>空間性質：公寓空間面積：520平方公尺</p>
        <p>主要建材：陶瓷．石材地坪．淺橡木</p>
        <p>座落位置：巴西里約熱內盧</p>
        <p>影像：菲利波．班伯格</p>
        <p>採訪：劉湘怡</p>
        <p>文字：阿瑟．卡薩斯</p>
        <p>整理：何芳慈</p>
      </div>
      <div class="text text__en">
        <p>Principal Architect：Arthur Casas</p>
        <p>Collaborator：Alessandra Mattar．Victoria Chaves．Sabrina Aron</p>
        <p>Contractor：IACL Interiores</p>
        <p>Character of Space：Apartment</p>
        <p>Total Floor Area：520 m²</p>
        <p>Principal Materials：Ceramics．Stone Flooring．Light Oak</p>
        <p>Location：Rio de Janeiro, Brazil</p>
        <p>Photos：Filippo Bamberghi</p>
        <p>Interview：Rowena Liu</p>
        <p>Text：Arthur Casas</p>
        <p>Collator：Finn Ho</p>
      </div>
      <div class="introduce">
        <p class="introduce__one">Brand</p>
        <p class="introduce__two">EAU DE TOILETTE</p>
        <p class="introduce__three">
          The location of this private house is unique: even though the site is
          just a couple of kilometers away from Hämeenlinna city center, the
          small cape surrounded by a lake is completely in its own privacy.
          There are long pastoral views over the lake to fields and forests. As
          the area’s landscape is valuable, the city’s .
        </p>
        <div class="grid grid-cols-12">
          <div class="md:col-span-3 col-span-12 flex gap-3">
            <p class="introduce__four">Kenny molee</p>
            <img src="@/assets/icon/fb.svg" alt="Facebook" class="" />
            <img src="@/assets/icon/ig.svg" alt="Instagram" class="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 1.3125rem;
  color: $text-color3;
  letter-spacing: 1.56px;
  margin-top: 13.31%;
  margin-bottom: 7.287%;
}

.photo {
  width: 100%;
  height: 100%;
}

.swiper {
  height: 450px;
  margin-bottom: 13.6535%;
  @include max-media(768) {
    height: 150px;
  }
}

.swiper-slide {
  height: auto;
}

.text {
  font-size: 0.8125rem;
  color: $text-color3;

  &__wrap {
    padding-left: 12.2298%;
    padding-right: 12.2298%;
  }

  &__cn {
    line-height: 30.99px;
    margin-bottom: 8.5%;

    @include max-media(768) {
      margin-bottom: 17.57%;
    }
  }

  &__en {
    font-family: $font-Noto;
    line-height: 24.96px;
    margin-bottom: 13.653%;

    @include max-media(768) {
      margin-bottom: 52.6%;
    }
  }
}

.introduce {
  border-top: 1px solid rgba(0, 0, 0);
  border-bottom: 1px solid rgba(0, 0, 0);
  padding-top: 6.36622%;
  padding-bottom: 4.69%;
  color: $text-color3;
  font-family: $font-Noto;
  margin-bottom: 17.4134%;

  @include max-media(768) {
    padding-top: 15.1%;
    padding-bottom: 15.6%;
    margin-bottom: 67.7%;
  }

  &__one {
    margin-bottom: 1.6%;
    letter-spacing: 0.36px;

    @include max-media(768) {
      margin-bottom: 4.899%;
    }
  }

  &__two {
    font-size: 1rem;
    margin-bottom: 3.099%;
    line-height: 20.94px;
    font-family: $font-NotoSerif;

    @include max-media(768) {
      margin-bottom: 11.25%;
    }
  }

  &__three {
    font-size: 0.8125rem;
    letter-spacing: 0.51px;
    line-height: 24.96px;
    margin-bottom: 4.1045%;

    @include max-media(768) {
      margin-bottom: 14.61%;
    }
  }

  &__four {
    font-size: 0.8125rem;
    padding-right: 5%;
  }
}
// load more
.load {
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  align-self: flex-start;
  margin-top: 9.2%;
  @include max-media(768) {
    margin-bottom: 24.672%;
  }

  &__btn {
    width: 127px;
    height: 45px;
    border: 0.5px solid rgba(0, 0, 0, 0.5);
    background-color: white;
    font-family: $font-NotoSerif;
  }
}
</style>
