<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  inquiry: "",
  message: "",
});

const submitForm = () => {
  console.log(form.value);
};
</script>
<template>
  <NuxtLayout>
    <div class="contact-form-container">
      <p class="text__title">Contact us</p>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name"> *姓名</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            class="form-group__input"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">* 信箱</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="form-group__input"
            placeholder="email"
            required
          />
        </div>

        <div class="form-group">
          <label for="inquiry">* 詢問類別</label>
          <select
            id="inquiry"
            v-model="form.inquiry"
            placeholder="Select"
            required
          >
            <option>個案投稿</option>
            <option>雜誌訂購</option>
            <option>廣告合作</option>
            <option>其他</option>
          </select>
        </div>

        <div class="form-group">
          <label for="message">訊息內容</label>
          <textarea
            id="message"
            v-model="form.message"
            placeholder="Message"
            class="form-group__input h-32"
            required
          ></textarea>
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
        <div class="btn__container">
          <button type="submit" class="btn">提交</button>
        </div>
        <div>
          <p class="text-center text__info">
            IW magazine 傢飾雜誌 <br />台北市中山區南京東路二段178號4樓<br />
            4F., No. 178, Sec. 2, Nanjing E. Rd., Zhongshan Dist., Taipei City
            10496, Taiwan <br />電話：886-2-2501-9868 <br />傳真 :
            886-2-2506-5611電子郵件 : Info@iw-magazine.com
          </p>
        </div>
      </form>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.text {
  &__title {
    text-align: center;
    font-size: 1.3125rem;
    margin-bottom: 17.34%;
  }
  &__info {
    font-size: 0.875rem;
    margin-bottom: 10.3682%;
    line-height: 30.296px;
    @include max-media(768) {
      margin-bottom: 10.3682%;
      font-size: 0.625rem;
      line-height: 21.64px;
    }
  }
}

.contact-form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 5.3628%;

  &__input {
    border: 0;
    border-left: 1px solid rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
select,
textarea {
  width: 100%;
  padding: 10px;
}

.btn {
  padding: 2.5% 10%;
  background-color: #ffffff;
  border: 1px solid #00000050;

  &__container {
    display: flex;
    justify-content: center;
    margin-bottom: 15.016%;

    @include max-media(768) {
      margin-bottom: 16.789%;
    }
  }
}

// 隱私政策
.privacypolicy {
  font-size: 0.75rem;
  margin-bottom: 11.9771%;

  @include max-media(768) {
    text-align: left;
    margin-bottom: 17.8384%;
  }
}

.link {
  color: $text-color3;
  text-decoration: underline;
}
</style>
