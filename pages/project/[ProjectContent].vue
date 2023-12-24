<script setup>
import TextImageBlock from "./components/TextImageBlock.vue";
import ImageGallery from "./components/ImageGallery.vue";
import PhotoGallery from "./components/PhotoGallery.vue";
import RelatedProject from "./components/RelatedProject.vue";

import { useRoute } from "vue-router";

const route = useRoute();
const projectId = route.params.ProjectShowcase;
</script>
<template lang="">
  <NuxtLayout>
    <BreadcrumbLine
      text="Home&nbsp; /&nbsp; Project&nbsp; /&nbsp; furniture"
      :showIcon="true"
      :showTags="true"
    >
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
        </div>
      </template>
    </BreadcrumbLine>
    <div class="inner-wrap">
      <TextImageBlock />
      <ImageGallery />
      <PhotoGallery />
      <RelatedProject />
    </div>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.icon {
  display: flex;
  justify-content: flex-end;
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
