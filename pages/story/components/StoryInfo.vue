<script setup></script>
<template lang="">
  <div class="story__info grid grid-cols-12 gap-4">
    <div class="md:col-span-5 col-span-12">
      <img src="../../../assets/images/story1.svg" alt="" class="w-full" />
    </div>
    <div
      class="flex flex-col project__text justify-end gap-4 md:col-span-6 col-span-12"
    >
      <div class="md:hidden flex">
        <span class="mr-auto story__text">易雅居</span>
        <i class="pi pi-heart mx-3"></i>
        <i class="pi pi-share-alt"></i>
      </div>
      <p class="flex project__text__one">Industrial ｜ADEVA</p>
      <p class="project__text__two">Get some more sleep</p>
      <p class="project__text__three">多睡一會</p>
      <p class="project__text__four">
        The location of this private house is unique: even though the site is
        just a couple of kilometers away from Hämeenlinna city center, the small
        cape surrounded by a lake is completely in its own privacy.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.story {
  &__info {
    margin-bottom: 12.14%;
  }
  &__text {
    font-size: 0.625rem;
  }
}

.project {
  &__text {
    &__four {
      font-family: $font-Noto;
    }
  }
}
</style>
