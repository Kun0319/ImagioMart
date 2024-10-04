<script setup>
defineProps({
  imgSrc: String,
  customText: String,
});
</script>

<template>
  <div class="no-padding">
    <img :src="imgSrc" alt="" class="full-width" :class="{ hidden: !imgSrc }" />
    <div class="text">
      <p v-if="customText" v-html="customText"></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.no-padding {
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100vw;
  margin-left: -10.16%;
}

.full-width {
  width: 100vw;
  position: relative; // 相对定位
  left: 50%;
  transform: translateX(-50%); // 水平居中
  height: auto; // 保持图像原始宽高比
  // max-height: 284px;

  @include max-media(768) {
    height: 37.66vw;
  }
}

.hidden {
  display: none;
}
.text {
  // max-width: 276px;
  width: auto;
  position: absolute;
  font-size: 3.125rem;
  font-size: clamp(1.25rem, 4vw, 3.125rem);
  line-height: 60px;
  top: 50%;
  left: 85%;
  color: white;
  transform: translate(-50%, -50%);
  font-family: $font-NotoJP;
  white-space: pre-wrap; // 保留空白符并正常换行
  word-wrap: break-word;
  @include max-media(768) {
    font-size: 1.25rem;
    line-height: 30px;
    left: 72%;
  }
}
</style>
