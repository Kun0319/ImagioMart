<script setup>
import { computed, inject } from "vue";

const FilterMenuOpen = ref(false);

const toggleFilterMenu = () => {
  FilterMenuOpen.value = !FilterMenuOpen.value;
};

const props = defineProps({
  breadcrumbText: {
    type: String,
    default: "Home /News/Furniture",
  },
});
</script>

<template>
  <div class="wrap">
    <HeaderSearch />
    <Navbar />
    <ReturnTop />
    <div class="filter__relative">
      <BreadcrumbLine :text="breadcrumbText" :showTags="true" :showIcon="true">
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
          <div class="tags-container md:flex hidden">
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
              class="Filtericon-container justify-self-end md:flex hidden"
              @click="toggleFilterMenu"
            >
              <img
                src="~/assets/icon/Filter.svg"
                alt="Filter"
                class="Filtericon"
              />

              <span>Filter&nbsp;&nbsp;▾</span>
            </div>
          </div>
        </template>
        <!-- <template #icon2>
          <div class="icon" v-show="!FilterMenuOpen">
            <i class="pi pi-heart mx-3"></i>
            <i class="pi pi-share-alt"></i>
          </div>
        </template> -->
      </BreadcrumbLine>
    </div>
    <div class="filter__menu" v-show="FilterMenuOpen">
      <div
        v-show="FilterMenuOpen"
        class="overlay"
        @click="toggleFilterMenu"
      ></div>
      <FilterMenu />
    </div>
    <main class="">
      <slot />
    </main>
  </div>
  <Footer />
</template>
<style lang="scss" scoped>
.Filtericon {
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
.icon {
  display: flex;
  justify-content: flex-end;
  margin-top: 2.37%;
}

.tag-button {
  margin-top: 3.35%;
  margin-bottom: 3.698%;
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
}
:deep(.line) {
  // margin-bottom: 0%;
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
