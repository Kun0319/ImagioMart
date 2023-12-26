<script setup>
// window.location.href = "/issue";
import cover from "~/assets/images/indexbg.png";
import { Scrollbar, Autoplay } from "swiper/modules";
import Magazine from "../issue/components/Magazine.vue";
import picone from "~/assets/images/indexmagzineone.png";
import pictwo from "~/assets/images/indexmagzinetwo.png";
const magazines = Array.from({ length: 1 }, (_, index) => ({
  id: index,
  name: `Magazine ${index + 1}`,
  imageUrl: "~/assets/images/Magazine.svg",
}));
</script>

<template>
  <div>
    <NuxtLayout>
      <ShoppingCart />
      <!-- 封面 -->
      <div>
        <Banner :imgSrc="cover" class="cover" />
      </div>
      <!-- 畫廊 -->
      <div class="inner-wrap">
        <div class="index__gallery">
          <div class="text md:order-1 order-2">
            <p class="text__en">Villa Butter, Gotland, Sweden</p>
            <p class="text__tc">瑞典哥特蘭島巴特別墅</p>
          </div>
          <div class="md:col-span-6 col-span-12 md:order-2 order-1">
            <img src="~/assets/images/index1.png" alt="" class="w-full" />
          </div>
        </div>
        <div class="index__gallery">
          <div class="md:col-span-6 col-span-12 md:order-2 order-1">
            <img src="~/assets/images/index2.jpeg" alt="" class="w-full" />
          </div>
          <div class="text md:order-1 order-2">
            <p class="text__en">Villa Butter, Gotland, Sweden</p>
            <p class="text__tc">瑞典哥特蘭島巴特別墅</p>
          </div>
        </div>
        <div class="index__gallery">
          <div class="text md:order-1 order-2">
            <p class="text__en">Villa Butter, Gotland, Sweden</p>
            <p class="text__tc">瑞典哥特蘭島巴特別墅</p>
          </div>
          <div class="md:col-span-6 col-span-12 md:order-2 order-1">
            <img src="~/assets/images/index3.png" alt="" class="w-full" />
          </div>
        </div>
        <!-- 廣告 -->
        <div class="flex justify-center advertise">
          <img
            src="~/assets/images/index4.png"
            alt=""
            class="photo__advertise"
          />
        </div>

        <!-- News -->
        <div class="news">
          <div class="md:col-span-6 col-span-12 order-2">
            <p class="text__title md:block hidden">NEWS</p>
            <div class="news__span">
              <span class="news__span__num">01</span>
              <span class="text__news"
                >「SHANG XIA上下之家」上海旗艦店《輕盈之藝》沉浸式藝術展</span
              >
            </div>
            <div class="news__span">
              <span class="news__span__num">02</span>
              <span class="text__news">
                IW傢飾雜誌 第 151 期 2023 / 07 & 08 月 新發行</span
              >
            </div>
            <div class="news__span">
              <span class="news__span__num">03</span>
              <span class="text__news">
                全台第一家奢石美學館成立 M Museo 八里盛大開幕</span
              >
            </div>
            <div class="flex md:justify-start justify-center">
              <button class="btn__more">MORE+</button>
            </div>
          </div>
          <div class="md:col-span-6 col-span-12 justify-self-center order-1">
            <p class="text__title text-center md:hidden">NEWS</p>
            <img src="~/assets/images/index5.png" alt="" class="photo__news" />
          </div>
        </div>
        <!-- Story -->
        <p class="text__title text-center">STORY</p>
        <swiper
          :modules="[Scrollbar, Autoplay]"
          :scrollbar="{ hide: false, draggable: true }"
          :autoplay="{ delay: 2000, disableOnInteraction: false }"
          :slidesPerView="1"
          :class="'swiper'"
        >
          <!-- Autoplay -->
          <SwiperSlide>
            <div class="grid grid-cols-12 gap-4">
              <div class="md:col-span-5 col-span-6">
                <img
                  src="~/assets/images/index6.png"
                  alt=""
                  class="photo__story"
                />
                <div class="text-center">
                  <p class="text__story--one">僕人建築空間整合</p>
                  <p class="text__story--two">Cooking and art</p>
                  <p class="text__story--three">烹飪．藝術</p>
                </div>
              </div>
              <div class="md:col-span-5 md:col-end-13 col-span-6">
                <img
                  src="~/assets/images/index7.png"
                  alt=""
                  class="photo__story"
                />
                <div class="text-center">
                  <p class="text__story--one">王郁婷室內設計</p>
                  <p class="text__story--two">Cooking and art</p>
                  <p class="text__story--three">使命與初衷</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="grid grid-cols-12 gap-4">
              <div class="md:col-span-5 col-span-6">
                <img
                  src="~/assets/images/index6.png"
                  alt=""
                  class="photo__story"
                />
                <div class="text-center">
                  <p class="text__story--one">僕人建築空間整合</p>
                  <p class="text__story--two">Cooking and art</p>
                  <p class="text__story--three">烹飪．藝術</p>
                </div>
              </div>
              <div class="md:col-span-5 md:col-end-13 col-span-6">
                <img
                  src="~/assets/images/index7.png"
                  alt=""
                  class="photo__story"
                />
                <div class="text-center">
                  <p class="text__story--one">王郁婷室內設計</p>
                  <p class="text__story--two">Cooking and art</p>
                  <p class="text__story--three">使命與初衷</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="grid grid-cols-12 gap-4">
              <div class="md:col-span-5 col-span-6">
                <img
                  src="~/assets/images/index6.png"
                  alt=""
                  class="photo__story"
                />
                <div class="text-center">
                  <p class="text__story--one">僕人建築空間整合</p>
                  <p class="text__story--two">Cooking and art</p>
                  <p class="text__story--three">烹飪．藝術</p>
                </div>
              </div>
              <div class="md:col-span-5 md:col-end-13 col-span-6">
                <img
                  src="~/assets/images/index7.png"
                  alt=""
                  class="photo__story"
                />
                <div class="text-center">
                  <p class="text__story--one">王郁婷室內設計</p>
                  <p class="text__story--two">Cooking and art</p>
                  <p class="text__story--three">使命與初衷</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </swiper>
        <!-- Opinion -->
        <p class="text__title text-center">OPINION</p>
        <swiper
          :modules="[Scrollbar]"
          :scrollbar="{ hide: false, draggable: true }"
          :autoplay="{ delay: 2000, disableOnInteraction: false }"
          :slidesPerView="1"
          :class="'swiper'"
        >
          <SwiperSlide>
            <div class="grid grid-cols-12 gap-4">
              <div class="md:col-span-5 col-span-12 justify-self-center">
                <img
                  src="@/assets/images/opinion4.webp"
                  alt=""
                  class="photo__opinion"
                />
              </div>
              <div class="md:col-span-6 col-span-12 flex-col self-center">
                <p class="text__nameEn">Patrick Norguet</p>
                <p class="text__nameCn">派屈克．諾蓋</p>
                <!-- icon -->
                <div class="line-container">
                  <div class="line__opinion"></div>
                  <!-- <div>
                    <i class="pi pi-heart mx-3"></i>
                    <i class="pi pi-share-alt"></i>
                  </div>  -->
                </div>
                <p class="text__opinionEn text-left">
                  “You cannot understand good design if you do not understand
                  people.”
                  <span class="text__opinionEnPeo md:hidden block"
                    >&nbsp; &nbsp;—Dieter Rams</span
                  >
                </p>

                <p class="text__opinionEnPeo md:block hidden">
                  &nbsp; &nbsp;—Dieter Rams
                </p>
                <p class="text__opinionCn">
                  「無法瞭解人，就無法瞭解何謂好的設計」
                  <span class="md:inline-block hidden">—派屈克．諾蓋</span>
                </p>

                <p class="md:hidden text-center">—派屈克．諾蓋</p>
                <!-- More -->
                <div class="flex md:justify-start justify-center">
                  <button class="btn__more">MORE+</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </swiper>
        <!-- magazine  -->
        <p class="text__title text-center">MAGAZINE</p>
        <div class="magazine grid grid-cols-12 gap-4">
          <div class="col-span-6 magazine__container">
            <Magazine
              :magazine="{ name: 'magazine1' }"
              :imageSrc="picone"
              issuePeriod="第152期 2023 09&10月"
              price="NT$300"
              imageWidth="531px"
              imageHeight="19.91vw"
            />
          </div>
          <div class="col-span-6 magazine__container">
            <Magazine
              :magazine="{ name: 'magazine2' }"
              :imageSrc="pictwo"
              issuePeriod="DETAIL’23"
              price="NT$300"
              imageWidth="531px"
              imageHeight="19.91vw"
            />
          </div>
        </div>
        <!-- EXHIBITION -->
        <p class="text__title text-center">EXHIBITION</p>
        <div class="exhibition w-full flex justify-center">
          <img
            src="../../assets/images/indexEXHIBITION.png"
            alt=""
            class="photo__exhibition"
          />
        </div>
        <!-- 廣告 -->
        <div class="grid-cols-12 gap-12 md:grid hidden advertise inner-wrap">
          <div class="col-span-4" v-for="n in 6" :key="n">
            <LittleAdvertise />
          </div>
        </div>
        <PaginationAdvertise class="pagination-advertise" />
      </div>
      <!--COMPETITIONS  -->
      <p class="text__title text-center">COMPETITIONS</p>
      <div class="competitions w-full flex justify-center">
        <img
          src="../../assets/images/COMPETITIONS.png"
          alt=""
          class="photo__competitions"
        />
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
.cover {
  padding-left: 5%;
  padding-right: 5%;
  width: 100vw;
  height: 30.21vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.index {
  &__gallery {
    @apply grid grid-cols-12 gap-4 items-center;
    margin-top: 9.4488%;

    @include max-media(768) {
      margin-top: 48.875%;
    }
  }
}

// 文字部分樣式
.text {
  @apply md:col-span-6 col-span-12 justify-self-center;
  font-size: 1.3125rem;
  text-align: center;

  @include max-media(768) {
    font-size: 1rem;
  }

  &__en {
    color: $text-color3;
    line-height: 22.47px;
    letter-spacing: 1.071px;
  }

  &__tc {
    margin-top: 6.1236%;
  }

  &__title {
    font-size: 1.3125rem;
    line-height: 31.5px;
    letter-spacing: 1.071px;
    color: $text-color3;
    margin-bottom: 6.4354%;

    @include max-media(768) {
      font-size: 1rem;
    }
  }

  // news文字樣式
  &__news {
    font-size: 1rem;

    @include max-media(768) {
      font-size: 0.75rem;
    }
  }

  // story文字樣式
  &__story {
    &--one {
      font-size: 0.875rem;
      line-height: 14.98px;
      letter-spacing: 0.714px;
      font-weight: 300;
      font-family: $font-Noto;
      color: $text-color3;
      margin-top: 13.1013%;
      margin-bottom: 1rem;
    }

    &--two {
      color: $text-color3;
      font-size: 1rem;
      line-height: 18.08px;
      letter-spacing: 0.816px;
      margin-bottom: 1rem;
    }

    &--three {
      font-size: 1rem;
      line-height: 17.76px;
    }
  }

  // opinion文字樣式
  &__nameEn {
    font-size: 1rem;
    // margin-bottom: 2%;
    margin-bottom: 0.6865rem;

    @include max-media(768) {
      font-size: 0.75rem;
      text-align: center;
    }
  }

  &__nameCn {
    font-size: 1rem;
    margin-bottom: 3.754%;

    @include max-media(768) {
      font-size: 0.75rem;
      text-align: center;
    }
  }

  &__opinionEn {
    margin-top: 8.7593%;
    font-style: italic;
    @include max-media(768) {
      text-align: center;
    }
  }

  &__opinionEnPeo {
    margin-top: 0.25rem;

    font-style: italic;
    @include max-media(768) {
      text-align: center;
    }
  }

  &__opinionCn {
    font-size: 0.875rem;
    margin-top: 4.2903%;
    margin-bottom: 13.0496%;

    @include max-media(768) {
      text-align: center;
    }
  }
}

// 廣告圖片樣式
.advertise {
  margin-top: 26.9389%;
  margin-bottom: 24.0338%;
}

//圖片樣式
.photo {
  &__advertise {
    width: 100%;
    height: auto;
  }

  &__news {
    width: 100%;
    max-width: 437px;
    object-fit: cover;
  }

  &__story {
    width: 100%;
    height: 16.15vw;
    object-fit: cover;

    @include max-media(768) {
      min-width: 155px;
      min-height: 104px;
    }
  }

  &__opinion {
    // max-width: 307px;
    height: 17.77vw;
    /* 四舍五入到小数点后两位 */
    width: 12.62vw;
    object-fit: cover;

    @include max-media(768) {
      min-width: 104px;
      min-height: 147px;
    }
  }

  &__exhibition {
    width: 49.77vw;
    height: 19.1vw;
    object-fit: cover;
    max-width: 860px;
    @include max-media(768) {
      min-width: 320px;
      min-height: 125px;
    }
  }

  &__competitions {
    width: 49.77vw;
    height: 19.1vw;
    object-fit: cover;
    max-width: 860px;
    @include max-media(768) {
      min-width: 320px;
      min-height: 125px;
    }
  }
}

.news {
  @extend .index__gallery;
  margin-top: 0;
  margin-bottom: 20.4243%;

  &__span {
    font-size: 1rem;
    padding-bottom: 14px;
    margin-bottom: 2.5026%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);

    &__num {
      margin-right: 8px;
    }
  }
}

