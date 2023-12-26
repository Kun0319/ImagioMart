<script setup></script>
<template>
  <slot name="title">
    <div class="slot-wrapper">
      <div class="flex items-center">
        <p class="title--text__one">Scope｜129｜Brazil</p>
        <i class="pi pi-heart mx-3 ml-auto"></i>
        <i class="pi pi-share-alt"></i>
      </div>
      <div class="title--text__two">
        <p>House Pokrinniemi, Hämeenlinna, Finland</p>
        <p>芬蘭海門林納　雪地之家</p>
      </div>
      <p class="title--text__three">文字．影像提供：SHANG XIA 上下</p>
      <div>
        <img src="~/assets/images/projectcontent1.png" alt="" class="w-full" />
      </div>
    </div>
  </slot>
  <div class="grid grid-cols-12 md:gap-8 gap-4">
    <slot name="image1">
      <div class="col-span-12">
        <img class="photo" src="~/assets/images/projectcontent5.png" alt="" />
      </div>
    </slot>
    <slot name="image2">
      <div class="col-span-12">
        <img class="photo" src="~/assets/images/projectcontent6.png" alt="" />
      </div>
    </slot>
    <slot name="image3">
      <div class="col-span-6">
        <img class="photo" src="~/assets/images/projectcontent7-1.png" alt="" />
      </div>
      <div class="col-span-6">
        <img class="photo" src="~/assets/images/projectcontent7-2.png" alt="" />
      </div>
    </slot>
    <slot name="image4">
      <div class="col-span-12">
        <img class="photo" src="~/assets/images/projectcontent8.png" alt="" />
      </div>
    </slot>
    <slot name="image5">
      <!-- <div class="col-span-6">
        <img class="photo" src="~/assets/images/projectcontent9-1.png" alt="" />
      </div>
      <div class="col-span-6">
        <img class="photo" src="~/assets/images/projectcontent9-2.png" alt="" />
      </div> -->
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.photo {
  width: 100%;
}

.text {
  &__one {
    color: $text-color2;
    font-size: 0.875rem;
    font-family: $font-Noto;
    @include max-media(768) {
      font-size: 0.625rem;
    }
  }

  &__two {
    margin-top: 2.428%;
    margin-bottom: 4.101%;
    font-size: 1.3125rem;
    letter-spacing: 0.51px;
    line-height: 42.42px;

    @include max-media(768) {
      font-size: 0.875rem;
      line-height: normal;
    }
  }

  &__three {
    color: #000000cc;
    font-size: 0.75rem;
    color: $text-color3;
    font-family: $font-Noto;
    margin-bottom: 5.105%;
    @include max-media(768) {
      font-size: 0.5625rem;
    }
  }
}
.slot-wrapper {
  margin-bottom: 5.5462%;
}
</style>
