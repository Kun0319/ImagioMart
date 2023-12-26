<script setup>
import TextImageBlock from "./components/TextImageBlock.vue";
import ImageGallery from "./components/ImageGallery.vue";
import PhotoGallery from "./components/PhotoGallery.vue";
import RelatedProject from "./components/RelatedProject.vue";

import { useRoute } from "vue-router";
definePageMeta({
  layout: "innerpage",
});

const route = useRoute();
const projectId = route.params.ProjectShowcase;
</script>
<template>
  <NuxtLayout
    :breadcrumbText="'Home&nbsp; /&nbsp; Project&nbsp; /&nbsp; furniture'"
  >
    <div class="inner-wrap">
      <TextImageBlock />
      <ImageGallery />
      <PhotoGallery />
      <RelatedProject />
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
:deep(.icon__one) {
  display: flex;
  justify-content: space-between;
  // margin-bottom: 5%;
}
.icon {
  display: flex;
  // justify-content: flex-end;
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
</style>
