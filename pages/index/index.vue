<script setup>
// window.location.href = "/issue";
import cover from "~/assets/images/indexbg.png";
import { Scrollbar, Autoplay, Pagination, Navigation } from "swiper/modules";
import Magazine from "../issue/components/Magazine.vue";
import "swiper/swiper-bundle.css";
import picone from "~/assets/images/indexmagzineone.png";
import pictwo from "~/assets/images/indexmagzinetwo.png";
import "swiper/css/pagination";
// import useSeo from "./seo";
const magazines = Array.from({ length: 1 }, (_, index) => ({
  id: index,
  name: `Magazine ${index + 1}`,
  imageUrl: "~/assets/images/Magazine.svg",
}));
// useSeo();
</script>

<template>
  <div>
    <NuxtLayout>
      <Popup />
      <!-- 封面 -->
      <div class="cover__container">
        <!-- <Banner :imgSrc="cover" class="cover" /> -->
        <!-- Autoplay -->
        <swiper
          :pagination="{ clickable: true }"
          :modules="[Pagination, Autoplay, Navigation]"
          :autoplay="{ delay: 2000, disableOnInteraction: false }"
          :navigation="true"
          :spaceBetween="100"
          class="cover"
        >
          <swiper-slide>
            <div class="relative">
              <img
                src="~/assets/images/indexbg.png"
                alt=""
                class="cover__photo"
              />

              <div class="text__cover">
                <p>Villa Butter, Gotland, Sweden</p>
                <p>瑞典哥特蘭島巴特別墅</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img
                src="~/assets/images/indexbg.png"
                alt=""
                class="cover__photo"
              />

              <div class="text__cover">
                <p>Villa Butter, Gotland, Sweden</p>
                <p>瑞典哥特蘭島巴特別墅</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative">
              <img
                src="~/assets/images/indexbg.png"
                alt=""
                class="cover__photo"
              />

              <div class="text__cover">
                <p>Villa Butter, Gotland, Sweden</p>
                <p>瑞典哥特蘭島巴特別墅</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <!-- 畫廊 -->
      <div class="inner-wrap">
        <div class="index__gallery">
          <div class="text md:order-1 order-2">
            <p class="text__en">Villa Butter, Gotland, Sweden</p>
            <p class="text__tc">瑞典哥特蘭島巴特別墅</p>
          </div>
          <div class="md:col-span-6 col-span-12 md:order-2 order-1">
            <img src="~/assets/images/index1.png" alt="" class="w-full photo" />
          </div>
        </div>
        <div class="index__gallery">
          <div class="md:col-span-6 col-span-12">
            <img
              src="~/assets/images/index2.jpeg"
              alt=""
              class="w-full photo"
            />
          </div>
          <div class="text">
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
            <img src="~/assets/images/index3.png" alt="" class="w-full photo" />
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
          <div class="md:col-span-6 col-span-12 md:order-1 order-2">
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
          <div
            class="md:col-span-6 col-span-12 justify-self-center md:order-2 order-1"
          >
            <p class="text__title text-center md:hidden">NEWS</p>
            <img src="~/assets/images/index5.jpg" alt="" class="photo__news" />
          </div>
        </div>
        <!-- Story -->
        <p class="text__title text-center">STORY</p>
        <div class="swiper__wrap">
          <swiper
            :modules="[Scrollbar, Autoplay]"
            :scrollbar="{ hide: false, draggable: true }"
            :autoplay="{ delay: 2000, disableOnInteraction: false }"
            :slidesPerView="1"
            :class="'swiperscrollbar'"
          >
            <SwiperSlide>
              <div class="grid grid-cols-12 gap-4">
                <div class="col-span-6 justify-self-start">
                  <img
                    src="~/assets/images/index6.png"
                    alt=""
                    class="photo__story"
                  />
                  <div class="text-center">
                    <p class="text__story--one">僕人建築空間整合</p>
                    <p class="text__story--two">Cooking and art</p>
                  </div>
                </div>
                <div class="col-span-6 col-end-13 justify-self-end">
                  <img
                    src="~/assets/images/index7.png"
                    alt=""
                    class="photo__story"
                  />
                  <div class="text-center">
                    <p class="text__story--one">王郁婷室內設計</p>
                    <p class="text__story--two">Cooking and art</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="grid grid-cols-12 gap-4">
                <div class="col-span-6 justify-self-start">
                  <img
                    src="~/assets/images/index6.png"
                    alt=""
                    class="photo__story"
                  />
                  <div class="text-center">
                    <p class="text__story--one">僕人建築空間整合</p>
                    <p class="text__story--two">Cooking and art</p>
                  </div>
                </div>
                <div class="col-span-6 col-end-13 justify-self-end">
                  <img
                    src="~/assets/images/index7.png"
                    alt=""
                    class="photo__story"
                  />
                  <div class="text-center">
                    <p class="text__story--one">王郁婷室內設計</p>
                    <p class="text__story--two">Cooking and art</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="grid grid-cols-12 gap-4">
                <div class="col-span-6 justify-self-start">
                  <img
                    src="~/assets/images/index6.png"
                    alt=""
                    class="photo__story"
                  />
                  <div class="text-center">
                    <p class="text__story--one">僕人建築空間整合</p>
                    <p class="text__story--two">Cooking and art</p>
                  </div>
                </div>
                <div class="col-span-6 col-end-13 justify-self-end">
                  <img
                    src="~/assets/images/index7.png"
                    alt=""
                    class="photo__story"
                  />
                  <div class="text-center">
                    <p class="text__story--one">王郁婷室內設計</p>
                    <p class="text__story--two">Cooking and art</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <!-- <div class="swiper-scrollbar"></div> -->
          </swiper>
        </div>
        <!-- Opinion -->
        <p class="text__title__opinion text-center">OPINION</p>
        <div class="swiper__wrap__opinion">
          <swiper
            :modules="[Scrollbar, Autoplay]"
            :scrollbar="{ hide: false, draggable: true }"
            :autoplay="{ delay: 2000, disableOnInteraction: false }"
            :slidesPerView="1"
            :class="'swiperscrollbar__opinion'"
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
        </div>
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
            src="../../assets/images/indexEXHIBITION.jpg"
            alt=""
            class="photo__exhibition"
          />
        </div>
        <!-- 廣告 -->
        <div class="grid-cols-12 gap-4 md:grid hidden advertise">
          <div
            class="col-span-4 flex justify-self-center"
            v-for="n in 6"
            :key="n"
          >
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
.inner-wrap {
  @include max-media(768) {
    padding-left: 0;
    padding-right: 0;
  }
}

