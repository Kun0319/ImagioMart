<script setup>
import VueMagnifier from "@websitebeaver/vue-magnifier";
import "@websitebeaver/vue-magnifier/styles.css";
import pic from "@/assets/images/magazine_mockup_1.svg";
</script>

<!-- 需要改成自動帶入資料圖片 -->

<template lang="">
  <div class="flex flex-col items-center mt-5 container">
    <!-- 伺服器渲染會造成載入錯誤 -->
    <div>
      <client-only>
        <!-- 套件src加冒號 -->
        <VueMagnifier
          :src="pic"
          mg-corner-bg-color="#e5e5e5"
          className="photo "
        />
      </client-only>
      <!-- <img src="@/assets/images/magazine_mockup_ 1.svg" alt="" /> -->
    </div>
    <div class="photo">
      <img src="@/assets/images/magazine_mockup_2.svg" alt="" class="w-full" />
    </div>
    <div class="photo">
      <img src="@/assets/images/magazine_mockup_3.svg" alt="" class="w-full" />
    </div>
    <div class="photo">
      <img src="@/assets/images/magazine_mockup_1.svg" alt="" class="w-full" />
    </div>
    <p>文字．影像 ｜ 提供：IW傢飾</p>
    <div class="heartshare">
      <i class="pi pi-heart mx-3"></i> <i class="pi pi-share-alt"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.photo {
  max-width: 100%;
  margin-bottom: 12%;

  @include max-media(768) {
    margin-bottom: 24.4947%;
  }
}
.photo:last-of-type {
  margin-bottom: 0;
}

.container div.photo:first-child {
  @include max-media(768) {
    margin-top: 12%;
  }
}

/* 針對最後一個 .photo 元素 */

.heartshare {
  display: none;
  // margin-top: -15%;
  margin-top: 7.3484%;

  @include max-media(768) {
    display: block;
  }
}
</style>
