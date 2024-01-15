<script setup>
import MagazineLine from "./components/MagazineLine.vue";
import MagazineIntroduce from "./components/MagazineIntroduce.vue";
import MagazinePic from "./components/MagazinePic.vue";
import MagazineCoverStory from "./components/MagazineCoverStory.vue";
import { useRoute } from "vue-router";
</script>

<template lang="">
  <NuxtLayout>
    <div class="margin">
      <BreadcrumbLine text="Home &nbsp; / &nbsp; Issue" :showIcon="true">
        <template #icon2>
          <div class="icon">
            <i class="pi pi-heart mx-3"></i>
            <i class="pi pi-share-alt"></i>
          </div>
        </template>
      </BreadcrumbLine>
    </div>
    <!-- <MagazineLine /> -->
    <MagazineIntroduce />
    <MagazinePic />
    <MagazineCoverStory />
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.line__text {
  margin-bottom: 1%;
}
.icon {
  display: flex;
  justify-content: flex-end;
  margin-top: -6.8%;
  margin-bottom: 2.752%;
}
.margin {
  margin-top: 8.20371%;
}
</style>
