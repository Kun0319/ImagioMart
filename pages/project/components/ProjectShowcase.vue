<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="projectpic flex flex-col">
    <nuxt-link :to="`/project/${project.id}`">
      <div class="projectpic__pic">
        <!-- <img src="@/assets/images/project1.png" alt="" class="w-full h-full" /> -->
        <img :src="project.imageUrl" alt="" class="photo" />
      </div>
      <div class="project__text">
        <p class="flex project__text__one">
          ANA Studio
          <span class="ml-auto"></span>
          <i class="pi pi-heart mx-3"></i>
          <i class="pi pi-share-alt"></i>
        </p>
        <p class="project__text__two">Cooking and art</p>
        <p class="project__text__three">西澳大利亞珀斯 隱園</p>
      </div>
    </nuxt-link>
  </div>
</template>
<style lang="scss" scoped>
.photo {
  width: 100%;
  height: 100%;
  // max-width: 310px;
  // max-height: 210px;
}
.projectpic {
  width: 100%;

  height: 100%;
  @include min-media(768) {
    margin-bottom: 36.0923%;
    max-width: 310px;
  }

  @include max-media(1024) {
    width: 100%;
    height: 100%;
  }

  &__pic {
    width: 100%;
    height: 100%;
    // max-width: 310px;
    max-height: 210px;

    @include min-media(1024) {
      max-width: 310px;
      height: 100%;
    }
  }
}

.project {
  &__text {
    @include max-media(768) {
      padding-bottom: 25.7%;
    }

    &__one {
      margin-top: 5%;
      margin-bottom: 6.456%;
    }
  }
}
</style>
