<script setup>
import { computed, inject } from "vue";
// import cover from "~/assets/images/newsbg.png";
const FilterMenuOpen = ref(false);

const toggleFilterMenu = () => {
  FilterMenuOpen.value = !FilterMenuOpen.value;
};

const props = defineProps({
  breadcrumbText: {
    type: String,
    default: "Home /News/Furniture",
  },
  cover: {
    type: String,
  },
  customText: {
    type: String,
  },
});
</script>

<template>
  <div class="wrap">
    <HeaderSearch />
    <Navbar />
    <ReturnTop />
    <ShoppingCart />
    <div class="filter__relative">
      <Banner :imgSrc="cover" :customText="customText" />
      <BreadcrumbLine :text="breadcrumbText" :showTags="true" :showIcon="true">
        <template #icon>
          <img
            src="~/assets/icon/sliders.svg"
            alt=""
            class="xl:hidden block relative"
            @click="toggleFilterMenu"
          />
        </template>
        <!-- 類別按鈕 -->v-if="cover"
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

:deep(.icon__one) {
  display: flex;
  justify-content: space-between;
}

.icon {
  display: flex;
  justify-content: flex-end;
  margin-top: 2.37%;
}

.tag-button {
  // margin-top: 1%;
  margin-bottom: 3.698%;

  @include max-media(768) {
    margin-top: 1.5%;
    margin-bottom: 1.5%;
    min-height: 17px;
  }
}

.tags-container {
  display: flex;
  flex-wrap: wrap;

  @include max-media(1024) {
    justify-content: start;

    @include max-media(500) {
      justify-content: start;
    }

    @include max-media(396) {
      justify-content: space-around;
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
</style>
