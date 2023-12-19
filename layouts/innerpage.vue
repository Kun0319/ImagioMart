<script setup>
const FilterMenuOpen = ref(false);

const toggleFilterMenu = () => {
  FilterMenuOpen.value = !FilterMenuOpen.value;
};
</script>

<template>
  <div class="wrap">
    <HeaderSearch />
    <Navbar />
    <ReturnTop />
    <div class="filter__relative">
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
          <div class="tags-container md:flex hidden">
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
        <template #icon2>
          <div class="icon" v-show="!FilterMenuOpen">
            <i class="pi pi-heart mx-3"></i>
            <i class="pi pi-share-alt"></i>
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
  margin-bottom: 0%;
}
</style>
