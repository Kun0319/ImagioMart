<script setup></script>
<template>
  <div>
    <NuxtLayout>
      <div class="signup">
        <div class="signup__content">
          <!-- 會員登入 -->
          <p class="signup__title">註冊會員</p>
          <div class="line"></div>
          <div class="flex flex-col signup__form">
            <div class="text-left signup__description">
              <p>
                已經有帳號? 會員
                <nuxt-link to="/login" class="signup__login">登入</nuxt-link>
              </p>
              <p>如需投稿，請勾選 <b>設計師會員</b></p>
            </div>
            <form action="">
              <div class="flex signup__text">
                <p class="mr-10 mb-10">我要註冊</p>
                <div class="mr-10">
                  <input type="checkbox" id="reader" />
                  <label for="reader">讀者</label>
                </div>
                <div class="">
                  <input type="checkbox" id="designer" />
                  <label for="designer"
                    >設計師
                    <nuxt-link to="/" class="">投稿須知</nuxt-link></label
                  >
                </div>
              </div>
              <div class="form-group">
                <label for="surname" class="form-label signup__text required"
                  >姓</label
                >
                <input type="text" id="surname" class="form-input" />
              </div>
              <div class="form-group">
                <label for="name" class="form-label signup__text required"
                  >名</label
                >
                <input type="text" id="name" class="form-input" />
              </div>
              <!-- 電話 -->
              <div class="form-group">
                <label for="phone" class="form-label signup__text required"
                  >聯絡電話</label
                >
                <div class="flex">
                  <select class="flex items-center form-input__phone">
                    <option value="+886">+886</option>
                  </select>
                  <input
                    type="text"
                    id="phone"
                    class="form-input phone-input"
                  />
                </div>
              </div>
              <!-- 電子郵件 -->
              <div class="form-group">
                <label for="email" class="form-label signup__text required"
                  >電子郵件</label
                >
                <input type="email" id="email" class="form-input" />
              </div>
              <!-- 密碼 -->
              <div class="form-group">
                <label for="password" class="form-label signup__text required"
                  >密碼</label
                >
                <input
                  type="password"
                  id="password"
                  placeholder="至少包含 8 個數字與字母 "
                  class="form-input"
                />
              </div>
              <!-- 確認密碼 -->
              <div class="form-group">
                <label
                  for="confirmpassword"
                  class="form-label signup__text required"
                >
                  確認密碼</label
                >
                <input
                  type="password"
                  id="confirm password"
                  class="form-input"
                />
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
              <!-- 勾選 -->
              <div class="radio-group">
                <div class="radio-option">
                  <input
                    type="radio"
                    id="option1"
                    name="subscription"
                    value="option1"
                    class="hidden-radio"
                  />
                  <label for="option1" class="custom-radio"
                    >我願意接收IW傢飾的最新優惠消息及服務推廣相關資訊</label
                  >
                </div>
                <div class="radio-option">
                  <input
                    type="radio"
                    id="option2"
                    name="subscription"
                    value="option2"
                    class="hidden-radio"
                  />
                  <label for="option2" class="custom-radio"
                    >本人已閱讀、瞭解並同意
                    <nuxt-link href="#">IW會員服務</nuxt-link>
                    約定條款，IW將承諾保護您的個人資料。</label
                  >
                </div>
              </div>
              <button class="signup__btn">送出</button>
            </form>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
.signup {
  @apply flex flex-col items-center;
  width: 100%;

  &__title {
    font-size: 1.3125rem;
    font-weight: 400;
    margin-top: 30.3084%;

    @include max-media(768) {
      margin-top: 24.4947%;
    }
  }
  &__description {
    margin-bottom: 9.6273%;

    @include max-media(768) {
      font-size: 0.75rem;
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
    font-size: 0.625rem;
  }

  &__form {
    margin-bottom: 12.3016%;
  }

  &__login {
    text-decoration: underline;
  }

  &__text {
    font-size: 1rem;
    @include max-media(768) {
      font-size: 0.75rem;
    }
    &::before {
      content: "*";
      color: rgb(0, 0, 0);
      margin-right: 0.5rem;
    }
  }
}

.form {
  &-input {
    width: 100%;
    border: none;
    height: 2rem;
    outline: none;
    padding-left: 0;
    border-left: 1px solid rgba(0, 0, 0);
    border-bottom: 1px solid rgba(0, 0, 0);
    border-radius: 0 !important;

    &__phone {
      @extend .form-input;
      width: 30%;
      margin-right: 17px;
    }
  }

  &-group {
    display: flex;
    text-align: left;
    flex-direction: column;
    margin-bottom: 40px;
    & label {
      &::before {
        content: "*";
        color: rgb(0, 0, 0);
        margin-right: 0.5rem;
      }
    }
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
// 隱私條款
.privacypolicy {
  font-size: 0.75rem;
  margin-top: 12.3016%;
  margin-bottom: 5.3485%;

  @include max-media(768) {
    text-align: left;
    margin-bottom: 11.2451%;
  }
}
// 勾選
.radio-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15.3325%;
  @include max-media(768) {
    margin-bottom: 23.8824%;
  }
}

.radio-option {
  margin-bottom: 8px;
  text-align: left;
}

.hidden-radio {
  visibility: hidden;
  position: absolute;
}

.custom-radio {
  position: relative;
  padding-left: 24px;
  cursor: pointer;
  user-select: none;
  // font-size: 1rem;
  color: $text-color3;
  line-height: 24px;
  @include max-media(768) {
    font-size: 0.625rem;
  }
}

.custom-radio::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: white;
  border: 1px solid #000;
  @include max-media(768) {
    width: 12px;
    height: 12px;
    top: 25%;
  }
}

/* 當單選按鈕被選中時，顯示方形內的勾選 */
.hidden-radio:checked + .custom-radio::after {
  content: "";
  position: absolute;
  top: 45%;
  left: 6px;
  transform: translateY(-50%) rotate(45deg);
  height: 8px;
  width: 5px;
  border-bottom: 2px solid #000;
  border-right: 2px solid #000;
  @include max-media(768) {
    top: 25%;
    left: 4px;
    height: 6px;
    width: 4px;
  }
}
</style>
