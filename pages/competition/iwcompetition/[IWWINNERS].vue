<script setup>
import bg from "../../assets/images/CompetitionBg.png";
import PersonnelCard from "./components/PersonnelCard.vue";

const winners = [
  {
    imageSrc: "/images/WINNERS1.png",
    name: "Patrick Norguet",
    nameZh: "派屈克．諾蓋",
  },
  {
    id: 2,
    imageSrc: "/images/WINNERS2.png",
    name: "Patrick Norguet",
    nameZh: "派屈克．諾蓋",
  },
  {
    id: 3,
    imageSrc: "/images/WINNERS3.png",
    name: "Patrick Norguet",
    nameZh: "派屈克．諾蓋",
  },
  {
    imageSrc: "/images/WINNERS1.png",
    name: "Patrick Norguet",
    nameZh: "派屈克．諾蓋",
  },
  {
    id: 2,
    imageSrc: "/images/WINNERS2.png",
    name: "Patrick Norguet",
    nameZh: "派屈克．諾蓋",
  },
  {
    id: 3,
    imageSrc: "/images/WINNERS3.png",
    name: "Patrick Norguet",
    nameZh: "派屈克．諾蓋",
  },
  {
    imageSrc: "/images/WINNERS1.png",
    name: "Patrick Norguet",
    nameZh: "派屈克．諾蓋",
  },
  {
    id: 2,
    imageSrc: "/images/WINNERS2.png",
    name: "Patrick Norguet",
    nameZh: "派屈克．諾蓋",
  },
  {
    id: 3,
    imageSrc: "/images/WINNERS3.png",
    name: "Patrick Norguet",
    nameZh: "派屈克．諾蓋",
  },
];
</script>
<template>
  <NuxtLayout>
    <div class="top--margin">
      <Banner :imgSrc="bg" customText="IW WINNERS" />
      <BreadcrumbLine
        :text="'Home &nbsp;/&nbsp; IW Competion  &nbsp;/&nbsp;   Winners '"
      />
      <div class="title">
        <p>WINNERS</p>
      </div>
      <div class="container">
        <PersonnelCard
          v-for="winner in winners"
          :key="winner.id"
          :imageSrc="winner.imageSrc"
          :name="winner.name"
          :nameZh="winner.nameZh"
        />
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.top--margin {
  margin-top: 55px;
}

.title {
  @apply flex justify-center w-full;
  font-size: 1.3125rem;
  margin-bottom: 7%;
  padding-top: 2.605%;
  line-height: 27.72px;
  letter-spacing: 1.071px;

  @include max-media(768) {
    font-size: 0.75rem;
    margin-bottom: 18.6772%;
    padding-top: 23.3227%;
    line-height: 15.84px;
    letter-spacing: 0.612px;
  }
}

.container {
  @apply grid grid-cols-12 gap-4;
  margin-bottom: 29.2238%;

  @include max-media(768) {
    margin-bottom: 17.9644%;
  }
}
</style>
