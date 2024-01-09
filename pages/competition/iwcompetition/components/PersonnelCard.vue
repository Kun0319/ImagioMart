<script setup>
// 定義 props，允許從父組件傳入資料
defineProps({
  imageSrc: String,
  name: String,
  nameZh: String,
});
</script>
<template lang="">
  <div class="photo__container">
    <nuxt-link to="/competition/iwcompetition/1">
      <img :src="imageSrc" :alt="name" class="photo" />
    </nuxt-link>
    <p class="text__en">{{ name }}</p>
    <p class="text__zh">{{ nameZh }}</p>
  </div>
</template>
<style lang="scss" scoped>
.photo {
  border-radius: 50%;
  border-radius: 50%;
  object-fit: cover;
  width: 15.74vw;
  height: 15.74vw;
  @include max-media(768) {
    min-width: 130px;
    min-height: 130px;
  }
  &__container {
    @apply md:col-span-4 col-span-6;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 18.2461%;
  }
}
.text {
  &__en {
    font-size: 1.5rem;
    color: $text-color3;
    // line-height: 31.68px;
    letter-spacing: 1.224px;
    margin-top: 11.4379%;
    margin-bottom: 5.1742%;
    @include max-media(768) {
      font-size: 0.625rem;
      margin-bottom: 0;
    }
  }
  &__zh {
    font-size: 1.1125rem;
    line-height: 19.98px;
    @include max-media(768) {
      font-size: 0.625rem;
    }
  }
}
</style>
