<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToCheckout = () => {
  router.push("/checkout/info");
};
</script>
<template lang="">
  <NuxtLayout>
    <div class="w-full flex justify-center shopcart__container">
      <div class="shopcart">
        <div class="flex justify-center shopcart__my">
          <p class="">購物車</p>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <div class="shopcart__category col-span-full">
            <p class="col-span-6">期刊</p>
            <p class="col-span-4">數量</p>
            <p class="col-span-2 text-center">小計</p>
          </div>
          <div class="shopcart__items first-item">
            <div class="col-span-3">
              <img
                src="https://s3-alpha-sig.figma.com/img/a455/a214/b6ecf3505b538faadba1023e1aa5ca30?Expires=1704067200&Signature=K6TczBBD7I8G9r8XMKLpFc7bOvlilygrpT45OpV42alnPk60aNuol0LfToz8f6TUFpkL5S7ikhm2qoFNPNuHsGsFb02gUbzHpPdu~QuRR4wY-MXcN4zA9El39JWt6X~PrShAYZknPZWMFJREgSAMJGZ~O28DiFMFProsa0chN~T7LDUlf0~BBBhNXT0h2DaaJG5b3yuOQ8WZXZ1qr5ttz6-AC5skZEmY5rfWLf6MRxZd9WQXwbqVxzgIBVjGCh-GsjBAy0nssxCoWyUAA0rQBDtHkU7-VGlfl2Z4FwQXgegF1Fd59n-ZYavKJujIFFeE~6GGBtKHM1DDl6rNigMDhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                class="photo"
              />
            </div>
            <div class="col-span-3 flex flex-col">
              <div class="flex justify-between shopcart__name">
                <p>第151期2023 / 07&08月</p>
              </div>
              <div class="flex justify-between shopcart__price">
                <p>NT$300</p>
              </div>
              <div class="flex justify-between shopcart__date">
                <p>預計12/8運送</p>
              </div>
            </div>
            <div class="quantity-selector col-span-2">
              <!--數量選擇器 -->
              <button class="decrease" onclick="decreaseValue()">-</button>
              <input type="number" id="quantity" value="1" />
              <button class="increase" onclick="increaseValue()">+</button>
            </div>
            <div class="col-span-2 self-center shopcart__del">
              <p>移除</p>
            </div>
            <div class="col-span-2 self-center justify-self-end">
              <p>NT$300</p>
            </div>
          </div>
          <div class="shopcart__price">
            <p>合計</p>
            <p class="">NT$300</p>
          </div>

          <button @click="goToCheckout" class="button col-end-13 col-span-6">
            結帳
          </button>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <div class="shopcart__category col-span-full">
            <p class="col-span-6">選物</p>
            <p class="col-span-4">數量</p>
            <p class="col-span-2 text-center">小計</p>
          </div>
          <div class="shopcart__items first-item">
            <div class="col-span-3">
              <img
                src="https://s3-alpha-sig.figma.com/img/87f0/103d/f9422d1ac4c0abb0148e40cbafcb7436?Expires=1704067200&Signature=jj~Jw8LWXupezgiam~686RtkNMOgmiC4HIEkj9xetEv6AIiPE0CTP0-GNIDyJpCZLPvbiNepklKXvLlnKtuebjF6S5ftZ4-EZghAaihciLEQBhdGoifLauqYY8kiVA-sjqMOAPF3qEO7E1ggcPVNBnRtDPGC-VekNWHP1l66CehRolSltVW9WvcnJOaK45TQjw8CR77LOsm0DWzJu7PzWbjp7SAxHUPbQ9QOUjS8tSQ04W1mRXe5I56D--1nRN~03xZGHD6CBTmaQLS3gw-STwuNOI16UEfhGyqVIJsmN1BeHPYcwpeIKrTRS71-UVeRowtd3hWn-AHUTO1cYUyvKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                class="photo"
              />
            </div>
            <div class="col-span-3 flex flex-col">
              <div class="flex justify-between shopcart__name">
                <p>Tabouret Haut 高腳圓凳</p>
              </div>
              <div class="flex justify-between shopcart__color">
                <p>黑色</p>
              </div>
              <div class="flex justify-between shopcart__price">
                <p>NT$32,700</p>
              </div>
              <div class="flex justify-between shopcart__date">
                <p>預計12/15運送</p>
              </div>
            </div>
            <div class="quantity-selector col-span-2">
              <!--數量選擇器 -->
              <button class="decrease" onclick="decreaseValue()">-</button>
              <input type="number" id="quantity" value="1" />
              <button class="increase" onclick="increaseValue()">+</button>
            </div>
            <div class="col-span-2 self-center shopcart__del">
              <p>移除</p>
            </div>
            <div class="col-span-2 self-center justify-self-end">
              <p>NT$300</p>
            </div>
          </div>
          <p class="col-span-5">* 因物件過大無法使用超商運送</p>
          <div class="shopcart__price">
            <p>合計</p>
            <p class="">NT$300</p>
          </div>
          <button class="button col-end-13 col-span-6" @click="goToCheckout">
            結帳
          </button>
        </div>

        <!-- <div class="flex justify-between button__container">
          <button class="button">繼續購物</button>
        </div> -->
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.shopcart {
  // height: 915px;
  width: 100%;
  max-width: 845px;
  margin-top: 55px;
  &__container {
    margin-bottom: 11.3517%;
    margin-top: 12.0481%;
  }

  &__my {
    font-size: 1.3125rem;
    font-weight: 700;
    line-height: 23.31px;
    margin-bottom: 4.3966%;
    border-bottom: 3px solid #000000;
    padding-bottom: 4.5034%;
  }

  &__items {
    @apply grid grid-cols-12 gap-4 col-span-full;

    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    margin-bottom: 3.4368%;
    width: 100%;
    max-width: 845px;
    padding-top: 2.5%;
    padding-bottom: 2.5%;

    &.first-item {
      //   border-bottom: none;
    }
  }

  &__category {
    @apply grid grid-cols-12 gap-4;
    font-size: 1rem;
    line-height: 17.76px;
    font-weight: 400;
    margin-top: 4.8673%;
  }

  &__name {
    font-size: 1rem;
    line-height: 17.76px;
    margin-top: 21.6733%;
    margin-bottom: 26.7137%;
  }
  &__color {
    @extend .shopcart__price;
    margin-top: -15%;
  }

  &__price {
    @apply col-span-5 col-end-13 flex flex-row justify-between;
    font-size: 1rem;
    line-height: 24px;
    letter-spacing: 0.051px;
    margin-bottom: 6.04838%;
  }
  &__date {
    font-size: 0.75rem;
    color: $text-color3;
    line-height: 13.32px;
  }
  &__del {
    font-size: 0.875rem;
    text-decoration: underline;
    line-height: 15.54px;
    text-align: center;
  }
}

.photo {
  //   width: 100%;
  width: 133px;
  height: 180px;
  //   object-fit: contain;
}

.button {
  border-radius: 0;
  // padding: 3% 10%;
  //   width: 183px;
  height: 45px;

  &__container {
    margin-top: 5%;
  }
}

.quantity-selector {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  border: 1px solid #cccccc;
  padding: 5px;
  width: 100px;
  height: 50px;
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
