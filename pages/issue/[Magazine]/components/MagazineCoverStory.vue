<script setup></script>

<template lang="">
  <div class="cover grid grid-cols-12 mt-32 gap-4">
    <p
      class="cover__title md:col-start-2 col-start-1 md:col-span-5 col-span-6 md:w-11/12 md:justify-self-center"
    >
      COVER STORY
    </p>

    <!-- 封面故事 -->
    <div
      class="flex flex-col md:col-start-2 col-start-1 md:col-span-5 col-span-6 w-11/12 gap-3 md:justify-self-center"
    >
      <img src="@/assets/images/CoverStory1.svg" alt="" class="mb-4" />
      <p class="mb-4 text-left cover__title">墨西哥米卻肯｜拉彼達之家</p>
      <p class="mb-4 text-left line-height-3 cover__content">
        在一塊寬 10 公尺、深 35 公尺且地勢落差 3
        公尺的基地上，該住宅通過地下室的露台串聯起來，並順勢劃分公共區和私人區......
      </p>
      <button class="more">
        <a href="#" class="text-center no-underline text-black-alpha-90"
          >MORE+</a
        >
      </button>
    </div>

    <div
      class="flex flex-col md:col-span-5 col-span-6 w-11/12 gap-3 md:justify-self-center justify-self-end"
    >
      <img src="@/assets/images/CoverStory2.svg" alt="" class="mb-4" />
      <p class="mb-4 text-left cover__title">墨西哥米卻肯｜拉彼達之家</p>
      <p class="mb-4 text-left line-height-3 cover__content">
        在一塊寬 10 公尺、深 35 公尺且地勢落差 3
        公尺的基地上，該住宅通過地下室的露台串聯起來，並順勢劃分公共區和私人區......
      </p>
      <button class="more">
        <a href="#" class="text-center no-underline text-black-alpha-90"
          >MORE+</a
        >
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.more {
  background-color: white;
  border: 1px solid black;
  border-radius: 40px;
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;
  width: 5rem;
  font-family: $font-Noto;
  font-size: 0.65rem;
}

.cover {
  margin-bottom: 10.59%;
  &__title {
    font-size: 1rem;
    padding-bottom: 5%;
  }
  &__content {
    font-family: $font-Noto;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
