<script setup>
const props = defineProps({
  projects: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
<template>
  <div class="RelatedProject">
    <slot name="title"></slot>
    <div class="grid grid-cols-12 xl:gap-20 gap-4 col-span-12">
      <div v-for="(project, index) in projects" :key="index" class="text">
        <img :src="project.imageUrl" alt="" class="image" />
        <p class="text__one">{{ project.companyName }}</p>
        <p class="text__two">{{ project.projectName }}</p>
        <p class="text__three">{{ project.projectLocation }}</p>
      </div>
      <!-- <div
        class="swiper-navigation md:flex hidden col-span-2 2xl:col-end-12 col-end-13"
      > -->
      <div class="swiper-navigation md:flex hidden col-span-12">
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.RelatedProject {
  @apply grid grid-cols-12 gap-4;
  // display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 24.65%;
}

.image {
  width: 100%;
  // height: 100%;
  // max-width: 310px;
  // max-height: 210px;
  // width: 17.9398vw;
  // height: 12.1528vw;
  aspect-ratio: 3/2;

  @include max-media(768) {
    width: 157px;
    height: 100px;
  }
}

.text {
  color: $text-color3;
  font-size: 1rem;
  // width: 17.9398vw;
  width: 100%;
  @apply md:flex hidden md:col-span-4 col-span-6 flex-col justify-self-center;

  &__title {
    // font-size: 1.3125rem;
    font-size: 1rem;
    line-height: 30.18px;
    margin-bottom: 3.7694%;

    // font-family: $font-Noto;
    @include max-media(768) {
      margin-bottom: 12.2473%;
    }
  }

  &__one {
    font-size: 0.625rem;
    margin-bottom: 3.5%;
    font-family: $font-Noto;
  }

  &__two {
    margin-bottom: 2%;
  }

  &__three {
  }
}

//1/4
.swiper-navigation {
  width: 100%;
  // justify-self: center;
  // justify-self: end;
  position: relative;
  padding-top: 20%;

  // text-align: center;
  // margin-bottom: 2%;
  --swiper-navigation-sides-offset: 0px;
  // @include max-media(1440) {
  //   padding-top: 20%;
  // }
  // @include max-media(1024) {
  //   padding-top: 20%;
  // }
}

.swiper-button-prev::after,
.swiper-button-next::after {
  content: "";
}

.swiper-button-prev,
.swiper-button-next {
  // width: 18px;
  height: 44.182px;

  background-image: url("assets/icon/prev.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.swiper-button-next {
  background-image: url("assets/icon/next.svg");
}
</style>
