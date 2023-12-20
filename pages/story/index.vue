<script setup>
import StorySwiperPic from "./components/StorySwiperPic.vue";
import StoryInfo from "./components/StoryInfo.vue";
import cover from "~/assets/images/Storycover.png";
const FilterMenuOpen = ref(false);

const toggleFilterMenu = () => {
  FilterMenuOpen.value = !FilterMenuOpen.value;
  console.log(FilterMenuOpen.value);
};
</script>
<template>
  <NuxtLayout>
    <div class="filter__relative">
      <Banner :imgSrc="cover" />
      <BreadcrumbLine
        text="Home &nbsp;/&nbsp; Story &nbsp;/ &nbsp;Furniture "
        :showTags="true"
        :showIcon="true"
      >
        <template #icon>
          <img
            src="~/assets/icon/sliders.svg"
            alt=""
            class="md:hidden block relative"
            @click="toggleFilterMenu"
          />
        </template>
        <!-- 類別按鈕 -->
        <template #tags>
          <div class="tags-container">
            <nuxt-link to="/search/Dining" class="tag-button">
              <TagButton :tag="'All(23)'" />
            </nuxt-link>
            <nuxt-link to="/search/Dining" class="tag-button">
              <TagButton :tag="'Furniture(5)'" />
            </nuxt-link>
            <nuxt-link to="/search/Dining" class="tag-button">
              <TagButton :tag="'Dining(6)'" />
            </nuxt-link>
            <nuxt-link to="/search/Dining" class="tag-button">
              <TagButton :tag="'Bath(5)'" />
            </nuxt-link>
            <nuxt-link to="/search/Dining" class="tag-button">
              <TagButton :tag="'Kitchen(6)'" />
            </nuxt-link>
            <nuxt-link to="/search/Dining" class="tag-button">
              <TagButton :tag="'Wellness(5)'" />
            </nuxt-link>
            <nuxt-link to="/search/Dining" class="tag-button">
              <TagButton :tag="'Wall(5)'" />
            </nuxt-link>
            <nuxt-link to="/search/Dining" class="tag-button">
              <TagButton :tag="'Floor(6)'" />
            </nuxt-link>
            <!-- 篩選按鈕 -->
            <div class="icon-container" @click="toggleFilterMenu">
              <img src="~/assets/icon/Filter.svg" alt="Filter" class="icon" />
              <span>Filter&nbsp;&nbsp;▾</span>
            </div>
          </div>
        </template>
      </BreadcrumbLine>
    </div>
    <!-- 篩選選單 -->
    <div class="filter__menu" v-show="FilterMenuOpen">
      <div
        v-show="FilterMenuOpen"
        class="overlay"
        @click="toggleFilterMenu"
      ></div>
      <FilterMenu />
    </div>
    <div class="inner-wrap">
      <StorySwiperPic />
      <StoryInfo />
      <StoryInfo />
      <StoryInfo />
      <StoryInfo />
    </div>
    <Paginator />
    <div class="grid-cols-12 gap-12 md:grid hidden advertise inner-wrap">
      <div class="col-span-4" v-for="n in 6" :key="n">
        <LittleAdvertise />
      </div>
    </div>
    <PaginationAdvertise class="pagination-advertise" />
  </NuxtLayout>
</template>
<style lang="scss" scoped>
:deep(.line) {
  margin-top: 4.7357%;
  margin-bottom: 0%;
  @include max-media(768) {
    // margin-bottom: 24%;
  }
}

:deep(.icon__one) {
  display: flex;
  justify-content: space-between;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  @include max-media(1024) {
    justify-content: start;

    @include max-media(500) {
      justify-content: space-around;
    }
    @include max-media(396) {
      justify-content: start;
    }
  }

  .tag-button {
    margin-top: 3.35%;
    margin-bottom: 3.698%;
    font-size: 0.6875rem;

    @include max-media(769) {
      display: flex;
      font-size: 0.5rem;
      padding-top: 1.5%;
      padding-bottom: 1.5%;
      margin-top: 0;
      margin-bottom: 0;
      margin-left: 1%;
      margin-right: 1%;
    }
  }
}
.icon {
  margin-right: 10%;
  &-container {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: auto;
    @include max-media(768) {
      display: none;
    }
  }
}

.overlay {
  @include max-media(1024) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #d9d9d9b5;
    z-index: 20;
  }
}

.advertise {
  margin-top: 20%;
  margin-bottom: 15%;
}
.pagination-advertise {
  display: none;
  @include max-media(768) {
    display: block;
    margin-bottom: 59.706%;
    margin-top: 56.6442%;
  }
}
</style>
