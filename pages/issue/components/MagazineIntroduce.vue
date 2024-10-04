<script setup>
const route = useRoute();
const magazineId = route.params.Magazine;
const { data, error } = await useFetch(
  `https://iw-api.d-blueprint.com/api/issues/${magazineId}`,
);

// onMounted(() => console.log(data.value.data.info.en_title));
</script>

<template lang="">
  <div v-if="data" class="flex flex-col max-w-full items-center">
    <!-- <p class="h-16 info__new">Jun.27 / 2023 出刊消息</p> -->

    <p class="h-16 info__new">
      {{ data.data.info.category }}
    </p>
    <div class="flex flex-col md:max-w-full lg:w-auto w-9/12">
      <img src="@/assets/images/MagazineContent.svg" alt="" />
    </div>
    <!-- <p class="info__month">IW傢飾 11月號 / 2023 第153期</p> -->
    <!-- <p class="info__content text-center">
      本期雙封面精選<br />
      墨西哥米卻肯．拉彼達之家<br />
      義大利．2023 威尼斯建築雙年展：一個循環的故事
    </p> -->
    <!-- <p class="info__price">NT$300</p> -->

    <p class="info__month">{{ data.data.info.title }}</p>
    <p
      class="info__content text-center"
      v-html="data.data.info.description"
    ></p>
    <p class="info__price">NT$ {{ data.data.info.price }}</p>
    <a href="/" class="info__shopcart">ADD TO CART</a>
  </div>
</template>

<style lang="scss" scoped>
.info {
  &__content {
  }

  &__month {
    padding-top: 3.75rem;
  }

  &__price {
  }

  &__shopcart {
  }
}
</style>
