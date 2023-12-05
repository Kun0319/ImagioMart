<script setup>
import StorySwiperPic from "./components/StorySwiperPic.vue";
import StoryCover from "./components/StoryCover.vue";
import StoryInfo from "./components/Storyinfo.vue";
const FilterMenuOpen = ref(false);

const toggleFilterMenu = () => {
  FilterMenuOpen.value = !FilterMenuOpen.value;
  console.log(FilterMenuOpen.value);
};
</script>
<template>
  <NuxtLayout>
    <div class="filter__relative">
      <StoryCover />
      <BreadcrumbLine
        text="Home / Story / Furniture "
        :showTags="true"
        :showIcon="true"
      >
        <template #icon>
          <img
            src="~/assets/icon/sliders.svg"
            alt=""
            class="md:hidden block relative"
            @click="toggleRwdMenu"
          />
        </template>
        <!-- 類別按鈕 -->
        <template #tags>
          <div class="tags-container">
            <TagButton :tag="'All(23)'" class="tag-button" />
            <TagButton :tag="'Furniture(5)'" class="tag-button" />
            <TagButton :tag="'Dining(6)'" class="tag-button" />
            <TagButton :tag="'Bath(5)'" class="tag-button" />
            <TagButton :tag="'Kitchen(6)'" class="tag-button" />
            <TagButton :tag="'Wellness(5)'" class="tag-button" />
            <TagButton :tag="'Wall(5)'" class="tag-button" />
            <TagButton :tag="'Floor(6)'" class="tag-button" />
            <!-- 篩選按鈕 -->
            <div class="icon-container" @click="toggleFilterMenu">
              <img src="~/assets/icon/Filter.svg" alt="Filter" class="" />
              <span>Filter ▾</span>
            </div>
          </div>
        </template>
      </BreadcrumbLine>
    </div>
    <!-- 篩選選單 -->
    <div class="filter__menu" v-show="FilterMenuOpen">
      <FilterMenu />
    </div>
    <div class="inner-wrap">
      <StorySwiperPic />
      <StoryInfo />
      <StoryInfo />
      <StoryInfo />
      <StoryInfo />
      <div class="grid-cols-12 gap-12 md:grid hidden">
        <div class="col-span-4" v-for="n in 6" :key="n">
          <LittleAdvertise />
        </div>
      </div>
    </div>
    <Paginator />
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.line {
  margin-bottom: 10%;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;

  .tag-button {
    margin-top: 3.35%;
    margin-bottom: 3.698%;

    font-size: 0.6875rem;
    @include max-media(768) {
      display: flex;
      font-size: 0.5rem;
      padding: 3.1%;
    }
  }
}

.icon-container {
  display: flex;
  align-items: center;
  margin-left: auto;
  @include max-media(768) {
    display: none;
  }
}

.filter {
  &__relative {
    position: relative;
  }

  &__menu {
    position: absolute;
    width: 100%;
    top: 577px;
    right: 140px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