// more 按鈕樣式
.btn {
  &__more {
    background-color: white;
    border: 1px solid black;
    border-radius: 40px;
    padding-top: 0.35rem;
    padding-bottom: 0.35rem;
    width: 5rem;
    font-family: $font-Noto;
    font-size: 0.65rem;
    margin-top: 5.8991%;
  }
}

// Story
.swiper {
  --swiper-scrollbar-sides-offset: 0%;
  --swiper-scrollbar-size: 6px;
  padding-bottom: 9.3055%;
  margin-bottom: 21.157%;

  @include max-media(768) {
    // padding-left: -10.4469%;
    // padding-right: -10.4469%;
    margin-left: -10.4469%;
    margin-right: -10.4469%;
  }
}

// opinion線
.line {
  &-container {
    position: relative;
    display: flex;
    justify-content: flex-end;

    @include max-media(768) {
      justify-content: center;
    }
  }

  &__opinion {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 0px;
    width: 90%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);

    @include max-media(1200) {
      width: 80%;
    }

    @include max-media(768) {
      // display: none;
      width: 100%;
    }
  }
}

// magazine
.magazine {
  margin-bottom: 21.5688%;
  @include max-media(768) {
    margin-bottom: 62.4515%;
  }
  &__container {
    margin-top: -20.67%;
    // height: 1vw;
  }
}

// exhibition
.exhibition {
  margin-bottom: 21.8329%;

  @include max-media(768) {
    margin-bottom: 5.8184%;
  }
}

// advertise廣告
.advertise {
  // margin-top: 20%;
  margin-bottom: 22.4491%;
}

.pagination-advertise {
  display: none;

  @include max-media(768) {
    display: block;
    margin-bottom: 59.706%;
    margin-top: 56.6442%;
  }
}

// COMPETITIONS
.competitions {
  margin-bottom: 13.0928%;
}
</style>
