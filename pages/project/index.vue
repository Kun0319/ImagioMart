<script setup>
import Background from "./components/Background.vue";
import ScopeLine from "./components/ScopeLine.vue";
// import SwiperPic from "./components/SwiperPic.vue";
import ProjectShowcase from "./components/ProjectShowcase.vue";
import CategorySelector from "./components/CategorySelector.vue";
import CategorySelectorRWD from "./components/CategorySelectorRWD.vue";
import LoadMore from "./components/LoadMore.vue";

const isRwdMenuOpen = ref(false);

const toggleRwdMenu = () => {
  isRwdMenuOpen.value = !isRwdMenuOpen.value;
};
</script>
<template>
  <NuxtLayout>
    <Background />

    <BreadcrumbLine
      text="Home&nbsp;  /&nbsp;  Story &nbsp; /&nbsp;  Scope "
      :showIcon="true"
    >
      <template #icon>
        <img
          src="~/assets/icon/sliders.svg"
          alt=""
          class="md:hidden block relative"
          @click="toggleRwdMenu"
        />
      </template>
    </BreadcrumbLine>
    <div v-show="isRwdMenuOpen" class="overlay" @click="toggleRwdMenu"></div>
    <div v-show="isRwdMenuOpen" class="rwd-menu">
      <CategorySelectorRWD />
    </div>
    <div class="inner-wrap">
      <SwiperPic />
      <div class="grid grid-cols-12 gap-4">
        <div class="md:col-span-9 col-span-12 grid grid-cols-10 gap-4">
          <ProjectShowcase
            v-for="n in 10"
            :key="n"
            :class="[
              n % 2 !== 0 ? 'col-start-1' : 'col-start-6',
              'md:block hidden col-span-4 ',
            ]"
          />

          <ProjectShowcase
            v-for="n in 7"
            :key="n"
            :class="' md:hidden block col-span-12'"
          />
        </div>
        <div class="col-span-3 md:block hidden">
          <CategorySelector class="col-start-10 col-span-3" />
        </div>
        <LoadMore class="md:col-span-8 col-span-12" />
      </div>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
:deep(.icon) {
  display: flex;
  margin-bottom: 2rem;
}

:deep(.line__text) {
  margin-bottom: 1.7551%;
  // margin-bottom: 17551%;
}

.rwd-menu {
  display: block;
  position: absolute;
  top: 200px;
  right: 0;
  width: 90%;
  padding: 5%;
  background-color: rgb(255, 255, 255);
  z-index: 200;
  box-shadow: 0px 13px 2.799999952316284px 0px #00000040;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
}
</style>
