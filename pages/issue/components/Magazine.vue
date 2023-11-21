<script setup>
const special = ref(false);
</script>

<template>
  <div class="grid col-span-6 justify-center">
    <div class="flex flex-col items-center">
      <nuxt-link to="/issue/[Magazine]" class="image-container">
        <img src="~/assets/images/Magazine.svg" alt="" class="max-w-full" />
      </nuxt-link>

      <p class="info__month">第151期2023 &nbsp; 07&08月</p>
      <p class="info__price">NT$300</p>
      <a href="" class="line-height-4 info__shopcart text-black-alpha-90"
        >ADD TO CART</a
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.info {
  &__price {
  }
  &__month {
    font-size: 0.875rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}
.image-container {
  display: flex;
  justify-content: center;
}
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
