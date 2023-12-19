<script setup></script>

<template lang="">
  <nav class="navigation--bar">
    <ul class="navigation__list">
      <li><button class="navigation__list__btn">個人資料</button></li>
      <li><button class="navigation__list__btn">訂單紀錄</button></li>
      <li><button class="navigation__list__btn">我的收藏</button></li>
      <li><button class="navigation__list__btn">瀏覽紀錄</button></li>
      <li><button class="navigation__list__btn">作品投稿</button></li>
    </ul>
    <span class="indicator"></span>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  &--bar {
    width: 100%;
    border-bottom: 3px solid #d9d9d9;
    justify-content: space-around;
    margin-bottom: 16.059%;
  }
  &__list {
    @apply flex flex-row justify-around;
    &__btn {
      font-size: 1rem;
      font-family: $font-NotoSerif;
      border: 0;
      background-color: white;
    }
  }
}
</style>
