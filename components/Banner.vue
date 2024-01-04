<script setup>
defineProps({
  imgSrc: String,
});
</script>

<template>
  <div class="no-padding">
    <img :src="imgSrc" alt="" class="full-width" :class="{ hidden: !imgSrc }" />
  </div>
</template>

<style lang="scss" scoped>
.no-padding {
  // margin-top: 55px;
  // width: 100%;
  // margin-left: -11%;
  display: flex;
  // // justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100vw;
  margin-left: -10.16%;
  // margin-top: 55px;
}

.full-width {
  width: 100vw;
  position: relative; // 相对定位
  left: 50%;
  transform: translateX(-50%); // 水平居中
  // height: auto; // 保持图像原始宽高比

  @include max-media(768) {
    height: 37.66vw;
  }
}
.hidden {
  display: none;
}
</style>
