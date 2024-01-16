<script setup>
import { useRouter } from "vue-router";
const selected = ref("");
const router = useRouter();
const updateSelection = (choice) => {
  if (selected.value === choice) {
    selected.value = ""; // 如果當前選項已選，則取消選擇
  } else {
    selected.value = choice; // 否則設置為當前選擇
  }
};

const handleSubmit = () => {
  router.push("/login");
};
</script>
<template lang="">
  <div class="designer">
    <div class="designer__content">
      <!-- 投稿 -->
      <form action="">
        <!-- 事務所名稱 -->
        <div class="form-group">
          <label
            for="userInput"
            class="form-label designer__text__required required"
          >
            事務所名稱</label
          >
          <input type="text" id="userInput" class="form-input" />
        </div>
        <!-- 事務所網址 -->
        <div class="form-group">
          <label for="web" class="form-label designer__text required">
            事務所網址</label
          >
          <input
            type="text"
            id="web"
            class="form-input"
            placeholder="http://"
          />
        </div>
        <!-- 聯絡信箱 -->
        <div class="form-group">
          <label
            for="userInput"
            class="form-label designer__text__required required"
          >
            聯絡信箱</label
          >
          <input
            type="text"
            id="userInput"
            class="form-input"
            placeholder="電子信箱"
          />
        </div>
        <!--  -->
        <div class="form-group">
          <label
            for="userInput"
            class="form-label designer__text__required required"
          >
            案名(中)</label
          >
          <input type="text" id="userInput" class="form-input" />
        </div>
        <div class="form-group">
          <label
            for="userInput"
            class="form-label designer__text__required required"
          >
            案名(英)</label
          >
          <input type="text" id="userInput" class="form-input" />
        </div>
        <div class="form-group">
          <label
            for="userInput"
            class="form-label designer__text__required required"
          >
            案例進度</label
          >
          <select id="caseProgress" class="form-input">
            <option value="" selected disabled hidden>請選擇</option>
            <option value="completed">完工</option>
            <option value="concept">概念</option>
            <option value="other">其他</option>
          </select>
        </div>
        <div class="form-group">
          <label
            for="userInput"
            class="form-label designer__text__required required"
          >
            案例所在地</label
          >
          <input
            type="text"
            id="userInput"
            class="form-input"
            placeholder="國家 / 城市"
          />
        </div>
        <div class="form-group">
          <!-- (10-今年+10) -->
          <label
            for="userInput"
            class="form-label designer__text__required required"
          >
            完工年份</label
          >
          <input
            type="text"
            id="userInput"
            class="form-input"
            placeholder="選擇"
          />
        </div>
        <div class="form-group">
          <label
            for="userInput"
            class="form-label designer__text__required required"
          >
            上傳圖檔</label
          >
          <input
            type="text"
            id="userInput"
            class="form-input"
            placeholder="30張以內/ .jpg .png "
          />
        </div>
        <div class="form-group">
          <label for="userInput" class="form-label designer__text required">
            雲端連結</label
          >
          <input
            type="text"
            id="userInput"
            class="form-input"
            placeholder="http://"
          />
        </div>
        <div class="form-group">
          <label for="userInput" class="form-label designer__text required">
            作品敘述</label
          >
          <textarea
            placeholder="1000 字以內"
            class="form__textarea"
            required
          ></textarea>
        </div>
        <div class="form-group note-group">
          <label for="userInput" class="form-label designer__text required">
            備註</label
          >
          <textarea class="form__textarea-two h-3" required></textarea>
        </div>
        <div class="flex designer__text__last">
          <p>投稿作品須 1-2 週審核期，屆時將以 Email 通知您是否採用，謝謝。</p>
        </div>
        <div>
          <input type="checkbox" />
          <label for="">我已閱讀 <b class="underline">投稿須知</b></label>
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
        <button class="designer__btn" @click="handleSubmit">提交</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.designer {
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

    &__last {
      @extend .designer__text;
      font-size: 0.875rem;
      margin-bottom: 11.945%;
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
    padding-left: 10px;
    border-left: 1px solid rgba(0, 0, 0);
    border-bottom: 1px solid rgba(0, 0, 0);
    border-radius: 0 !important;
    color: $text-color3;
    &::placeholder {
      // padding-left: 0.5rem;
      font-size: 0.875rem;
    }

    &__phone {
      @extend .form-input;
      width: 30%;
      margin-right: 17px;
    }
  }

  &__textarea {
    @extend .form-input;
    height: 331px;

    &-two {
      @extend .form-input;
      height: 73px;
    }
  }

  &-group {
    display: flex;
    text-align: left;
    flex-direction: column;
    margin-bottom: 40px;
  }
}
.note-group {
  margin-bottom: 2.4959%;
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
// 隱私權政策
.privacypolicy {
  font-size: 0.75rem;
  margin-bottom: 11.2319%;
  margin-top: 2.4959%;

  @include max-media(768) {
    text-align: center;
    margin-bottom: 47.4586%;
  }
}
.link {
  color: $text-color3;
  text-decoration: underline;
}
textarea {
  &::placeholder {
    padding-left: 0.5rem;
  }
}
</style>
