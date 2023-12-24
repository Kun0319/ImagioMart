<script setup>
import PeopleOpinioin from "./components/PeopleOpinioin.vue";
import cover from "~/assets/images/opinion.png";

const FilterMenuOpen = ref(false);

const toggleFilterMenu = () => {
  FilterMenuOpen.value = !FilterMenuOpen.value;
};
</script>
<template>
  <NuxtLayout>
    <div class="filter__relative">
      <Banner :imgSrc="cover" />
      <BreadcrumbLine
        text="Home&nbsp; /&nbsp; Opinion "
        :showTags="true"
        :showIcon="true"
      >
        <template #icon>
          <img
            src="~/assets/icon/sliders.svg"
            alt=""
            class="xl:hidden block relative"
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
    <div class="filter__menu" v-show="FilterMenuOpen">
      <div
        v-show="FilterMenuOpen"
        class="overlay"
        @click="toggleFilterMenu"
      ></div>
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
:deep(.icon__one) {
  display: flex;
  justify-content: space-between;
}
:deep(.line) {
  margin-top: 4.7357%;
}

.tag-button {
  margin-top: 3.35%;
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

:deep(.line) {
  margin-bottom: 0%;
}

.advertise {
  margin-top: 30.7421%;
  margin-bottom: 26.1124%;
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
