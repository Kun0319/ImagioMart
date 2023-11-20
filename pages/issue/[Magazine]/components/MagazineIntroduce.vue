<script setup></script>

<template lang="">
  <div class="flex flex-col max-w-full items-center gap-7">
    <p class="h-16 info__new">Jun.27 / 2023 出刊消息</p>
    <div class="flex flex-col md:max-w-full lg:w-auto w-9/12">
      <img src="@/assets/images/MagazineContent.svg" alt="" />
    </div>
    <p class="info__month">IW傢飾 11月號 / 2023 第153期</p>
    <p class="info__content text-center">
      本期雙封面精選<br />
      墨西哥米卻肯．拉彼達之家<br />
      義大利．2023 威尼斯建築雙年展：一個循環的故事
    </p>
    <p class="info__price">NT$300</p>
    <a href="/" class="info__shopcart">ADD TO CART</a>
  </div>
</template>

<style lang="scss" scoped>
.info {
  &__content {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  &__month {
    padding-top: 3rem;
  }
  &__price {
    padding-top: 1.2rem;
  }
  &__shopcart {
    padding: 0.6% 1.1%;
    font-size: 0.55rem;
    margin-top: -0.5rem;
    margin-bottom: 1rem;
  }
}
</style>
