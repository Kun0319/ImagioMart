<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const login = () => {
  setTimeout(() => {
    router.push("/login/1");
  }, 500);
};
</script>
<template>
  <NuxtLayout>
    <div class="login">
      <div class="login__content">
        <!-- 會員登入 -->
        <p class="login__title">會員登入</p>
        <div class="line"></div>
        <!-- 電子郵箱輸入 -->
        <p class="text-left input-email__text">電子郵箱</p>
        <input type="text" class="input-email border-0" placeholder="email" />
        <!-- 密碼輸入 -->
        <p class="text-left input-password__text">密碼</p>
        <input
          type="password"
          class="input-password border-0"
          placeholder="password"
        />
        <!-- 登入 註冊 忘記密碼 -->
        <div class="flex flex-row login__login">
          <button @click="login" class="login__btn">登入</button>
          <div class="ml-auto login__signup">
            <nuxt-link to="/signup">會員註冊 / </nuxt-link>
            <nuxt-link to="/forgotpassword">忘記密碼</nuxt-link>
          </div>
        </div>
        <p>使用社群帳號登入</p>
        <div class="login__social">
          <img
            src="~/assets/icon/login_fb.svg"
            alt=""
            class="login__social__icon"
          />
          <img
            src="~/assets/icon/login_google.svg"
            alt=""
            class="login__social__icon"
          />
          <img
            src="~/assets/icon/login_line.svg"
            alt=""
            class="login__social__icon"
          />
        </div>
      </div>
      <div class="privacypolicy">
        <p>
          This site is protected by re CAPTCHA and the Google
          <nuxt-link
            to="https://policies.google.com/privacy?hl=zh-TW"
            class="link"
            >Privacy Policy </nuxt-link
          >and
          <nuxt-link
            to="https://policies.google.com/terms?hl=zh-TW"
            class="link"
          >
            Terms of Service </nuxt-link
          >apply.
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.login {
  @apply flex flex-col items-center;
  width: 100%;

  &__title {
    font-size: 1.3125rem;
    font-weight: 400;
    margin-top: 15.1542%;

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
  }

  &__btn {
    border: 1px solid #00000050;
    background-color: white;
    padding: 2.5% 10%;
    font-size: 0.875rem;
    font-family: $font-NotoSerif;
  }

  &__login {
    margin-bottom: 18.185%;
  }

  &__signup {
    text-decoration: underline;
  }

  &__social {
    margin-bottom: 20.1461%;
    line-height: 45px;
    display: flex;
    justify-content: space-around;
    margin-left: 40%;
    margin-right: 40%;

    &__icon {
      // max-width: 24px;
      max-height: 24px;
    }
  }
}

.line {
  border-bottom: 3px solid #000;
  margin-top: 8.2011%;
  margin-bottom: 10%;
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
    // padding-left: 1%;
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
    // margin-bottom: 8.7359%;
    margin-bottom: 4.36795%;
    padding-left: 10px;

    // margin-bottom: 8.2011%;

    &__text {
      font-size: 1rem;
      margin-bottom: 1.60275%;
    }
  }

  &-password {
    @extend .input;
    margin-bottom: 8.2011%;
    padding-left: 10px;

    // margin-bottom: 5.7051%;

    &__text {
      font-size: 1rem;
      margin-bottom: 1.60275%;
    }
  }
}

.privacypolicy {
  font-size: 0.75rem;
  margin-bottom: 21.737%;

  @include max-media(768) {
    text-align: center;
    margin-bottom: 47.4586%;
  }
}
</style>
