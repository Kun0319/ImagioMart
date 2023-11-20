<script setup></script>

<template lang="">
  <!-- 最外層包覆 -->
  <div class="footer wrap">
    <!-- 輸入email區塊 -->
    <div class="email__block grid grid-cols-10">
      <div
        class="textset flex flex-col md:col-start-4 md:col-span-4 col-span-10"
      >
        <p class="mb-2 md:text-left text-center">Sign up to our newsletter</p>
        <div class="flex flex-row relative">
          <input
            type="email"
            class="email border-0 w-full md:text-left text-center md:pl-0 pl-5"
            placeholder="Email"
          />
          <button class="email__button">
            <img
              src="@/assets/images/arrow.svg"
              alt="Submit"
              class="absolute right-2 bottom-3"
            />
          </button>
        </div>
      </div>
    </div>
    <!-- 關於我們等等連結 -->
    <div class="flex flex-col md:grid grid-cols-12 grid-rows-2 md:gap-3 gap-2">
      <div
        class="textset flex row-start-1 md:col-start-1 md:col-span-7 col-span-12 md:justify-start justify-around order-2"
      >
        <span><a href="">About us</a></span> <span class="dot">•</span>
        <span><a href="">Privacy policy</a></span> <span class="dot">•</span>
        <span><a href="">Terms of service</a></span> <span class="dot">•</span>
        <span><a href="">Shipping policy</a></span> <span class="dot">•</span>
        <span><a href="">Contact</a></span>
      </div>
      <div
        class="row-start-2 md:col-span-4 col-span-6 md:col-start-1 col-start-4 md:order order-3 md:text-start text-center"
      >
        <p class="textset">&copy; 2023, IW MAGAZINE. ALL RIGHTS RESERVED</p>
      </div>
      <!-- 聯絡資訊 FB IG Line-->
      <div
        class="flex flex-col sm:justify-self-end gap-3 sm:col-end-13 sm:col-span-4 col-span-12 row-span-2 order-1"
      >
        <div class="flex md:justify-start justify-center sm:gap-5 gap-8">
          <img src="@/assets/icon/fb.svg" alt="Facebook" class="" />
          <img src="@/assets/icon/ig.svg" alt="Instagram" class="" />
          <img src="@/assets/icon/line.svg" alt="Line" class="" />
        </div>
        <div
          class="textset flex md:flex-row flex-col md:text-justify text-center md:p-0 pt-4 pb-10"
        >
          <p class="md:mr-5 md:order-none order-1">Info@iw-magazine.com</p>
          <p class="md:order-1 order-none">886-2-2501-9868</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  padding-top: 9.14%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.footer::after {
  content: "";
  display: block;
  height: 2rem;
}

.email {
  outline: none;
  padding-left: 0;
  padding-bottom: 1rem;
  border-left: 1px solid rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  &__block {
    margin-bottom: 22%;

    @include max-media(767) {
      margin-bottom: 20.14%;
    }

    @include min-media(1025) {
      margin-bottom: 12.15%;
    }
  }
  &:focus {
    border-bottom: 1px solid #00000076;
  }

  &::placeholder {
    color: #cecece;
    font-size: 0.675rem;
    // padding-left: 5%;
    @include max-media(1024) {
      font-size: 0.675rem * 0.85;
    }

    @include max-media(390) {
      font-size: 0.675rem * 0.75;
    }
  }

  &__button {
    background: none;
    border: none;
  }
}

// 暫時修改
.dot {
  margin: 0 5;
}

.textset {
  color: $text-color3;
  font-size: 0.675rem;
  @include max-media(1024) {
    font-size: 0.675rem * 0.85;
  }

  @include max-media(390) {
    font-size: 0.675rem * 0.75;
  }
}
</style>
