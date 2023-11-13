<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template lang="">
  <div class="flex justify-end sticky m-8">
    <button @click="scrollToTop" class="return border-none">
      <img src="../assets/images/returntop.svg" alt="" class="return w-3/5" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
button.return {
  background: none;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 9999;

  &:hover {
    cursor: pointer;
  }
}
</style>
