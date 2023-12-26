<script setup>
defineProps({
  imgSrc: String,
});
</script>

<template>
  <div class="no-padding">
    <img :src="imgSrc" alt="" class="full-width" />
  </div>
</template>

<style lang="scss" scoped>
.no-padding {
  height: auto;
  position: relative;
  left: -10.2%;
}

.full-width {
  width: 100vw;
  height: 100%;

  @include max-media(768) {
    // margin-top: 15px;
    min-width: 393px;
    min-height: 148px;
  }
}
</style>
