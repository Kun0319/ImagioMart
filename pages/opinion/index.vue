<script setup>
import PeopleOpinioin from "./components/PeopleOpinioin.vue";
import cover from "~/assets/images/opinion.png";
import FilterMenu from "~/components/FilterMenu.vue";

const FilterMenuOpen = ref(false);

const toggleFilterMenu = () => {
  FilterMenuOpen.value = !FilterMenuOpen.value;
};
// 分頁器
const currentPage = ref(1);
const updateCurrentPage = (newPage) => {
  currentPage.value = newPage;
};
</script>
<template>
  <NuxtLayout>
    <div class="filter__relative">
      <Banner :imgSrc="cover" />
      <BreadcrumbLine text="Home&nbsp; /&nbsp; Opinion " :showTags="true">
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
          <div class="md:flex hidden">
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
            <!-- <div
              class="icon-container justify-self-end md:flex hidden"
              @click="toggleFilterMenu"
            >
              <img src="~/assets/icon/Filter.svg" alt="Filter" class="icon" />
              <span>Filter&nbsp;&nbsp;▾</span>
            </div> -->
          </div>
        </template>
      </BreadcrumbLine>
    </div>
    <!-- 篩選選單 -->
    <!-- <div class="filter__menu" v-show="FilterMenuOpen">
      <div
        v-show="FilterMenuOpen"
        class="overlay"
        @click="toggleFilterMenu"
      ></div>
      <FilterMenu />
    </div> -->
    <div class="inner-wrap">
      <PeopleOpinioin :page="currentPage" />
    </div>
    <Paginator
      :totalRecords="50"
      :rows="8"
      :page="currentPage.value"
      @update:page="updateCurrentPage"
    />
    <div class="advertise grid-cols-12 gap-12 md:grid hidden inner-wrap">
      <div class="col-span-4" v-for="n in 6" :key="n">
        <LittleAdvertise />
      </div>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
// 消除FilterMenu共用組件margin-top
.filter__menu {
  margin-top: 6.5773%;
}

:deep(.icon__one) {
  display: flex;
  justify-content: space-between;
}

.tag-button {
  margin-bottom: 3.698%;

  @include max-media(769) {
    display: none;
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

// :deep(.line) {
//   margin-bottom: 0%;
// }

.advertise {
  margin-top: 17.0624%;
  margin-bottom: 20%;
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
</style>
