<script setup>
import cover from "~/assets/images/newsbg.png";
import ProductItem from "./components/ProductItem.vue";
import CategorySelector from "./components/CategorySelector.vue";
const toggleRwdMenu = ref(false);

const RwdMenuShow = () => {
  toggleRwdMenu.value = !toggleRwdMenu.value;
};
</script>

<template>
  <NuxtLayout>
    <div class="filter__relative">
      <Banner :imgSrc="cover" customText="IW SELECT" />
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
            @click="RwdMenuShow"
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
      <div class="grid grid-cols-12 gap-4 inner-wrap">
        <div class="md:col-span-9 col-span-full grid grid-cols-12 gap-4">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <div class="col-span-12">
            <Paginator />
          </div>
        </div>
        <div class="md:col-span-3 md:block hidden">
          <CategorySelector />
        </div>
        <div
          v-show="toggleRwdMenu"
          class="rwd-menu-overlay"
          @click="RwdMenuShow"
        ></div>
        <!-- RWD選單 -->
        <div v-show="toggleRwdMenu" class="rwd-menu md:hidden">
          <CategorySelector />
        </div>
        <!-- 廣告 -->
        <div class="flex justify-center advertise col-span-full">
          <img
            src="~/assets/images/index4.png"
            alt=""
            class="photo__advertise"
          />
        </div>
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

.rwd-menu {
  display: none;
  position: absolute;
  top: 225px;
  right: 0;
  width: 90%;
  padding: 5%;
  margin-right: -10%;
  background-color: rgb(255, 255, 255);
  z-index: 200;
  box-shadow: 0px 13px 2.799999952316284px 0px #00000040;

  @include max-media(768) {
    display: block;
  }

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #d9d9d9b5;
    z-index: 100;
  }
}
.advertise {
  margin-top: 26.9389%;
  margin-bottom: 24.0338%;
  @include max-media(768) {
    margin-top: 12.0082%;
    margin-bottom: 40%;
  }
}
.photo__advertise {
  width: 66.158vw;
  height: 21.328vw;
}
</style>
