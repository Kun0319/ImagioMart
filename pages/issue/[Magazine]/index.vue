<script setup>
import MagazineLine from "./components/MagazineLine.vue";
import MagazineIntroduce from "./components/MagazineIntroduce.vue";
import MagazinePic from "./components/MagazinePic.vue";
import MagazineCoverStory from "./components/MagazineCoverStory.vue";
</script>

<template lang="">
  <NuxtLayout>
    <MagazineLine />
    <MagazineIntroduce />
    <MagazinePic />
    <MagazineCoverStory />
  </NuxtLayout>
</template>

<style lang="scss" scoped></style>
