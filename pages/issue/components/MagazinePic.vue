<script setup>
import VueMagnifier from "@websitebeaver/vue-magnifier";
import "@websitebeaver/vue-magnifier/styles.css";
import pic from "@/assets/images/magazine_mockup_1.svg";
const route = useRoute();
const magazineId = route.params.Magazine;
const { data, error } = await useFetch(
  `https://iw-api.d-blueprint.com/api/issues/${magazineId}`,
);
const blocks = data.value.data.info.content;
// console.log(data.value.data.info.content[4].data.image_lft.link);
const magnifierPhotoBlocks = blocks.filter(
  (block) => block.type === "block_magnifier_photo",
);

// console.log(blocks.type);
</script>

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
    <!-- 測試區塊 -->

    <div
      v-for="(block, index) in magnifierPhotoBlocks"
      :key="index"
      class="book__container"
    >
      <!-- <img
      src="~/assets/images/issuebook.png"
      alt=""
      class="w-full col-span-full"
    /> -->
      <!-- 左邊圖片 -->
      <div class="col-end-7 col-span-6">
        <img
          :src="`https://iw-api.d-blueprint.com${block.data.image_lft.link}`"
          :alt="block.data.image_lft.alt"
          class="book__photo__left"
        />
      </div>
      <!-- 右邊圖片 -->
      <div class="col-span-6">
        <img
          :src="`https://iw-api.d-blueprint.com${block.data.image_rgt.link}`"
          :alt="block.data.image_rgt.alt"
          class="book__photo__right"
        />
      </div>
    </div>

    <!-- 測試區塊 -->
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

.book {
  &__container {
    @apply grid grid-cols-12 gap-4;
    width: 100%;
    max-width: 1053px;
    height: 715px;

    background-image: url("~/assets/images/issuebook.png");
    background-position: center;
    background-size: cover; /* 使背景图像覆盖整个元素，保持图像比例 */
    background-repeat: no-repeat; /* 防止背景图像重复 */
  }
  &__photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    // padding: 50px;
    &__left {
      @extend .book__photo;
      padding-left: 110px;
      padding-top: 60px;
      padding-bottom: 70px;
    }
    &__right {
      @extend .book__photo;
      padding-right: 100px;
      padding-top: 60px;
      padding-bottom: 70px;
    }
  }
}
</style>
