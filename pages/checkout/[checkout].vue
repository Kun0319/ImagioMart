<script setup></script>
<template lang="">
  <NuxtLayout>
    <div class="w-full flex justify-center checkout__container">
      <div class="checkout">
        <div class="flex justify-center checkout__info">
          <p class="">運送資訊</p>
        </div>
        <!-- 左邊部分 -->
        <div class="col-span-6 checkout__left">
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
              <input type="checkbox" name="宅配" />
              <label for="">宅配</label>
            </div>
            <div>
              <input type="checkbox" name="超商取貨" checked />
              <label for="">超商取貨</label>
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
        <div class="col-span-6 checkout__right"></div>
      </div>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.checkout {
  @apply grid grid-cols-12 gap-4;
  // height: 915px;
  width: 100%;
  max-width: 845px;
  margin-top: 55px;

  &__container {
    margin-bottom: 11.3517%;
    margin-top: 12.0481%;
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
  }

  &__right {
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
</style>