.cover {
  width: 92.5926vw;
  height: 30.21vw;
  display: flex;
  justify-content: center;

  margin-left: -5%;
  margin-right: -5%;
  align-items: center;

  --swiper-pagination-bullet-inactive-color: #d9d9d9 !important;
  --swiper-pagination-bullet-inactive-color: #d9d9d9 !important;
  --swiper-pagination-bullet-inactive-opacity: 0.5;
  --swiper-navigation-color: #ffffff !important;

  &__container {
    // width: 100vw;
  }

  &__photo {
    width: 100%;
  }
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
  &__cover {
    color: #fff;
    position: absolute;
    top: 85%;
    left: 2%;
    font-size: 1.125rem;
    font-size: clamp(0.625rem, 1vw, 1.125rem);
    @include max-media(1024) {
      top: 80%;
      font-size: 0.625rem;
    }
    @include max-media(768) {
      top: 70%;
      font-size: 0.625rem;
    }
    @include max-media(500) {
      top: 55%;
      font-size: 0.625rem;
    }
  }

  &__en {
    color: $text-color3;
    line-height: 22.47px;
    font-size: 1.1875rem;
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

    &__opinion {
      @extend .text__title;
      margin-bottom: 9.0676%;
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
    margin-bottom: 2%;
    // margin-bottom: 0.6865rem;

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
    margin-top: 7.5%;
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
    // margin-top: 4.2903%;
    // margin-bottom: 13.0496%;

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
  aspect-ratio: 3/2;

  &__advertise {
    width: 100%;
    height: auto;
  }

  &__news {
    @extend .photo;
    width: 100%;
    max-width: 437px;
    object-fit: cover;
  }

  &__story {
    @extend .photo;
    width: 100%;
    max-width: 426px;
    aspect-ratio: 3/2;
    // height: 16.15vw;
    object-fit: cover;

    @include max-media(768) {
      min-width: 155px;
      min-height: 104px;
    }
  }

  &__opinion {
    // max-width: 307px;
    height: 24.65278vw;
    width: 17.43056vw;

    width: 11.62vw;
    height: 16.44vw;

    // width: 13.07vw;
    // height: 18.49vw;
    max-height: 355px;
    max-width: 251px;
    object-fit: cover;

    @include max-media(768) {
      min-width: 104px;
      min-height: 147px;
    }
  }

  &__exhibition {
    width: 100%;
    height: auto;
    object-fit: cover;
    // max-width: 860px;

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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &__num {
      margin-right: 8px;
      font-size: 1.3125rem;

      @include max-media(768) {
        font-size: 0.75rem;
      }
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
.swiperscrollbar {
  --swiper-scrollbar-sides-offset: 0%;
  --swiper-scrollbar-size: 6px;

  padding-bottom: 9.3055%;
  margin-bottom: 21.157%;
  &__opinion {
    @extend .swiperscrollbar;
    --swiper-scrollbar-sides-offset: 8%;
  }

  &__wrap {
    padding-left: 9%;
    padding-right: 9%;
  }

  @include max-media(768) {
    // padding-left: -10.4469%;
    // padding-right: -10.4469%;
    margin-left: -10.4469%;
    margin-right: -10.4469%;
  }
}

// .swiper-scrollbar {
//   width: 100% !important;
//   max-width: 600px;
//   margin: auto;
// }
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
    width: 85%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);

    @include max-media(1440) {
      width: 100%;
    }

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

  @include max-media(768) {
    margin-bottom: 49.2957%;
  }
}

.swiper__wrap {
  padding-left: 9%;
  padding-right: 9%;

  &__opinion {
    // padding-left: 11.387%;
    // padding-right: 11.387%;
    padding-left: 9%;
    padding-right: 9%;
  }
}
</style>
