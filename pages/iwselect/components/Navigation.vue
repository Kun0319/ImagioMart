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
  <swiper
    :navigation="true"
    :modules="[Navigation]"
    :slidesPerView="1"
    :spaceBetween="500"
    class="mySwiper"
  >
    <swiper-slide
      ><img
        src="https://www.figma.com/file/Cl1dT31sCYUc7LwFrjXl9R/image/515c149415d88ebd44350053cdb8065016089ddd"
        alt=""
        class="w-full"
    /></swiper-slide>
    <swiper-slide
      ><img
        src="https://www.figma.com/file/Cl1dT31sCYUc7LwFrjXl9R/image/515c149415d88ebd44350053cdb8065016089ddd"
        alt=""
        class="w-full"
    /></swiper-slide>
  </swiper>
  <div class="inner-wrap">
    <!-- 文案區塊 -->
    <div class="inner-wrap__text grid grid-cols-12 gap-4">
      <div class="col-span-12">
        <p class="text__one">Furnitures｜Chair</p>
        <p class="text__two">Black Molded Shell Chair</p>
      </div>
      <div
        class="md:col-span-9 col-span-12 text-justify text__three gap-1 flex flex-col"
      >
        <p>尺寸：</p>
        <p>材質：</p>
        <p>內容：</p>
        <p>產地：</p>
        <p>淨重：</p>
        <p>有效日期：</p>
        <div class="info">
          <p class="text__story">
            其他資訊 <img src="../../../assets/icon/unfold.svg" alt="" />
          </p>
          <p class="text__info">
            運送資訊 <img src="../../../assets/icon/unfold.svg" alt="" />
          </p>
        </div>
      </div>

      <div class="product-card">
        <!-- 顏色選擇器 -->
        <div class="color-selector col-span-6 gap-4 order-none row-end-1">
          <div class="col-span-6 flex selector">
            <div
              v-for="(color, index) in colors"
              :key="index"
              class="color-option"
              :style="{ backgroundColor: color }"
              :class="{ selected: index === selectedColorIndex }"
              @click="selectColor(index)"
            ></div>
          </div>
          <div class="col-span-6 flex selector">
            <div
              v-for="(color, index) in colors"
              :key="index"
              class="color-option"
              :style="{ backgroundColor: color }"
              :class="{ selected: index === selectedColorIndex }"
              @click="selectColor(index)"
            ></div>
          </div>
          <div class="col-span-6 flex selector">
            <div
              v-for="(color, index) in colors"
              :key="index"
              class="color-option"
              :style="{ backgroundColor: color }"
              :class="{ selected: index === selectedColorIndex }"
              @click="selectColor(index)"
            ></div>
          </div>
        </div>

        <!-- 數量選擇器 -->
        <div
          class="col-span-6 w-full flex justify-center md:order-1 order-3 row-end-3"
        >
          <div class="quantity-selector">
            <button class="decrease" @click="decreaseValue">-</button>
            <input
              type="text"
              id="quantity"
              :value="quantity"
              @input="validateInput"
            />
            <button class="increase" @click="increaseValue">+</button>
          </div>
        </div>
        <div
          class="md:col-span-6 col-span-12 justify-self-end md:order-2 order-1 self-end row-end-2"
        >
          <p class="text__price col-span-6">售價 NT$300</p>
        </div>
        <div
          class="shopcart col-span-6 col-end-13 md:order-3 order-2 row-end-3"
        >
          <button class="info__shopcart">加入購物車</button>
        </div>
        <!-- <div class="shopcart col-span-6 order-4">
          <button class="info__shopcart md:hidden block">加入購物車</button>
        </div> -->
      </div>

      <!-- 加入購物按鈕 -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mySwiper {
  --swiper-navigation-color: black;
  --swiper-navigation-sides-offset: 6%;
  --swiper-navigation-size: 22px;
  padding-left: 12.218%;
  padding-right: 12.218%;

  @include max-media(768) {
    --swiper-navigation-sides-offset: 1%;
    --swiper-navigation-size: 15px;
  }
}

// 間距
.inner-wrap {
  padding-left: 12.218%;
  padding-right: 12.218%;

  @include max-media(768) {
    padding-left: 10.4436%;
    padding-right: 10.4436%;
    --swiper-navigation-sides-offset: 40px;
  }

  &__text {
    border-bottom: 1px solid #000000;
    padding-bottom: 9.3261%;
    margin-top: 6.616%;
    // margin-bottom: 19.3856%;
    margin-bottom: 14.9218%;
    @include max-media(768) {
      border-bottom: 1px solid #00000070;
    }
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

    font-size: 1rem;
    text-align: justify;
    line-height: 192%;
    letter-spacing: 0.816px;
    border-right: 1px solid #000000;
    @include max-media(768) {
      border-right: none;
    }
  }

  &__price {
    @extend .text;
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
    font-weight: 400;
  }

  &__info {
    @extend .text;
    font-family: $font-Noto;
    font-size: 1.125rem;
    font-weight: 400;
  }
}

// 顏色選擇區塊
.color-selector {
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  // align-items: center;
  margin-bottom: -20%;

  @include max-media(768) {
    // justify-content: space-around;
    // align-content: center;
  }
}
.selector {
  display: flex;
  justify-content: space-around;
}
.color-option {
  cursor: pointer;
  width: 25px;
  height: 23px;
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
  margin-bottom: 39%;
  margin-top: 10%;
  @include max-media(768) {
    margin-bottom: 0%;
  }
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
  @apply md:flex grid grid-cols-12  flex-col md:justify-self-end  justify-between md:col-span-3 col-span-12;
}

.shopcart {
  @apply justify-self-end;
}
.info {
  margin-top: 15.9014%;
  &__shopcart {
    font-size: 0.8125rem;
    font-size: clamp(0.75rem, 1vw, 0.8125rem);
    padding: 0;
    width: 7.523vw;
    height: 2.604vw;
    min-width: 117px;
    min-height: 41px;
  }
}
</style>
