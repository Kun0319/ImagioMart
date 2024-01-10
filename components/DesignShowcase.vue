<script setup>
const emit = defineEmits(["like", "share"]);
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  baseRoute: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="projectpic flex flex-col">
    <nuxt-link :to="`${baseRoute}/${project.id}`">
      <div class="projectpic__pic">
        <img :src="project.imageUrl" alt="" class="photo" />
      </div>
      <div class="project__text">
        <p class="flex project__text__one">
          {{ project.studioName }}
          <span class="ml-auto"></span>
          <i class="pi pi-heart mx-3"></i>
          <i class="pi pi-share-alt"></i>
        </p>
        <p class="project__text__two">{{ project.title }}</p>
        <p class="project__text__three">{{ project.location }}</p>
        <p class="project__text__four">{{ project.deadline }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.photo {
  // width: 26.5625vw;
  // height: 17.9884vw;
  width: 100%;
  height: 100%;

  aspect-ratio: 3/2;
  object-fit: cover;
}

.projectpic {
  width: 100%;
  // width: 26.5625vw;
  height: auto;

  @include min-media(768) {
    // margin-bottom: 36.0923%;
    margin-bottom: 26.4569%;
    width: 26.5625vw;
    // max-width: 310px;
  }

  @include max-media(1024) {
    // width: 100%;
    // height: 100%;
  }

  &__pic {
    // max-width: 459px;
    // max-height: 311px;
    aspect-ratio: 3/2;
  }
}

.project {
  &__text {
    @include max-media(768) {
      padding-bottom: 25.7%;
    }

    &__one {
      margin-top: 5%;
      margin-bottom: 2.8396%;
    }
    &__two {
      margin-bottom: 2%;
      font-size: 1.3125rem;
    }
    &__three {
      margin-bottom: 2.8396%;
      font-size: 1.125rem;
    }
    &__four {
      margin-bottom: 2.8396%;
    }
  }
}
</style>
