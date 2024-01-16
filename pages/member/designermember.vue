<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import MemberPopup from "./components/MemberPopup.vue";

// const canShow = ref(false);
const router = useRouter();
const handleSubmit = async () => {
  event.preventDefault(); // 防止表单默认提交行为
  const globalStore = useGlobalStore();
  globalStore.setSubmissionStatus(true);
  await router.push("/member");
};
</script>

<template lang="">
  <NuxtLayout>
    <MemberPopup />
    <div class="designer">
      <div class="designer__content">
        <!-- 會員登入 -->
        <p class="designer__title">成為設計師會員</p>
        <div class="line"></div>
        <form action="">
          <div class="form-group">
            <label
              for="userInput"
              class="form-label designer__text__required required"
            >
              工作室/事務所名稱</label
            >
            <input type="text" id="userInput" class="form-input" />
          </div>
          <div class="form-group">
            <label for="web" class="form-label designer__text required">
              網站</label
            >
            <input type="text" id="web" class="form-input" />
          </div>
          <!-- 個人資訊 -->
          <div class="personalinfo">
            <div class="personalinfo__container">
              <label class="personalinfo__label">姓名</label>
              <label class="personalinfo__label">電話</label>
              <label class="personalinfo__label">電子郵箱</label>
            </div>
            <div class="personalinfo__container">
              <div class="personalinfo__content">ANN</div>
              <div class="personalinfo__content">09xxxxxxxx</div>
              <div class="personalinfo__content">xxxxxx@gmail.com</div>
            </div>
          </div>
          <button class="designer__btn" @click="handleSubmit">送出</button>
        </form>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.designer {
  @apply flex flex-col items-center;
  width: 100%;

  &__title {
    font-size: 1.3125rem;
    font-weight: 400;
    margin-top: 10.0285%;

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
    // font-family: $font-NotoSerif;
    font-size: 1rem;
    margin-bottom: 43.3232%;

    @include max-media(768) {
      font-size: 0.75rem;
    }
  }

  &__text {
    color: $text-color3;
    font-size: 1rem;

    @include max-media(768) {
      font-size: 0.75rem;
    }

    &__required {
      @extend .designer__text;

      &::before {
        content: "*";
        color: rgb(0, 0, 0);
        margin-right: 0.5rem;
      }
    }
  }
}

.form {
  &-input {
    width: 100%;
    border: none;
    height: 2rem;
    outline: none;
    padding-left: 1%;
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
  }
}

.line {
  border-bottom: 3px solid #000;
  margin-top: 8.2011%;
  margin-bottom: 14.441%;
}

// 個人資訊
.personalinfo {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: 8.0228%;
  margin-bottom: 24.425%;

  &__container {
    @apply flex flex-col gap-8;
    text-align: left;
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
}
</style>
