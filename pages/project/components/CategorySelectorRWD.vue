<script setup>
import { useGlobalStore } from "@/stores/global.js";

const globalStore = useGlobalStore();
const isChinese = computed(() => globalStore.language === "CN");
const titles = ref({
  categories: { en: "Categories", cn: "類別" },
  recentPosts: { en: "Recent Post", cn: "本週最新" },
  archive: { en: "Archive", cn: "年度精選" },
  popularTags: { en: "Popular Tags", cn: "熱門主題" },
});
const categoryList = ref([
  { name: "Furniture", count: 20 },
  { name: "Dining", count: 10 },
  { name: "Wellness", count: 10 },
  { name: "Bath", count: 10 },
  { name: "Kitchen", count: 10 },
  { name: "Wall", count: 10 },
  { name: "Floor", count: 10 },
]);

const recentPosts = ref([
  { name: "MORQ Room of Family..." },
  { name: "西澳大利亞珀斯 隱園" },
  { name: "MORQ Room of Family..." },
  { name: "西澳大利亞珀斯 隱園" },
  { name: "MORQ Room of Family..." },
  { name: "西澳大利亞珀斯 隱園" },
  { name: "MORQ Room of Family..." },
  { name: "西澳大利亞珀斯 隱園" },
  { name: "MORQ Room of Family..." },
  { name: "西澳大利亞珀斯 隱園" },
]);

const archives = ref([
  {
    year: "2023",
    months: [
      { name: "September", count: 10 },
      { name: "August", count: 8 },
      { name: "July", count: 8 },
    ],
  },
  { year: "2022", months: [] },
]);

const popularTags = ref(["Furniture", "Dining", "Wellness", "Kitchen"]);
</script>
<template lang="">
  <div class="col-start-10 col-span-3 selector grid">
    <!-- 類別 -->
    <div class="grid">
      <p class="selector__title">
        {{ isChinese ? titles.categories.cn : titles.categories.en }}
      </p>
      <button
        v-for="category in categoryList"
        :key="category.name"
        class="selector__options"
      >
        {{ category.name }} ({{ category.count }})
      </button>
    </div>

    <!-- 本週最新 -->
    <div class="grid">
      <p class="selector__title">
        {{ isChinese ? titles.recentPosts.cn : titles.recentPosts.en }}
      </p>
      <button
        v-for="post in recentPosts"
        :key="post.name"
        class="selector__recent"
      >
        {{ post.name }}
      </button>
    </div>

    <!--年度精選-->
    <div class="">
      <p class="selector__title">
        {{ isChinese ? titles.archive.cn : titles.archive.en }}
      </p>
      <div v-for="archive in archives" :key="archive.year">
        <button class="selector__options">{{ archive.year }}</button>
        <div v-for="month in archive.months" :key="month.name">
          <button class="selector__options">
            {{ month.name }}({{ month.count }})
          </button>
        </div>
      </div>
    </div>

    <!-- 熱門主題 -->
    <div class="grid grid-cols-12 gap-4 no-border-bottom">
      <p class="selector__title col-span-12">
        {{ isChinese ? titles.popularTags.cn : titles.popularTags.en }}
      </p>
      <button v-for="tag in popularTags" :key="tag" class="popular col-span-5">
        {{ tag }}
      </button>
    </div>

    <div class="card">
      <img src="~/assets/images/projectcard.svg" alt="" class="card-image" />
      <div class="card-description">
        <h2>BOURBON & SANDALWOOD</h2>
        <h2>EAU DE TOILETTE</h2>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.selector {
  color: $text-color3;
  font-size: 1.125rem;

  &__title {
    letter-spacing: 1.008px;
    padding-bottom: 15%;
  }

  &__options {
    letter-spacing: 0.714px;
    padding-bottom: 1.875rem;
    font-family: $font-NotoSerif;
  }

  &__recent {
    padding-bottom: 1rem;
    font-family: $font-NotoSerif;
  }

  &__recent:nth-child(odd) {
    padding-bottom: 1.875rem;
  }

  button {
    background: none;
    border: none;
    text-align: left;
    color: $text-color3;
    font-size: 0.875rem;
    font-family: $font-NotoSerif;

    // 熱門選項的按鈕
    &.popular {
      border: 0.5px solid rgba(0, 0, 0, 0.5);
      border-radius: 46px;
      text-align: center;
      font-size: 0.75rem;
      width: 106px;
      height: 30px;
    }
  }

  > div:not(.card) {
    padding-bottom: 20%;
  }

  > div:not(.card):not(.no-border-bottom) {
    border-bottom: 1px solid black;
  }

  > div:not(:first-child .card) {
    padding-top: 20%;
  }
}

// 廣告卡片樣式
.card {
  // width: 220px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 50%;
}

.card-image {
  width: 100%;
  display: block;
}

.card-description {
  padding: 16px;
  background-color: #000;
  color: #fff;
  font-family: $font-Noto;
}

.card-description h2 {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}
</style>
