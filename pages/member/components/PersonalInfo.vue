<script setup>
const globalStore = useGlobalStore();
const canShow = computed(() => globalStore.hasSubmitted);
</script>

<template lang="">
  <div class="personalinfo">
    <div class="personalinfo__container">
      <label class="personalinfo__label">姓名</label>
      <label class="personalinfo__label">電話</label>
      <label class="personalinfo__label">電子郵箱</label>
      <label class="personalinfo__label">密碼</label>
    </div>
    <div class="personalinfo__container">
      <div class="personalinfo__content">ANN</div>
      <div class="personalinfo__content">09xxxxxxxx</div>
      <div class="personalinfo__content">xxxxxx@gmail.com</div>
      <div class="personalinfo__content">．．．．．．．．．</div>
    </div>
    <div class="flex flex-col gap-6">
      <button class="btn"><img src="~/assets/icon/pen.svg" alt="" /></button>
      <button class="btn"><img src="~/assets/icon/pen.svg" alt="" /></button>
      <button class="btn invisible">
        <img src="~/assets/icon/pen.svg" alt="" />
      </button>
      <button class="btn"><img src="~/assets/icon/pen.svg" alt="" /></button>
    </div>
  </div>
  <div class="button__container">
    <button v-if="canShow === false" class="button">
      <nuxt-link to="member/designermember">成為設計師會員</nuxt-link>
    </button>
  </div>

  <div class="personalinfo__checkbox__container">
    <div class="personalinfo__checkbox">
      <input type="checkbox" />
      <label for=""
        >我願意透過Email接收IW傢飾的最新優惠消息及服務推廣相關資訊</label
      >
    </div>
    <div class="personalinfo__checkbox">
      <input type="checkbox" />
      <label for="">我願意透過簡訊接收IW傢飾的最新優惠消息及服務推廣</label>
    </div>
    <div class="personalinfo__checkbox">
      <input type="checkbox" />
      <label for=""
        >我願意接收IW傢飾的最新活動及網站瀏覽習慣紀錄推廣相關資訊</label
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.personalinfo {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 17.7001%;
  padding-right: 30%;
  margin-bottom: 4.6887%;
  @include max-media(768) {
    padding-left: 0;
    padding-right: 0;
  }

  &__container {
    @apply flex flex-col gap-8;
  }

  &__label {
    @include max-media(768) {
      font-size: 0.75rem;
    }
  }
  &__content {
    @include max-media(768) {
      font-size: 0.75rem;
    }
  }

  &__checkbox {
    // @extend .personalinfo;
    padding-left: 17.7001%;
    margin-bottom: 1.8755%;
    // font-size: 0.875rem;

    color: $text-color3;

    @include max-media(768) {
      font-size: 0.75rem;
      padding-left: 0%;
    }

    &__container {
      width: 100%;
      margin-bottom: 28.6015%;
      @include max-media(768) {
        margin-bottom: 46.8462%;
      }
    }
  }
}

.edit-icon {
  // 如果你想保持圖標在右邊，不需要改變
  cursor: pointer;
  margin-left: auto;
}

// 成為設計師會員按鈕
.button {
  border-radius: 0;
  color: black;
  font-weight: 700;
  font-size: 0.875rem;
  margin-bottom: 5.5485%;

  @include max-media(768) {
    margin-bottom: 48.9705%;
    font-size: 0.625rem;
  }
  &__container {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-left: 10%;
    padding-right: 17.7001%;
  }
}

// 編輯按鈕
.btn {
  background-color: white;
  border: 0;
  // font-family: $font-NotoSerif;

  img {
    width: 25px;
    height: 25px;
  }
}
</style>
