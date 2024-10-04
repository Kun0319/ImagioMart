<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const isVerificationSent = ref(false);
const emailverificationcompleted = ref(false);

const sendVerification = () => {
  setTimeout(() => {
    isVerificationSent.value = true;
    // 路由跳转
    router.push("/forgotpassword");
  }, 500);
};
const emailverification = () => {
  setTimeout(() => {
    emailverificationcompleted.value = true;
    router.push("/forgotpassword");
  }, 2000);
};
</script>
<template>
  <NuxtLayout>
    <div v-if="!isVerificationSent" class="forgot">
      <div class="forgot__content">
        <!-- 會員登入 -->
        <p class="forgot__title">忘記密碼</p>
        <div class="line"></div>
        <!-- 電子郵箱輸入 -->
        <label class="text-left input-email__text" for="inputField"
          >*註冊信箱</label
        >
        <div class="input-button-container">
          <input id="inputField" type="text" class="input-email border-0" />
          <button class="forgot__btn" @click="sendVerification">
            收取驗證信
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="isVerificationSent && !emailverificationcompleted"
      class="login flex justify-center"
      @click="emailverification"
    >
      <div class="login__success">
        <p class="text-center">請至登記信箱進行驗證</p>
      </div>
    </div>
    <div v-if="emailverificationcompleted" class="forgot">
      <div class="forgot__content">
        <!-- 會員登入 -->
        <p class="forgot__title">Email 驗證完成</p>
        <div class="line"></div>
        <p class="emailverification__text">
          親愛的會員您好，歡迎您成為IW傢飾會員！
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.forgot {
  @apply flex flex-col items-center;
  width: 100%;
  margin-bottom: 23.4696%;

  &__title {
    font-size: 1.3125rem;
    font-weight: 400;
    margin-top: 30.3084%;

    @include max-media(768) {
      margin-top: 24.4947%;
    }
  }

  &__content {
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 560.946px;
    gap: 10px;
  }

  &__btn {
    border: 1px solid #00000050;
    background-color: white;
    padding: 2.5% 10%;
    font-size: 0.8125rem;
    position: absolute;
    right: 0;
    top: -35%;
  }
}

.line {
  border-bottom: 3px solid #000;
  margin-top: 8.2011%;
  margin-bottom: 14.441%;
}

.link {
  color: $text-color3;
  text-decoration: underline;
}

.input {
  height: 2rem;
  outline: none;
  padding-left: 0;
  border-left: 1px solid rgba(0, 0, 0);
  border-bottom: 1px solid rgba(0, 0, 0);
  border-radius: 0 !important;

  &::placeholder {
    color: #cecece;
    padding-left: 1%;
    align-content: center;

    @include max-media(1024) {
      font-size: 0.675rem * 0.85;
    }

    @include max-media(390) {
      font-size: 0.675rem * 0.75;
    }
  }

  &-email {
    @extend .input;
    margin-bottom: 8.7359%;
    flex-grow: 1;
    padding-right: 80px;
    width: 100%;

    &__text {
      font-size: 1rem;
      margin-bottom: 1.60275%;
    }
  }
  &-button-container {
    position: relative;
  }
}

// 驗證信箱
.login {
  &__success {
    @apply flex justify-center items-center justify-self-center;
    width: 32.47vw;
    height: 13.89vw;
    min-width: 322px;
    min-height: 139px;
    box-shadow: 0px 4px 11.8px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 23.2606%;
    margin-top: 16.2963%;
  }
}

// 驗證完成
.emailverification {
  &__title {
    font-size: 1.3125rem;
    font-weight: 400;
    // margin-top: 30.3084%;
    @include max-media(768) {
      font-size: 0.875rem;
    }
  }
  &__text {
    font-size: 1rem;
    font-weight: 400;
    color: $text-color3;
    margin-bottom: 10.6942%;

    @include max-media(768) {
      font-size: 0.875rem;
      margin-bottom: 37.1123%;
    }
  }
}
</style>
