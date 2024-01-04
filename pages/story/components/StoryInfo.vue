<script setup></script>
<template lang="">
  <nuxt-link to="/story/1">
    <div class="story__info grid grid-cols-12 gap-4">
      <div class="md:col-span-5 col-span-12">
        <img src="../../../assets/images/story1.svg" alt="" class="photo" />
      </div>
      <div
        class="flex flex-col project__text justify-center gap-4 md:col-span-6 col-span-12"
      >
        <div class="md:hidden flex">
          <span class="mr-auto story__text">易雅居</span>
          <i class="pi pi-heart mx-3"></i>
          <i class="pi pi-share-alt"></i>
        </div>
        <div class="project__text">
          <p class="flex project__text__one">Industrial ｜ADEVA</p>
          <p class="project__text__two">Get some more sleep</p>
          <p class="project__text__three">多睡一會</p>
          <p class="project__text__four">
            The location of this private house is unique: even though the site
            is just a couple of kilometers away from Hämeenlinna city center,
            the small cape surrounded by a lake is completely in its own
            privacy.
          </p>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<style lang="scss" scoped>
.photo {
  width: 100%;
  height: 100%;
  max-width: 517px;
  max-height: 347px;
  aspect-ratio: 3/2;
}
.story {
  &__info {
    margin-bottom: 12.14%;
    // max-height: 347px;
  }

  &__text {
    font-size: 0.625rem;
  }
}

.project {
  &__text {
    margin-left: 1rem;

    @include max-media(768) {
      margin-left: 0;
    }

    &__one {
      margin-bottom: 3.79%;
    }

    &__two {
      text-decoration: underline;
      margin-bottom: 1%;
    }

    &__three {
      text-decoration: underline;
      margin-bottom: 6.4565%;
    }

    &__four {
      font-family: $font-Noto;
      text-align: justify;
      max-height: 80px;
      overflow: hidden;

      display: -webkit-box;
      -webkit-line-clamp: 2; /* 限制在兩行 */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis; /* 文字超出部分顯示省略號 */
      white-space: normal; /* 換行 */

      @include max-media(768) {
        font-size: 0.625rem;
        text-align: inherit;
      }
    }
  }
}
</style>
