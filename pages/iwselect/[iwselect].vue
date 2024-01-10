<script setup>
import TextImageBlock from "./components/TextImageBlock.vue";
import Navigation from "./components/Navigation.vue";
import RecommendedProducts from "./components/RecommendedProducts.vue";
import pic from "~/assets/images/select1.jpeg";
import Pagination from "./components/Pagination.vue";
const slidesData = ref([
  {
    imageUrl: pic,
    company: "Tabouret Haut ",
    projectName: "Patrick Norguet",
    projectLocation: "售價 NT$450",
  },
  {
    imageUrl: pic,
    company: "Shell Chair 貝殼椅",
    projectName: "高腳圓凳 ",
    projectLocation: " 售價 NT$450",
  },
  {
    imageUrl: pic,
    company: "Tabouret Haut ",
    projectName: "高腳圓凳 ",
    projectLocation: "售價 NT$450",
  },
]);
</script>
<template>
  <NuxtLayout>
    <div class="filter__relative">
      <BreadcrumbLine
        text="Home &nbsp;/&nbsp; IW Select "
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
          </div>
        </template>
      </BreadcrumbLine>
      <div class="inner-wrap">
        <TextImageBlock />
        <Navigation />
        <BrandDescription />
        <RecommendedProducts />
        <Pagination :slidesData="slidesData" class="pagination">
          <template #title>
            <slot name="title">推薦選品 </slot>
          </template>
        </Pagination>
      </div>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.inner-wrap {
  @include max-media(768) {
    padding-left: 0;
    padding-right: 0;
  }
}
.text-wrap {
  padding-left: 12.218%;
  padding-right: 12.218%;
}

.Filtericon-container {
  display: none;
}

.rwd-wrap {
  @include max-media(768) {
    margin-top: 15%;
  }
}

.photo {
  width: 100%;
}

.icon {
  display: flex;
  justify-content: flex-end;
  margin-top: 2.37%;
}

.text {
  font-size: 0.8125rem;
  color: $text-color3;

  &__wrap {
    padding-left: 12.2298%;
    padding-right: 12.2298%;
    margin-top: 15.23%;

    @include max-media(768) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  &__cn {
    line-height: 33.5px;
    margin-bottom: 8.5%;
    font-size: 1rem;

    @include max-media(768) {
      margin-bottom: 17.57%;
      font-size: 0.75rem;
    }
  }

  &__en {
    font-family: $font-Noto;
    line-height: 24.96px;
    margin-bottom: 13.653%;
    font-size: 1rem;
    font-weight: 300;
    text-align: justify;
    letter-spacing: 0.51px;

    @include max-media(768) {
      margin-bottom: 52.6%;
      font-size: 0.75rem;
    }
  }
}

.introduce {
  border-top: 1px solid rgba(0, 0, 0);
  border-bottom: 1px solid rgba(0, 0, 0);
  padding-top: 6.36622%;
  padding-bottom: 6.36622%;
  color: $text-color3;
  font-family: $font-Noto;
  margin-bottom: 13.653%;

  @include max-media(768) {
    padding-top: 15.1%;
    padding-bottom: 15.6%;
    margin-bottom: 67.7%;
  }

  &__one {
    margin-bottom: 1.6%;
    letter-spacing: 0.36px;
    font-weight: 400;

    @include max-media(768) {
      margin-bottom: 4.899%;
    }
  }

  &__two {
    font-size: 1rem;
    margin-bottom: 3.099%;
    line-height: 20.94px;
    font-weight: 700;
    color: black;

    @include max-media(768) {
      margin-bottom: 11.25%;
    }
  }

  &__three {
    font-size: 0.8125rem;
    letter-spacing: 0.51px;
    line-height: 24.96px;
    margin-bottom: 4.1045%;

    @include max-media(768) {
      margin-bottom: 14.61%;
    }
  }

  &__four {
    font-size: 0.8125rem;
    padding-right: 5%;
  }
}

.pagination {
  margin-bottom: 57.2565%;
}
</style>
