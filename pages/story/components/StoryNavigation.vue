<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
// 顏色選擇器
const colors = ["#d53331", "#41b4bb", "#84b3d5", "#2f6db6"]; // 顏色
const selectedColorIndex = ref(null); // 用于跟踪選中的颜色索引

// 顏色選擇器
function selectColor(index) {
  selectedColorIndex.value = index;
}
// 數量選擇器
const quantity = ref(1);
function decreaseValue() {
  if (quantity.value > 0) {
    quantity.value--;
  }
}

function increaseValue() {
  quantity.value++;
}

function validateInput(event) {
  quantity.value = parseInt(event.target.value.replace(/[^0-9]/g, ""), 10) || 0;
}
</script>

<template>
  <div class="">
    <swiper :navigation="true" :modules="[Navigation]" class="mySwiper">
      <swiper-slide
        ><img
          src="https://www.figma.com/file/Cl1dT31sCYUc7LwFrjXl9R/image/515c149415d88ebd44350053cdb8065016089ddd"
          alt=""
          class="w-full inner-wrap"
      /></swiper-slide>
      <swiper-slide
        ><img
          src="https://www.figma.com/file/Cl1dT31sCYUc7LwFrjXl9R/image/515c149415d88ebd44350053cdb8065016089ddd"
          alt=""
          class="w-full inner-wrap"
      /></swiper-slide>
    </swiper>
    <!-- 文案區塊 -->
    <div class="inner-wrap__text grid grid-cols-12 gap-4">
      <div class="col-span-12">
        <p class="text__one">Furnitures｜Chair</p>
        <p class="text__two">Black Molded Shell Chair</p>
      </div>
      <div class="md:col-span-9 col-span-12 text-justify">
        <p class="text__three">
          創立 30
          餘年的晶點流行燈飾，為進口水晶燈的代名詞。作為業界代理國際頂級品牌燈飾的領航者，晶點秉持品質與美學，持續為台灣照明空間挹注新活水。燈飾品質始終是晶點選擇代理品牌的關鍵主因，源於對細節的苛求，目前旗下主要代理品牌有捷克
          Preciosa、 荷蘭 Brand van Egmond、美國 Schonbek、義大利
          Italamp、義大利 Terzani 等水晶燈專業製造商及歐洲高端燈飾品牌。
        </p>
      </div>

      <div class="product-card">
        <p class="text__price col-span-6 order-1 justify-self-end">NT$300</p>
        <!-- 顏色選擇器 -->
        <div class="color-selector col-span-6 order-none">
          <div
            v-for="(color, index) in colors"
            :key="index"
            class="color-option"
            :style="{ backgroundColor: color }"
            :class="{ selected: index === selectedColorIndex }"
            @click="selectColor(index)"
          ></div>
        </div>

        <!-- 數量選擇器 -->
        <div class="quantity-selector col-span-6 order-3">
          <button class="decrease" @click="decreaseValue">-</button>
          <input
            id="quantity"
            type="text"
            :value="quantity"
            @input="validateInput"
          />
          <button class="increase" @click="increaseValue">+</button>
        </div>
        <div class="shopcart col-span-6 order-4">
          <button class="info__shopcart md:hidden block">ADD TO CART</button>
        </div>
      </div>
      <div class="md:col-span-6 col-span-12">
        <p class="text__story">STORY</p>
        <p class="text__info">INFO + SHIPPING</p>
      </div>
      <!-- 加入購物按鈕 -->
      <div class="shopcart col-span-6 col-end-13">
        <button class="info__shopcart md:block hidden">ADD TO CART</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mySwiper {
  --swiper-navigation-color: black;
  --swiper-navigation-sides-offset: 15%;
  --swiper-navigation-size: 22px;

  @include max-media(768) {
    --swiper-navigation-sides-offset: 1%;
    --swiper-navigation-size: 15px;
  }
}

// 間距
.inner-wrap {
  padding-left: 20.1235504294%;
  padding-right: 20.1235504294%;

  @include max-media(768) {
    padding-left: 10.4436%;
    padding-right: 10.4436%;
    // --swiper-navigation-sides-offset: 40px;
  }

  &__text {
    @extend .inner-wrap;
    margin-top: 6.616%;
    margin-bottom: 19.3856%;
  }
}

.text {
  color: $text-color3;

  &__one {
    color: $text-color2;
    font-size: 0.875rem;
    font-family: $font-Noto;
    margin-bottom: 1rem;
  }

  &__two {
    font-family: "Times New Roman", Times, serif;
    font-size: 1.3125rem;
    margin-bottom: 5.5957%;
  }

  &__three {
    @extend .text;
    font-family: $font-Noto;
    margin-bottom: 5%;
    font-size: 1rem;
    text-align: justify;
    letter-spacing: 0.051rem;
    line-height: 30.72px;
    letter-spacing: 0.816px;
  }

  &__price {
    @extend .text;
    font-family: $font-Kanit;
    font-size: 1.3125rem;
    margin-bottom: 15%;

    @include max-media(768) {
      font-size: 1.0625rem;
    }
  }

  &__story {
    @extend .text;
    font-family: $font-Noto;
    font-size: 1.125rem;
    margin-bottom: 5%;
  }

  &__info {
    @extend .text;
    font-family: $font-Noto;
    font-size: 1.125rem;
  }
}

// 顏色選擇區塊
.color-selector {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 39%;

  @include max-media(768) {
    justify-content: space-around;
  }
}

.color-option {
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: 1px solid #cccccc;
}

.color-option.selected {
  border: 1px solid #000000;
}

// 數量選擇器
.quantity-selector {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #cccccc;
  padding: 5px;
  width: 100px;
}

.quantity-selector button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.quantity-selector input[type="text"] {
  text-align: center;
  border: none;
  width: 30px;
}

.product-card {
  @apply md:flex grid grid-cols-12 gap-4 flex-col md:justify-self-end md:col-span-3 col-span-12;
}

.shopcart {
  @apply justify-self-end;
}
</style>
