<!-- Button.vue -->
<script setup>
const props = defineProps({
  tag: String,
});
</script>

<template>
  <button class="button">
    {{ tag }}
  </button>
</template>
<style lang="scss" scoped>
.button {
  line-height: 107%;
  color: $text-color3;
  background-color: white;
  border-radius: 46px;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  font-family: $font-NotoSerif;
  letter-spacing: 0.561px;
  font-size: 0.75rem;
  text-align: center;
  padding: 0.5rem 1rem;
}
</style>
