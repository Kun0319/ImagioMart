<script setup>
import bg from "~/assets/images/newsbg.png";
definePageMeta({
  layout: "innerpage",
});

const projects = [
  {
    id: "project-1",
    imageUrl: "/images/newone.png",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-2",
    imageUrl: "/images/newtwo.png",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-3",
    imageUrl: "/images/newthree.png",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-4",
    imageUrl: "/images/newfour.png",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-5",
    imageUrl: "/images/newfive.png",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-6",
    imageUrl: "/images/newsix.png",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-7",
    imageUrl: "/images/newseven.jpeg",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-8",
    imageUrl: "/images/neweight.png",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-9",
    imageUrl: "/images/newone.png",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-10",
    imageUrl: "/images/newtwo.png",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-11",
    imageUrl: "/images/newthree.png",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-12",
    imageUrl: "/images/newfour.png",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-13",
    imageUrl: "/images/newfive.png",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-14",
    imageUrl: "/images/newsix.png",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-15",
    imageUrl: "/images/newseven.jpeg",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
  {
    id: "project-16",
    imageUrl: "/images/neweight.png",
    studioName: "2023.09.23｜Industrial designer",
    title: "Patrick Norguet",
    location: "派屈克．諾蓋",
  },
];
</script>
<template>
  <NuxtLayout
    :breadcrumbText="'Home &nbsp;/&nbsp; News &nbsp;/&nbsp; Furniture'"
    :cover="bg"
  >
    <div class="content inner-wrap">
      <DesignShowcase
        v-for="(project, index) in projects"
        :key="project.id"
        :project="project"
        baseRoute="/news"
        :class="
          index % 2 === 0
            ? 'md:col-span-6 col-span-full justify-self-start'
            : 'md:col-span-6 col-span-full justify-self-end'
        "
      />
    </div>
    <Paginator />
    <div class="flex justify-center advertise">
      <img src="~/assets/images/index4.png" alt="" class="photo__advertise" />
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.content {
  @apply grid grid-cols-12 gap-4;
  @include max-media(768) {
    margin-top: 22.9638%;
  }
}
.inner-wrap {
  @include max-media(768) {
    padding: 0;
  }
}
.advertise {
  margin-top: 5.4375%;
  margin-bottom: 24.0338%;
}
</style>
