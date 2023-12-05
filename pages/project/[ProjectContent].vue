<script setup>
import TextImageBlock from "./components/TextImageBlock.vue";
import ImageGallery from "./components/ImageGallery.vue";
import PhotoGallery from "./components/PhotoGallery.vue";
import RelatedProject from "./components/RelatedProject.vue";
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
          <TagButton :tag="'All(23)'" class="tag-button" />
          <TagButton :tag="'Furniture(5)'" class="tag-button" />
          <TagButton :tag="'Dining(6)'" class="tag-button" />
          <TagButton :tag="'Bath(5)'" class="tag-button" />
          <TagButton :tag="'Kitchen(6)'" class="tag-button" />
          <TagButton :tag="'Wellness(5)'" class="tag-button" />
          <TagButton :tag="'Wall(5)'" class="tag-button" />
          <TagButton :tag="'Floor(6)'" class="tag-button" />
        </div>
      </template>
      <template #icon2>
        <div class="icon">
          <i class="pi pi-heart mx-3"></i>
          <i class="pi pi-share-alt"></i>
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
</style>
