<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template lang="">
  <div class="flex justify-end sticky">
    <button @click="scrollToTop" class="return border-none">
      <img src="../assets/images/returntop.svg" alt="" class="return" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 30px;
  height: 30px;
}
button.return {
  background: none;
  position: fixed;
  right: 2rem;
  bottom: 1rem;
  z-index: 9999;

  &:hover {
    cursor: pointer;
  }
}
</style>
