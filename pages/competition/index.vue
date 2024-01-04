<script setup>
import Advertise from "../issue/components/Advertise.vue";
import bg from "@/public/images/CompetitionBg.png";
definePageMeta({
  layout: "innerpage",
});
const ImageArray = [
  {
    url: "/images/competiton.png", // 圖片路徑
    title: "2023.09.23｜Industrial designer", // 圖片標題
    description: "The Legendary Highway 14 Tower", // 圖片描述
    descriptionZh: "國際家俱比賽", // 圖片描述
    deadline: "Deadline: december 31st, 2023", // 圖片描述
  },
  {
    url: "/images/competiton.png", // 圖片路徑
    title: "2023.09.23｜Industrial designer", // 圖片標題
    description: "The Legendary Highway 14 Tower", // 圖片描述
    descriptionZh: "國際家俱比賽", // 圖片描述
    deadline: "Deadline: december 31st, 2023", // 圖片描述
  },
  {
    url: "/images/competiton.png", // 圖片路徑
    title: "2023.09.23｜Industrial designer", // 圖片標題
    description: "The Legendary Highway 14 Tower", // 圖片描述
    descriptionZh: "國際家俱比賽", // 圖片描述
    deadline: "Deadline: december 31st, 2023", // 圖片描述
  },
];

const projects = [
  {
    id: "project-1",
    imageUrl: "/images/competitionone.png",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-2",
    imageUrl: "/images/competitiontwo.png",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-3",
    imageUrl: "/images/competitionthree.png",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-4",
    imageUrl: "/images/competitionfour.png",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-5",
    imageUrl: "/images/competitionfive.jpeg",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-6",
    imageUrl: "/images/competitionsix.jpeg",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-7",
    imageUrl: "/images/competitionseven.png",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-8",
    imageUrl: "/images/competitioneight.png",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
];
</script>
<template>
  <NuxtLayout
    :breadcrumbText="'Home &nbsp;/&nbsp; Competition &nbsp;/&nbsp; Furniture'"
    :cover="bg"
  >
    <div class="inner-wrap">
      <SwiperPic :images="ImageArray" />
      <div class="grid grid-cols-12 gap-4">
        <template v-for="(project, index) in projects" :key="project.id">
          <DesignShowcase
            :project="project"
            baseRoute="/competition"
            :class="
              index % 2 === 0
                ? 'md:col-span-6 col-span-full justify-self-start'
                : 'md:col-span-6 col-span-full justify-self-end'
            "
          />

          <!-- 在第四個項目之後插入 SpecialComponent -->
          <Advertise
            v-if="index === 3"
            key="special-component"
            class="col-span-12"
          />
        </template>
      </div>
      <Paginator class="paginator" />
      <Advertise class="col-span-12" />
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.paginator {
  margin-left: -10%;
  margin-right: -10%;
  @include max-media(768) {
    margin-bottom: 28.7044%;
  }
}
.advertise {
  @include max-media(768) {
    margin-bottom: 42.6687%;
  }
}
</style>
