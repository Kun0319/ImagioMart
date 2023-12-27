<script setup>
import { useRouter } from "vue-router";
import TabMenu from "./components/Tagmenu.vue";

const router = useRouter();

const goToCheckout = () => {
  router.push("/checkout/info");
};

// 數量選擇器
const quantity = ref(1);
const quantities = reactive({});
quantities.selector1 = 1;
quantities.selector2 = 1;

function decreaseValue(selectorId) {
  if (quantities[selectorId] > 0) {
    quantities[selectorId]--;
  }
}

function increaseValue(selectorId) {
  if (quantities[selectorId] === undefined) {
    quantities[selectorId] = 0;
  }
  quantities[selectorId]++;
}

function validateInput(selectorId, event) {
  const value = parseInt(event.target.value.replace(/[^0-9]/g, ""), 10) || 0;
  quantities[selectorId] = value;
}
</script>
<template lang="">
  <NuxtLayout>
    <div class="w-full flex justify-center shopcart__container">
      <div class="shopcart">
        <div class="md:flex hidden justify-center shopcart__my">
          <p class="">購物車</p>
        </div>
        <TabMenu class="md:hidden" />
        <div class="grid grid-cols-12 gap-4">
          <div class="shopcart__category col-span-full">
            <p class="col-span-6">期刊</p>
            <p class="col-span-4 md:block hidden">數量</p>
            <p class="col-span-2 text-center md:block hidden">小計</p>
          </div>
          <div class="shopcart__items first-item">
            <div class="md:col-span-3 col-span-5">
              <img
                src="https://s3-alpha-sig.figma.com/img/a455/a214/b6ecf3505b538faadba1023e1aa5ca30?Expires=1704067200&Signature=K6TczBBD7I8G9r8XMKLpFc7bOvlilygrpT45OpV42alnPk60aNuol0LfToz8f6TUFpkL5S7ikhm2qoFNPNuHsGsFb02gUbzHpPdu~QuRR4wY-MXcN4zA9El39JWt6X~PrShAYZknPZWMFJREgSAMJGZ~O28DiFMFProsa0chN~T7LDUlf0~BBBhNXT0h2DaaJG5b3yuOQ8WZXZ1qr5ttz6-AC5skZEmY5rfWLf6MRxZd9WQXwbqVxzgIBVjGCh-GsjBAy0nssxCoWyUAA0rQBDtHkU7-VGlfl2Z4FwQXgegF1Fd59n-ZYavKJujIFFeE~6GGBtKHM1DDl6rNigMDhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                class="photo"
              />
            </div>
            <div class="md:col-span-3 col-span-7 flex flex-col">
              <div class="flex justify-between shopcart__name">
                <p>第151期2023 / 07&08月</p>
              </div>
              <div class="quantity-selector md:hidden">
                <!--數量選擇器 -->
                <button
                  class="decrease"
                  @click="() => decreaseValue('selector1')"
                >
                  -
                </button>
                <input
                  type="text"
                  :id="'quantity' + 'selector1'"
                  v-model="quantities['selector1']"
                  @input="(event) => validateInput('selector1', event)"
                />
                <button
                  class="increase"
                  @click="() => increaseValue('selector1')"
                >
                  +
                </button>
              </div>
              <div class="flex justify-between shopcart__price">
                <p>NT$300</p>
              </div>
              <div class="flex justify-between shopcart__date">
                <p>預計12/8運送</p>
              </div>
            </div>
            <div class="quantity-selector col-span-2 md:flex hidden">
              <!--數量選擇器 -->
              <button
                class="decrease"
                @click="() => decreaseValue('selector1')"
              >
                -
              </button>
              <input
                type="text"
                :id="'quantity' + 'selector1'"
                v-model="quantities['selector1']"
                @input="(event) => validateInput('selector1', event)"
              />
              <button
                class="increase"
                @click="() => increaseValue('selector1')"
              >
                +
              </button>
            </div>
            <div
              class="md:col-span-2 col-span-12 self-center md:justify-self-start justify-self-end shopcart__del"
            >
              <p>移除</p>
            </div>
            <div class="md:col-span-2 col-span-12 self-center justify-self-end">
              <p>NT$300</p>
            </div>
          </div>
          <div class="shopcart__price">
            <p>合計</p>
            <p class="ml-auto">NT$300</p>
          </div>

          <button
            @click="goToCheckout"
            class="button md:col-end-13 md:col-span-6 col-span-12"
          >
            結帳
          </button>
        </div>
        <div class="grid grid-cols-12 gap-4">
          <div class="shopcart__category col-span-full">
            <p class="col-span-6 md:mt-0 mt-16">選物</p>
            <p class="col-span-4 md:block hidden">數量</p>
            <p class="col-span-2 text-center md:block hidden">小計</p>
          </div>
          <div class="shopcart__items first-item">
            <div class="md:col-span-3 col-span-5">
              <img
                src="https://s3-alpha-sig.figma.com/img/87f0/103d/f9422d1ac4c0abb0148e40cbafcb7436?Expires=1704067200&Signature=jj~Jw8LWXupezgiam~686RtkNMOgmiC4HIEkj9xetEv6AIiPE0CTP0-GNIDyJpCZLPvbiNepklKXvLlnKtuebjF6S5ftZ4-EZghAaihciLEQBhdGoifLauqYY8kiVA-sjqMOAPF3qEO7E1ggcPVNBnRtDPGC-VekNWHP1l66CehRolSltVW9WvcnJOaK45TQjw8CR77LOsm0DWzJu7PzWbjp7SAxHUPbQ9QOUjS8tSQ04W1mRXe5I56D--1nRN~03xZGHD6CBTmaQLS3gw-STwuNOI16UEfhGyqVIJsmN1BeHPYcwpeIKrTRS71-UVeRowtd3hWn-AHUTO1cYUyvKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                class="photo"
              />
            </div>
            <div class="md:col-span-3 col-span-7 flex flex-col">
              <div class="flex justify-between shopcart__name">
                <p>Tabouret Haut 高腳圓凳</p>
              </div>
              <div class="flex justify-between shopcart__color">
                <p>黑色</p>
                <div class="quantity-selector md:hidden">
                  <!--數量選擇器 -->
                  <button
                    class="decrease"
                    @click="() => decreaseValue('selector1')"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    :id="'quantity' + 'selector1'"
                    v-model="quantities['selector1']"
                    @input="(event) => validateInput('selector1', event)"
                  />
                  <button
                    class="increase"
                    @click="() => increaseValue('selector1')"
                  >
                    +
                  </button>
                </div>
              </div>
              <div class="flex justify-between shopcart__price">
                <p>NT$32,700</p>
              </div>
              <div class="flex justify-between shopcart__date">
                <p>預計12/15運送</p>
              </div>
            </div>
            <div class="quantity-selector col-span-2 md:flex hidden">
              <!--數量選擇器 -->
              <button
                class="decrease"
                @click="() => decreaseValue('selector2')"
              >
                -
              </button>
              <input
                type="text"
                :id="'quantity' + 'selector2'"
                v-model="quantities['selector2']"
                @input="(event) => validateInput('selector2', event)"
              />
              <button
                class="increase"
                @click="() => increaseValue('selector2')"
              >
                +
              </button>
            </div>
            <div
              class="md:col-span-2 col-span-12 self-center md:justify-self-start justify-self-end shopcart__del"
            >
              <p>移除</p>
            </div>
            <div class="md:col-span-2 col-span-12 self-center justify-self-end">
              <p>NT$300</p>
            </div>
          </div>
          <p class="md:col-span-5 col-span-12">* 因物件過大無法使用超商運送</p>
          <div class="shopcart__price">
            <p>合計</p>
            <p class="ml-auto">NT$300</p>
          </div>
          <button
            class="button md:col-end-13 md:col-span-6 col-span-12"
            @click="goToCheckout"
          >
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

    @include max-media(768) {
      border-top: none;
    }

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

    @include max-media(768) {
      font-size: 0.875rem;
    }
  }

  &__name {
    font-size: 1rem;
    line-height: 17.76px;
    margin-top: 21.6733%;
    margin-bottom: 26.7137%;

    @include max-media(768) {
      font-size: 0.75rem;
      margin-top: 10%;
    }
  }

  &__color {
    @extend .shopcart__price;
    margin-top: -15%;
  }

  &__price {
    @apply md:col-span-5 col-span-full md:col-end-13 flex flex-row justify-between;
    font-size: 1rem;
    line-height: 24px;
    letter-spacing: 0.051px;
    margin-bottom: 6.04838%;

    @include max-media(768) {
      font-size: 0.75rem;
    }
  }

  &__date {
    font-size: 0.75rem;
    color: $text-color3;
    line-height: 13.32px;

    @include max-media(768) {
      font-size: 0.625rem;
    }
  }

  &__del {
    font-size: 0.875rem;
    text-decoration: underline;
    line-height: 15.54px;
    text-align: center;

    @include max-media(768) {
      font-size: 0.75rem;
    }
  }
}

.photo {
  //   width: 100%;
  // display: block;
  // width: 133px;
  // height: 180px;
  width: 7.7vw;
  height: 10.42vw;
  //   object-fit: contain;

  @include max-media(768) {
    width: 100%;
    min-width: 117px;
    min-height: 158px;
  }
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

// 數字選擇器
.quantity-selector {
  // display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  border: 1px solid #cccccc;
  padding: 5px;
  width: 100px;
  height: 50px;

  @include max-media(768) {
    width: 82px;
    height: auto;
    align-self: flex-end;
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

.close {
  cursor: pointer;
}
</style>
