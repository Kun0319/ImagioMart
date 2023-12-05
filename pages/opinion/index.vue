<script setup>
import OpinionCover from "./components/OpinionCover.vue";
import PeopleOpinioin from "./components/PeopleOpinioin.vue";
const FilterMenuOpen = ref(false);

const toggleFilterMenu = () => {
  FilterMenuOpen.value = !FilterMenuOpen.value;
};
</script>
<template lang="">
  <NuxtLayout>
    <div class="filter__relative">
      <OpinionCover />
      <BreadcrumbLine text="Home / Opinion " :showTags="true" :showIcon="true">
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
          <div class="tags-container md:flex hidden">
            <TagButton :tag="'All(23)'" class="tag-button" />
            <TagButton :tag="'Furniture(5)'" class="tag-button" />
            <TagButton :tag="'Dining(6)'" class="tag-button" />
            <TagButton :tag="'Bath(5)'" class="tag-button" />
            <TagButton :tag="'Kitchen(6)'" class="tag-button" />
            <TagButton :tag="'Wellness(5)'" class="tag-button" />
            <TagButton :tag="'Wall(5)'" class="tag-button" />
            <TagButton :tag="'Floor(6)'" class="tag-button" />
            <!-- 篩選按鈕 -->
            <div
              class="icon-container justify-self-end md:flex hidden"
              @click="toggleFilterMenu"
            >
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
      <PeopleOpinioin />
    </div>
    <Paginator />
    <div class="advertise grid-cols-12 gap-12 md:grid hidden inner-wrap">
      <div class="col-span-4" v-for="n in 6" :key="n">
        <LittleAdvertise />
      </div>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
:deep(.tags) {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

:deep(.icon) {
  display: flex;
  // justify-content: space-between;
  margin-bottom: 2rem;
}

.tags-container {
  // display: flex;
}
.tag-button {
  margin-top: 3.35%;
  margin-bottom: 3.698%;
}

.icon-container {
  // display: flex;
  align-items: center;
  margin-left: auto;
}

.line {
  margin-bottom: 0;
}

.filter {
  &__relative {
    position: relative;
  }

  &__menu {
    position: absolute;
    width: 100%;
    // top: 100%;
    right: 8.45%;
    display: flex;
    justify-content: flex-end;
  }
}
.advertise {
  margin-top: 30.7421%;
  margin-bottom: 26.1124%;
}
</style>
