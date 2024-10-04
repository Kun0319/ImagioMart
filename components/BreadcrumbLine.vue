<script setup>
const props = defineProps({
  text: String,
  showYearSelector: Boolean,
  showIcon: Boolean,
  showTags: Boolean,
  customClass: String,
});
</script>

<template>
  <div class="line">
    <div class="mb-2">
      <div class="icon__one" :class="customClass">
        <p class="line__text">{{ text }}</p>
        <slot v-if="showIcon" name="icon"></slot>
      </div>
      <!-- 显示年份选择器的插槽 -->
      <slot v-if="showYearSelector" name="year-selector"></slot>
      <!-- 显示图标的插槽 -->
      <div v-if="showTags" class="tags">
        <slot name="tags"></slot>
      </div>
    </div>
  </div>
  <div class="icon__two">
    <slot v-if="showIcon" name="icon2"></slot>
  </div>
</template>

<style lang="scss" scoped>
.line {
  // margin-top: 9.0285%;
  margin-top: 4.7357%;
  // margin-top: 7.9116%;
  margin-bottom: 7.9116%;

  &__text {
    font-size: 0.75rem;
    // margin-bottom: 3.3499%;
    margin-bottom: 2.3117%;
  }

  &__icon {
    margin-bottom: 2.75%;

    @include max-media(769px) {
      display: none;
    }
  }
}
// .icon {
//   display: flex;
//   justify-content: space-between;
// }
</style>
