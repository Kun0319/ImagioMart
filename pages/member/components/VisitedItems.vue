<script setup></script>
<template lang="">
  <div class="flex flex-col w-full">
    <div class="flex text__title">
      <p>ALL</p>
      <button class="button ml-auto me-3">文章</button>
      <button class="button">選物</button>
    </div>

    <div v-for="item in 8" :key="item" class="grid grid-cols-12 gap-4 content">
      <div class="md:col-span-5 col-span-6 md:col-start-2">
        <img src="~/assets/images/RelatedProject2.png" alt="" class="photo" />
      </div>
      <div class="col-span-6 text">
        <div class="flex text__one">
          <p class="mr-auto">Industrial ｜ADEVA</p>

          <img src="~/assets/icon/shopcart.svg" alt="" />
        </div>
        <p class="text__two">Get some more sleep</p>
        <p class="text__three">多睡一會</p>
      </div>
    </div>

    <Paginator />
  </div>
</template>

<style lang="scss" scoped>
.photo {
  width: 100%;
  max-width: 319px;
  aspect-ratio: 3/2;
}

.text {
  align-self: center;

  &__title {
    font-size: 1rem;
    margin-bottom: 10.5497%;
  }

  &__one {
    margin-bottom: 7.4021%;
    margin-right: auto;
    color: $text-color3;
  }

  &__two {
    color: $text-color3;
    text-decoration: underline;
  }

  &__three {
    font-size: 1rem;
  }
}

.content {
  margin-bottom: 6.3298%;
}

.paginator {
  margin-bottom: 18.4034%;
}
</style>
