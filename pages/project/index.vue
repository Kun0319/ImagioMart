<script setup>
import ProjectShowcase from "./components/ProjectShowcase.vue";
import CategorySelector from "./components/CategorySelector.vue";
import LoadMore from "./components/LoadMore.vue";
import cover from "~/assets/images/ScopeBg.png";
const isRwdMenuOpen = ref(false);

const toggleRwdMenu = () => {
  isRwdMenuOpen.value = !isRwdMenuOpen.value;
};

// 假swiper 待API
const ImageArray = [
  {
    url: "/images/SwiperPic.svg", // 圖片路徑
    title: "ANA Studio", // 圖片標題
    description: "Cooking and art", // 圖片描述
    descriptionZh: "西澳大利亞珀斯 隱園", // 圖片描述
  },
  {
    url: "/images/SwiperPic.svg", // 圖片路徑
    title: "ANA Studio", // 圖片標題
    description: "Cooking and art", // 圖片描述
    descriptionZh: "西澳大利亞珀斯 隱園", // 圖片描述
  },
  {
    url: "/images/SwiperPic.svg", // 圖片路徑
    title: "ANA Studio", // 圖片標題
    description: "Cooking and art", // 圖片描述
    descriptionZh: "西澳大利亞珀斯 隱園", // 圖片描述
  },
];
// 假project 待API
const projects = [
  {
    id: "1",
    name: "Project A",
    imageUrl: "/images/newthree.png",
  },
  {
    id: "2",
    name: "Project B",
    imageUrl: "/images/newtwo.png",
  },
  {
    id: "3",
    name: "Project B",
    imageUrl: "/images/newtwo.png",
  },
  {
    id: "4",
    name: "Project B",
    imageUrl: "/images/newone.png",
  },
  {
    id: "5",
    name: "Project B",
    imageUrl: "/images/newone.png",
  },
  {
    id: "6",
    name: "Project B",
    imageUrl: "/images/newseven.jpeg",
  },
  {
    id: "7",
    name: "Project B",
    imageUrl: "/images/newseven.jpeg",
  },
  {
    id: "8",
    name: "Project B",
    imageUrl: "/images/newseven.jpeg",
  },
  {
    id: "9",
    name: "Project B",
    imageUrl: "/images/newtwo.png",
  },
  {
    id: "10",
    name: "Project B",
    imageUrl: "/images/newtwo.png",
  },
  {
    id: "11",
    name: "Project A",
    imageUrl: "/images/newfour.png",
  },
  {
    id: "12",
    name: "Project B",
    imageUrl: "/images/newfour.png",
  },
  {
    id: "13",
    name: "Project B",
    imageUrl: "/images/newfour.png",
  },
  {
    id: "14",
    name: "Project B",
    imageUrl: "/images/newthree.png",
  },
  {
    id: "15",
    name: "Project B",
    imageUrl: "/images/newtwo.png",
  },
  {
    id: "16",
    name: "Project B",
    imageUrl: "/images/newone.png",
  },
];
// 小螢幕前7個
const firstSevenProjects = computed(() => projects.slice(0, 7));
</script>
<template>
  <NuxtLayout>
    <div class="filter__relative">
      <Banner :imgSrc="cover" />
      <BreadcrumbLine
        text="Home&nbsp; /&nbsp; Project &nbsp;/&nbsp; Scope"
        :showTags="true"
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
        <!-- 類別按鈕 -->
      </BreadcrumbLine>

      <div
        v-show="isRwdMenuOpen"
        class="rwd-menu-overlay"
        @click="toggleRwdMenu"
      ></div>
      <div v-show="isRwdMenuOpen" class="rwd-menu">
        <CategorySelector />
      </div>
      <div class="inner-wrap">
        <SwiperPic :images="ImageArray" />
        <div class="grid grid-cols-12 2xl:gap-4 gap-8">
          <div
            class="md:col-span-9 col-span-full grid grid-cols-12 gap-4 rwd-margin"
          >
            <!-- 子組件 -->
            <div
              v-for="project in projects"
              :key="project.id"
              :class="[
                project.id % 2 !== 0 ? 'md:col-start-1' : 'md:col-start-7',
                '  md:col-span-6  col-span-12 ',
                'md:justify-self-center',
              ]"
            >
              <ProjectShowcase :project="project" />
            </div>
          </div>
          <div class="col-span-3 md:inline-block hidden">
            <CategorySelector class="col-start-10 col-span-3" />
          </div>
          <LoadMore class="md:col-span-8 col-span-12" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
// 12/20
:deep(.icon__one) {
  @include max-media(768) {
    display: flex;
    justify-content: space-between;
  }

  // margin-bottom: 2rem;
}

:deep(.line__text) {
  // margin-bottom: 1.7551%;
}

.rwd-margin {
  @include max-media(768) {
    margin-top: 31.0318%;
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
</style>
