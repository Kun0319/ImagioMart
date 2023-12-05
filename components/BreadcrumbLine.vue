<script setup>
const props = defineProps({
  text: String,
  showYearSelector: Boolean,
  showIcon: Boolean,
  showTags: Boolean,
});
</script>

<template>
  <div class="mb-2 line">
    <div class="mb-2">
      <div class="icon">
        <p class="line__text">{{ text }}</p>
        <slot name="icon" v-if="showIcon"></slot>
      </div>
      <!-- 显示年份选择器的插槽 -->
      <slot name="year-selector" v-if="showYearSelector"></slot>
      <!-- 显示图标的插槽 -->
      <div v-if="showTags" class="tags">
        <slot name="tags"></slot>
      </div>
    </div>
  </div>
  <div class="icon">
    <slot name="icon2" v-if="showIcon"></slot>
  </div>
</template>

<style lang="scss" scoped>
.line {
  margin-top: 5.56%;

  &__text {
    font-size: 0.75rem;
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
