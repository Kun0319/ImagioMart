<script setup></script>
<template>
  <div class="projectpic flex flex-col">
    <div class="projectpic__pic">
      <img src="@/assets/images/project1.png" alt="" class="w-full h-full" />
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
  </div>
</template>
<style lang="scss" scoped>
.projectpic {
  &__pic {
    width: 100%;
  }
}
.project {
  &__text {
    @include max-media(768) {
      padding-bottom: 25.7%;
    }
    &__one {
      margin-top: 5%;
    }
  }
}
</style>
