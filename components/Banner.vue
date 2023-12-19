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
  width: 100vw;
  height: auto;
  position: relative;
  left: -10.2%;
}

.full-width {
  width: 100%;
  height: 16.2%;

  @include max-media(768) {
    margin-top: 15px;
  }
}
</style>
