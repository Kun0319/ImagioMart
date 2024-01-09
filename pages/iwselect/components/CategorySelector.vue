<script setup>
import { useGlobalStore } from "@/stores/global.js";

const globalStore = useGlobalStore();
const isChinese = computed(() => globalStore.language === "CN");
const titles = ref({
  categories: { en: "Categories", cn: "案例類別" },
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
  { nameEn: "MORQ Room of Family...", nameCn: "西澳大利亞珀斯 隱園" },
  { nameEn: "MORQ Room of Family...", nameCn: "西澳大利亞珀斯 隱園" },
  { nameEn: "MORQ Room of Family...", nameCn: "西澳大利亞珀斯 隱園" },
  { nameEn: "MORQ Room of Family...", nameCn: "西澳大利亞珀斯 隱園" },
  { nameEn: "MORQ Room of Family...", nameCn: "西澳大利亞珀斯 隱園" },
  { nameEn: "MORQ Room of Family...", nameCn: "西澳大利亞珀斯 隱園" },
]);

const archives = ref([
  {
    year: "2023",
    months: [
      { nameEn: "September", nameCn: "九月", count: 10 },
      { nameEn: "August", nameCn: "八月", count: 8 },
      { nameEn: "July", nameCn: "七月", count: 8 },
    ],
  },
  { year: "2022", months: [] },
]);

const popularTags = ref(["Furniture", "Dining", "Wellness", "Kitchen"]);
const monthlist = ref(false);

const clickyear = () => {
  monthlist.value = !monthlist.value;
  console.log(monthlist.value);
};
</script>
<template lang="">
  <div class="col-start-10 col-span-3 selector grid">
    <!--  案例類別 -->
    <div class="flex flex-col selector__category">
      <!-- 標題 -->
      <p class="selector__title">
        {{ isChinese ? titles.categories.cn : titles.categories.en }}
      </p>
      <button
        v-for="category in categoryList"
        :key="category.name"
        class="selector__options selectorbutton"
      >
        {{ category.name }} ({{ category.count }})
      </button>
    </div>

    <!-- 熱門主題 -->
    <div class="grid grid-cols-12 gap-4 no-border-bottom">
      <p class="selector__title col-span-12">
        {{ isChinese ? titles.popularTags.cn : titles.popularTags.en }}
      </p>
      <button v-for="tag in popularTags" :key="tag" class="button col-span-6">
        {{ tag }}
      </button>
    </div>
    <div class="card">
      <img src="~/assets/images/projectcard2.jpeg" alt="" class="card-image" />
      <div class="card-description">
        <p>BOURBON & SANDALWOOD</p>
        <p>EAU DE TOILETTE</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.selector {
  color: $text-color3;
  font-size: 1.125rem;

  &__category {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__title {
    letter-spacing: 1.008px;
    padding-bottom: 5.9681%;
  }

  &__options {
    letter-spacing: 0.714px;
    // padding-bottom: 1.875rem;
    font-family: $font-NotoSerif;

    &__month {
      @extend .selector__options;
      padding-left: 1.5rem;
      padding-top: 4.9734%;
      padding-bottom: 4.9734%;
    }
  }

  &__recent {
    // padding-bottom: 1rem;
    // font-family: $font-NotoSerif;
  }

  &__recent:nth-child(odd) {
    // padding-bottom: 1.875rem;
  }

  .selectorbutton {
    background: none;
    border: none;
    text-align: left;
    justify-content: center;
    color: $text-color3;
    font-size: 0.875rem;
    font-family: $font-NotoSerif;
  }

  .button {
    text-align: center;
    width: 100%;
    max-width: 108px;
    max-height: 30px;
    font-size: 0.75rem;
    padding: 5% 10%;
  }

  > div:not(.card) {
    padding-bottom: 10%;

    @include min-media(1024) {
      padding-bottom: 20%;
    }
  }

  > div:not(.card):not(.no-border-bottom) {
    border-bottom: 1px solid black;
  }

  // > div:not(:first-child .card) {
  //   padding-top: 20%;
  // }
  > div:not(:first-child):not(.card) {
    padding-top: 20%;
  }
}

// 廣告卡片樣式
.card {
  border: 1px solid #ccc;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 50%;
  width: 15.68vw;
  height: 23.03vw;
  min-width: 271px;
  min-height: 384px;
  @include max-media(768) {
    justify-self: center;
  }
}

.card-image {
  width: 100%;
  height: 100%;
  display: block;
}

.card-description {
  position: absolute;
  padding-left: 9.6842%;
  font-family: $font-Noto;
  color: white;
  font-size: 1rem;
  font-size: clamp(10px, 1vw, 16px);
  left: 0;
  top: 75%;
  width: 100%;
  font-weight: 700;
}
</style>
