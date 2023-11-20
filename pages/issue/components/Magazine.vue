<script setup>
const special = ref(false);
</script>

<template>
  <div class="grid col-span-6 justify-center">
    <div class="flex flex-col items-center">
      <nuxt-link to="/issue/[Magazine]" class="image-container">
        <img src="~/assets/images/Magazine.png" alt="" class="max-w-full" />
      </nuxt-link>

      <p class="mt-4">第151期2023/07&08月</p>
      <p class="info__price mt-3 mb-4">NT$300</p>
      <a href="" class="line-height-4 info__shopcart text-black-alpha-90"
        >ADD TO CART</a
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.grid {
  margin-top: 20.67%;
}
a > img {
  opacity: 1;
  transition: all 0.6s;
}

a > img:hover {
  opacity: 0.5;
}
.special-style img {
  opacity: 0.2;
}
</style>
