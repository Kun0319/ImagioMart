<script setup>
import { useGlobalStore } from "@/stores/global.js";
const globalStore = useGlobalStore();
const router = useRouter();
const goToCheckout = () => {
  router.push("/checkout");
};
</script>
<template>
  <div
    class="shopcart"
    :style="{
      right: globalStore.showShoppingCart ? '0' : '-200%',
      marginTop: globalStore.showSearch ? '110px' : '55px',
    }"
  >
    <div class="flex justify-between shopcart__my">
      <p class="">我的購物車</p>
      <img
        src="../assets/icon/close.svg"
        alt=""
        class="close"
        @click="globalStore.toggleShoppingCart"
      />
    </div>
    <div class="shopcart__items">
      <p class="col-span-12 shopcart__category">期刊</p>
      <div class="col-span-5">
        <img
          src="https://s3-alpha-sig.figma.com/img/a455/a214/b6ecf3505b538faadba1023e1aa5ca30?Expires=1704067200&Signature=K6TczBBD7I8G9r8XMKLpFc7bOvlilygrpT45OpV42alnPk60aNuol0LfToz8f6TUFpkL5S7ikhm2qoFNPNuHsGsFb02gUbzHpPdu~QuRR4wY-MXcN4zA9El39JWt6X~PrShAYZknPZWMFJREgSAMJGZ~O28DiFMFProsa0chN~T7LDUlf0~BBBhNXT0h2DaaJG5b3yuOQ8WZXZ1qr5ttz6-AC5skZEmY5rfWLf6MRxZd9WQXwbqVxzgIBVjGCh-GsjBAy0nssxCoWyUAA0rQBDtHkU7-VGlfl2Z4FwQXgegF1Fd59n-ZYavKJujIFFeE~6GGBtKHM1DDl6rNigMDhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
          class="photo"
        />
      </div>
      <div class="col-span-7 flex flex-col justify-around">
        <div class="flex justify-between shopcart__name">
          <p>第151期2023 / 07&08月</p>
          <img src="../assets/icon/shoppingcartclose.svg" alt="" />
        </div>
        <div class="flex justify-between shopcart__price">
          <p>TWD$300</p>
          <div class="quantity-selector">
            <!-- 數量選擇器 -->
            <!-- <button class="decrease" onclick="decreaseValue()">-</button> -->
            <input type="number" id="quantity" value="1" />
            <!-- <button class="increase" onclick="increaseValue()">+</button> -->
          </div>
        </div>
      </div>
      <div class="col-span-12 flex flex-row justify-between shopcart__price">
        <p>總計</p>
        <p class="">TWD$300</p>
      </div>
    </div>
    <div class="shopcart__items last-item">
      <p class="col-span-12 shopcart__category__nomargintop">選物</p>
      <div class="col-span-5">
        <img
          src="https://s3-alpha-sig.figma.com/img/87f0/103d/f9422d1ac4c0abb0148e40cbafcb7436?Expires=1704067200&Signature=jj~Jw8LWXupezgiam~686RtkNMOgmiC4HIEkj9xetEv6AIiPE0CTP0-GNIDyJpCZLPvbiNepklKXvLlnKtuebjF6S5ftZ4-EZghAaihciLEQBhdGoifLauqYY8kiVA-sjqMOAPF3qEO7E1ggcPVNBnRtDPGC-VekNWHP1l66CehRolSltVW9WvcnJOaK45TQjw8CR77LOsm0DWzJu7PzWbjp7SAxHUPbQ9QOUjS8tSQ04W1mRXe5I56D--1nRN~03xZGHD6CBTmaQLS3gw-STwuNOI16UEfhGyqVIJsmN1BeHPYcwpeIKrTRS71-UVeRowtd3hWn-AHUTO1cYUyvKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
          class="photo"
        />
      </div>
      <div class="col-span-7 flex flex-col justify-around">
        <div class="flex justify-between shopcart__name">
          <p>Tabouret Haut 高腳圓凳</p>
          <img src="../assets/icon/shoppingcartclose.svg" alt="" />
        </div>
        <p>黑色</p>
        <div class="flex justify-between shopcart__price">
          <p>TWD$300</p>
          <div class="quantity-selector">
            <!-- 數量選擇器 -->
            <!-- <button class="decrease" onclick="decreaseValue()">-</button> -->
            <input type="number" id="quantity" value="1" />
            <!-- <button class="increase" onclick="increaseValue()">+</button> -->
          </div>
        </div>
      </div>
      <div class="col-span-12 flex flex-row justify-between shopcart__price">
        <p>總計</p>
        <p class="">TWD$300</p>
      </div>
    </div>
    <div class="flex justify-around button__container">
      <button class="button" @click="globalStore.toggleShoppingCart">
        繼續購物
      </button>

      <button
        class="button"
        @click="globalStore.toggleShoppingCart(), goToCheckout()"
      >
        結帳
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.shopcart {
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 25vw;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 2%;
  padding-bottom: 2%;
  margin-top: 55px;
  position: fixed;
  top: 0;
  z-index: 50;
  transition: right 0.5s ease-in-out;
  max-width: 480px;
  max-height: 100vh;
  // min-height: 709px;
  min-width: 372px;

  @include max-media(768) {
    max-height: 100vh;
  }

  &__my {
    font-size: 1.3125rem;
    font-weight: 700;
    line-height: 23.31px;
    margin-bottom: 4.3966%;
  }

  &__items {
    @apply grid grid-cols-12 gap-4;
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    margin-bottom: 9.7347%;

    &.last-item {
      border-top: none;
    }
  }

  &__category {
    font-size: 0.875rem;
    line-height: 15.54px;
    font-weight: 400;
    margin-top: 4.8673%;

    @include max-media(768) {
      font-size: 0.75rem;
    }

    // 第二類型的category消除margin-top
    &__nomargintop {
      @extend .shopcart__category;
      margin-top: 0;
    }
  }

  &__name {
    font-size: 1rem;
    line-height: 24px;

    @include max-media(768) {
      font-size: 0.75rem;
    }
  }

  &__price {
    font-size: 1rem;
    line-height: 24px;
    letter-spacing: 0.051px;
    margin-bottom: 10%;

    @include max-media(768) {
      font-size: 0.75rem;
    }
  }
}

.photo {
  width: 100%;
  height: 100%;
  max-height: 165px;
  object-fit: cover;
}

.button {
  border-radius: 0;
  // padding: 3% 10%;
  max-width: 183px;
  // height: 45px;
  width: 45%;
  height: 2.6vw;
  max-width: 183px;
  max-height: 45px;
  padding: 0%;
  min-width: 142px;
  min-height: 35px;

  &__container {
    margin-top: 5%;
    @include max-media(768) {
      padding-bottom: 10%;
    }
  }
}

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

.quantity-selector input[type="number"] {
  text-align: center;
  border: none;
  width: 30px;
}

.close {
  cursor: pointer;
}
</style>
