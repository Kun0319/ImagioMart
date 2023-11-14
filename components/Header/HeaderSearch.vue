<script setup>
import { useGlobalStore } from "@/stores/global.js";
const globalStore = useGlobalStore();
</script>
<template>
  <div
    class="grid grid-cols-10 w-full search-container"
    :style="{ top: globalStore.showSearch ? '0' : '-100%' }"
  >
    <input
      type="text"
      placeholder="Search..."
      class="mr-auto col-span-8 w-full"
    />
    <div
      class="flex items-center md:col-start-10 col-start-9 col-span-2 md:justify-self-end justify-self-center"
    >
      <img src="@/assets/icon/search.svg" alt="" class="" />
      <img
        src="@/assets/icon/close.svg"
        @click="globalStore.toggleSearchBar"
        alt=""
        class="ml-6"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
input {
  outline: none;
  border: none;
}

input:focus {
  border-bottom: 1px solid #000;
}

::placeholder {
  color: #000000cc;
  font-size: 1rem;
}

img {
  cursor: pointer;
}

.search-container {
  position: fixed;
  // position: relative;
  top: -100%;

  left: 0;
  // width: 100%;
  // 高度需跟Navbar一樣
  height: 65px;
  z-index: 20;
  background: white;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.03);
  transition: top 0.5s ease-in-out;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  @media (min-width: 768px) {
    padding-left: 5.1rem;
    padding-right: 5.1rem;
  }

  @media (min-width: 1024px) {
    padding-left: 10.2rem;
    padding-right: 10.2rem;
  }
}
</style>
