<script setup>
import StorySwiperPic from "./components/StorySwiperPic.vue";
import StoryInfo from "./components/StoryInfo.vue";
import cover from "~/assets/images/Storycover.png";
const FilterMenuOpen = ref(false);

const toggleFilterMenu = () => {
  FilterMenuOpen.value = !FilterMenuOpen.value;
};
</script>
<template>
  <NuxtLayout>
    <div class="filter__relative">
      <Banner :img-src="cover" />
      <BreadcrumbLine
        text="Home &nbsp;/&nbsp; Story &nbsp;/ &nbsp;Furniture "
        :show-tags="true"
        :show-icon="true"
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
              <TagButton :tag="'All'" />
            </nuxt-link>
            <nuxt-link to="/search/Dining" class="tag-button">
              <TagButton :tag="'Furniture'" />
            </nuxt-link>
            <nuxt-link to="/search/Dining" class="tag-button">
              <TagButton :tag="'Dining'" />
            </nuxt-link>
            <nuxt-link to="/search/Dining" class="tag-button">
              <TagButton :tag="'Bath'" />
            </nuxt-link>
            <nuxt-link to="/search/Dining" class="tag-button">
              <TagButton :tag="'Kitchen'" />
            </nuxt-link>
            <nuxt-link to="/search/Dining" class="tag-button">
              <TagButton :tag="'Wellness'" />
            </nuxt-link>
            <nuxt-link to="/search/Dining" class="tag-button">
              <TagButton :tag="'Wall'" />
            </nuxt-link>
            <nuxt-link to="/search/Dining" class="tag-button">
              <TagButton :tag="'Floor'" />
            </nuxt-link>
            <!-- 篩選按鈕 -->
            <div
              class="icon-container justify-self-end md:flex hidden"
              @click="toggleFilterMenu"
            >
              <img src="~/assets/icon/Filter.svg" alt="Filter" class="icon" />
              <span>Filter&nbsp;&nbsp;▾</span>
            </div>
          </div>
        </template>
      </BreadcrumbLine>
    </div>
    <!-- 篩選選單 -->
    <div v-show="FilterMenuOpen" class="filter__menu">
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
      <StoryInfo />
      <StoryInfo />
      <StoryInfo />
      <StoryInfo />
    </div>
    <div class="rwd-wrap">
      <Paginator />
    </div>
    <div class="grid-cols-12 gap-12 md:grid hidden advertise inner-wrap">
      <div v-for="n in 6" :key="n" class="col-span-4">
        <LittleAdvertise />
      </div>
    </div>
    <PaginationAdvertise class="pagination-advertise" />
  </NuxtLayout>
</template>
<style lang="scss" scoped>
:deep(.icon__one) {
  display: flex;
  justify-content: space-between;
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
  @include max-media(768) {
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
