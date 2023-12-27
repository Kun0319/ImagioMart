<script setup>
import TabMenu from "./components/Tagmenu.vue";
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
    <TabMenu class="md:hidden" />
    <div class="w-full flex justify-center checkout__container">
      <div class="checkout">
        <div class="md:flex hidden justify-center checkout__info">
          <p class="">運送資訊</p>
        </div>
        <!-- 手機版變兩個? -->

        <!-- 左邊部分 -->
        <div class="md:col-span-6 col-span-12 checkout__left">
          <p class="info__title">收件人資訊</p>
          <div class="input-group">
            <label for="fullname" class="required">*</label>
            <input type="text" id="fullname" placeholder="全名" class="input" />
          </div>
          <div class="input-group">
            <label for="">*</label>
            <input type="text" placeholder="電子郵件" class="input" />
          </div>
          <div class="input-group">
            <label for="">*</label>
            <input
              type="number"
              placeholder="手機號碼(請輸入純數字不含空格)"
              class="input"
            />
          </div>
          <p class="info__title">運送方式</p>
          <!-- 勾選運送 -->
          <div class="flex justify-around shipping__container">
            <div>
              <input
                type="radio"
                id="homeDelivery"
                name="shippingMethod"
                value="宅配"
              />
              <label for="homeDelivery">宅配</label>
            </div>
            <div>
              <input
                type="radio"
                id="storePickup"
                name="shippingMethod"
                value="超商取貨"
                checked
              />
              <label for="storePickup">超商取貨</label>
            </div>
          </div>
          <!-- 勾選運送 -->

          <div class="input-group">
            <label for="" class="input__shipping">*</label>
            <input type="text" placeholder="7-11 / 全家" class="input" />
          </div>
          <div class="input-group">
            <label for="" class="input__shipping">*</label>
            <input type="text" placeholder="門市名稱" class="input" />
          </div>
          <!-- 發票區塊 -->
          <p class="info__title">發票開立</p>
          <div>
            <input type="checkbox" name="" checked />
            <label for="">個人</label>
          </div>
          <div>
            <input type="checkbox" name="" />
            <label for="">公司</label>
          </div>
          <div class="input-group">
            <label for="">*</label>
            <input type="text" placeholder="統一編號" class="input" />
          </div>
          <!-- 發票區塊 -->
          <!-- 付款區塊 -->
          <p class="info__title">付款方式</p>
          <div class="flex">
            <div>
              <input type="checkbox" name="" checked />
              <label for="">信用卡</label>
            </div>
            <div>
              <input type="checkbox" name="" />
              <label for="">Apple Pay</label>
            </div>
          </div>
          <!-- 付款區塊 -->
          <textarea
            placeholder="Message"
            class="form-group__input h-32"
            required
          ></textarea>
          <div>
            <input type="checkbox" />
            <label for="">儲存我的資料以方便下次購物</label>
          </div>
        </div>
        <!-- 右邊部分 -->
        <div class="md:col-span-6 col-span-12 checkout__right">
          <!-- 第一部分 -->
          <div class="grid grid-cols-12 gap-4 border">
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
                <img src="~/assets/icon/shoppingcartclose.svg" alt="" />
              </div>
              <div class="flex justify-between shopcart__price">
                <p>TWD$300</p>
                <div class="quantity-selector">
                  <!-- 數量選擇器 -->
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
            </div>
          </div>
          <!-- 第二部分 -->
          <div class="grid grid-cols-12 gap-4 border">
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
                <img src="~/assets/icon/shoppingcartclose.svg" alt="" />
              </div>
              <p>黑色</p>
              <div class="flex justify-between shopcart__price">
                <p>NT$32,400</p>
                <div class="quantity-selector">
                  <!-- 數量選擇器 -->
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
              </div>
            </div>
          </div>

          <div class="confirm__margin">
            <div class="flex justify-between confirm">
              <p>小計</p>
              <p>NT$600</p>
            </div>
            <div class="flex justify-between confirm">
              <p>運費</p>
              <p>NT$60</p>
            </div>
            <div class="flex justify-between confirm__total">
              <p>總計</p>
              <p>NT$660</p>
            </div>
            <button class="button w-full">訂單確認</button>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.tabs {
  margin-bottom: 0;
}
.checkout {
  @apply grid grid-cols-12 gap-4;
  // height: 915px;
  width: 100%;
  max-width: 845px;
  margin-top: 55px;

  &__container {
    margin-bottom: 11.3517%;
    margin-top: 12.0481%;

    @include max-media(768) {
      margin-top: 0;
    }
  }

  &__info {
    @apply col-span-full;
    font-size: 1.3125rem;
    font-weight: 700;
    line-height: 23.31px;
    margin-bottom: 4.3966%;
    border-bottom: 3px solid #000000;
    padding-bottom: 4.5034%;
  }

  &__left {
    border-right: 1px solid #000000;
    display: flex;
    flex-direction: column;
    padding-left: 10%;
    padding-right: 10%;
    @include max-media(768) {
      border-right: 0;
    }
  }

  &__right {
    display: flex;
    flex-direction: column;
  }
}

.input {
  width: 100%;
  border: 0;
  height: 2rem;
  border-left: 1px solid rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 0 !important;

  &-group {
    width: 100%;
    margin-bottom: 12.1322%;
    display: flex;
    justify-content: flex-end;
  }

  &::placeholder {
    color: #cecece;
    font-size: 0.875rem;
    padding-left: 1%;
    align-content: center;

    @include max-media(1024) {
      font-size: 0.875rem * 0.85;
    }

    @include max-media(390) {
      font-size: 0.875rem * 0.75;
    }
  }

  //   運送input
  &__shipping {
    padding-left: 10%;
  }
}

.info {
  &__title {
    font-size: 1rem;
    margin-bottom: 9.5315%;
    font-weight: 400;
    color: $text-color3;
  }
}

// 運送方式
.shipping {
  &__container {
    margin-bottom: 9.5315%;
  }
}

// 圖片
.photo {
  width: 100%;
  max-width: 133px;
  height: 180px;
  object-fit: contain;
}

// 數字選擇器
.quantity-selector {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  border: 1px solid #cccccc;
  padding: 5px;
  width: 100px;
  height: 50px;
  @include max-media(768) {
    width: 80px;
    height: auto;
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

.border {
  border-bottom: 1px solid #e8e8e8;
}

// 確認區塊
.confirm {
  font-size: 1rem;
  line-height: 24px;
  letter-spacing: 0.016px;
  color: $text-color3;
  margin-bottom: 4.8297%;

  &__margin {
    margin-top: auto;
    @include max-media(768) {
      margin-top: 7.6546%;
    }
  }

  &__total {
    @extend .confirm;
    font-weight: 700;
  }
}

.button {
  border-radius: 0%;
  color: #000000;
  font-weight: 700;
  height: 45px;
}
</style>
